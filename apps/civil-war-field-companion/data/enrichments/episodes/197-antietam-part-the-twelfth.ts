import type { Enrichment } from '../types';

export const enrichment = {
  date: 'September 17, 1862',
  place:
    'Two sectors of the Antietam battlefield near Sharpsburg, Maryland: the Lower Bridge and Antietam Creek on the Federal left, and the Sunken Road from the Hagerstown Turnpike east toward the Roulette farm lane in the Confederate center',
  result:
    'Between about 10:00 and 11:00 a.m., the Ninth Corps made two uncoordinated attacks against the Lower Bridge. The 11th Connecticut was repulsed with roughly one-third of the regiment hit, Crook’s brigade stopped upstream, Rodman’s flanking column lost time searching for a usable ford, and the 2nd Maryland was repulsed in Nagle’s attack. Near the Sunken Road, Richardson’s division renewed the Federal offensive. Meagher’s Irish Brigade suffered severe losses, Caldwell extended the line, and Barlow’s enfilading fire helped make the Confederate position untenable. Posey’s failed counterattack, disrupted Confederate command, and a misunderstood order in Rodes’s brigade accelerated the collapse. Federal troops seized the road and entered the Piper cornfield, opening a temporary breach in Lee’s center',
  facts: [
    {
      label: 'Episode scope',
      value: 'About 10:00 a.m. to the Federal advance beyond the Sunken Road',
      note: 'The episode alternates between the first two attacks on the Lower Bridge and Richardson’s attack on the Confederate center, ending before the later Federal withdrawal from the Piper farm sector.',
    },
    {
      label: 'Two simultaneous fronts',
      value: 'Lower Bridge and Sunken Road',
      note: 'The Ninth Corps acted on the southern end of the battlefield while the II Corps attacked Lee’s center roughly two miles to the north.',
    },
    {
      label: 'Ninth Corps strength',
      value:
        'About 12,500 in the episode; close to 12,000 in NPS interpretation',
      note: 'Terrain prevented more than a small part of the corps from approaching the narrow bridge at once.',
    },
    {
      label: 'Lower Bridge dimensions',
      value: 'Three stone arches, about 125 feet long and 12 feet wide',
      note: 'The Rohrbach Bridge carried the road from Rohrersville toward Sharpsburg. It became known as Burnside Bridge after the battle.',
    },
    {
      label: 'Confederate terrain advantage',
      value:
        'Steep west bank, quarry cuts, woods, stone walls, and flanking fire',
      note: 'The east-bank approach ran nearly parallel to Confederate positions before turning onto the bridge, exposing Federal troops at short range.',
    },
    {
      label: 'Bridge defenders',
      value: 'About 400 in the episode; fewer than 500 in NPS interpretation',
      note: 'The 2nd and 20th Georgia of Robert Toombs’s brigade held the immediate crossing under Col. Henry L. Benning. The episode emphasizes Benning; the NPS identifies Toombs as the brigade commander.',
    },
    {
      label: 'Confederate support at the bridge',
      value: 'Five batteries in the episode',
      note: 'Confederate guns occupied higher ground behind the infantry. NPS interpretation describes a layered defense with artillery and the rest of David R. Jones’s division farther west.',
    },
    {
      label: 'Federal bridge plan',
      value: 'Frontal pressure plus a downstream flank crossing',
      note: 'The 11th Connecticut and Crook’s brigade were to press the bridge while Rodman’s division and Ewing’s brigade moved downstream. Two other divisions would exploit a successful crossing.',
    },
    {
      label: 'First bridge attack',
      value: '11th Connecticut and Crook’s brigade at about 10:00 a.m.',
      note: 'The 11th Connecticut advanced along the creek. Crook misunderstood his role and reached a position roughly 300 to 350 yards upstream, where his brigade was pinned down.',
    },
    {
      label: '11th Connecticut loss',
      value: 'About one-third of the regiment killed or wounded',
      note: 'Capt. John D. Griswold was killed while attempting to cross the creek, and Col. Henry W. Kingsbury was hit four times and mortally wounded.',
    },
    {
      label: 'Rodman’s assigned force',
      value: 'About 3,200 men',
      note: 'Rodman’s division and Ewing’s brigade found the engineers’ proposed crossing impracticable, then had to march farther downstream after Snavely’s Ford was located.',
    },
    {
      label: 'Reconnaissance failure',
      value: 'The usable downstream ford was not located in advance',
      note: 'Local civilians had reported Snavely’s Ford, but the Ninth Corps did not establish its location before the attack. The resulting delay prevented the flanking column from supporting the first two bridge assaults.',
    },
    {
      label: 'Second bridge attack',
      value: 'Nagle’s brigade at about 11:00 a.m.',
      note: 'Nagle sent the 2nd Maryland and 6th New Hampshire along the Rohrersville Road while the 48th Pennsylvania and 9th New Hampshire supplied covering fire from higher ground.',
    },
    {
      label: '2nd Maryland repulse',
      value: '45 percent casualties in about ninety seconds in the episode',
      note: 'The regiment advanced roughly 250 yards along the exposed road under infantry and artillery fire, then broke off the charge before reaching the bridge.',
    },
    {
      label: 'Richardson’s division',
      value: 'About 4,000 II Corps veterans in the episode',
      note: 'Richardson arrived after French’s three brigades had been stopped and formed on French’s left rather than moving toward Greene’s earlier foothold near the Dunker Church.',
    },
    {
      label: 'Confederate reserve committed',
      value: 'About 3,400 men in Richard H. Anderson’s division in the episode',
      note: 'Anderson’s division was Lee’s last available battlefield reserve apart from A. P. Hill’s division, which was still marching from Harpers Ferry.',
    },
    {
      label: 'Irish Brigade',
      value: '63rd, 69th, and 88th New York; 29th Massachusetts',
      note: 'Brig. Gen. Thomas Francis Meagher led Richardson’s first attack. The automated transcript repeatedly renders his surname as “Marr.”',
    },
    {
      label: 'Irish Brigade losses',
      value:
        'More than 500 of roughly 1,200 killed or wounded in NPS interpretation',
      note: 'The episode describes more than half the brigade falling in minutes. NPS figures give the 69th New York 196 killed or wounded out of 317 and the 63rd New York a 59 percent loss.',
    },
    {
      label: 'Father William Corby',
      value: 'Gave absolution as the Irish Brigade prepared to attack',
      note: 'Corby was chaplain of the 88th New York. The episode places him moving along the brigade front before Meagher ordered the advance.',
    },
    {
      label: 'Caldwell’s brigade',
      value: 'The fresh Federal line that replaced Meagher and extended east',
      note: 'Richardson followed the Irish Brigade with Col. John C. Caldwell’s brigade, increasing pressure on the eastern section of the Sunken Road.',
    },
    {
      label: 'Barlow’s enfilade',
      value: '61st and 64th New York fired west along the road',
      note: 'Col. Francis C. Barlow moved his two understrength regiments to a knoll that exposed the shallow bend and the right of Rodes’s line to fire from the flank.',
    },
    {
      label: 'Richard H. Anderson wounded',
      value: 'Division command passed to Brig. Gen. Roger A. Pryor',
      note: 'Anderson was badly wounded soon after reaching the sector. Pryor did not know Anderson’s orders, and the arriving brigades lacked effective division-level direction.',
    },
    {
      label: 'George B. Anderson mortally wounded',
      value: 'An ankle wound led to his death on October 16, 1862',
      note: 'The North Carolina brigade commander was carried from the field, later underwent amputation, and died after infection developed.',
    },
    {
      label: 'Charles C. Tew',
      value: '2nd North Carolina colonel killed in the road',
      note: 'The automated transcript renders his surname as “II.” He succeeded George B. Anderson in brigade command and was killed during the collapse.',
    },
    {
      label: 'Posey’s counterattack',
      value: 'Repulsed north of the Sunken Road',
      note: 'Col. Carnot Posey advanced his arriving Mississippi brigade into the crowded sector. Its retreat spread confusion through the right side of the Confederate position.',
    },
    {
      label: 'Rodes’s mistaken order',
      value: 'A flank adjustment became a brigade retreat',
      note: 'Rodes ordered Lt. Col. James N. Lightfoot to refuse the 6th Alabama’s exposed right. Lightfoot instead ordered the regiment to about-face and march to the rear, and the movement spread to the rest of the brigade.',
    },
    {
      label: 'John B. Gordon',
      value: 'Wounded five times and survived',
      note: 'The 6th Alabama colonel fell before the order error. His wounds removed an experienced regimental commander at the point under Barlow’s enfilading fire.',
    },
    {
      label: 'Confederate center breached',
      value: 'Federal troops crossed the road into the Piper cornfield',
      note: 'The 2nd and 14th North Carolina made a final stand but were hit from two directions. The defenders withdrew toward the Piper farm, leaving the center temporarily open.',
    },
    {
      label: 'Cook’s counterstroke',
      value: '675 men in the episode; more than half lost',
      note: 'Col. John R. Cook brought the 27th North Carolina and 3rd Arkansas southeast from the West Woods area against the Federal right. Brooke shifted his brigade west and stopped the attack.',
    },
    {
      label: 'Recommended book',
      value: '“The Gleam of Bayonets” by James V. Murfin',
      note: 'The full subtitle is “The Battle of Antietam and Robert E. Lee’s Maryland Campaign, September 1862.” The author’s surname is spelled Murfin, not “Murphin.”',
    },
    {
      label: 'Transcript normalizations',
      value:
        'Meagher, Rodes, Tew, Nagle, Griswold, Pry House, and enfilading fire',
      note: 'The automated transcript produces “Marr,” “Rhodes,” “Charles II,” “Nagel,” “Griswald,” “pry house,” and “inflating fire.” This guide uses the historical forms.',
    },
  ],
  maps: [
    {
      title: 'The first two attacks at the Lower Bridge',
      caption:
        'The 11th Connecticut moved along the creek while Crook’s brigade stopped upstream. Rodman and Ewing searched downstream for a usable crossing. At about 11:00 a.m., Nagle’s brigade used the exposed Rohrersville Road for the second attack. Benning directed the 2nd and 20th Georgia at the bridge within Toombs’s broader command. Positions and routes are generalized. This map is schematic and not to scale.',
      source:
        'Antietam National Battlefield Union Advance Trail, Official Reports, Antietam Battlefield Board atlas, and episode transcript; see sources below.',
      image: '/images/ep197-lower-bridge-first-assaults.svg',
      alt: 'Schematic map of the 11th Connecticut, Crook, Nagle, and Rodman operating against the Confederate defense of the Lower Bridge.',
    },
    {
      title: 'Richardson breaks the Sunken Road line',
      caption:
        'Meagher attacked first, Caldwell extended the Federal line east, and Barlow reached a knoll that allowed his men to fire west along the road. Posey’s repulse disrupted the Confederate right, while the misunderstood order in Rodes’s brigade accelerated the collapse on the left. Brooke turned west to stop Cook’s separate attack. Sequential actions are combined, and positions are generalized. This map is schematic and not to scale.',
      source:
        'Antietam National Battlefield Bloody Lane Trail, Official Reports, Antietam Battlefield Board atlas, and episode transcript; see sources below.',
      image: '/images/ep197-sunken-road-breakthrough.svg',
      alt: 'Schematic map showing Meagher and Caldwell attacking the Sunken Road, Barlow firing along it, the Confederate retreat, and Brooke repulsing Cook.',
    },
    {
      title: 'The Lower Bridge after the battle',
      caption:
        'Alexander Gardner photographed the three-arch stone bridge from the southeast in September 1862. The bridge carried the narrow road that constrained the Federal assaults described in the episode.',
      source:
        'Library of Congress Prints and Photographs Division; see sources below.',
      image: '/images/ep197-burnside-bridge.jpg',
      alt: 'Alexander Gardner photograph of the Lower Bridge over Antietam Creek in September 1862.',
    },
  ],
  moments: [
    {
      time: '1:12',
      audioTime: 72,
      title: 'French’s attack is recapped',
      detail:
        'The episode begins after French’s division has been stopped short of the Sunken Road with heavy losses.',
    },
    {
      time: '1:26',
      audioTime: 86,
      title: 'Richardson reaches the center',
      detail:
        'His approximately 4,000 II Corps veterans arrive after French rather than in a coordinated attack with him.',
    },
    {
      time: '2:15',
      audioTime: 135,
      title: 'Richardson moves toward French',
      detail:
        'Without higher direction, he advances south to support the battered Federal line opposite the Sunken Road.',
    },
    {
      time: '2:23',
      audioTime: 143,
      title: 'Gunfire begins at the Lower Bridge',
      detail:
        'The episode shifts to the Ninth Corps operation on the southern end of the battlefield.',
    },
    {
      time: '2:43',
      audioTime: 163,
      title: 'McClellan’s attack order reaches Burnside',
      detail:
        'A courier arrives shortly before 10:00 a.m. with orders to attack the Lower Bridge.',
    },
    {
      time: '2:53',
      audioTime: 173,
      title: 'Burnside passes the order to Cox',
      detail:
        'Burnside remains above the corps structure while Brig. Gen. Jacob D. Cox exercises immediate corps command.',
    },
    {
      time: '3:02',
      audioTime: 182,
      title: 'Crook receives the frontal role',
      detail:
        'The plan assigns Crook’s Kanawha brigade to press the crossing while the 11th Connecticut opens the approach.',
    },
    {
      time: '3:27',
      audioTime: 207,
      title: 'Rodman begins the flanking movement',
      detail:
        'Rodman’s division and Ewing’s brigade move downstream toward a crossing reported by army engineers.',
    },
    {
      time: '4:04',
      audioTime: 244,
      title: 'The bridge approach is described',
      detail:
        'The road parallels the creek before making a sharp turn onto the bridge, exposing troops to fire from the west bank.',
    },
    {
      time: '4:34',
      audioTime: 274,
      title: 'The stone bridge forms a bottleneck',
      detail:
        'The episode gives the span as 125 feet long and 12 feet wide, with steep ground on both sides of the creek.',
    },
    {
      time: '5:18',
      audioTime: 318,
      title: 'The immediate defenders are identified',
      detail:
        'The 2nd and 20th Georgia hold the bridge sector under Henry L. Benning within Robert Toombs’s brigade.',
    },
    {
      time: '5:40',
      audioTime: 340,
      title: 'Confederate artillery supports the bridge',
      detail:
        'Five batteries in the episode occupy higher ground behind infantry in quarry cuts and behind a stone wall.',
    },
    {
      time: '6:14',
      audioTime: 374,
      title: 'The diversion is four hours late',
      detail:
        'By the time the Ninth Corps attacks, the northern fighting has already allowed Lee to shift troops away from his right.',
    },
    {
      time: '7:30',
      audioTime: 450,
      title: 'Reconnaissance failures affect the plan',
      detail:
        'The Ninth Corps has not prepared the downstream column or adequately identified a usable ford before receiving the order.',
    },
    {
      time: '7:52',
      audioTime: 472,
      title: 'The 11th Connecticut advances alone',
      detail:
        'The regiment’s skirmish line moves toward the creek without the intended coordinated support.',
    },
    {
      time: '8:06',
      audioTime: 486,
      title: 'Griswold attempts to cross the creek',
      detail:
        'Capt. John D. Griswold leads a company into the water and is killed during the attempt.',
    },
    {
      time: '8:13',
      audioTime: 493,
      title: 'Kingsbury is mortally wounded',
      detail:
        'The 11th Connecticut’s colonel receives four wounds and dies the following day.',
    },
    {
      time: '8:22',
      audioTime: 502,
      title: 'Crook stops upstream',
      detail:
        'His brigade reaches a position roughly 300 to 350 yards north of the bridge and exchanges fire across the creek.',
    },
    {
      time: '8:38',
      audioTime: 518,
      title: 'Rodman’s assigned crossing proves unusable',
      detail:
        'Rocky footing and high banks prevent the flanking column from crossing where the engineers directed it.',
    },
    {
      time: '9:24',
      audioTime: 564,
      title: 'Snavely’s Ford is located late',
      detail:
        'Rodman must make a longer march downstream before his 3,200-man force can enter the action.',
    },
    {
      time: '9:45',
      audioTime: 585,
      title: 'A second bridge attack is ordered',
      detail:
        'Burnside and Cox commit Nagle’s brigade while they wait for progress from Rodman.',
    },
    {
      time: '10:38',
      audioTime: 638,
      title: 'The 2nd Maryland charges along the road',
      detail:
        'The leading regiment advances about 250 yards toward the bridge under close flanking fire.',
    },
    {
      time: '10:50',
      audioTime: 650,
      title: 'The second attack is repulsed',
      detail:
        'After losing 45 percent of its strength in the episode’s estimate, the 2nd Maryland breaks for cover.',
    },
    {
      time: '11:02',
      audioTime: 662,
      title: 'McClellan receives a failure report',
      detail:
        'At about 11:00 a.m., an observer reports that the bridge attacks have been driven back.',
    },
    {
      time: '12:30',
      audioTime: 750,
      title: 'Headquarters presses Burnside',
      detail:
        'McClellan sends repeated messengers after reports from the northern and central fighting reach the Pry House.',
    },
    {
      time: '13:00',
      audioTime: 780,
      title: 'The episode returns to the Sunken Road',
      detail:
        'Richardson’s division enters the fight as the first bridge attacks end in failure.',
    },
    {
      time: '13:16',
      audioTime: 796,
      title: 'Richard H. Anderson reinforces Hill',
      detail:
        'Lee commits his last available battlefield reserve apart from A. P. Hill’s division marching from Harpers Ferry.',
    },
    {
      time: '14:00',
      audioTime: 840,
      title: 'The Irish Brigade goes forward',
      detail:
        'Thomas Francis Meagher leads Richardson’s first brigade attack under its green flags.',
    },
    {
      time: '14:53',
      audioTime: 893,
      title: 'Father Corby gives absolution',
      detail:
        'The 88th New York chaplain moves along the front before the brigade attacks.',
    },
    {
      time: '15:04',
      audioTime: 904,
      title: 'Meagher attacks the Sunken Road',
      detail:
        'The Irish Brigade crosses the open slope and meets close-range fire from Hill’s protected line.',
    },
    {
      time: '15:19',
      audioTime: 919,
      title: 'The Irish Brigade suffers severe losses',
      detail:
        'The episode states that more than half the brigade is hit before the survivors take cover near the crest.',
    },
    {
      time: '15:41',
      audioTime: 941,
      title: 'Caldwell replaces Meagher',
      detail:
        'Richardson commits Caldwell’s brigade on the left and continues extending the Federal line eastward.',
    },
    {
      time: '15:59',
      audioTime: 959,
      title: 'Richardson joins the firing line',
      detail:
        'He advances on foot behind his troops and directs the attack close to the front.',
    },
    {
      time: '16:59',
      audioTime: 1019,
      title: 'Anderson’s reinforcements cross exposed ground',
      detail:
        'The Piper farm slope leaves the arriving Confederates visible to Federal infantry and artillery.',
    },
    {
      time: '17:34',
      audioTime: 1054,
      title: 'Richard H. Anderson is wounded',
      detail:
        'He falls soon after reaching the sector, and Roger A. Pryor succeeds to division command.',
    },
    {
      time: '18:51',
      audioTime: 1131,
      title: 'George B. Anderson is mortally wounded',
      detail:
        'The North Carolina brigade commander suffers a shattered ankle, further disrupting command on the Confederate right.',
    },
    {
      time: '19:35',
      audioTime: 1175,
      title: 'Posey attacks from the crowded road',
      detail:
        'His arriving Mississippi brigade advances north, is repulsed, and falls back into the Confederate position.',
    },
    {
      time: '20:06',
      audioTime: 1206,
      title: 'Posey’s withdrawal spreads',
      detail:
        'An attempt to remove only Posey’s troops is interpreted more broadly, and Confederates begin leaving the road.',
    },
    {
      time: '21:21',
      audioTime: 1281,
      title: 'Barlow reaches the enfilading position',
      detail:
        'The 61st and 64th New York gain a knoll and fire west down the exposed section of the road.',
    },
    {
      time: '21:50',
      audioTime: 1310,
      title: 'Gordon falls with his fifth wound',
      detail:
        'The 6th Alabama loses its colonel while Barlow’s fire strikes the right of Rodes’s brigade.',
    },
    {
      time: '22:07',
      audioTime: 1327,
      title: 'Rodes orders the right flank refused',
      detail:
        'He directs Lightfoot to bend the 6th Alabama back to face the enfilading threat.',
    },
    {
      time: '22:19',
      audioTime: 1339,
      title: 'Lightfoot gives a retreat command',
      detail:
        'The intended flank adjustment becomes an about-face and rearward march that spreads through Rodes’s brigade.',
    },
    {
      time: '22:57',
      audioTime: 1377,
      title: 'Lee’s center opens',
      detail:
        'The retreats from both ends of the road leave the Confederate central position broken.',
    },
    {
      time: '23:08',
      audioTime: 1388,
      title: 'II Corps charges into the road',
      detail:
        'Federal troops leave the crest and overwhelm the final stand by the 2nd and 14th North Carolina.',
    },
    {
      time: '23:45',
      audioTime: 1425,
      title: 'Tew is found mortally hit',
      detail:
        'Col. Charles C. Tew of the 2nd North Carolina dies in the road during the brigade’s collapse.',
    },
    {
      time: '24:17',
      audioTime: 1457,
      title: 'Cook threatens the Federal right',
      detail:
        'The 27th North Carolina and 3rd Arkansas advance from the West Woods area toward the Sunken Road fight.',
    },
    {
      time: '26:11',
      audioTime: 1571,
      title: 'Brooke stops Cook',
      detail:
        'Brooke shifts Richardson’s third brigade west and forces Cook’s two regiments back after losses exceeding half their force in the episode.',
    },
    {
      time: '26:35',
      audioTime: 1595,
      title: 'Richardson drives into the Piper cornfield',
      detail:
        'He pushes troops from both his own and French’s divisions beyond the captured road.',
    },
    {
      time: '27:31',
      audioTime: 1651,
      title: 'McClellan observes the breakthrough',
      detail:
        'From the Pry House area, McClellan and his staff can see that the Confederate center has been pierced.',
    },
    {
      time: '28:00',
      audioTime: 1680,
      title: 'The book recommendation begins',
      detail: 'The hosts recommend James V. Murfin’s “The Gleam of Bayonets.”',
    },
  ],
  command: [
    {
      side: 'United States',
      color: '#315f8c',
      branches: [
        {
          commander: 'Maj. Gen. George B. McClellan',
          command: 'Army of the Potomac',
          subordinates:
            'Released Richardson’s division and ordered the Ninth Corps to attack; remained at the Pry House during the actions covered',
        },
        {
          commander: 'Maj. Gen. Ambrose E. Burnside',
          command:
            'Right Wing headquarters and effective control of the Ninth Corps',
          subordinates:
            'Received McClellan’s order and passed it to Cox while continuing to exercise authority over the corps',
        },
        {
          commander: 'Brig. Gen. Jacob D. Cox',
          command: 'Ninth Corps',
          subordinates:
            'Directed the bridge operation under Burnside; the unusual command arrangement divided responsibility at corps headquarters',
        },
        {
          commander: 'Brig. Gen. Samuel D. Sturgis',
          command: '2nd Division, Ninth Corps',
          subordinates:
            'Sent Nagle’s brigade into the second bridge attack and supervised the division’s artillery support',
        },
        {
          commander: 'Brig. Gen. James Nagle',
          command: '1st Brigade, Sturgis’s division',
          subordinates:
            'Used the 2nd Maryland and 6th New Hampshire for the road assault while two other regiments supplied covering fire',
        },
        {
          commander: 'Col. George Crook',
          command: '1st Brigade, Kanawha Division',
          subordinates:
            'Was intended to support the first bridge attack but reached a position roughly 300 to 350 yards upstream',
        },
        {
          commander: 'Brig. Gen. Isaac P. Rodman',
          command: '3rd Division, Ninth Corps, reinforced by Ewing’s brigade',
          subordinates:
            'Led about 3,200 men downstream after the assigned crossing failed, delaying the planned flank attack',
        },
        {
          commander: 'Maj. Gen. Israel B. Richardson',
          command: '1st Division, II Corps',
          subordinates:
            'Renewed the attack on the Sunken Road with the brigades of Meagher, Caldwell, and Brooke and led the advance into the Piper cornfield',
        },
        {
          commander: 'Brig. Gen. Thomas Francis Meagher',
          command: '2nd Brigade, Richardson’s division',
          subordinates:
            'Led the Irish Brigade in the first attack by Richardson’s division and suffered severe losses',
        },
        {
          commander: 'Col. John C. Caldwell',
          command: '1st Brigade, Richardson’s division',
          subordinates:
            'Replaced Meagher in the front line and extended the attack east along the Sunken Road',
        },
        {
          commander: 'Col. Francis C. Barlow',
          command: '61st and 64th New York, Caldwell’s brigade',
          subordinates:
            'Moved his two regiments to a knoll where they could fire along the Confederate line from the flank',
        },
        {
          commander: 'Col. John R. Brooke',
          command: '3rd Brigade, Richardson’s division',
          subordinates:
            'Shifted west to stop Cook’s counterattack against the Federal right after the road had fallen',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#963b31',
      branches: [
        {
          commander: 'Gen. Robert E. Lee',
          command: 'Army of Northern Virginia',
          subordinates:
            'Had shifted troops away from the right and committed Richard H. Anderson’s division, his last available battlefield reserve, to the center',
        },
        {
          commander: 'Maj. Gen. James Longstreet',
          command: 'Right Wing',
          subordinates:
            'Oversaw both D. R. Jones on the southern flank and the reinforcements sent into the center; ordered Cook’s counterstroke',
        },
        {
          commander: 'Brig. Gen. David R. Jones',
          command: 'Jones’s division, Confederate right',
          subordinates:
            'Held the southern sector with a layered defense and assigned Toombs’s brigade to cover the bridge and creek crossings',
        },
        {
          commander: 'Brig. Gen. Robert A. Toombs and Col. Henry L. Benning',
          command: 'Toombs’s brigade at the Lower Bridge',
          subordinates:
            'Toombs commanded the brigade; Benning directed the 2nd and 20th Georgia in the immediate bridge defense',
        },
        {
          commander: 'Maj. Gen. D. H. Hill',
          command: 'Hill’s division and the Sunken Road defense',
          subordinates:
            'Held Lee’s center with Rodes and George B. Anderson while reinforcements entered the Piper farm sector',
        },
        {
          commander: 'Maj. Gen. Richard H. Anderson',
          command: 'Anderson’s division, Longstreet’s wing',
          subordinates:
            'Brought about 3,400 reinforcements toward the Sunken Road in the episode and was badly wounded on arrival',
        },
        {
          commander: 'Brig. Gen. Roger A. Pryor',
          command: 'Anderson’s division after Anderson was wounded',
          subordinates:
            'Succeeded without a clear understanding of Anderson’s orders, leaving the arriving brigades without effective coordination',
        },
        {
          commander: 'Brig. Gen. George B. Anderson and Col. Charles C. Tew',
          command: 'Anderson’s North Carolina brigade, Hill’s division',
          subordinates:
            'Both were mortally wounded as the brigade held the eastern and deepest part of the Sunken Road',
        },
        {
          commander: 'Brig. Gen. Robert E. Rodes',
          command: 'Rodes’s brigade, Hill’s division',
          subordinates:
            'Held five Alabama regiments west of the bend until enfilading fire and a misunderstood order caused the brigade to retreat',
        },
        {
          commander: 'Col. John B. Gordon',
          command: '6th Alabama, Rodes’s brigade',
          subordinates:
            'Commanded the regiment at the exposed right of Rodes’s line until receiving his fifth wound of the day',
        },
        {
          commander: 'Col. Carnot Posey',
          command: 'Posey’s brigade, R. H. Anderson’s division',
          subordinates:
            'Made a failed counterattack from the crowded road; his brigade’s withdrawal helped trigger a broader collapse',
        },
        {
          commander: 'Col. John R. Cook',
          command: '27th North Carolina and 3rd Arkansas',
          subordinates:
            'Advanced from the West Woods area against the Federal right and was repulsed by Brooke',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Israel B. Richardson',
      role: 'II Corps division commander who broke the Sunken Road position and led the advance into the Piper cornfield',
      side: 'United States',
      image: '/images/ep197-israel-richardson.jpg',
      source: 'https://www.loc.gov/item/2018666480/',
    },
    {
      name: 'Ambrose E. Burnside',
      role: 'Wing commander who retained effective control of the Ninth Corps during its attacks on the Lower Bridge',
      side: 'United States',
      source:
        'https://www.nps.gov/articles/000/from-the-peninsula-to-maryland-burnside-s-role-in-the-summer-of-1862.htm',
    },
    {
      name: 'Jacob D. Cox',
      role: 'Immediate Ninth Corps commander under Burnside during the bridge operation',
      side: 'United States',
      source: 'https://antietam.aotw.org/officers.php?unit_id=17',
    },
    {
      name: 'Henry W. Kingsbury',
      role: 'Colonel of the 11th Connecticut, mortally wounded while leading the first bridge attack',
      side: 'United States',
      source:
        'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-stop-3.htm',
    },
    {
      name: 'Isaac P. Rodman',
      role: 'Division commander who led the delayed flanking movement downstream toward Snavely’s Ford',
      side: 'United States',
      source:
        'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-stop-1.htm',
    },
    {
      name: 'Thomas Francis Meagher',
      role: 'Commander of the Irish Brigade in Richardson’s first attack on the Sunken Road',
      side: 'United States',
      source:
        'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail-stop-4.htm',
    },
    {
      name: 'Francis C. Barlow',
      role: 'Colonel who placed the 61st and 64th New York to enfilade the eastern section of the Sunken Road',
      side: 'United States',
    },
    {
      name: 'Robert A. Toombs',
      role: 'Confederate brigade commander responsible for the infantry defending the Lower Bridge and nearby crossings',
      side: 'Confederacy',
      source:
        'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-background.htm',
    },
    {
      name: 'Henry L. Benning',
      role: 'Colonel who directed the 2nd and 20th Georgia in the immediate bridge defense',
      side: 'Confederacy',
      source:
        'https://www.nps.gov/anti/learn/photosmultimedia/tour-stop-8-the-burnside-bridge.htm',
    },
    {
      name: 'Richard H. Anderson',
      role: 'Commander of Lee’s last available battlefield reserve, badly wounded as his division reached the center',
      side: 'Confederacy',
    },
    {
      name: 'George B. Anderson',
      role: 'North Carolina brigade commander in the Sunken Road, mortally wounded during the fighting',
      side: 'Confederacy',
      source:
        'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail-stop-5.htm',
    },
    {
      name: 'Charles C. Tew',
      role: 'Colonel of the 2nd North Carolina, killed after succeeding to command of George B. Anderson’s brigade',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Rodes',
      role: 'Alabama brigade commander whose line collapsed after Barlow’s enfilade and a misunderstood order',
      side: 'Confederacy',
      source: 'https://antietam.aotw.org/officers.php?officer_id=112',
    },
    {
      name: 'John B. Gordon',
      role: 'Colonel of the 6th Alabama, wounded five times while holding the bend in the Sunken Road',
      side: 'Confederacy',
      source:
        'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail-stop-5.htm',
    },
  ],
  losses: [
    {
      name: 'Col. Henry W. Kingsbury',
      side: 'United States',
      role: 'Commander of the 11th Connecticut',
      outcome:
        'Hit in the heel, leg, shoulder, and abdomen while leading the first attack near the Lower Bridge. He was carried to the Rohrbach farm and died on September 18, 1862.',
    },
    {
      name: 'Capt. John D. Griswold',
      side: 'United States',
      role: 'Company D, 11th Connecticut',
      outcome:
        'Killed while attempting to lead his company across Antietam Creek during the first bridge attack.',
    },
    {
      name: 'Maj. Gen. Richard H. Anderson',
      side: 'Confederacy',
      role: 'Commander of Anderson’s division',
      outcome:
        'Badly wounded soon after reaching the Sunken Road sector. He survived, but his removal left Roger A. Pryor in command during the collapse.',
    },
    {
      name: 'Brig. Gen. George B. Anderson',
      side: 'Confederacy',
      role: 'Commander of Anderson’s brigade, Hill’s division',
      outcome:
        'Mortally wounded in the ankle. Infection followed an amputation, and he died in Raleigh, North Carolina, on October 16, 1862.',
    },
    {
      name: 'Col. Charles C. Tew',
      side: 'Confederacy',
      role: 'Commander of the 2nd North Carolina and successor to George B. Anderson',
      outcome:
        'Killed in the Sunken Road during the final collapse. The automated transcript renders his name as “Charles II.”',
    },
    {
      name: 'Col. John B. Gordon',
      side: 'Confederacy',
      role: 'Commander of the 6th Alabama',
      outcome:
        'Received his fifth wound of the day at the Sunken Road. He survived and returned to military service in 1863.',
    },
  ],
  gallery: [
    {
      image: '/images/ep197-lower-bridge-first-assaults.svg',
      alt: 'Schematic map of the first two Federal attacks on the Lower Bridge and the delayed downstream flanking movement.',
      caption:
        'The bridge approach exposed small Federal assault columns to short-range fire while Crook stopped upstream and Rodman searched downstream for a crossing.',
      source:
        'Antietam National Battlefield, Official Reports, Antietam Battlefield Board atlas, and episode transcript.',
    },
    {
      image: '/images/ep197-sunken-road-breakthrough.svg',
      alt: 'Schematic tactical map of Richardson’s attack and the collapse of the Confederate Sunken Road position.',
      caption:
        'Caldwell’s extension and Barlow’s enfilading fire coincided with command losses, Posey’s failed counterattack, and the mistaken withdrawal of Rodes’s brigade.',
      source:
        'Antietam National Battlefield, Official Reports, Antietam Battlefield Board atlas, and episode transcript.',
    },
    {
      image: '/images/ep197-burnside-bridge.jpg',
      alt: 'Alexander Gardner photograph of the Lower Bridge over Antietam Creek shortly after the battle.',
      caption:
        'Gardner’s September 1862 view records the narrow stone span and steep creek banks that shaped the Ninth Corps attacks.',
      source: 'Library of Congress Prints and Photographs Division.',
    },
    {
      image: '/images/ep197-israel-richardson.jpg',
      alt: 'Portrait of United States major general Israel Bush Richardson in uniform.',
      caption:
        'Israel B. Richardson personally directed his division at the front and pressed the breakthrough beyond the Sunken Road.',
      source: 'Library of Congress Prints and Photographs Division.',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 197 page',
      url: 'https://civilwarpodcast.org/2017/05/29/civil-war-podcast-episode-197/',
    },
    {
      label: 'Antietam National Battlefield: Union Advance Trail background',
      url: 'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-background.htm',
    },
    {
      label: 'Antietam National Battlefield: Union plan and organization',
      url: 'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-stop-1.htm',
    },
    {
      label: 'Antietam National Battlefield: first and second bridge attacks',
      url: 'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-stop-2.htm',
    },
    {
      label:
        'Antietam National Battlefield: 11th Connecticut and Henry Kingsbury',
      url: 'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-stop-3.htm',
    },
    {
      label: 'Antietam National Battlefield: Nagle’s bridge attack',
      url: 'https://www.nps.gov/anti/planyourvisit/union-advance-trail-guide-stop-4.htm',
    },
    {
      label: 'Antietam National Battlefield: Burnside Bridge',
      url: 'https://www.nps.gov/anti/learn/photosmultimedia/tour-stop-8-the-burnside-bridge.htm',
    },
    {
      label: 'Antietam National Battlefield: Burnside attack timeline',
      url: 'https://www.nps.gov/anti/planyourvisit/final-attack-trail-timeline-and-organization.htm',
    },
    {
      label: 'Antietam National Battlefield: Bloody Lane Trail overview',
      url: 'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail.htm',
    },
    {
      label: 'Antietam National Battlefield: Richardson and the Irish Brigade',
      url: 'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail-stop-4.htm',
    },
    {
      label:
        'Antietam National Battlefield: collapse of the Sunken Road position',
      url: 'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail-stop-5.htm',
    },
    {
      label:
        'Antietam National Battlefield: Tompkins’s battery and Thomas Livermore account',
      url: 'https://www.nps.gov/anti/planyourvisit/bloody-lane-trail-stop-7.htm',
    },
    {
      label: 'Official Records, Series I, Volume XIX, Part I',
      url: 'https://ehistory.osu.edu/books/official-records/027',
    },
    {
      label: 'Primary source: Robert E. Rodes’s official report',
      url: 'https://antietam.aotw.org/exhibit.php?exhibit_id=74',
    },
    {
      label: 'Library of Congress: Atlas of the battlefield of Antietam',
      url: 'https://www.loc.gov/item/map05000006/',
    },
    {
      label:
        'Library of Congress: Gardner’s southeast view of the Lower Bridge',
      url: 'https://www.loc.gov/item/2018671859/',
    },
    {
      label: 'Library of Congress: portrait of Israel B. Richardson',
      url: 'https://www.loc.gov/item/2018666480/',
    },
    {
      label: 'Official podcast book-recommendations list',
      url: 'https://civilwarpodcast.org/book-recommendations/',
    },
  ],
} satisfies Enrichment;
