import type { Enrichment } from '../types';

export const enrichment = {
  date: 'May 25–31, 1862 (episode coverage ends late on May 31)',
  place:
    'The Chickahominy River approaches east of Richmond, including Fair Oaks Station, Seven Pines, the Williamsburg Road, Nine Mile Road, Charles City Road, and White Oak Swamp, Virginia',
  result:
    'Joseph E. Johnston tried to attack the two United States corps south of the flooded Chickahominy before the three corps north of the river could reinforce them. Confused orders and James Longstreet’s movement onto the Williamsburg Road delayed the attack for about five hours and blocked Benjamin Huger. D. H. Hill nevertheless broke Silas Casey’s forward line, while Philip Kearny reinforced the defense and Micah Jenkins split part of the United States line. The episode stops as Johnston leads W. H. C. Whiting toward Fair Oaks; the first day and the battle remain unresolved at that point',
  facts: [
    {
      label: 'Two names',
      value: 'Fair Oaks (United States) / Seven Pines (Confederate)',
      note: 'Both names refer to the May 31–June 1 battle east of Richmond.',
    },
    {
      label: 'United States deployment',
      value: 'Three corps north of the Chickahominy; two corps south',
      note: 'Porter’s V, Franklin’s VI, and Sumner’s II Corps were north of the river. Keyes’s IV and Heintzelman’s III Corps were south of it.',
    },
    {
      label: 'Weather and terrain',
      value: 'Violent rain on May 30 flooded the Chickahominy bottomlands',
      note: 'The episode says the river rose three to four feet, damaged bridges, and made the low ground much harder to cross.',
    },
    {
      label: 'Confederate concentration',
      value: 'About 74,000–75,000 near Richmond',
      note: 'This is the episode’s estimate. Strength calculations vary by source and by which troops are counted as available.',
    },
    {
      label: 'Planned attacking force',
      value: 'Up to 51,600 against about 33,000 south of the river',
      note: 'These are the episode’s planning estimates, not counts of the troops that actually reached combat in this phase.',
    },
    {
      label: 'Planned start',
      value: '8:00 a.m., May 31',
    },
    {
      label: 'Actual opening attack',
      value: 'About 1:00 p.m.',
      note: 'D. H. Hill advanced after learning that Huger’s lead brigade had reached its assigned area on Charles City Road.',
    },
    {
      label: 'Three intended approach roads',
      value: 'Nine Mile, Williamsburg, and Charles City roads',
      note: 'Johnston intended simultaneous pressure on the front and flanks of the isolated United States wing.',
    },
    {
      label: 'Command failure',
      value: 'Johnston gave Longstreet verbal instructions',
      note: 'No record of their May 30 conversation survives. Johnston and Longstreet later disputed responsibility for the route misunderstanding, and Johnston asked Gustavus W. Smith to omit related details from Smith’s report.',
    },
    {
      label: 'Hill’s attacking division',
      value: 'About 8,500 in four brigades',
      note: 'The episode’s estimate. Hill’s men wore white cloth on their headgear to reduce the risk of friendly fire in the woods.',
    },
    {
      label: 'Casey’s main position',
      value: 'Rifle pits, abatis, and an unfinished five-sided redoubt',
      note: 'The episode places six artillery pieces in Casey’s Redoubt.',
    },
    {
      label: '6th Alabama losses',
      value: 'About 59 percent of the regiment',
      note: 'The transcript gives 91 killed and says 59 percent of the unit was lost. Rodes’s official report lists 91 killed and 277 wounded; the NPS unit summary gives 59 percent of 632 engaged. Later compilations give slightly different totals.',
    },
    {
      label: 'Episode stopping point',
      value: 'Johnston advances with Whiting late on May 31',
      note: 'Johnston’s later wounding and Robert H. Hatton’s death occur after this episode’s stopping point and are not treated as events in this guide.',
    },
    {
      label: 'Book recommendation',
      value: 'Fair Oaks 1862: McClellan’s Peninsula Campaign by Angus Konstam',
      note: 'The automated transcript renders the author’s surname incorrectly.',
    },
  ],
  maps: [
    {
      title: 'The army divided by the Chickahominy',
      caption:
        'McClellan kept Porter, Franklin, and Sumner north of the river while Keyes and Heintzelman operated south of it. The May 30 flood damaged crossings and increased the isolation of the southern wing. Johnston shifted his main effort toward that exposed wing after learning that McDowell would not join McClellan. Corps positions and geography are schematic.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
      image: '/images/ep136-chickahominy-disposition.svg',
      alt: 'Operational map of the five United States corps around the Chickahominy and Johnston’s revised attack toward Seven Pines',
    },
    {
      title: 'Johnston’s plan and the delayed May 31 attack',
      caption:
        'Dashed arrows show the intended simultaneous movement on Nine Mile, Williamsburg, and Charles City roads. Solid arrows show the episode’s sequence: Longstreet moved onto the Williamsburg Road and delayed Huger; Hill attacked about 1 p.m.; Kearny counterattacked; Anderson and Jenkins drove between Fair Oaks and Seven Pines; and Johnston led Whiting down Nine Mile Road late in the afternoon. Routes and unit frontages are schematic.',
      source: 'https://www.loc.gov/item/gvhs01.vhs00292/',
      image: '/images/ep136-fair-oaks-may31-tactical.svg',
      alt: 'Tactical map comparing Johnston’s intended three-road attack with the actual movements through late afternoon on May 31',
    },
  ],
  moments: [
    {
      time: '5:34',
      audioTime: 334,
      title: 'The episode begins the battle narrative',
      detail:
        'Johnston’s retreat brought the Confederate field army inside Richmond’s defenses while McClellan approached from the east.',
    },
    {
      time: '6:28',
      audioTime: 388,
      title: 'McClellan straddles the Chickahominy',
      detail:
        'The Army of the Potomac occupied both banks so it could protect the railroad supply line, approach Richmond, and prepare for expected reinforcements from northern Virginia.',
    },
    {
      time: '8:27',
      audioTime: 507,
      title: 'The five corps are physically divided',
      detail:
        'By May 25, Porter, Franklin, and Sumner were north of the river; Keyes and Heintzelman were south of it.',
    },
    {
      time: '10:17',
      audioTime: 617,
      title: 'Johnston’s first objective changes',
      detail:
        'Johnston had planned a May 29 attack north of the river to prevent a junction with McDowell. Confederate cavalry reported that McDowell was no longer advancing toward McClellan.',
    },
    {
      time: '11:16',
      audioTime: 676,
      title: 'The main effort shifts south',
      detail:
        'Johnston retained the offensive but redirected it against the two corps south of the Chickahominy.',
    },
    {
      time: '12:30',
      audioTime: 750,
      title: 'Rain floods the Chickahominy',
      detail:
        'The May 30 storm inundated bottomlands, swallowed corduroy approaches in mud, and damaged bridges between McClellan’s wings.',
    },
    {
      time: '13:07',
      audioTime: 787,
      title: 'Three roads define the attack',
      detail:
        'Nine Mile Road passed Fair Oaks Station, Williamsburg Road ran toward Seven Pines, and Charles City Road approached from the south beside White Oak Swamp.',
    },
    {
      time: '15:03',
      audioTime: 903,
      title: 'Johnston assigns the attacking columns',
      detail:
        'Huger was to use Charles City Road, D. H. Hill the Williamsburg Road, and Longstreet with Whiting the Nine Mile Road. Longstreet held tactical control of the main attack.',
    },
    {
      time: '17:10',
      audioTime: 1030,
      title: 'Verbal instructions create a central uncertainty',
      detail:
        'Johnston did not give Longstreet a written order, and no record of their May 30 conversation survives. Later accounts disagree over responsibility for the route error.',
    },
    {
      time: '17:54',
      audioTime: 1074,
      title: 'Huger is supposed to trigger the battle',
      detail:
        'Huger’s arrival on Charles City Road was to signal Hill, whose firing would signal Longstreet. Johnston’s written order did not clearly state the date of attack or Huger’s subordination to Longstreet.',
    },
    {
      time: '20:20',
      audioTime: 1220,
      title: 'Longstreet takes the Williamsburg Road',
      detail:
        'Instead of advancing on Nine Mile Road, Longstreet moved south. His column blocked Huger at the Charles City Road intersection, and the 8 a.m. attack did not begin on schedule.',
    },
    {
      time: '22:31',
      audioTime: 1351,
      title: 'Hill attacks about 1 p.m.',
      detail:
        'Five hours late, Hill sent roughly 8,500 men against Silas Casey’s forward division of Keyes’s IV Corps.',
    },
    {
      time: '23:43',
      audioTime: 1423,
      title: 'Casey’s main line resists',
      detail:
        'After breaking the 103rd Pennsylvania picket line, Hill’s troops reached rifle pits and abatis centered on Casey’s unfinished redoubt.',
    },
    {
      time: '24:42',
      audioTime: 1482,
      title: 'Casey’s line breaks',
      detail:
        'Rodes pressed the front, Gabriel Rains worked around the right and rear, and Thomas H. Carter’s artillery enfiladed the works before Confederate infantry took the position.',
    },
    {
      time: '26:02',
      audioTime: 1562,
      title: 'The defense reforms at Seven Pines',
      detail:
        'Casey’s survivors joined Darius Couch’s division and two brigades from Philip Kearny’s division, increasing the resistance to Hill’s advance.',
    },
    {
      time: '26:32',
      audioTime: 1592,
      title: 'Kearny counterattacks',
      detail:
        'Kearny deployed south of Williamsburg Road and pushed toward Casey’s abandoned camps, striking Rodes’s brigade while Rains lagged in swampy ground.',
    },
    {
      time: '27:45',
      audioTime: 1665,
      title: 'Rodes is wounded',
      detail:
        'Robert E. Rodes remained in command for about two hours after an arm wound, then transferred the brigade to Colonel John B. Gordon of the 6th Alabama.',
    },
    {
      time: '29:23',
      audioTime: 1763,
      title: 'The 6th Alabama takes severe losses',
      detail:
        'The episode reports 59 percent casualties and 91 killed. Lieutenant Colonel James J. Willingham and Major Samuel Perry Nesmith were killed; Augustus M. Gordon survived a serious wound.',
    },
    {
      time: '30:12',
      audioTime: 1812,
      title: 'Longstreet sends two brigades forward',
      detail:
        'James L. Kemper reinforced the fight opposite Kearny, while Richard H. Anderson moved northeast from Williamsburg Road toward the gap between Fair Oaks and Seven Pines.',
    },
    {
      time: '31:35',
      audioTime: 1895,
      title: 'Jenkins splits the United States line',
      detail:
        'Micah Jenkins took two regiments from Anderson’s brigade south to Seven Pines, then turned east and separated Couch with four regiments and an artillery battery from the rest of the division.',
    },
    {
      time: '35:20',
      audioTime: 2120,
      title: 'Johnston learns the scale of the fighting',
      detail:
        'A request from Longstreet shortly after 4 p.m. finally made Johnston understand the situation on the Williamsburg Road.',
    },
    {
      time: '35:45',
      audioTime: 2145,
      title: 'Johnston leads Whiting toward Fair Oaks',
      detail:
        'Johnston took personal control of Whiting’s division and advanced down Nine Mile Road. The episode ends before that column enters the main action.',
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
            'Directed five corps on both sides of the Chickahominy; the episode does not place him at the forward Seven Pines fighting',
        },
        {
          commander: 'Erasmus D. Keyes',
          command: 'Commander, IV Corps; south of the Chickahominy',
          subordinates:
            'Silas Casey held the forward line and redoubt; Darius N. Couch formed behind Casey near Seven Pines and Fair Oaks',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'Commander, III Corps; south of the Chickahominy',
          subordinates:
            'Philip Kearny reinforced Keyes with two brigades; Joseph Hooker’s division was also in III Corps',
        },
        {
          commander: 'Edwin V. Sumner',
          command: 'Commander, II Corps; north of the Chickahominy',
          subordinates:
            'John Sedgwick and Israel B. Richardson; their later crossing falls outside this episode’s stopping point',
        },
        {
          commander: 'Fitz John Porter and William B. Franklin',
          command: 'Commanders, V and VI Corps; north of the Chickahominy',
          subordinates:
            'Held the northern wing with Sumner while the opening attack struck south of the river',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'Joseph E. Johnston',
          command: 'Commander, Confederate field army defending Richmond',
          subordinates:
            'Created a left wing under Gustavus W. Smith and a right wing under James Longstreet, then personally advanced with Whiting late in the episode',
        },
        {
          commander: 'Gustavus W. Smith',
          command: 'Left wing',
          subordinates:
            'W. H. C. Whiting was designated to support Longstreet; John B. Magruder and A. P. Hill remained in reserve along the upper Chickahominy',
        },
        {
          commander: 'James Longstreet',
          command: 'Right wing and tactical commander of the main attack',
          subordinates:
            'His own division, D. H. Hill’s division, and Benjamin Huger’s division were assigned to the three-road operation',
        },
        {
          commander: 'D. H. Hill',
          command: 'Division on Williamsburg Road',
          subordinates:
            'Robert E. Rodes, Samuel Garland Jr., George B. Anderson, and Gabriel J. Rains; Hill’s was the only division to begin on its assigned road',
        },
        {
          commander: 'Benjamin Huger',
          command: 'Division on Charles City Road',
          subordinates:
            'His route was blocked by Longstreet’s column, and his unclear command relationship with Longstreet compounded the delay',
        },
        {
          commander: 'Richard H. Anderson',
          command: 'Brigade in Longstreet’s division',
          subordinates:
            'Micah Jenkins led two regiments in the late-afternoon thrust that separated Couch from the rest of the United States line',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Commanded the Army of the Potomac and kept it on both sides of the Chickahominy while advancing on Richmond',
      side: 'United States',
    },
    {
      name: 'Erasmus D. Keyes',
      role: 'Commanded IV Corps and directed the forward United States defense near Seven Pines and Fair Oaks',
      side: 'United States',
    },
    {
      name: 'Silas Casey',
      role: 'Commanded the exposed IV Corps division whose picket line, redoubt, and camps were overrun by Hill’s attack',
      side: 'United States',
      image: '/images/ep136-silas-casey.jpg',
      source: 'https://www.loc.gov/item/2018666404/',
    },
    {
      name: 'Darius N. Couch',
      role: 'Commanded the second IV Corps division and reinforced Casey before Jenkins’s advance separated part of his force',
      side: 'United States',
    },
    {
      name: 'Philip Kearny',
      role: 'Led two III Corps brigades into a counterattack south of Williamsburg Road after Casey’s line gave way',
      side: 'United States',
      image: '/images/ep136-philip-kearny.jpg',
      source: 'https://www.loc.gov/item/2002723988/',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Planned the attack, failed to issue complete written orders, and moved with Whiting toward Fair Oaks late in the episode',
      side: 'Confederacy',
      image: '/images/ep136-joseph-e-johnston.jpg',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      name: 'James Longstreet',
      role: 'Held tactical command of the main attack; his movement onto Williamsburg Road disrupted Johnston’s intended three-road advance',
      side: 'Confederacy',
      image: '/images/ep136-james-longstreet.jpg',
      source: 'https://www.loc.gov/item/2018666541/',
    },
    {
      name: 'D. H. Hill',
      role: 'Commanded the division that attacked Casey about 1 p.m. and drove west-to-east along Williamsburg Road',
      side: 'Confederacy',
    },
    {
      name: 'Benjamin Huger',
      role: 'Commanded the Charles City Road column; the transcript’s “U.J.” and similar forms are recognition errors for Huger',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Rodes',
      role: 'Led a brigade against Casey’s works, was wounded in the arm, and later transferred command to John B. Gordon',
      side: 'Confederacy',
    },
    {
      name: 'John B. Gordon',
      role: 'Commanded the 6th Alabama and assumed command of Rodes’s brigade after Rodes left the field wounded',
      side: 'Confederacy',
    },
    {
      name: 'Micah Jenkins',
      role: 'Led two regiments from Richard H. Anderson’s brigade through the gap between Fair Oaks and Seven Pines',
      side: 'Confederacy',
    },
  ],
  losses: [
    {
      name: 'Lt. Col. James J. Willingham',
      side: 'Confederacy',
      role: 'Lieutenant colonel, 6th Alabama Infantry',
      outcome: 'Killed during the regiment’s attack on May 31.',
    },
    {
      name: 'Maj. Samuel Perry Nesmith',
      side: 'Confederacy',
      role: 'Major, 6th Alabama Infantry',
      outcome: 'Killed during the regiment’s attack on May 31.',
    },
    {
      name: 'Brig. Gen. Robert E. Rodes',
      side: 'Confederacy',
      role: 'Commander, Rodes’s brigade, D. H. Hill’s division',
      outcome:
        'Wounded in the arm; remained in command for about two hours, then left the field. The wound was not mortal.',
    },
  ],
  gallery: [
    {
      image: '/images/ep136-fair-oaks-may31-tactical.svg',
      alt: 'Schematic map of the planned and actual Confederate movements at Fair Oaks and Seven Pines',
      caption:
        'Johnston intended a simultaneous three-road attack. Longstreet’s movement onto Williamsburg Road delayed Huger and reduced the opening action to Hill’s unsupported advance.',
      source: 'https://www.loc.gov/item/gvhs01.vhs00292/',
    },
    {
      image: '/images/ep136-joseph-e-johnston.jpg',
      alt: 'Portrait of Confederate general Joseph E. Johnston in civilian dress',
      caption:
        'Joseph E. Johnston recognized the opportunity created by the flooded Chickahominy but did not provide the detailed written orders needed to coordinate separate columns on three roads.',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      image: '/images/ep136-james-longstreet.jpg',
      alt: 'Portrait of James Longstreet during the Civil War era',
      caption:
        'James Longstreet held tactical control of the main attack. His route misunderstanding placed his division on Williamsburg Road and blocked Huger’s assigned approach.',
      source: 'https://www.loc.gov/item/2018666541/',
    },
    {
      image: '/images/ep136-silas-casey.jpg',
      alt: 'Silas Casey seated in United States Army uniform during the Civil War',
      caption:
        'Silas Casey’s understrength division occupied the forward IV Corps line. Its fieldworks resisted Hill for a time before the redoubt and camps were overrun.',
      source: 'https://www.loc.gov/item/2018666404/',
    },
    {
      image: '/images/ep136-philip-kearny.jpg',
      alt: 'Contemporary engraving of Philip Kearny standing in United States Army uniform',
      caption:
        'Philip Kearny brought two III Corps brigades forward and counterattacked south of Williamsburg Road after Casey’s line collapsed.',
      source: 'https://www.loc.gov/item/2002723988/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 136 page',
      url: 'https://civilwarpodcast.org/2015/12/20/civil-war-podcast-episode-136/',
    },
    {
      label: 'National Park Service: Seven Pines battle summary',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va014',
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
      label:
        'Library of Congress: Robert Knox Sneden plan of Fair Oaks, May 31',
      url: 'https://www.loc.gov/item/gvhs01.vhs00292/',
    },
    {
      label: 'Library of Congress: Seven Pines battlefield documentation',
      url: 'https://www.loc.gov/item/va2107/',
    },
    {
      label: 'Official Records: Rodes’s report of Seven Pines',
      url: 'https://ehistory.osu.edu/books/official-records/012/0971',
    },
    {
      label: 'Official Records: Gordon’s report of Seven Pines',
      url: 'https://ehistory.osu.edu/books/official-records/012/0978',
    },
    {
      label:
        'National Archives: guide to the Official Records of the Union and Confederate Armies',
      url: 'https://www.archives.gov/research/alic/reference/military/civil-war-armies-records.html',
    },
    {
      label: 'National Park Service: 6th Alabama Infantry unit summary',
      url: 'https://www.nps.gov/civilwar/search-battle-units-detail.htm?battleUnitCode=CAL0006RI',
    },
    {
      label: 'National Park Service: Silas Casey biography',
      url: 'https://www.nps.gov/articles/featured_stories_casey.htm',
    },
    {
      label:
        'American Battlefield Trust: George L. Kilmer’s account of the 6th Alabama',
      url: 'https://www.battlefields.org/learn/primary-sources/changed-retreat-bayonet-charge',
    },
    {
      label: 'Library of Congress: Joseph E. Johnston portrait',
      url: 'https://www.loc.gov/item/2018666539/',
    },
    {
      label: 'Library of Congress: James Longstreet portrait',
      url: 'https://www.loc.gov/item/2018666541/',
    },
    {
      label: 'Library of Congress: Silas Casey portrait',
      url: 'https://www.loc.gov/item/2018666404/',
    },
    {
      label: 'Library of Congress: Philip Kearny engraving',
      url: 'https://www.loc.gov/item/2002723988/',
    },
  ],
} satisfies Enrichment;
