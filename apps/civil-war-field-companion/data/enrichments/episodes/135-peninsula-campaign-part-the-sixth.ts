import type { Enrichment } from '../types';

export const enrichment = {
  date: 'May 18–30, 1862',
  place:
    'White House Landing, the Chickahominy River approaches east and northeast of Richmond, and Hanover Court House, Virginia',
  result:
    'McClellan kept White House Landing as his base and advanced along the Richmond and York River Railroad, leaving three corps north of the Chickahominy and two south of it. Lincoln suspended McDowell’s expected march from Fredericksburg after Jackson’s victories in the Shenandoah Valley. Porter defeated Branch at Hanover Court House on May 27, but the intended junction with McDowell did not occur. Johnston then abandoned a proposed attack near Mechanicsville and prepared to strike the more isolated United States wing near Seven Pines and Fair Oaks on May 31',
  facts: [
    {
      label: 'Army of the Potomac base',
      value: 'White House Landing on the Pamunkey River',
      note: 'The nearby Richmond and York River Railroad connected the supply base to McClellan’s advance toward Richmond.',
    },
    {
      label: 'Chosen approach',
      value: 'From the east along the railroad',
      note: 'The episode argues that moving heavy siege artillery by rail influenced McClellan’s choice. That motive is an interpretation; McClellan later emphasized the expected junction with McDowell.',
    },
    {
      label: 'Alternative approach',
      value:
        'Shift the army to the James River and approach Richmond from the south',
      note: 'Lincoln and Confederate leaders recognized this possibility after United States naval forces gained access to the James as far as Drewry’s Bluff.',
    },
    {
      label: 'Expected reinforcements',
      value: 'About 40,000 under Irvin McDowell and James Shields',
      note: 'The episode’s estimate combines the forces expected to move from the Fredericksburg direction.',
    },
    {
      label: 'Reinforcement order',
      value: 'Suspended May 24',
      note: 'Lincoln redirected McDowell because Jackson’s Valley Campaign threatened United States forces and raised renewed concern for Washington.',
    },
    {
      label: 'United States deployment by May 24',
      value: 'Three corps north of the Chickahominy; two corps south',
      note: 'Porter’s V, Franklin’s VI, and Sumner’s II Corps were north of the river. Keyes’s IV and Heintzelman’s III Corps were south of it.',
    },
    {
      label: 'Frontage north of the river',
      value: 'About 10 miles',
      note: 'The northern wing extended toward Mechanicsville while also covering the railroad and White House Landing.',
    },
    {
      label: 'Chickahominy crossings',
      value: '11 bridges across a 12-mile reach',
      note: 'The episode places the bridges between Bottom’s Bridge and Mechanicsville. Flooded bottomlands required long corduroy approaches beyond the river channel.',
    },
    {
      label: 'Hanover Court House',
      value: 'May 27, 1862 — United States victory',
      note: 'Porter’s force cleared the route toward McDowell and damaged the Virginia Central Railroad, but McDowell did not join McClellan.',
    },
    {
      label: 'Hanover Court House casualties',
      value: 'NPS estimate: 355 United States and 746 Confederate',
      note: 'The episode gives 355 United States killed and wounded, about 200 Confederate killed and wounded, and about 500 Confederates captured. These figures describe similar totals but do not reconcile exactly.',
    },
    {
      label: 'Johnston’s first attack plan',
      value: 'Strike the United States right near Mechanicsville on May 29',
    },
    {
      label: 'Johnston’s revised attack plan',
      value: 'Strike IV and III Corps south of the Chickahominy on May 31',
      note: 'Johnston changed the objective after learning that McDowell was not continuing toward Richmond.',
    },
    {
      label: 'Senior commanders killed or mortally wounded',
      value: 'None identified in the events covered',
      note: 'The episode reports losses at Hanover Court House but does not identify a senior commander killed or mortally wounded there.',
    },
    {
      label: 'Book recommendation',
      value:
        'The Civil War: An Illustrated History by Geoffrey C. Ward, with Ric Burns and Ken Burns',
    },
  ],
  maps: [
    {
      title: 'McClellan’s approach to Richmond',
      caption:
        'This schematic shows the actual supply line from White House Landing along the Richmond and York River Railroad and the alternative James River approach discussed in the episode. It also locates Fredericksburg, Hanover Court House, Richmond, and the Chickahominy crossings. Distances and river courses are simplified.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
      image: '/images/ep135-richmond-approaches.svg',
      alt: 'Schematic map of McClellan’s railroad approach from White House Landing, the alternative James River route, and McDowell’s expected route from Fredericksburg',
    },
    {
      title: 'Hanover Court House, May 27, 1862',
      caption:
        'Porter moved north from Mechanicsville to clear the roads and railroads between McClellan and the expected reinforcements from Fredericksburg. Branch attacked the rear of the United States column near Peake’s Crossing and was driven from the field after Morell concentrated infantry and artillery. The diagram is schematic and does not claim exact unit frontage.',
      source: 'https://www.loc.gov/item/gvhs01.vhs00213/',
      image: '/images/ep135-hanover-court-house.svg',
      alt: 'Schematic tactical map of the May 27 Battle of Hanover Court House showing Porter’s advance and Branch’s attack near Peake’s Crossing',
    },
  ],
  moments: [
    {
      time: '1:09',
      audioTime: 69,
      title: 'The James River is open to Drewry’s Bluff',
      detail:
        'The naval attack of May 15 failed to pass Drewry’s Bluff, but United States control below the obstruction created a possible new base for operations against Richmond.',
    },
    {
      time: '2:05',
      audioTime: 125,
      title: 'Lincoln favors a shift toward the James',
      detail:
        'Lincoln saw the operational opportunity, but McClellan retained the supply line through White House Landing and the railroad.',
    },
    {
      time: '2:16',
      audioTime: 136,
      title: 'White House Landing becomes the main base',
      detail:
        'McClellan moved up the Pamunkey, established a large depot at White House Landing, and used the Richmond and York River Railroad as his axis toward Richmond.',
    },
    {
      time: '3:11',
      audioTime: 191,
      title: 'McClellan keeps the eastern approach',
      detail:
        'An advance from the east required the army to operate on both sides of the Chickahominy. A James River base could have kept more of the army south of that obstacle.',
    },
    {
      time: '4:05',
      audioTime: 245,
      title: 'McDowell must march overland',
      detail:
        'Lincoln required McDowell’s expected reinforcements to move south from Fredericksburg rather than travel by water to White House Landing.',
    },
    {
      time: '5:18',
      audioTime: 318,
      title: 'The episode disputes McClellan’s later explanation',
      detail:
        'The hosts note that McClellan had selected the White House and railroad line before he knew McDowell would approach from the north. They interpret access to the railroad for siege artillery as an important reason for the choice.',
    },
    {
      time: '7:28',
      audioTime: 448,
      title: 'The five-corps deployment takes shape',
      detail:
        'Sumner, Franklin, and Porter extended northwest on the north side of the Chickahominy. Keyes and Heintzelman formed the left wing south of the river.',
    },
    {
      time: '8:39',
      audioTime: 519,
      title: 'The dispositions are complete',
      detail:
        'By May 24, Porter’s extreme right was near Mechanicsville and Keyes’s advance was near Seven Pines, each about six miles from Richmond.',
    },
    {
      time: '8:56',
      audioTime: 536,
      title: 'McDowell is diverted again',
      detail:
        'Jackson’s operations in the Shenandoah Valley led Lincoln and Stanton to suspend the reinforcement movement toward McClellan.',
    },
    {
      time: '9:40',
      audioTime: 580,
      title: 'McClellan protests the diversion',
      detail:
        'McClellan told Stanton that the decisive issue was the expected battle before Richmond. McDowell also objected to the change.',
    },
    {
      time: '10:29',
      audioTime: 629,
      title: 'The Chickahominy becomes a major obstacle',
      detail:
        'A narrow stream in dry weather could spread across broad marshes and wooded bottomlands after rain. The episode states that the river reached its highest level in twenty years in late May.',
    },
    {
      time: '10:58',
      audioTime: 658,
      title: 'Engineers build eleven crossings',
      detail:
        'The army worked on bridges from Bottom’s Bridge to Mechanicsville. Long timber and corduroy approaches were necessary across saturated ground.',
    },
    {
      time: '11:29',
      audioTime: 689,
      title: 'Porter moves toward Hanover Court House',
      detail:
        'On May 27, McClellan sent a reinforced V Corps division north to clear the route for McDowell and damage the Virginia Central Railroad.',
    },
    {
      time: '12:06',
      audioTime: 726,
      title: 'Morell advances behind Berdan’s skirmishers',
      detail:
        'George W. Morell’s division moved with Hiram Berdan’s sharpshooters and supporting artillery against Lawrence O’B. Branch’s North Carolina brigade.',
    },
    {
      time: '12:28',
      audioTime: 748,
      title: 'Branch attacks the United States rear',
      detail:
        'The Confederate attack broke the 25th New York and disabled a battery, but the 14th New York helped stop the advance.',
    },
    {
      time: '12:48',
      audioTime: 768,
      title: 'Morell’s force counterattacks',
      detail:
        'The 9th Massachusetts and 62nd Pennsylvania joined the counterattack, and Branch’s outnumbered command withdrew.',
    },
    {
      time: '13:08',
      audioTime: 788,
      title: 'The episode reports the Hanover losses',
      detail:
        'It gives 355 United States killed and wounded, about 200 Confederate killed and wounded, and about 500 Confederates captured. The NPS estimate is 355 United States and 746 Confederate casualties in all categories.',
    },
    {
      time: '13:20',
      audioTime: 800,
      title: 'The movement alarms Johnston',
      detail:
        'Porter’s advance and a deceptive movement by McDowell convinced Johnston that a large reinforcement column might soon join McClellan.',
    },
    {
      time: '15:00',
      audioTime: 900,
      title: 'Johnston plans to attack near Mechanicsville',
      detail:
        'Believing a junction with McDowell was imminent, Johnston planned to strike the United States right on May 29.',
    },
    {
      time: '15:27',
      audioTime: 927,
      title: 'Johnston changes the objective',
      detail:
        'On the night of May 28, Johnston learned that McDowell was returning toward Fredericksburg. He shifted his planned attack to the two United States corps south of the Chickahominy.',
    },
    {
      time: '16:08',
      audioTime: 968,
      title: 'Reconnaissance finds the left wing exposed',
      detail:
        'On May 30, Confederate scouts found Casey’s IV Corps division near Seven Pines and Fair Oaks with an especially thin right flank and difficult terrain between it and Sumner’s II Corps.',
    },
    {
      time: '17:23',
      audioTime: 1043,
      title: 'Johnston orders the May 31 attack',
      detail:
        'Johnston decided to attack Keyes and Heintzelman before the flooded river and unfinished crossings allowed McClellan to reinforce them from the north bank.',
    },
  ],
  command: [
    {
      side: 'United States',
      color: '#315f8c',
      branches: [
        {
          commander: 'George B. McClellan',
          command: 'Commander, Army of the Potomac',
          subordinates:
            'Directed the advance from White House Landing and placed five corps on both sides of the Chickahominy',
        },
        {
          commander: 'Edwin V. Sumner',
          command: 'Commander, II Corps; north of the Chickahominy',
          subordinates:
            'Israel B. Richardson and John Sedgwick; the nearest large reserve to the exposed Fair Oaks sector',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'Commander, III Corps; south of the Chickahominy',
          subordinates:
            'Joseph Hooker and Philip Kearny; deployed behind and south of Keyes’s advance',
        },
        {
          commander: 'Erasmus D. Keyes',
          command: 'Commander, IV Corps; south of the Chickahominy',
          subordinates:
            'Silas Casey in the forward position and Darius N. Couch in support along the Williamsburg Road',
        },
        {
          commander: 'Fitz John Porter',
          command: 'Commander, V Corps; right wing and Hanover expedition',
          subordinates:
            'George W. Morell’s division and George Sykes’s division; Morell and attached troops fought at Hanover Court House',
        },
        {
          commander: 'William B. Franklin',
          command: 'Commander, VI Corps; north of the Chickahominy',
          subordinates:
            'William F. Smith and Henry W. Slocum; held the center-right portion of the northern wing',
        },
        {
          commander: 'Irvin McDowell',
          command: 'Commander, Department of the Rappahannock',
          subordinates:
            'Expected to march south from Fredericksburg but diverted toward operations against Jackson before joining McClellan',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'Jefferson Davis',
          command: 'President and commander in chief',
          subordinates:
            'Exercised national authority at Richmond and pressed Johnston to state where he intended to defend the capital',
        },
        {
          commander: 'Robert E. Lee',
          command: 'Military adviser to the president',
          subordinates:
            'Advised Davis on Richmond’s defense; he did not yet command Johnston’s field army',
        },
        {
          commander: 'Joseph E. Johnston',
          command: 'Commander, Confederate field army defending Richmond',
          subordinates:
            'James Longstreet, Gustavus W. Smith, D. H. Hill, Benjamin Huger, and John B. Magruder commanded the principal divisions available around Richmond',
        },
        {
          commander: 'Lawrence O’B. Branch',
          command: 'Brigade commander at Hanover Court House',
          subordinates:
            'Commanded North Carolina regiments detached north of Richmond and attacked Porter’s column near Peake’s Crossing',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Selected White House Landing and the railroad as his supply axis and deployed the Army of the Potomac on both sides of the Chickahominy',
      side: 'United States',
    },
    {
      name: 'Fitz John Porter',
      role: 'Commanded V Corps on the army’s right and led the May 27 expedition that defeated Branch near Hanover Court House',
      side: 'United States',
      image: '/images/ep135-fitz-john-porter.jpg',
      source: 'https://www.loc.gov/item/2018667594/',
    },
    {
      name: 'George W. Morell',
      role: 'Commanded the V Corps division that supplied most of the United States infantry at Hanover Court House',
      side: 'United States',
    },
    {
      name: 'Hiram Berdan',
      role: 'Commanded the sharpshooters who screened Morell’s advance; the transcript renders his surname as “Bearden”',
      side: 'United States',
    },
    {
      name: 'Irvin McDowell',
      role: 'Was ordered toward McClellan from Fredericksburg, then diverted before the expected junction occurred',
      side: 'United States',
    },
    {
      name: 'Erasmus D. Keyes',
      role: 'Commanded IV Corps and the forward United States positions south of the Chickahominy near Seven Pines and Fair Oaks',
      side: 'United States',
    },
    {
      name: 'Silas Casey',
      role: 'Commanded the exposed forward division of Keyes’s IV Corps near Seven Pines',
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Commanded the Confederate field army, first planned to attack near Mechanicsville, and then redirected the offensive against the United States left wing',
      side: 'Confederacy',
      image: '/images/ep135-joseph-e-johnston.jpg',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      name: 'Lawrence O’B. Branch',
      role: 'Commanded the outnumbered Confederate brigade defeated by Porter at Hanover Court House',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Lee',
      role: 'Served as Jefferson Davis’s military adviser and shared concern that McClellan might transfer his advance to the James River',
      side: 'Confederacy',
    },
    {
      name: 'Thomas J. “Stonewall” Jackson',
      role: 'Conducted the Valley Campaign that led Lincoln to divert McDowell and prevented further United States concentration before Richmond',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep135-white-house-supply-vessels.jpg',
      alt: 'Supply vessels anchored at White House Landing on the Pamunkey River in 1862',
      caption:
        'Supply vessels at White House Landing. McClellan made this Pamunkey River depot the base for the advance along the Richmond and York River Railroad.',
      source: 'https://www.loc.gov/item/2018666164/',
    },
    {
      image: '/images/ep135-grapevine-bridge.jpg',
      alt: 'Soldiers beside the Grapevine Bridge over the Chickahominy River in 1862',
      caption:
        'The 5th New Hampshire Infantry built the Grapevine Bridge on May 27–28. The photograph documents the improvised crossings on which communication between McClellan’s two wings depended.',
      source: 'https://www.loc.gov/item/2018666171/',
    },
    {
      image: '/images/ep135-fitz-john-porter.jpg',
      alt: 'Fitz John Porter in United States Army uniform during the Civil War era',
      caption:
        'Fitz John Porter commanded V Corps and the expedition to Hanover Court House. The battle cleared the immediate route north but did not produce the planned junction with McDowell.',
      source: 'https://www.loc.gov/item/2018667594/',
    },
    {
      image: '/images/ep135-joseph-e-johnston.jpg',
      alt: 'Portrait of Confederate general Joseph E. Johnston in civilian dress',
      caption:
        'Joseph E. Johnston abandoned his proposed attack near Mechanicsville after learning that McDowell was not approaching Richmond and chose instead to attack the isolated United States wing south of the Chickahominy.',
      source: 'https://www.loc.gov/item/2018666539/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 135 page',
      url: 'https://civilwarpodcast.org/2015/12/13/civil-war-podcast-episode-135/',
    },
    {
      label: 'National Park Service: Hanover Court House battle summary',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va013',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
    },
    {
      label: 'U.S. Army Center of Military History: Civil War campaign summary',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label: 'National Park Service: Jackson’s 1862 Shenandoah Valley Campaign',
      url: 'https://www.nps.gov/articles/000/jackson1862-valley-campaign.htm',
    },
    {
      label:
        'Official Records: McClellan’s report and orders for the Hanover expedition',
      url: 'https://ehistory.osu.edu/books/official-records/012/0033',
    },
    {
      label:
        'Official Records: May 27 correspondence concerning McDowell and Porter',
      url: 'https://ehistory.osu.edu/books/official-records/014/0194',
    },
    {
      label: 'Official Records: Johnston orders Branch to Hanover Court House',
      url: 'https://ehistory.osu.edu/books/official-records/018/0897',
    },
    {
      label:
        'National Archives: Official Records of the Union and Confederate Armies',
      url: 'https://www.archives.gov/research/alic/reference/military/civil-war-armies-records.html',
    },
    {
      label:
        'Library of Congress: Robert Knox Sneden map of Hanover Court House',
      url: 'https://www.loc.gov/item/gvhs01.vhs00213/',
    },
    {
      label: 'Library of Congress: maps of the Peninsula Campaign, part 2',
      url: 'https://blogs.loc.gov/maps/2018/06/places-in-civil-war-history-maps-of-the-peninsula-campaign-part-2/',
    },
    {
      label: 'Library of Congress: White House Landing supply vessels',
      url: 'https://www.loc.gov/item/2018666164/',
    },
    {
      label: 'Library of Congress: Grapevine Bridge over the Chickahominy',
      url: 'https://www.loc.gov/item/2018666171/',
    },
    {
      label: 'Library of Congress: Fitz John Porter portrait',
      url: 'https://www.loc.gov/item/2018667594/',
    },
    {
      label: 'Library of Congress: Joseph E. Johnston portrait',
      url: 'https://www.loc.gov/item/2018666539/',
    },
  ],
} satisfies Enrichment;
