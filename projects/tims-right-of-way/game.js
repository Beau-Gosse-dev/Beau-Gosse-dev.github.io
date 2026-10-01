/* A local, single-screen game. No dependencies or backend. */
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
  const state = {
    character: null, tried: new Set(), attempts: 0, page: 0, phase: 'pick', paused: false,
    reduced: matchMedia('(prefers-reduced-motion: reduce)').matches, sound: false,
    speechUntil: 0, winTime: 0, traffic: null
  };
  const TRACKS = [305, 395, 485];
  const FAMILY_ROWS = [420, 475, 530, 585, 640];
  function makeTraffic() {
    return { time: 0, track: 1, x: TRACKS[1], cars: [], spawned: 0, nextSpawn: 2.8,
      health: 3, hits: 0, bellReady: 0, lightReady: 0, lightUntil: 0,
      bellUntil: 0, invulnerableUntil: 0, message: '', messageUntil: 0, uiTime: -1 };
  }
  function setPhase(phase) {
    state.phase = phase;
    document.querySelector('.game').dataset.phase = phase;
    $('start-screen').hidden = phase !== 'pick';
    $('end-screen').hidden = !['failed', 'won'].includes(phase);
    $('dialogue-dock').inert = phase !== 'riding' || state.paused;
    $('motion-toggle').disabled = !['riding', 'winTransition'].includes(phase);
    updateUI();
  }
  function reset() {
    state.character = null; state.tried.clear(); state.attempts = 0; state.page = 0;
    state.speechUntil = 0; state.winTime = 0; state.paused = false;
    state.traffic = makeTraffic();
    $('player-name').textContent = 'Family ride';
    $('tim-response').textContent = '“I like to see the traffic coming. It’s a system.”';
    $('dialogue-status').textContent = 'Convince Tim while you dodge.';
    $('choices').replaceChildren(); $('road-message').hidden = true;
    $('lane-label').textContent = 'Tim’s lane · oncoming traffic';
    $('road').setAttribute('aria-label', 'Tim leads his family into oncoming traffic. Choose a family member to start the ride.');
    setPhase('pick'); updatePause();
  }
  function selectCharacter(id) {
    reset(); state.character = characters.find(c => c.id === id);
    $('player-name').textContent = state.character.name;
    $('tim-response').textContent = '“Stay behind me. I’ve watched at least three cycling videos.”';
    $('road').setAttribute('aria-label', 'Steer the whole family around oncoming cars while choosing arguments to convince Tim. Left and right arrows steer, B rings the bell, L flashes the light, 1 to 3 choose dialogue.');
    setPhase('riding'); renderChoices();
    $('choices').querySelector('button').focus({ preventScroll: true });
  }
  // Each set has one common-sense, one family, and one dad-psychology argument.
  function deck() {
    return Array.from({ length: 4 }, (_, i) => ['sense', 'family', 'ego'].map(topic =>
      ({ ...(i < 3 ? shared[topic][i] : personal[state.character.id][topic]), topic })));
  }
  function renderChoices() {
    if (!state.character) return;
    $('choices').replaceChildren();
    deck()[state.page].forEach((choice, i) => {
      const button = document.createElement('button'); button.className = 'choice-button'; button.dataset.choice = choice.id;
      const number = document.createElement('span'); number.className = 'choice-number'; number.textContent = state.tried.has(choice.id) ? '✓' : i + 1;
      const line = document.createElement('span'); line.textContent = choice.line;
      button.append(number, line); button.addEventListener('click', () => choose(choice)); $('choices').append(button);
    });
    updateUI();
  }
  function choose(choice) {
    const t = state.traffic;
    if (state.phase !== 'riding' || state.paused || t.time < state.speechUntil || state.tried.has(choice.id)) return;
    state.tried.add(choice.id); state.attempts++;
    $('tim-response').textContent = `“${choice.reply}”`;
    state.speechUntil = t.time + 3;
    if (choice.wins) {
      state.winTime = 0; setPhase('winTransition');
      $('lane-label').textContent = 'Moving to the right lane…';
      roadMessage('“Advanced family coming through!”', 3);
      playTone(true);
    } else {
      // The rejection changes the road immediately, without taking away the controls.
      const driver = t.cars.filter(c => !c.hit && !c.diverted && c.y < 620).sort((a, b) => b.y - a.y)[0];
      const reaction = driver || { x: TRACKS[t.track], y: 40, speed: 160,
        color: choice.topic === 'family' ? '#c28a5b' : '#6e8c8a', hit: false };
      reaction.targetX = TRACKS[t.track === 0 ? 2 : 0]; reaction.diverted = true;
      if (!driver) t.cars.push(reaction);
      roadMessage(choice.topic === 'family' ? 'SCREEECH! Snack van brakes and swerves.' : choice.topic === 'ego' ? 'HONK! Tim assumes it’s applause.' : 'SKRRRT! A driver swerves around Tim.', 2.7);
      playTone(false); updateUI();
    }
  }
  $('more-ideas').addEventListener('click', () => {
    if (state.phase !== 'riding' || state.paused) return;
    state.page = (state.page + 1) % 4; renderChoices();
  });
  $('hint-button').addEventListener('click', () => {
    $('tim-response').textContent = 'Hint: Tim would hate to think he’s in the beginner lane. Try his pride.';
  });
  function roadMessage(message, duration = 2) {
    const t = state.traffic; t.message = message; t.messageUntil = t.time + duration;
    $('road-message').textContent = message; $('road-message').hidden = false;
  }
  function steer(direction) {
    if (state.phase !== 'riding' || state.paused) return;
    state.traffic.track = Math.max(0, Math.min(2, state.traffic.track + direction)); updateUI();
  }
  function useAbility(kind) {
    if (state.phase !== 'riding' || state.paused) return;
    const t = state.traffic;
    if (kind === 'bell') {
      if (t.time < t.bellReady) return;
      t.bellReady = t.time + 4; t.bellUntil = t.time + 1;
      const cars = t.cars.filter(c => !c.hit && !c.diverted && c.y < 630);
      // Clear the current path first, then the nearest approaching driver.
      cars.sort((a,b) => (Math.abs(a.targetX - TRACKS[t.track]) > 45) - (Math.abs(b.targetX - TRACKS[t.track]) > 45) || Math.abs(FAMILY_ROWS[0] - a.y) - Math.abs(FAMILY_ROWS[0] - b.y));
      if (cars[0]) { cars[0].targetX = TRACKS[t.track === 0 ? 2 : 0]; cars[0].diverted = true; roadMessage('DING! Driver swerves out of your path.'); }
      else roadMessage('DING! Nobody in range yet.');
    } else {
      if (t.time < t.lightReady) return;
      t.lightReady = t.time + 6; t.lightUntil = t.time + 2.5;
      roadMessage('Light on. Traffic slows — find a clear path!');
    }
    playTone(kind === 'light'); updateUI();
  }
  function updateUI() {
    const t = state.traffic;
    $('traffic-health').textContent = `Composure ${t.health}/3`;
    $('traffic-health').classList.toggle('low', t.health === 1);
    const playable = state.phase === 'riding' && !state.paused;
    $('steer-left').disabled = !playable || t.track === 0;
    $('steer-right').disabled = !playable || t.track === 2;
    $('ring-bell').disabled = !playable || t.time < t.bellReady;
    $('flash-light').disabled = !playable || t.time < t.lightReady;
    $('bell-cooldown').textContent = t.time < t.bellReady ? `${Math.ceil(t.bellReady-t.time)}s` : 'B';
    $('light-cooldown').textContent = t.time < t.lightReady ? `${Math.ceil(t.lightReady-t.time)}s` : 'L';
    const waiting = Math.max(0, Math.ceil(state.speechUntil - t.time));
    $('dialogue-status').textContent = state.phase === 'winTransition' || state.phase === 'won' ? 'He’s finally changing lanes.' : waiting ? `Tim’s talking… keep dodging! (${waiting}s)` : 'Convince Tim while you dodge.';
    $('choices').querySelectorAll('button').forEach(button => {
      button.disabled = !playable || waiting > 0 || state.tried.has(button.dataset.choice);
      button.querySelector('.choice-number').textContent = state.tried.has(button.dataset.choice) ? '✓' : [...$('choices').children].indexOf(button) + 1;
    });
    $('more-ideas').disabled = !playable; $('hint-button').disabled = !playable;
  }
  function finishFailed() {
    setPhase('failed');
    $('end-title').textContent = 'Emergency snack stop.';
    $('end-copy').textContent = 'Three close calls. Tim blames low snack levels. Take a breather, then try again.';
    $('road-continue').textContent = 'Back on the bikes';
    $('road-continue').focus({ preventScroll: true });
  }
  function finishWin() {
    setPhase('won');
    $('lane-label').textContent = 'Right lane. Same dad.';
    $('end-title').textContent = 'Right lane. Same dad.';
    $('end-copy').textContent = `You convinced Tim in ${state.attempts} argument${state.attempts === 1 ? '' : 's'}. He will take full credit at dinner.`;
    $('road-continue').textContent = 'Ride again';
    $('road').setAttribute('aria-label', 'The whole family moved to the right side of the road, with traffic. You won.');
    $('road-continue').focus({ preventScroll: true });
  }
  $('road-continue').addEventListener('click', () => {
    if (state.phase === 'failed') {
      state.traffic = makeTraffic(); state.speechUntil = 0; $('road-message').hidden = true;
      setPhase('riding'); renderChoices(); $('choices').querySelector('button:not(:disabled)')?.focus({ preventScroll: true });
    } else reset();
  });
  function updateTraffic(delta) {
    const t = state.traffic; t.time += delta;
    if (state.phase === 'winTransition') {
      state.winTime += delta;
      t.x += (675 - t.x) * Math.min(delta * 2, 1);
      t.cars.forEach(c => { c.y += c.speed * delta; });
      if (state.winTime >= 2.8) finishWin();
      return;
    }
    t.x += (TRACKS[t.track] - t.x) * Math.min(delta * 12, 1);
    if (t.time >= t.nextSpawn) {
      const track = t.spawned < 2 || t.spawned % 3 === 0 ? 1 : t.spawned % 3;
      t.cars.push({ x: TRACKS[track], targetX: TRACKS[track], y: -90,
        speed: 150 + Math.min(t.time*.35, 35), color: ['#6e8c8a','#c28a5b','#727b97'][t.spawned % 3], hit: false, diverted: false, warned: false });
      t.spawned++; t.nextSpawn += Math.max(2, 3 - t.time*.005);
    }
    for (const driver of t.cars) {
      driver.x += (driver.targetX - driver.x) * Math.min(delta * 7, 1);
      driver.y += driver.speed * (t.time < t.lightUntil ? .42 : 1) * delta;
      if (!driver.warned && !driver.diverted && driver.y > 170 && Math.abs(driver.targetX - TRACKS[t.track]) < 45) {
        driver.warned = true;
        if (t.time > t.messageUntil) roadMessage('Car in your path! Swerve or ring the bell.', 1.6);
      }
      if (!driver.hit && !driver.diverted && Math.abs(driver.x - t.x) < 43 && FAMILY_ROWS.some(y => Math.abs(driver.y - y) < 56)) {
        driver.hit = true; driver.targetX = TRACKS[t.track === 0 ? 2 : 0];
        if (t.time >= t.invulnerableUntil) {
          t.health--; t.hits++; t.invulnerableUntil = t.time + 1.3;
          roadMessage('WHOAAA! Close call. Composure −1.', 2); playTone(false); updateUI();
          if (t.health <= 0) { finishFailed(); return; }
        }
      }
    }
    t.cars = t.cars.filter(c => c.y <= 820);
    if (t.time > t.messageUntil) $('road-message').hidden = true;
    if (t.time - t.uiTime > .1) { updateUI(); t.uiTime = t.time; }
  }
  $('steer-left').addEventListener('click', () => steer(-1));
  $('steer-right').addEventListener('click', () => steer(1));
  $('ring-bell').addEventListener('click', () => useAbility('bell'));
  $('flash-light').addEventListener('click', () => useAbility('light'));
  let swipeStart = null;
  $('road').addEventListener('pointerdown', e => { if (state.phase === 'riding') swipeStart = e.clientX; });
  $('road').addEventListener('pointerup', e => { if (swipeStart !== null && Math.abs(e.clientX-swipeStart)>25) steer(e.clientX>swipeStart?1:-1); swipeStart=null; });
  $('road').addEventListener('pointercancel', () => { swipeStart=null; });
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || !['riding','winTransition'].includes(state.phase)) return;
    const key = e.key.toLowerCase();
    if (key === 'p') { e.preventDefault(); if (!e.repeat) togglePause(); return; }
    if (state.paused || e.repeat || state.phase !== 'riding') return;
    if (['arrowleft','arrowright','a','d','b','l','1','2','3'].includes(key)) e.preventDefault();
    if (key === 'arrowleft' || key === 'a') steer(-1);
    if (key === 'arrowright' || key === 'd') steer(1);
    if (key === 'b') useAbility('bell');
    if (key === 'l') useAbility('light');
    if (/^[1-3]$/.test(key)) $('choices').children[Number(key)-1]?.click();
  });
  function updatePause() {
    $('motion-toggle').textContent = state.paused ? 'Resume' : 'Pause';
    $('motion-toggle').setAttribute('aria-pressed', String(state.paused));
    $('pause-overlay').hidden = !state.paused;
    $('dialogue-dock').inert = state.paused || state.phase !== 'riding'; updateUI();
  }
  function togglePause() {
    if (!['riding','winTransition'].includes(state.phase)) return;
    state.paused = !state.paused; updatePause();
  }
  $('motion-toggle').addEventListener('click', togglePause);
  $('resume-ride').addEventListener('click', togglePause);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !state.paused && ['riding','winTransition'].includes(state.phase)) togglePause();
  });
  $('restart').addEventListener('click', reset);
  let audioContext;
  function playTone(won) {
    if (!state.sound) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      audioContext.resume().catch(() => {});
      (won ? [523,659,784] : [330,247]).forEach((frequency,i) => {
        const oscillator=audioContext.createOscillator(), gain=audioContext.createGain(), start=audioContext.currentTime+i*.12;
        oscillator.type='triangle'; oscillator.frequency.value=frequency;
        gain.gain.setValueAtTime(0,start); gain.gain.linearRampToValueAtTime(.04,start+.015); gain.gain.exponentialRampToValueAtTime(.001,start+.18);
        oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(start); oscillator.stop(start+.2);
      });
    } catch { /* Audio is optional. */ }
  }
  $('sound-toggle').addEventListener('click', () => {
    state.sound=!state.sound; $('sound-toggle').textContent=`Sound ${state.sound?'on':'off'}`;
    $('sound-toggle').setAttribute('aria-pressed', String(state.sound)); if(state.sound) playTone(false);
  });
  function portrait(person) {
    const backHair = person.hairStyle !== 'short' ? `<path d="M12 28 Q9 6 25 8 Q43 7 40 39 L11 39Z" fill="${person.hair}"/>` : '';
    const ponytail = person.hairStyle === 'ponytail' ? `<path d="M36 17 Q49 15 41 34 L34 29Z" fill="${person.hair}"/>` : '';
    return `<svg viewBox="0 0 50 50" aria-hidden="true"><rect width="50" height="50" fill="#e7e2cf"/>${backHair}${ponytail}<path d="M7 50 Q8 34 25 34 Q42 34 44 50" fill="${person.color}"/><rect x="21" y="28" width="8" height="10" rx="3" fill="${person.skin}"/><ellipse cx="25" cy="22" rx="11" ry="13" fill="${person.skin}"/><path d="M13 20 Q10 6 25 6 Q39 7 37 18 L32 14 L20 16Z" fill="${person.hair}"/><path d="M12 15 Q12 3 25 3 Q38 3 38 15Z" fill="${person.color}"/><path d="M12 14H39" stroke="#302f25" stroke-width="2"/><circle cx="21" cy="23" r="1" fill="#302f25"/><circle cx="29" cy="23" r="1" fill="#302f25"/><path d="M22 29 Q25 31 28 28" fill="none" stroke="#77513b" stroke-width="1.3"/></svg>`;
  }

  function path(points, fill, stroke, width = 2) {
    ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
    if (fill) { ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke(); }
  }
  function ellipse(x, y, rx, ry, color) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); }
  function roadArrow(x, y, direction) { ctx.save(); ctx.translate(x, y); ctx.scale(direction, 1); path([[-25,-3],[8,-3],[8,-10],[27,0],[8,10],[8,3],[-25,3]], '#c9c5aa'); ctx.restore(); }
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
    // Keep the riders legible when the phone's road view is short.
    ctx.scale(1.1, Math.min(1.5, Math.max(1, (canvas.width / 850) / (canvas.height / 740))));
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
    const visibleWidth = 850;
    const sx = canvas.width / visibleWidth;
    ctx.setTransform(sx, 0, 0, canvas.height / 740, -150*sx, 0);ctx.clearRect(0,0,1000,740);
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
    const selected = state.character || characters[0];
    const pack = [tim,selected,...characters.filter(c=>c.id!==selected.id)];
    pack.forEach((person,i) => {
      const wobble = !state.reduced && t.time<t.invulnerableUntil ? Math.sin(t.time*22+i)*7 : 0;
      topDownBike(t.x+wobble,FAMILY_ROWS[i],person,person.id===selected.id);
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
    if (ctx && canvas.width && canvas.height) drawTraffic();
  }
  const canvas = $('road'), ctx = canvas.getContext('2d');
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect(), density = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width*density); canvas.height = Math.round(rect.height*density); drawScene();
  }
  new ResizeObserver(resizeCanvas).observe(canvas);
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', e => { state.reduced=e.matches; drawScene(); });
  characters.forEach(person => {
    const button = document.createElement('button'); button.className='character-card'; button.dataset.character=person.id;
    button.innerHTML=`<span class="avatar">${portrait(person)}</span><span>${person.name}</span>`;
    button.addEventListener('click', () => selectCharacter(person.id)); $('character-list').append(button);
  });
  let previousTime = 0;
  function animate(time) {
    const delta = previousTime ? Math.min((time-previousTime)/1000,.05) : 0; previousTime=time;
    if (!state.paused) {
      if (['riding','winTransition'].includes(state.phase)) updateTraffic(delta);
      drawScene();
    }
    requestAnimationFrame(animate);
  }
  reset(); requestAnimationFrame(animate);

})();
