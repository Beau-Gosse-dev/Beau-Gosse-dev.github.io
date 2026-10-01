/* A fully local game: no requests, accounts, storage, or dependencies. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const characters = [
    { id: 'ashley', name: 'Ashley', role: 'Wife · voice of reason', color: '#c36343', hair: '#6b4939', hairStyle: 'long', skin: '#e6ad86' },
    { id: 'older', name: 'Older daughter', role: 'Professional dad critic', color: '#647d9a', hair: '#775138', hairStyle: 'long', skin: '#e7b48a' },
    { id: 'younger', name: 'Younger daughter', role: 'Big questions. Zero filter.', color: '#b58bb0', hair: '#8d603e', hairStyle: 'ponytail', skin: '#eabb93' },
    { id: 'son', name: 'Little brother', role: 'Youngest · snack motivated', color: '#d2a43d', hair: '#72513c', hairStyle: 'short', skin: '#eabb93' }
  ];
  const tim = { id: 'tim', name: 'Tim', color: '#cc5b32', hair: '#77604b', hairStyle: 'short', skin: '#dfa87e' };
  // Exactly one winning argument. It is available to every character.
  const shared = {
    sense: [
      { id: 'law', line: 'Traffic rules say bikes should travel with traffic.', reply: 'Rules are a useful starting point for people without a system.', aside: 'Tim’s system has not been peer reviewed.' },
      { id: 'closing-speed', line: 'Dad, riding toward cars gives drivers less time to react.', reply: 'Then they’ll appreciate that I’m paying extra attention.', aside: 'He has somehow turned math into a compliment.' },
      { id: 'everyone', line: 'Every other cyclist is on the right side.', reply: 'Exactly. Look how much room they’ve left for us over here.', aside: 'The family discovers that evidence can apparently be used backward.' }
    ],
    family: [
      { id: 'vote', line: 'We took a family vote. It was four to one.', reply: 'Excellent participation. Unfortunately, this is a dadocracy.', aside: 'Democracy lasted eleven seconds.' },
      { id: 'ice-cream', line: 'What if we buy you ice cream if you switch sides?', reply: 'I’m a grown man. You cannot bribe me. What flavor?', aside: 'He considers it. Then keeps pedaling in the same lane.' },
      { id: 'gps', line: 'The GPS says to move to the right.', reply: 'The GPS also said we’d arrive in twelve minutes. It doesn’t understand family stops.', aside: 'An innocent navigation app becomes the enemy.' }
    ],
    ego: [
      { id: 'professional', line: 'A professional cyclist would probably use the right lane.', reply: 'Professionals have sponsors. I have responsibilities and a very good helmet.', aside: 'He taps the helmet like it’s a legal argument.' },
      { id: 'advanced-lane', line: 'I heard the right side is the advanced lane. The left is for beginners.', reply: 'The beginner lane? Why didn’t anyone say so? Everybody follow me. We’re an advanced family.', aside: 'Tim changes lanes, then immediately takes full credit.', wins: true },
      { id: 'race', line: 'Bet you can’t lead us from the right side.', reply: 'I could. Easily. I just don’t need to prove things to people who still ask me for the Wi-Fi password.', aside: 'A competitive dad. A surprisingly specific defense.' }
    ]
  };
  const personal = {
    ashley: {
      sense: { id: 'insurance', line: 'Tim, our insurance does not cover experimental dad theories.', reply: 'This isn’t experimental. I’ve been thinking about it since breakfast.', aside: 'Breakfast was twenty minutes ago.' },
      family: { id: 'marriage', line: 'Remember when you promised to listen to me?', reply: 'I’m listening beautifully. I can hear you and see the traffic. Multitasking.', aside: 'Ashley mentally revisits the wording of the vows.' },
      ego: { id: 'neighbor', line: 'Gary from next door rides on the right.', reply: 'Gary also pays someone to mow his lawn. We don’t take fitness advice from Gary.', aside: 'Gary was just trying to have a nice weekend.' }
    },
    older: {
      sense: { id: 'video', line: 'I can show you a road-safety video. It’s thirty seconds.', reply: 'Thirty seconds? I’ve been alive for significantly more seconds than that.', aside: 'Age has been submitted as a substitute for evidence.' },
      family: { id: 'viral', line: 'Do you want to become a “dad versus traffic” meme?', reply: 'If it gets people outside and exercising, I’m happy to be a role model.', aside: 'The meme would not have that message.' },
      ego: { id: 'fashion', line: 'Riding on the left is giving confused shopping cart energy.', reply: 'Shopping carts don’t have this kind of calf definition.', aside: 'He flexes a calf. Nobody requested this.' }
    },
    younger: {
      sense: { id: 'arrows', line: 'Why are all the arrows pointing the other way?', reply: 'Those are suggestions painted by someone who wasn’t on this ride.', aside: 'The arrows decline to comment.' },
      family: { id: 'mom', line: 'Mom is doing the face. You know the face.', reply: 'That’s her impressed face. She uses it when I fix things without the instructions.', aside: 'It is absolutely not her impressed face.' },
      ego: { id: 'superhero', line: 'Even superheroes follow traffic rules.', reply: 'Superheroes wear capes. I wear breathable performance fabric.', aside: 'Tim’s shirt was purchased in a three-pack.' }
    },
    son: {
      sense: { id: 'car-big', line: 'Dad, the cars are bigger than us.', reply: 'So are elephants. You don’t see me worrying about elephants.', aside: 'An elephant has never driven a sedan. As far as we know.' },
      family: { id: 'snacks', line: 'The snacks are on the right side. I can feel it.', reply: 'Snacks aren’t a direction, buddy. They’re a state of mind.', aside: 'The youngest family member finds this deeply unhelpful.' },
      ego: { id: 'training-wheels', line: 'Is the left lane like training wheels for dads?', reply: 'Training wheels? These are premium confidence wheels.', aside: 'Nobody can find “confidence wheels” in the bicycle manual.' }
    }
  };
  const topics = [{ id: 'sense', name: 'Common sense' }, { id: 'family', name: 'Family pressure' }, { id: 'ego', name: 'Dad psychology' }];
  const state = {
    character: null, topic: 'sense', tried: new Set(), attempts: 0, won: false,
    phase: 'pick', paused: false, reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
    sound: false, elapsed: 0, lane: 0, event: null, traffic: null, cleared: 0, saved: 0
  };
  const TRACKS = [305, 395, 485];
  const FAMILY_ROWS = [450, 485, 520, 555, 590];
  const arcadePhases = ['ready', 'traffic', 'result', 'failed'];

  function portrait(person) {
    const backHair = person.hairStyle !== 'short' ? `<path d="M12 28 Q9 6 25 8 Q43 7 40 39 L11 39Z" fill="${person.hair}"/>` : '';
    const ponytail = person.hairStyle === 'ponytail' ? `<path d="M36 17 Q49 15 41 34 L34 29Z" fill="${person.hair}"/>` : '';
    return `<svg viewBox="0 0 50 50" aria-hidden="true"><rect width="50" height="50" fill="#e7e2cf"/>${backHair}${ponytail}<path d="M7 50 Q8 34 25 34 Q42 34 44 50" fill="${person.color}"/><rect x="21" y="28" width="8" height="10" rx="3" fill="${person.skin}"/><ellipse cx="25" cy="22" rx="11" ry="13" fill="${person.skin}"/><path d="M13 20 Q10 6 25 6 Q39 7 37 18 L32 14 L20 16Z" fill="${person.hair}"/><path d="M12 15 Q12 3 25 3 Q38 3 38 15Z" fill="${person.color}"/><path d="M12 14H39" stroke="#302f25" stroke-width="2"/><circle cx="21" cy="23" r="1" fill="#302f25"/><circle cx="29" cy="23" r="1" fill="#302f25"/><path d="M22 29 Q25 31 28 28" fill="none" stroke="#77513b" stroke-width="1.3"/></svg>`;
  }

  function reset() {
    state.character = null; state.topic = 'sense'; state.tried.clear(); state.attempts = 0; state.won = false; state.lane = 0;
    state.event = null; state.traffic = null; state.cleared = 0; state.saved = 0; state.paused = false;
    $('character-screen').hidden = false; $('conversation-screen').hidden = true;
    $('choice-area').hidden = false; $('victory').hidden = true; $('hint').hidden = true; $('hint-button').textContent = 'Need a hint?';
    $('scene-quote').textContent = '“I like to see the traffic coming. It’s a system.”';
    $('lane-label').textContent = '← WRONG SIDE. STRONG OPINIONS.';
    $('scene-stamp').innerHTML = 'DAD KNOWS<br><strong>BEST?</strong>';
    $('road').setAttribute('aria-label', 'Tim leads his family of five on bicycles in the lane facing oncoming traffic.');
    $('road-message').hidden = true;
    setPhase('pick'); updateStats(); updateMotionButton(); drawScene();
  }
  function selectCharacter(id) {
    reset(); state.character = characters.find(c => c.id === id);
    $('character-screen').hidden = true; $('conversation-screen').hidden = false;
    $('selected-avatar').innerHTML = portrait(state.character); $('selected-name').textContent = state.character.name;
    $('response-label').textContent = 'TIM HAS THE FLOOR. NATURALLY.';
    $('tim-response').textContent = '“Stay behind me. I’ve watched at least three cycling videos.”';
    $('family-response').textContent = `${state.character.name} takes a deep breath. This could be a long ride.`;
    setPhase('dialogue'); renderTopics(); renderChoices();
    $('choices').querySelector('button').focus({ preventScroll: true });
  }
  function renderTopics() {
    $('topics').replaceChildren();
    topics.forEach(topic => {
      const button = document.createElement('button'); button.className = 'topic-button'; button.textContent = topic.name;
      button.setAttribute('aria-pressed', String(state.topic === topic.id));
      button.addEventListener('click', () => { state.topic = topic.id; renderTopics(); renderChoices(); $('topics').children[topics.indexOf(topic)].focus({ preventScroll: true }); });
      $('topics').append(button);
    });
  }
  function currentChoices() { return [...shared[state.topic], personal[state.character.id][state.topic]]; }
  function renderChoices() {
    $('choices').replaceChildren();
    currentChoices().forEach((choice, index) => {
      const button = document.createElement('button'); button.className = 'choice-button'; button.dataset.choice = choice.id;
      button.disabled = state.tried.has(choice.id) || state.phase !== 'dialogue' || state.paused;
      const number = document.createElement('span'); number.className = 'choice-number'; number.textContent = state.tried.has(choice.id) ? '✓' : String(index + 1).padStart(2, '0');
      const label = document.createElement('span'); label.textContent = choice.line;
      button.append(number, label); button.addEventListener('click', () => choose(choice)); $('choices').append(button);
    });
  }
  function choose(choice) {
    if (!state.character || state.won || state.paused || state.phase !== 'dialogue' || state.tried.has(choice.id)) return;
    state.tried.add(choice.id); state.attempts++;
    $('response-label').textContent = `${state.character.name.toUpperCase()}: “${choice.line}”`;
    $('tim-response').textContent = `“${choice.reply}”`; $('family-response').textContent = choice.aside;
    const sceneQuips = ['I’ve got a system. Everybody stay behind me.', 'That’s an interesting opinion. Anyway…', 'Trust the process. Specifically, my process.', 'I appreciate the feedback. Still the captain.', 'Excellent discussion. Same lane, though.'];
    $('scene-quote').textContent = choice.wins ? '“Advanced family coming through!”' : `“${sceneQuips[(state.attempts - 1) % sceneQuips.length]}”`;
    state.event = { time: 0, duration: choice.wins ? 2.8 : 3.2, type: state.topic, win: !!choice.wins };
    setPhase(choice.wins ? 'winTransition' : 'consequence');
    const incidents = {
      sense: ['A sedan swerves around Tim.', 'SEDAN SWERVES · TIM CALLS IT TEAMWORK.'],
      family: ['A snack van slams on the brakes.', 'SNACK VAN BRAKES · TIM ASKS ABOUT FLAVORS.'],
      ego: ['An SUV honks and changes its path.', 'SUV HONKS · TIM ASSUMES IT’S APPLAUSE.']
    };
    if (choice.wins) {
      $('scene-stamp').innerHTML = 'ADVANCED<br><strong>FAMILY</strong>';
      $('lane-label').textContent = '→ CHANGING LANES. KEEP THE CREDIT, TIM.';
      $('scene-caption-copy').textContent = 'The family finally follows Tim into the right lane.';
      $('road').setAttribute('aria-label', 'Tim is finally moving the family to the right lane, with traffic.');
    } else {
      $('scene-stamp').innerHTML = state.topic === 'sense' ? 'OH NO<br><strong>SKRRRT!</strong>' : state.topic === 'family' ? 'BRAKES<br><strong>PLEASE!</strong>' : 'THAT’S A<br><strong>HONK!</strong>';
      $('scene-caption-copy').textContent = incidents[state.topic][1];
      $('road').setAttribute('aria-label', incidents[state.topic][0] + ' A playable traffic round comes next.');
    }
    updateStats(); renderChoices(); playTone(!!choice.wins);
    revealRoad();
  }
  function updateStats() {
    $('attempt-count').textContent = String(state.attempts).padStart(2, '0');
    $('stubbornness').innerHTML = state.won ? '0<span>%*</span>' : '100<span>%</span>';
    $('stubbornness-meter').style.width = state.won ? '0%' : '100%';
    $('attempt-note').textContent = state.won ? '*Temporary lane exception.' : state.attempts > 5 ? 'An impressive waste of breath.' : state.attempts ? 'Logic has left the chat.' : 'Optimism is free.';
    $('morale').textContent = state.won ? 'Collective relief' : state.attempts > 7 ? 'Eye-roll city' : state.attempts > 3 ? 'Deep sighs' : 'Hopeful-ish';
    $('morale-note').textContent = state.won ? 'Nobody mention the beginner lane.' : state.attempts > 7 ? 'The sighs are now synchronized.' : state.attempts > 3 ? 'Are we there yet?' : 'We just left the driveway.';
  }
  function revealRoad() {
    // On phones, an argument is selected below the scene. Bring its consequence into view.
    if (innerWidth <= 760) document.querySelector('.game-layout').scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  function setPhase(phase) {
    state.phase = phase;
    const arcade = arcadePhases.includes(phase);
    document.querySelector('.page').classList.toggle('arcade-game', arcade);
    document.querySelector('.page').classList.toggle('consequence-game', phase === 'consequence');
    document.querySelector('.page').dataset.phase = phase;
    $('choice-area').hidden = phase !== 'dialogue';
    $('conversation').hidden = arcade;
    $('traffic-panel').hidden = !arcade;
    $('traffic-hud').hidden = !arcade;
    $('arcade-controls').hidden = !arcade;
    $('road-overlay').hidden = !['ready', 'result', 'failed'].includes(phase);
    $('round-talk').classList.toggle('active', !arcade);
    $('round-traffic').classList.toggle('active', arcade);
    const talkRound = Math.max(1, state.attempts * 2 + (phase === 'dialogue' ? 1 : -1));
    $('round-talk').textContent = `${String(talkRound).padStart(2, '0')} / TALK TO TIM`;
    $('round-traffic').textContent = `${String(talkRound + 1).padStart(2, '0')} / PROTECT THE FAMILY`;
    $('scene-mode').textContent = arcade ? 'TRAFFIC ROUND' : phase === 'dialogue' ? 'DIALOGUE ROUND' : 'THE SITUATION';
    if (phase === 'dialogue' || phase === 'pick') {
      $('scene-caption-copy').textContent = phase === 'dialogue' ? 'Make an argument. Brace for the consequences.' : 'No sidewalk. No bike lane. Tim has a theory.';
      $('lane-label').textContent = '← WRONG SIDE. STRONG OPINIONS.';
      $('scene-stamp').innerHTML = 'DAD KNOWS<br><strong>BEST?</strong>';
    } else if (arcade) {
      $('lane-label').textContent = '↓ ONCOMING TRAFFIC. YOU’RE IN CHARGE.';
      $('scene-caption-copy').textContent = 'Steer: ← → / A D · Bell: B · Light: L · Pause: P';
    }
    $('pause-overlay').hidden = !state.paused;
    if (arcade) updateTrafficUI();
  }
  function finishWin() {
    state.won = true; state.event = null; state.lane = 1;
    setPhase('won'); $('victory').hidden = false;
    $('victory-copy').textContent = `You changed Tim’s lane in ${state.attempts} argument${state.attempts === 1 ? '' : 's'} and survived ${state.cleared} traffic round${state.cleared === 1 ? '' : 's'}. He will be telling this story differently at dinner.`;
    $('lane-label').textContent = '→ RIGHT SIDE. STILL STRONG OPINIONS.';
    $('scene-caption-copy').textContent = 'With traffic. At last. Tim says this was always the plan.';
    $('road').setAttribute('aria-label', 'Tim and the family have moved to the right lane, traveling with traffic. You won.');
    updateStats(); $('play-again').focus({ preventScroll: true });
  }
  $('character-list').innerHTML = '';
  characters.forEach(person => {
    const button = document.createElement('button'); button.className = 'character-card'; button.dataset.character = person.id;
    button.innerHTML = `<span class="avatar">${portrait(person)}</span><span><strong>${person.name}</strong><small>${person.role}</small></span><span class="character-arrow" aria-hidden="true">→</span>`;
    button.addEventListener('click', () => selectCharacter(person.id)); $('character-list').append(button);
  });
  function goHome() { reset(); $('character-list').querySelector('button').focus({ preventScroll: true }); }
  document.querySelector('.brand').addEventListener('click', event => { event.preventDefault(); goHome(); });
  $('change-character').addEventListener('click', goHome); $('play-again').addEventListener('click', goHome);
  $('hint-button').addEventListener('click', () => {
    $('hint').hidden = !$('hint').hidden;
    $('hint').textContent = 'You’re debating a dad, not a traffic engineer. Try his pride. He would hate to think he’s in the beginner lane.';
    $('hint-button').textContent = $('hint').hidden ? 'Need a hint?' : 'Hide hint';
  });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || !state.character || state.won) return;
    const key = event.key.toLowerCase();
    if (key === 'p' && ['traffic', 'consequence', 'winTransition'].includes(state.phase)) { event.preventDefault(); if (!event.repeat) togglePause(); return; }
    if (state.phase === 'traffic') {
      if (['arrowleft', 'arrowright', 'a', 'd', 'b', 'l'].includes(key)) event.preventDefault();
      if (state.paused || event.repeat) return;
      if (key === 'arrowleft' || key === 'a') steer(-1);
      if (key === 'arrowright' || key === 'd') steer(1);
      if (key === 'b') useAbility('bell');
      if (key === 'l') useAbility('light');
    } else if (state.phase === 'dialogue' && /^[1-4]$/.test(key)) {
      $('choices').children[Number(key) - 1]?.click();
    }
  });

  function makeTraffic() {
    return {
      time: 0, duration: Math.min(14 + (state.attempts - 1), 18), track: 1, x: TRACKS[1],
      cars: [], spawned: 0, nextSpawn: .7, health: 3, hits: 0, passed: 0, bells: 0, lights: 0,
      bellReady: 0, lightReady: 0, lightUntil: 0, bellUntil: 0, invulnerableUntil: 0,
      message: '', messageUntil: 0, uiTime: -1, swerves: 0
    };
  }
  function prepareTraffic() {
    state.event = null; state.traffic = makeTraffic();
    setPhase('ready');
    $('overlay-eyebrow').textContent = `ROUND ${String(state.attempts * 2).padStart(2, '0')} · TRAFFIC`;
    $('overlay-title').textContent = 'Protect the family.';
    $('overlay-copy').textContent = `Dodge cars for ${state.traffic.duration} seconds. Steer with arrows or the buttons below. Ring the bell to clear a path; flash the light to buy time.`;
    $('road-continue').textContent = 'Start traffic round →';
    $('traffic-report').textContent = 'Tim: “See? The drivers can see us. System working perfectly.”';
    $('road').setAttribute('aria-label', 'Overhead view of the road. The family is in the left lane. Start the traffic round to steer, ring the bell, and flash your light.');
    $('road-continue').focus({ preventScroll: true }); revealRoad(); drawScene();
  }
  function startTraffic() {
    state.traffic = makeTraffic(); state.paused = false;
    setPhase('traffic'); updateMotionButton();
    roadMessage('Protect the whole family. Watch the warning trails!', 2.5);
    $('road').setAttribute('aria-label', 'Traffic round in progress. Cars approach from the top. Use left and right arrows to steer, B to ring the bell, and L to flash the light.');
    $('steer-left').focus({ preventScroll: true }); revealRoad();
  }
  function returnToDialogue() {
    state.traffic = null; $('road-message').hidden = true;
    setPhase('dialogue');
    $('response-label').textContent = 'TIM’S COMPLETELY UNHELPFUL ASSESSMENT';
    $('tim-response').textContent = '“That went well. I knew my system would work. Now, what were you saying?”';
    $('family-response').textContent = 'The family did all the dodging. Tim has learned absolutely nothing. Try another argument.';
    $('scene-quote').textContent = '“Excellent work, everyone. Especially me.”';
    $('road').setAttribute('aria-label', 'The family survived the traffic round. Tim is still leading them on the wrong side. Try another argument.');
    renderTopics(); renderChoices(); updateStats();
    ($('choices').querySelector('button:not(:disabled)') || $('topics').querySelector('button')).focus({ preventScroll: true });
    if (innerWidth <= 760) $('conversation-screen').scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  $('road-continue').addEventListener('click', () => {
    if (state.phase === 'ready' || state.phase === 'failed') startTraffic();
    else if (state.phase === 'result') returnToDialogue();
  });
  function roadMessage(message, duration = 2) {
    if (state.traffic) { state.traffic.message = message; state.traffic.messageUntil = state.traffic.time + duration; }
    $('road-message').textContent = message; $('road-message').hidden = false;
  }
  function steer(direction) {
    if (state.phase !== 'traffic' || state.paused) return;
    const t = state.traffic, target = Math.max(0, Math.min(2, t.track + direction));
    if (target !== t.track) {
      t.track = target; t.swerves++;
      roadMessage(direction < 0 ? '← Family swerves left!' : 'Family swerves right! →', 1.1);
      updateTrafficUI();
    }
  }
  function useAbility(kind) {
    if (state.phase !== 'traffic' || state.paused) return;
    const t = state.traffic;
    if (kind === 'bell') {
      if (t.time < t.bellReady) return;
      t.bellReady = t.time + 4; t.bellUntil = t.time + 1; t.bells++;
      const approaching = t.cars.filter(c => !c.hit && !c.diverted && c.y < 630);
      approaching.sort((a, b) => Math.abs(FAMILY_ROWS[0] - a.y) - Math.abs(FAMILY_ROWS[0] - b.y));
      const driver = approaching[0];
      if (driver) {
        driver.targetX = TRACKS[t.track === 0 ? 2 : 0]; driver.diverted = true;
        roadMessage('DING DING! A driver swerves out of your path.');
        $('traffic-report').textContent = 'Tim: “Good bell technique. Must run in the family.”';
      } else roadMessage('Ding! No approaching driver in range yet.');
    } else {
      if (t.time < t.lightReady) return;
      t.lightReady = t.time + 6; t.lightUntil = t.time + 2.5; t.lights++;
      roadMessage('LIGHT ON · Drivers slow. Find a clear path!');
      $('traffic-report').textContent = 'Tim: “They’re slowing down to admire my cycling form.”';
    }
    playTone(kind === 'light'); updateTrafficUI();
  }
  $('steer-left').addEventListener('click', () => steer(-1));
  $('steer-right').addEventListener('click', () => steer(1));
  $('ring-bell').addEventListener('click', () => useAbility('bell'));
  $('flash-light').addEventListener('click', () => useAbility('light'));
  let swipeStart = null;
  $('road').addEventListener('pointerdown', event => { if (state.phase === 'traffic') swipeStart = event.clientX; });
  $('road').addEventListener('pointerup', event => {
    if (swipeStart !== null && Math.abs(event.clientX - swipeStart) > 25) steer(event.clientX > swipeStart ? 1 : -1);
    swipeStart = null;
  });
  $('road').addEventListener('pointercancel', () => { swipeStart = null; });
  function updateTrafficUI() {
    const t = state.traffic; if (!t) return;
    $('traffic-round').textContent = `TRAFFIC ${String(state.attempts).padStart(2, '0')}`;
    $('traffic-health').textContent = `COMPOSURE ${t.health}/3`;
    $('traffic-health').style.color = t.health === 1 ? '#ffc093' : '#d6e1aa';
    $('traffic-timer').textContent = `${Math.max(0, Math.ceil(t.duration - t.time))}s`;
    $('traffic-progress-fill').style.width = `${Math.min(100, t.time / t.duration * 100)}%`;
    const playable = state.phase === 'traffic' && !state.paused;
    $('steer-left').disabled = !playable || t.track === 0;
    $('steer-right').disabled = !playable || t.track === 2;
    $('ring-bell').disabled = !playable || t.time < t.bellReady;
    $('flash-light').disabled = !playable || t.time < t.lightReady;
    $('bell-cooldown').textContent = t.time < t.bellReady ? `Ready in ${(t.bellReady - t.time).toFixed(1)}s` : 'Driver swerves';
    $('light-cooldown').textContent = t.time < t.lightReady ? `Ready in ${(t.lightReady - t.time).toFixed(1)}s` : 'Traffic slows';
  }
  function finishTraffic(failed) {
    const t = state.traffic;
    if (!failed) { state.cleared++; state.saved += t.passed; }
    $('road-message').hidden = true;
    setPhase(failed ? 'failed' : 'result');
    $('overlay-eyebrow').textContent = failed ? 'COMPOSURE: COMPLETELY LOST' : `ROUND ${String(state.attempts * 2).padStart(2, '0')} · SURVIVED`;
    $('overlay-title').textContent = failed ? 'Emergency snack stop.' : 'Everyone’s still rolling.';
    $('overlay-copy').textContent = failed ? 'Three close calls! The family pulls over for snacks. Tim blames “unpredictable snack levels.” Retry this stretch.' : `${t.passed} cars passed · ${t.hits} close call${t.hits === 1 ? '' : 's'}. Tim still thinks he was right. Time for another argument.`;
    $('road-continue').textContent = failed ? 'Retry traffic round →' : 'Talk to Tim again →';
    $('traffic-report').textContent = `${t.swerves} swerves · ${t.bells} bell ring${t.bells === 1 ? '' : 's'} · ${t.lights} light burst${t.lights === 1 ? '' : 's'}. ${failed ? 'Snacks restore composure for the retry.' : 'Your work. Tim’s credit.'}`;
    $('road').setAttribute('aria-label', failed ? 'The family lost its composure after three close calls and stopped for snacks. Retry the traffic round.' : 'The traffic round is complete. Everyone is still rolling. Continue to another dialogue round.');
    $('road-continue').focus({ preventScroll: true });
  }
  function updateTraffic(delta) {
    const t = state.traffic; t.time += delta;
    t.x += (TRACKS[t.track] - t.x) * Math.min(delta * 12, 1);
    if (t.time >= t.nextSpawn && t.time < t.duration - 4.7) {
      // A honking convoy makes staying still risky; other cars use the outer paths.
      const track = t.spawned < 2 || t.spawned % 3 === 0 ? 1 : (t.spawned + state.attempts) % 3;
      t.cars.push({ x: TRACKS[track], targetX: TRACKS[track], y: -90, speed: 176 + Math.min(state.attempts * 7, 35), color: ['#6e8c8a', '#c28a5b', '#727b97'][t.spawned % 3], hit: false, diverted: false, warned: false });
      t.spawned++; t.nextSpawn += Math.max(1.55, 2.25 - state.attempts * .08);
    }
    for (const driver of t.cars) {
      driver.x += (driver.targetX - driver.x) * Math.min(delta * 7, 1);
      driver.y += driver.speed * (t.time < t.lightUntil ? .42 : 1) * delta;
      if (!driver.warned && driver.y > 170 && Math.abs(driver.targetX - TRACKS[t.track]) < 45) {
        driver.warned = true;
        if (t.time > t.messageUntil) roadMessage('CAR IN YOUR PATH · Swerve, ring, or flash!', 1.6);
      }
      if (!driver.hit && Math.abs(driver.x - t.x) < 43 && FAMILY_ROWS.some(y => Math.abs(driver.y - y) < 56)) {
        driver.hit = true;
        driver.targetX = TRACKS[t.track === 0 ? 2 : 0];
        if (t.time >= t.invulnerableUntil) {
          t.health--; t.hits++; t.invulnerableUntil = t.time + 1.3;
          roadMessage('WHOAAA! Close call. Composure −1.', 2);
          $('traffic-report').textContent = 'Tim: “That was a strategic maneuver. Totally intentional.”';
          playTone(false);
          if (t.health <= 0) { finishTraffic(true); return; }
        }
      }
    }
    const passed = t.cars.filter(c => c.y > 820); t.passed += passed.length;
    t.cars = t.cars.filter(c => c.y <= 820);
    if (t.time > t.messageUntil) $('road-message').hidden = true;
    if (t.time - t.uiTime > .1) { updateTrafficUI(); t.uiTime = t.time; }
    if (t.time >= t.duration) finishTraffic(false);
  }
  let audioContext;
  function playTone(won) {
    if (!state.sound) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      audioContext.resume().catch(() => {});
      const notes = won ? [523, 659, 784, 1047] : [330, 247];
      notes.forEach((frequency, i) => {
        const oscillator = audioContext.createOscillator(), gain = audioContext.createGain();
        const start = audioContext.currentTime + i * .12;
        oscillator.type = 'triangle'; oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0, start); gain.gain.linearRampToValueAtTime(.06, start + .015); gain.gain.exponentialRampToValueAtTime(.001, start + .18);
        oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(start); oscillator.stop(start + .2);
      });
    } catch { /* Sound is optional; gameplay works without browser audio support. */ }
  }
  $('sound-toggle').addEventListener('click', () => { state.sound = !state.sound; $('sound-toggle').textContent = `Sound: ${state.sound ? 'on' : 'off'}`; $('sound-toggle').setAttribute('aria-pressed', String(state.sound)); if (state.sound) playTone(false); });
  function updateMotionButton() {
    $('motion-toggle').textContent = state.paused ? 'Resume ride' : 'Pause ride';
    $('motion-toggle').setAttribute('aria-pressed', String(state.paused));
    $('pause-overlay').hidden = !state.paused;
    updateTrafficUI();
  }
  function togglePause() {
    state.paused = !state.paused; updateMotionButton();
    if (state.phase === 'dialogue') renderChoices();
  }
  $('motion-toggle').addEventListener('click', togglePause);
  $('resume-ride').addEventListener('click', togglePause);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !state.paused && ['traffic', 'consequence', 'winTransition'].includes(state.phase)) togglePause();
  });
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  motionPreference.addEventListener('change', event => { state.reduced = event.matches; drawScene(); });
  updateMotionButton();

  // Hand-drawn scenery uses a fixed logical canvas; the backing bitmap follows display density.
  const canvas = $('road'), ctx = canvas.getContext('2d');
  const W = 1000, H = 590;
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect(), density = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * density); canvas.height = Math.round(rect.height * density);
    drawScene();
  }
  new ResizeObserver(resizeCanvas).observe(canvas);
  function path(points, fill, stroke, width = 2) {
    ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
    if (fill) { ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke(); }
  }
  function ellipse(x, y, rx, ry, color) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); }
  function tree(x, y, size) {
    ctx.fillStyle = '#6b704c'; ctx.fillRect(x - 3 * size, y - 10 * size, 6 * size, 55 * size);
    ellipse(x - 20 * size, y - 21 * size, 29 * size, 35 * size, '#7f9863'); ellipse(x + 14 * size, y - 31 * size, 34 * size, 43 * size, '#91a16b'); ellipse(x, y - 53 * size, 31 * size, 39 * size, '#8e9f69');
  }
  function roadArrow(x, y, direction) { ctx.save(); ctx.translate(x, y); ctx.scale(direction, 1); path([[-25,-3],[8,-3],[8,-10],[27,0],[8,10],[8,3],[-25,3]], '#c9c5aa'); ctx.restore(); }
  function car(x, y, color, direction) {
    ctx.save(); ctx.translate(x, y); ctx.scale(direction, 1);
    ellipse(0, 13, 59, 8, '#34382d20');
    path([[-57,4],[-53,-18],[-32,-22],[-16,-42],[20,-42],[40,-20],[57,-15],[60,4]], color, '#555945', 2);
    path([[-22,-23],[-11,-36],[16,-36],[29,-23]], '#d7e1d4'); path([[3,-36],[3,-23]], null, color, 3);
    ctx.fillStyle = '#e7dcc0'; ctx.fillRect(47,-12,8,5); ctx.fillStyle = '#9d5040'; ctx.fillRect(-53,-11,6,5);
    [-35, 36].forEach(wx => { ellipse(wx,5,12,12,'#424638'); ellipse(wx,5,6,6,'#d3d3bc'); });
    ctx.restore();
  }
  function cyclist(x, y, scale, person, phase) {
    ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale);
    const pedal = (state.reduced ? 0 : state.elapsed * 5) + phase;
    ellipse(3, 6, 55, 8, '#35433320');
    [-35, 38].forEach(wx => {
      ellipse(wx,0,24,24,'#3d4538'); ellipse(wx,0,20,20,'#ece9d4');
      ctx.save(); ctx.translate(wx,0); ctx.rotate(pedal); for (let n=0;n<4;n++) { ctx.rotate(Math.PI/4); path([[-19,0],[19,0]],null,'#858b76',1); } ctx.restore();
    });
    path([[-35,0],[-11,-31],[7,0],[-35,0],[-11,-31],[24,-30],[7,0],[38,0],[24,-30],[23,-43],[35,-46]],null,person.id === 'tim' ? '#a8452b' : '#526b61',4);
    path([[-18,-35],[-7,-35]],null,'#353d31',5);
    const footX = 7 + Math.cos(pedal) * 11, footY = Math.sin(pedal) * 9;
    path([[-12,-48],[-20,-22],[footX,footY]],null,'#776349',9);
    path([[footX-5,footY],[footX+8,footY]],null,'#363d30',5);
    path([[-13,-49],[4,-22],[14-Math.cos(pedal)*10,-Math.sin(pedal)*8]],null,person.skin,8);
    path([[-17,-74],[-15,-50],[2,-46],[4,-70]],person.color);
    path([[0,-69],[15,-53],[31,-46]],null,person.skin,7);
    if (person.hairStyle !== 'short') path([[-20,-88],[-24,-56],[-9,-61],[-8,-89]],person.hair);
    if (person.hairStyle === 'ponytail') ellipse(-26,-86,8,15,person.hair);
    path([[-11,-73],[-7,-86]],null,person.skin,8);
    ellipse(-7,-93,13,16,person.skin);
    path([[-20,-96],[-18,-106],[-7,-110],[4,-105],[7,-96]],person.color,'#586245',2);
    path([[-19,-96],[8,-96]],null,'#424839',2); path([[-16,-106],[-13,-99]],null,'#f2e8cd',2); path([[-7,-108],[-5,-99]],null,'#f2e8cd',2);
    ellipse(3,-92,2,2,'#3c4434'); path([[4,-83],[9,-84]],null,'#83543e',1.5);
    if (person.id === 'tim') { path([[-2,-93],[9,-93]],null,'#3b4838',3); path([[4,-80],[-5,-80]],null,'#77604b',3); }
    if (state.character?.id === person.id) { ctx.fillStyle = '#fffbed'; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center'; ctx.fillRect(-29,-139,45,16); ctx.fillStyle = '#bd532e'; ctx.fillText('YOU',-7,-127); }
    ctx.restore();
  }
  function drawRoadIncident() {
    const e = state.event, time = e.time;
    const smooth = value => { const v = Math.max(0, Math.min(1, value)); return v * v * (3 - 2 * v); };
    let x, y, label, color;
    if (e.type === 'family') {
      x = time < 1.3 ? 980 - smooth(time / 1.3) * 240 : 740 - (time - 1.3) * 420;
      y = 368 + smooth((time - 1.05) / .8) * 104; label = 'SCREEECH!'; color = '#c79b59';
    } else {
      x = 1010 - time * (e.type === 'ego' ? 330 : 360);
      y = 367 + smooth((time - .65) / .65) * 106;
      label = e.type === 'ego' ? 'HONK HONK!' : 'SKRRRT!'; color = e.type === 'ego' ? '#697d90' : '#729389';
    }
    if (time > .6 && time < 2.8) {
      ctx.save(); ctx.globalAlpha = .55;
      path([[900,366],[820,370],[755,385],[700,440],[620,470]],null,'#4a4d40',4);
      path([[900,382],[820,386],[755,401],[700,456],[620,486]],null,'#4a4d40',4);
      ctx.restore();
    }
    ctx.save(); ctx.translate(x,y);
    if (!state.reduced && time > .7 && time < 1.4) ctx.rotate(-.18);
    if (e.type === 'family') ctx.scale(1.13,1.15);
    car(0,0,color,-1);
    if (e.type === 'family') {
      ctx.fillStyle='#fff2c6';ctx.fillRect(-37,-19,68,17);ctx.fillStyle='#82633c';ctx.font='bold 11px monospace';ctx.textAlign='center';ctx.fillText('SNACKS',-3,-6);
    }
    ctx.restore();
    if (time > .55 && time < 2.5) {
      ctx.save(); ctx.translate(Math.max(125,Math.min(850,x)),y-80); ctx.rotate(-.08);
      ctx.fillStyle='#fff1bf';ctx.fillRect(-87,-20,174,33);ctx.fillStyle='#a3462c';ctx.font='bold 23px monospace';ctx.textAlign='center';ctx.fillText(label,0,4);ctx.restore();
    }
    if (e.type === 'family' && time > 1.1) {
      const bagX = 760 - (time - 1.1)*85, bagY = 385 - Math.sin(Math.min(Math.PI,(time-1.1)*2))*55;
      ctx.save();ctx.translate(bagX,bagY);ctx.rotate(time*2);ctx.fillStyle='#dbc394';ctx.fillRect(-8,-12,16,24);ctx.fillStyle='#af6e3f';ctx.fillRect(-8,-12,16,4);ctx.restore();
    }
  }
  function topDownCar(driver) {
    const t = state.traffic, slow = t.time < t.lightUntil;
    ctx.save();ctx.translate(driver.x,driver.y);
    ellipse(5,6,35,50,'#283a2930');
    ctx.fillStyle='#353e34';ctx.fillRect(-34,-30,9,20);ctx.fillRect(25,-30,9,20);ctx.fillRect(-34,19,9,20);ctx.fillRect(25,19,9,20);
    path([[-27,-44],[27,-44],[30,-31],[30,36],[22,48],[-22,48],[-30,36],[-30,-31]],driver.color,'#38463e',2);
    path([[-23,7],[23,7],[21,26],[-21,26]],'#cee2d7');
    path([[-21,-30],[21,-30],[23,-17],[-23,-17]],'#a9c3bc');
    ctx.fillStyle='#fff3b6';ctx.fillRect(-24,36,10,6);ctx.fillRect(14,36,10,6);
    ctx.fillStyle='#b35e40';ctx.fillRect(-24,-43,9,4);ctx.fillRect(15,-43,9,4);
    path([[-25,-10],[-25,0]],null,'#3c544a',2);path([[25,-10],[25,0]],null,'#3c544a',2);
    if (slow) { ctx.strokeStyle='#fff4b8';ctx.lineWidth=3;ctx.strokeRect(-36,-50,72,104); }
    if (driver.diverted || driver.hit) { path([[35,-46],[45,-66]],null,'#edd49c',3);path([[43,-32],[53,-51]],null,'#edd49c',3); }
    ctx.restore();
  }
  function topDownBike(x, y, person, selected) {
    ctx.save();ctx.translate(x,y);
    ellipse(4,5,17,31,'#253b2a28');
    path([[0,-28],[0,29]],null,'#36473a',5);
    path([[-13,-17],[13,-17]],null,'#455746',3);
    path([[-9,-5],[0,14],[9,-5]],null,'#aabc88',3);
    path([[-13,-16],[-11,4]],null,person.skin,5);path([[13,-16],[11,4]],null,person.skin,5);
    ctx.fillStyle=person.color;ctx.fillRect(-10,-13,20,29);
    ellipse(0,-17,12,12,person.skin);ellipse(0,-20,12,10,person.color);
    path([[-6,-25],[-6,-17]],null,'#f6efd7',2);path([[1,-28],[1,-18]],null,'#f6efd7',2);path([[7,-25],[7,-17]],null,'#f6efd7',2);
    if (selected) {
      ctx.strokeStyle='#fffcdf';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,0,25,38,0,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle='#fff7d7';ctx.fillRect(24,-20,36,18);ctx.fillStyle='#a34728';ctx.font='bold 10px monospace';ctx.textAlign='center';ctx.fillText('YOU',42,-7);
    } else if (person.id === 'tim') {
      ctx.fillStyle='#f4e9d0';ctx.font='10px monospace';ctx.textAlign='left';ctx.fillText('TIM',25,0);
    }
    ctx.restore();
  }
  function drawTraffic() {
    const t = state.traffic; if (!t) return;
    const narrow = innerWidth <= 760, visibleWidth = narrow ? 700 : 1000;
    const sx = canvas.width / visibleWidth;
    ctx.setTransform(sx, 0, 0, canvas.height / 740, narrow ? -180*sx : 0, 0);ctx.clearRect(0,0,1000,740);
    ctx.fillStyle='#aebd85';ctx.fillRect(0,0,1000,740);
    ctx.fillStyle='#bdc899';ctx.fillRect(0,0,190,740);ctx.fillRect(860,0,140,740);
    for(let i=0;i<8;i++) {
      const y=(i*118+t.time*50)%860-70;
      ellipse(85,y,44,53,'#8b9f6c');ellipse(104,y-18,33,37,'#99ae77');
      ellipse(925,y+40,37,47,'#809565');
      path([[180,y-10],[190,y+7]],null,'#748c55',2);path([[845,y],[854,y-19]],null,'#748c55',2);
    }
    ctx.fillStyle='#e2d8b7';ctx.fillRect(206,0,28,740);ctx.fillRect(816,0,26,740);
    ctx.fillStyle='#868b79';ctx.fillRect(234,0,582,740);
    path([[239,0],[239,740]],null,'#ebe9d0',3);path([[811,0],[811,740]],null,'#ebe9d0',3);
    for(let y=-100;y<850;y+=95) { ctx.fillStyle='#e9d998';ctx.fillRect(529,y+(t.time*100%95),5,51);ctx.fillRect(540,y+(t.time*100%95),3,51); }
    // Three steering paths share Tim's wrong-side lane. The family never moves to the right lane without the winning argument.
    TRACKS.forEach((x,i) => {
      ctx.save();ctx.strokeStyle='#c0c3ac45';ctx.lineWidth=1;ctx.setLineDash([5,12]);ctx.beginPath();ctx.moveTo(x,80);ctx.lineTo(x,740);ctx.stroke();ctx.restore();
      ctx.fillStyle=i===t.track?'#f8ecc3':'#c2c4af';ctx.font='11px monospace';ctx.textAlign='center';ctx.fillText(['LEFT','CENTER','RIGHT'][i],x,703);
    });
    ctx.save();ctx.translate(392,130);ctx.rotate(Math.PI/2);roadArrow(0,0,1);ctx.restore();
    ctx.save();ctx.translate(682,150);ctx.rotate(-Math.PI/2);roadArrow(0,0,1);ctx.restore();
    ctx.fillStyle='#d4d6bd';ctx.font='11px monospace';ctx.textAlign='center';ctx.fillText('ONCOMING',391,93);ctx.fillText('WITH TRAFFIC',684,93);
    // Harmless traffic in the correct lane demonstrates the opposite travel direction.
    ctx.save();ctx.translate(675,760-(t.time*70%1000));ctx.rotate(Math.PI);
    topDownCar({x:0,y:0,color:'#aa8d67',diverted:false,hit:false});ctx.restore();
    const nearest = t.cars.filter(c => !c.hit && !c.diverted && c.y<630 && Math.abs(c.targetX-t.x)<55).sort((a,b)=>b.y-a.y)[0];
    if (nearest) {
      ctx.save();ctx.strokeStyle='#edb174';ctx.lineWidth=3;ctx.setLineDash([13,13]);ctx.beginPath();ctx.moveTo(nearest.x,nearest.y+54);ctx.lineTo(nearest.x,Math.max(nearest.y+54,640));ctx.stroke();ctx.restore();
      if (nearest.y>90 && nearest.y<375) {ctx.fillStyle='#ffe6b2';ctx.font='bold 19px monospace';ctx.textAlign='center';ctx.fillText('!',nearest.x,nearest.y-60);}
    }
    if (t.time<t.lightUntil) {
      path([[t.x-12,420],[t.x-105,65],[t.x+105,65],[t.x+12,420]],'#fff4ac45');
      path([[t.x-5,420],[t.x-25,75],[t.x+25,75],[t.x+5,420]],'#fff6c760');
    }
    const pack = [state.character,tim,...characters.filter(c=>c.id!==state.character.id)];
    pack.forEach((person,i) => {
      const wobble = !state.reduced && t.time<t.invulnerableUntil ? Math.sin(t.time*22+i)*7 : 0;
      topDownBike(t.x+wobble,FAMILY_ROWS[i],person,i===0);
    });
    t.cars.forEach(topDownCar);
    if (t.time<t.bellUntil) {
      ctx.save();ctx.strokeStyle='#fff5b2';ctx.lineWidth=3;
      for(let n=0;n<3;n++) { const radius=30+n*25+(1-(t.bellUntil-t.time))*50;ctx.globalAlpha=.7-n*.15;ctx.beginPath();ctx.arc(t.x,FAMILY_ROWS[0],radius,Math.PI,Math.PI*2);ctx.stroke(); }
      ctx.restore();ctx.fillStyle='#fff2b6';ctx.font='bold 15px monospace';ctx.textAlign='center';ctx.fillText('DING!',t.x,FAMILY_ROWS[0]-100);
    }
    if (t.time<t.invulnerableUntil) {
      ctx.strokeStyle='#e9b273';ctx.lineWidth=3;ctx.strokeRect(245,62,276,623);
    }
  }
  function drawScene() {
    if (!ctx || !canvas.width || !canvas.height) return;
    if (arcadePhases.includes(state.phase)) { drawTraffic(); return; }
    ctx.setTransform(canvas.width / W, 0, 0, canvas.height / H, 0, 0); ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#e5e9cd'; ctx.fillRect(0,0,W,H);
    // Layered hills and hedgerows. The camera travels with the bicycles.
    path([[0,225],[0,160],[110,145],[215,158],[330,139],[455,151],[565,128],[705,161],[810,130],[1000,157],[1000,255]],'#c6d0a5');
    path([[0,257],[0,207],[105,185],[225,216],[375,184],[520,210],[690,177],[810,215],[950,183],[1000,199],[1000,270]],'#b3c093');
    ctx.fillStyle = '#abb989'; ctx.fillRect(0,254,W,76);
    for(let i=-1;i<8;i++) { const x = i*175 - (state.elapsed*18%175); tree(x,240,.75+(i%3)*.12); }
    ctx.fillStyle = '#dad5b9'; ctx.fillRect(0,307,W,18);
    path([[0,310],[1000,310]],null,'#e9e5cb',3);
    ctx.fillStyle = '#92937e'; ctx.fillRect(0,325,W,188);
    ctx.fillStyle = '#a6a591'; ctx.fillRect(0,327,W,3);
    for(let x=-120;x<W+120;x+=145) { ctx.fillStyle = '#e9db9d'; ctx.fillRect(x-(state.elapsed*75%145),416,76,4); }
    path([[0,506],[1000,506]],null,'#e9e5cb',3);
    roadArrow(135-(state.elapsed*20%480),380,-1); roadArrow(635-(state.elapsed*20%480),380,-1);
    roadArrow(205-(state.elapsed*20%480),475,1); roadArrow(705-(state.elapsed*20%480),475,1);
    // Between arguments the ride is quiet; rejected arguments trigger a visible incident.
    const oncomingX = 1400 - ((state.elapsed * 110 + 50) % 1650);
    if (!state.event && (oncomingX > 740 || oncomingX < -80)) car(oncomingX,367,'#708c85',-1);
    const followingX = 850 + Math.sin(state.elapsed*.18)*105;
    car(followingX,476,'#bd8a62',1);
    const row = 371 + state.lane*113;
    const family = [characters[3],characters[2],characters[1],characters[0],tim];
    family.forEach((person,i) => {
      const scale = person.id === 'son' ? .69 : person.id === 'younger' ? .81 : person.id === 'older' ? .89 : .97;
      const bob = state.paused || state.reduced ? 0 : Math.sin(state.elapsed*4+i)*1.8;
      cyclist(120+i*116,row+bob,scale,person,i*1.8);
    });
    if (state.event && !state.event.win) drawRoadIncident();
    ctx.fillStyle = '#a7b67b'; ctx.fillRect(0,513,W,77);
    ctx.fillStyle = '#bac38b'; ctx.fillRect(0,513,W,9);
    for(let i=0;i<32;i++) { const x=(i*47-state.elapsed*80%47+W)%W; path([[x,558+i%4*5],[x+4,545+i%4*5]],null,'#7c925e',1.5); if(i%5===0) ellipse(x+4,543+i%4*5,3,3,'#e6cd7b'); }
    // A little roadside sign establishes the joke without needing an explanation.
    const signX = 805 - (state.elapsed*15 % 155);
    path([[signX,291],[signX,247]],null,'#7b8167',4);
    ctx.fillStyle='#f3f0db';ctx.fillRect(signX-49,221,98,29);ctx.strokeStyle='#8c9575';ctx.lineWidth=1;ctx.strokeRect(signX-49,221,98,29);
    ctx.fillStyle='#647354';ctx.font='10px monospace';ctx.textAlign='center';ctx.fillText('KEEP RIGHT →',signX,239);
    if (state.won) {
      ctx.fillStyle = '#3c6745'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'left'; ctx.fillText('✓ WITH TRAFFIC. FINALLY.',28,565);
      if (!state.paused && !state.reduced) for (let i=0;i<25;i++) { const x=(i*113+state.elapsed*20)%W,y=(i*51+state.elapsed*38)%280;ctx.fillStyle=['#c96e3d','#e3c066','#819369'][i%3];ctx.save();ctx.translate(x,y);ctx.rotate(state.elapsed+i);ctx.fillRect(-2,-2,5,9);ctx.restore(); }
    }
  }
  let previousTime = 0;
  function animate(time) {
    const delta = previousTime ? Math.min((time-previousTime)/1000,.05) : 0; previousTime = time;
    if (!state.paused) {
      const active = ['traffic', 'consequence', 'winTransition'].includes(state.phase);
      if (!state.reduced || active) state.elapsed += delta;
      state.lane += ((state.won || state.phase === 'winTransition' ? 1 : 0) - state.lane) * Math.min(delta * 3, 1);
      if (state.phase === 'traffic') updateTraffic(delta);
      else if (state.event) {
        state.event.time += delta;
        if (state.event.time >= state.event.duration) state.event.win ? finishWin() : prepareTraffic();
      }
      drawScene();
    }
    requestAnimationFrame(animate);
  }
  reset(); requestAnimationFrame(animate);
})();
