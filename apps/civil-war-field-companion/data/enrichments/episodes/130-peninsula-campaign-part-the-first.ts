import type { Enrichment } from '../types';

export const enrichment = {
  date: 'March 17–May 4, 1862',
  place:
    'Alexandria and Chesapeake Bay; Fort Monroe and Hampton Roads; the Virginia Peninsula between the York and James Rivers; Yorktown, the Warwick River line, Lee’s Mill, Dam No. 1, and the road toward Williamsburg',
  result:
    'The Army of the Potomac completed its large water movement to Fort Monroe but did not make the rapid advance on Richmond that McClellan intended. Magruder’s smaller Confederate force used earthworks, flooded waterways, deception, and later reinforcements to stop the April 4–5 advance along the Warwick line. McClellan chose siege operations rather than an immediate general assault. Johnston reinforced the position, then evacuated Yorktown during the night of May 3–4 before the United States siege artillery opened. The Confederates surrendered the Yorktown position but gained nearly a month to concentrate between McClellan and Richmond; the National Park Service classifies the Yorktown result as indecisive',
  facts: [
    {
      label: 'Campaign opening',
      value: 'First embarkations March 17; land advance April 4',
      note: 'McClellan left Alexandria on April 1 and reached Fort Monroe on April 2. The transcript correctly places his embarkation on April 2, although his official report dates his departure to April 1.',
    },
    {
      label: 'Water route',
      value: 'About 200 miles from Alexandria to Fort Monroe',
    },
    {
      label: 'Transport fleet',
      value: '389 vessels',
      note: 'McClellan’s official report lists 113 steamers, 188 schooners, and 88 barges used during the movement.',
    },
    {
      label: 'Army transported',
      value: '121,500 soldiers and 14,592 animals',
      note: 'McClellan also reported 1,224 wagons and ambulances, 44 artillery batteries, telegraph material, pontoon trains, and equipment. The episode rounds these quantities.',
    },
    {
      label: 'Original operational objective',
      value: 'West Point, then Richmond',
      note: 'McClellan intended to open a supply base at West Point, where the Richmond and York River Railroad met the navigable York River.',
    },
    {
      label: 'James River restriction',
      value: 'CSS Virginia remained an operational threat',
      note: 'The Navy could not guarantee use of the James River while the Confederate ironclad remained at Norfolk, so McClellan based his supply line on the York River side of the Peninsula.',
    },
    {
      label: 'Confederate force at the outset',
      value: 'About 11,000 under John B. Magruder',
      note: 'The National Park Service gives approximately 11,000 initially available for the line. The episode says 12,000 once and the automated transcript later misrenders the same figure as 1,200.',
    },
    {
      label: 'Warwick defense',
      value: 'Earthworks, dams, flooded lowlands, and guarded crossings',
      note: 'The line was anchored at Yorktown and extended across the Peninsula by following the Warwick River toward the James.',
    },
    {
      label: 'United States force on April 5',
      value: 'About 58,000–60,000 in the advance',
      note: 'The episode uses both figures: about 60,000 had landed when the advance began, and about 58,000 faced the Yorktown–Warwick line after contact.',
    },
    {
      label: 'McClellan’s initial enemy estimate',
      value: 'About 15,000 near Yorktown',
      note: 'After the advance stopped, Magruder’s demonstrations and faulty intelligence contributed to much larger estimates. McClellan told Lincoln on April 7 that he might face at least 100,000.',
    },
    {
      label: 'Dam No. 1 action',
      value: 'April 16, 1862',
      note: 'Troops from the Vermont Brigade crossed the Warwick and briefly entered the Confederate works before withdrawing under counterattack without sufficient reinforcement.',
    },
    {
      label: 'Casualty estimates',
      value: 'Scope-dependent',
      note: 'The National Park Service battle summary estimates 482 casualties across the Yorktown operations and describes about 309 casualties in the April 16 action. Different accounts separate the siege and Dam No. 1 losses differently.',
    },
    {
      label: 'Siege artillery',
      value: '101 siege guns and more than 40 siege mortars',
      note: 'These National Park Service figures describe the siege arsenal. The episode says 114 large siege pieces were nearly in place by May 3 and also mentions more than 300 field guns; totals differ by date and by whether mortars are counted with guns.',
    },
    {
      label: 'Planned bombardment',
      value: 'Early May, preempted by evacuation',
      note: 'The episode says May 5. The National Park Service battle summary says McClellan planned to begin at dawn on May 4. Johnston withdrew during the night of May 3–4, so the discrepancy did not affect the outcome.',
    },
    {
      label: 'Senior commanders killed or mortally wounded',
      value: 'None in the operations covered here',
    },
    {
      label: 'Book recommendation',
      value:
        'The Peninsula Campaign of 1862: A Military Analysis by Kevin Dougherty with J. Michael Moore',
      note: 'The automated transcript renders the first author’s surname as “Docherty.”',
    },
  ],
  maps: [
    {
      title: 'From Alexandria to the Virginia Peninsula',
      caption:
        'The Army of the Potomac traveled by water from Alexandria to Fort Monroe, then planned to march northwest between the York and James Rivers through Yorktown and Williamsburg to a new base at West Point and onward to Richmond. CSS Virginia restricted naval support on the James. This schematic is not to scale.',
      source:
        'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
      image: '/images/ep130-peninsula-route.svg',
      alt: 'Schematic map of the Army of the Potomac water movement from Alexandria to Fort Monroe and planned advance up the Virginia Peninsula toward Richmond',
    },
    {
      title: 'The Warwick line and the halted advance',
      caption:
        'Heintzelman’s III Corps moved toward Yorktown while Keyes’s IV Corps moved toward Lee’s Mill. The unexpected course and flooded crossings of the Warwick River blocked the intended flanking movement. The map also marks the April 16 crossing at Dam No. 1 and the Confederate withdrawal toward Williamsburg. Positions are approximate.',
      source:
        'https://www.nps.gov/york/learn/historyculture/yorktown-in-the-civil-war.htm',
      image: '/images/ep130-warwick-line.svg',
      alt: 'Schematic map of the Confederate Warwick line, the United States Third and Fourth Corps advances, Dam Number 1, and the Confederate withdrawal toward Williamsburg',
    },
    {
      title: 'Contemporary view of the Yorktown siege',
      caption:
        'Charles Worret’s 1862 bird’s-eye map identifies United States batteries, camps, headquarters, naval positions, and the Confederate defenses at Yorktown. It is a contemporary pictorial view rather than a survey-accurate operational map.',
      source: 'https://www.loc.gov/item/99446374/',
      image: '/images/ep130-siege-of-yorktown-1862.jpg',
      alt: 'Contemporary 1862 bird’s-eye map of the United States siege of Yorktown',
    },
  ],
  moments: [
    {
      time: '1:10',
      audioTime: 70,
      title: 'The episode opens with the Army of the Potomac in motion',
      detail:
        'More than 100,000 soldiers were moving by transport down Chesapeake Bay to Fort Monroe, the United States-held base at the tip of the Virginia Peninsula.',
    },
    {
      time: '4:27',
      audioTime: 267,
      title: 'Faulty intelligence magnifies Confederate strength',
      detail:
        'McClellan’s own assumptions and estimates supplied through Allan Pinkerton reinforced one another. The episode contrasts his claim of 150,000 Confederates near Manassas with an actual force of no more than about 42,000.',
    },
    {
      time: '6:15',
      audioTime: 375,
      title: 'Political pressure shapes McClellan’s caution',
      detail:
        'The Joint Committee on the Conduct of the War demanded energetic operations and had Brigadier General Charles P. Stone imprisoned after Ball’s Bluff. McClellan treated the committee and Secretary Stanton as political enemies and became still more reluctant to risk defeat.',
    },
    {
      time: '8:00',
      audioTime: 480,
      title: 'McClellan’s waterborne plan replaces a direct advance',
      detail:
        'Rather than attack the Centreville–Manassas position from Washington, McClellan proposed moving by water and approaching Richmond from the east.',
    },
    {
      time: '8:46',
      audioTime: 526,
      title: 'Johnston’s withdrawal invalidates Urbanna',
      detail:
        'Johnston’s move to the Rappahannock placed his army close enough to contest a landing at Urbanna. McClellan retained the amphibious concept but changed the landing point to Fort Monroe.',
    },
    {
      time: '9:40',
      audioTime: 580,
      title: 'Embarkation begins at Alexandria',
      detail:
        'On March 17 the first Army of the Potomac units began the approximately 200-mile water journey to Fort Monroe aboard a fleet assembled for the earlier Urbanna plan.',
    },
    {
      time: '11:14',
      audioTime: 674,
      title: 'McClellan addresses “my army”',
      detail:
        'McClellan used printed addresses and personal contact to reinforce his bond with the soldiers. Before the campaign he told them that the time for action had arrived and promised to seek success with the least possible loss.',
    },
    {
      time: '13:22',
      audioTime: 802,
      title: 'The transport operation reaches full scale',
      detail:
        'Over roughly three weeks, 389 vessels carried 121,500 soldiers, 14,592 animals, 1,224 wagons and ambulances, 44 artillery batteries, and the equipment required to sustain a field army.',
    },
    {
      time: '14:00',
      audioTime: 840,
      title: 'The Peninsula’s geography defines the campaign',
      detail:
        'Fort Monroe stood at the southeastern end of the land between the navigable York River on the north and James River on the south. Richmond lay northwest up the Peninsula.',
    },
    {
      time: '14:35',
      audioTime: 875,
      title: 'CSS Virginia limits naval support',
      detail:
        'Although USS Monitor had fought Virginia to a draw in Hampton Roads, the Confederate ironclad still threatened another sortie. The Navy would not guarantee the James River flank while Virginia remained at Norfolk.',
    },
    {
      time: '15:35',
      audioTime: 935,
      title: 'McClellan intends to establish a base at West Point',
      detail:
        'The plan called for a rapid advance past Yorktown to West Point at the head of the York River, where the army could use both water transport and the railroad toward Richmond.',
    },
    {
      time: '16:05',
      audioTime: 965,
      title: 'Magruder has prepared a cross-Peninsula defense',
      detail:
        'About 11,000 Confederates initially defended works anchored at Yorktown and extending along the Warwick River. Dams flooded low ground, and artillery and infantry covered the limited crossings.',
    },
    {
      time: '17:36',
      audioTime: 1056,
      title: 'Two United States columns advance on April 4',
      detail:
        'Heintzelman’s III Corps moved toward Yorktown. Keyes’s IV Corps took the left-hand route intended to pass south of Yorktown and turn the Confederate position.',
    },
    {
      time: '18:20',
      audioTime: 1100,
      title: 'Maps and roads fail the advance',
      detail:
        'Existing maps did not adequately show the streams and swamps, while heavy rain turned sandy roads into mud that impeded wagons and artillery.',
    },
    {
      time: '18:48',
      audioTime: 1128,
      title: 'III Corps reaches the Yorktown defenses',
      detail:
        'On the afternoon of April 5, Heintzelman’s column approached Yorktown and received artillery and musket fire. McClellan expected Keyes to outflank this position from the south.',
    },
    {
      time: '19:10',
      audioTime: 1150,
      title: 'The Warwick River blocks IV Corps',
      detail:
        'Keyes found that the Warwick cut across his route rather than running parallel to it as the maps indicated. Confederate dams widened the obstacle, and defended crossings prevented a quick passage near Lee’s Mill.',
    },
    {
      time: '20:13',
      audioTime: 1213,
      title: 'McClellan chooses a siege',
      detail:
        'After Keyes reported that an assault would cause very heavy losses, McClellan abandoned the rapid breakthrough on which his operational timetable depended and ordered siege preparations.',
    },
    {
      time: '20:32',
      audioTime: 1232,
      title: 'McDowell’s I Corps is withheld',
      detail:
        'McClellan learned that I Corps would remain near Washington rather than join him on the Peninsula. He treated the decision as a deliberate effort to damage the campaign, although the episode notes that he still had a large numerical advantage on April 5.',
    },
    {
      time: '22:32',
      audioTime: 1352,
      title: 'Magruder uses demonstrations to exaggerate his strength',
      detail:
        'Bands, artillery, and repeated troop movements in exposed areas created the appearance of continuous reinforcements. The displays reinforced McClellan’s tendency to overestimate the defenders.',
    },
    {
      time: '23:16',
      audioTime: 1396,
      title: 'McClellan reports a possible 100,000 Confederates',
      detail:
        'On April 7 he told Lincoln that the enemy might number at least 100,000. Lincoln questioned the estimate and continued to urge an attack.',
    },
    {
      time: '24:05',
      audioTime: 1445,
      title: 'The April 16 crossing at Dam No. 1 is not reinforced',
      detail:
        'Vermont troops crossed the flooded Warwick and briefly gained part of the Confederate position. Without sufficient reinforcement, they were driven back by a counterattack.',
    },
    {
      time: '25:02',
      audioTime: 1502,
      title: 'Johnston concentrates the main Confederate army',
      detail:
        'By mid-April, Joseph E. Johnston had assumed overall command on the Peninsula and reinforcements joined Magruder. The episode dates Johnston’s arrival to April 17; the National Park Service dates the consolidation of Magruder’s force under Johnston to April 12.',
    },
    {
      time: '25:24',
      audioTime: 1524,
      title: 'The siege train nears readiness',
      detail:
        'By May 3 the Army of the Potomac had prepared heavy guns and mortars intended to overwhelm the Yorktown defenses. Johnston concluded that the position could not withstand the bombardment.',
    },
    {
      time: '25:52',
      audioTime: 1552,
      title: 'The Confederates evacuate Yorktown',
      detail:
        'During the night of May 3–4, Johnston’s army left the Warwick line and retreated toward Williamsburg under cover of its own artillery fire.',
    },
    {
      time: '26:17',
      audioTime: 1577,
      title: 'Yorktown falls, but the delay changes the campaign',
      detail:
        'United States forces gained the position without the planned bombardment. The delay allowed Johnston to transfer the main Confederate army from northern Virginia to the route between McClellan and Richmond.',
    },
  ],
  command: [
    {
      side: 'United States',
      color: '#315f8c',
      branches: [
        {
          commander: 'Abraham Lincoln',
          command: 'President and constitutional commander in chief',
          subordinates:
            'Approved the Peninsula movement subject to Washington’s security and pressed McClellan to act against the Yorktown–Warwick line',
        },
        {
          commander: 'Edwin M. Stanton',
          command: 'Secretary of War',
          subordinates:
            'Directed War Department policy, transmitted orders, and joined Lincoln in withholding McDowell’s I Corps for the defense of Washington',
        },
        {
          commander: 'George B. McClellan',
          command: 'Commander, Army of the Potomac',
          subordinates:
            'Directed the water movement, the April 4 advance, and the siege of Yorktown',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'III Corps, Army of the Potomac',
          subordinates:
            'Led the right-hand column toward Yorktown; the corps included divisions under Charles S. Hamilton and Joseph Hooker during the opening advance',
        },
        {
          commander: 'Erasmus D. Keyes',
          command: 'IV Corps, Army of the Potomac',
          subordinates:
            'Led the left-hand column toward Lee’s Mill; divisions under Darius N. Couch and William F. Smith encountered the Warwick River defenses',
        },
        {
          commander: 'Fitz John Porter',
          command: 'Director of siege operations at Yorktown',
          subordinates:
            'Supervised the construction and preparation of the United States siege works and heavy batteries',
        },
        {
          commander: 'William F. Smith',
          command: 'Division commander, IV Corps',
          subordinates:
            'His division faced the Warwick near Dam No. 1; William T. H. Brooks’s Vermont Brigade made the April 16 crossing',
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
            'Exercised national authority over the defense of Richmond and accepted Lee’s recommendation to reinforce the Peninsula',
        },
        {
          commander: 'Robert E. Lee',
          command: 'Military adviser to President Davis',
          subordinates:
            'Advocated reinforcing Magruder’s line rather than immediately abandoning the lower Peninsula defenses',
        },
        {
          commander: 'Joseph E. Johnston',
          command:
            'Department and Army of Northern Virginia; overall command on the Peninsula by mid-April',
          subordinates:
            'Concentrated the principal Confederate field army behind the Warwick line and ordered the withdrawal toward Williamsburg',
        },
        {
          commander: 'John B. Magruder',
          command: 'Army of the Peninsula; later right wing under Johnston',
          subordinates:
            'Built and defended the Yorktown–Warwick position, used demonstrations to conceal his initial weakness, and continued as a wing commander after Johnston assumed overall command',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Moved the Army of the Potomac to Fort Monroe, halted at the Warwick line, and chose siege operations at Yorktown',
      side: 'United States',
      image: '/images/ep130-george-mcclellan-1861.jpg',
      source: 'https://www.loc.gov/item/2005683068/',
    },
    {
      name: 'Abraham Lincoln',
      role: 'Approved the Peninsula movement with conditions, retained forces for Washington, and urged McClellan to attack the Warwick line',
      side: 'United States',
    },
    {
      name: 'Edwin M. Stanton',
      role: 'Administered the War Department and participated in the decision to withhold McDowell’s I Corps',
      side: 'United States',
    },
    {
      name: 'Samuel P. Heintzelman',
      role: 'Commanded III Corps on the direct approach to Yorktown',
      side: 'United States',
    },
    {
      name: 'Erasmus D. Keyes',
      role: 'Commanded IV Corps on the intended flanking route and reported that the Warwick position could not be assaulted without heavy loss',
      side: 'United States',
    },
    {
      name: 'Fitz John Porter',
      role: 'Directed siege operations and participated in aerial observation of the Confederate position',
      side: 'United States',
    },
    {
      name: 'William F. Smith',
      role: 'Commanded the IV Corps division whose Vermont Brigade crossed at Dam No. 1 on April 16',
      side: 'United States',
    },
    {
      name: 'Allan Pinkerton',
      role: 'Directed McClellan’s intelligence service, whose inflated estimates reinforced the army commander’s assumptions about Confederate strength',
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Assumed overall Confederate command on the Peninsula, reinforced the Warwick line, and evacuated it before the siege bombardment',
      side: 'Confederacy',
    },
    {
      name: 'John B. Magruder',
      role: 'Prepared the Yorktown–Warwick defenses and used repeated demonstrations to disguise the weakness of his initial force',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Lee',
      role: 'Served as Davis’s military adviser and argued that Magruder should be reinforced on the Peninsula',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep130-siege-of-yorktown-1862.jpg',
      alt: 'Color bird’s-eye view of the United States siege of Yorktown in April 1862',
      caption:
        'Charles Worret’s contemporary view depicts United States batteries, camps, naval positions, and the Confederate works around Yorktown. Its value is documentary and visual; it is not a scale map.',
      source: 'https://www.loc.gov/item/99446374/',
    },
    {
      image: '/images/ep130-magruder-headquarters-yorktown.jpg',
      alt: 'Stereographic photograph of John B. Magruder’s former headquarters at Yorktown',
      caption:
        'George N. Barnard photographed Magruder’s Yorktown headquarters in June 1862, after the Confederate evacuation. The Library of Congress identifies it as a site associated with the Peninsula Campaign.',
      source: 'https://www.loc.gov/item/2018666151/',
    },
    {
      image: '/images/ep130-yorktown-confederate-fortification.jpg',
      alt: 'Large gun in a Confederate fortification at Yorktown photographed after the evacuation',
      caption:
        'Barnard’s June 1862 photograph records one of the heavy guns and earthworks left at Yorktown. Johnston withdrew rather than expose the defenses to McClellan’s prepared siege artillery.',
      source: 'https://www.loc.gov/item/2018666148/',
    },
    {
      image: '/images/ep130-george-mcclellan-1861.jpg',
      alt: 'Major General George B. McClellan standing in uniform in 1861',
      caption:
        'McClellan organized and moved the Army of the Potomac on an unprecedented scale, but his decision to besiege Yorktown forfeited the rapid timetable on which his campaign plan depended.',
      source: 'https://www.loc.gov/item/2005683068/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 130 page',
      url: 'https://civilwarpodcast.libsyn.com/130-peninsula-campaign-part-the-first',
    },
    {
      label:
        'Library of Congress: McClellan’s report on the Army of the Potomac and its campaigns',
      url: 'https://www.loc.gov/item/08017394/',
    },
    {
      label:
        'Library of Congress: George B. McClellan Papers, Army of the Potomac general orders, 1861–1862',
      url: 'https://www.loc.gov/item/mss318980258/',
    },
    {
      label: 'Library of Congress: Lincoln’s April 9, 1862 letter to McClellan',
      url: 'https://www.loc.gov/item/scsm000230/',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
    },
    {
      label:
        'U.S. Army Center of Military History: Civil War campaign summaries',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label: 'National Park Service: Yorktown in the Civil War',
      url: 'https://www.nps.gov/york/learn/historyculture/yorktown-in-the-civil-war.htm',
    },
    {
      label: 'National Park Service: Yorktown battle summary',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va009',
    },
    {
      label:
        'National Park Service: Union units at Yorktown, compiled from the Official Records',
      url: 'https://www.nps.gov/york/learn/historyculture/unionunits01.htm',
    },
    {
      label: 'Library of Congress: The siege of Yorktown, April 1862',
      url: 'https://www.loc.gov/item/99446374/',
    },
    {
      label:
        'Library of Congress: Robert Knox Sneden map of the April 16 assault at Lee’s Mill',
      url: 'https://www.loc.gov/item/gvhs01.vhs00210/',
    },
    {
      label: 'Library of Congress: Magruder’s headquarters at Yorktown',
      url: 'https://www.loc.gov/item/2018666151/',
    },
    {
      label: 'Library of Congress: Confederate fortification at Yorktown',
      url: 'https://www.loc.gov/item/2018666148/',
    },
    {
      label:
        'University Press of Mississippi catalog: The Peninsula Campaign of 1862',
      url: 'https://www.ubcpress.ca/the-peninsula-campaign-of-1862',
    },
  ],
} satisfies Enrichment;
