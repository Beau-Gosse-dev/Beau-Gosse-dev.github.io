import type { Enrichment } from '../types';

export const enrichment = {
  date: 'February 19–March 17, 1862',
  place:
    'Washington, D.C.; Harpers Ferry, Virginia; the Confederate positions at Centreville and Manassas; the Orange and Alexandria Railroad corridor to Gordonsville and the Rappahannock River; Hampton Roads; Alexandria; and the Virginia Peninsula',
  result:
    'Joseph E. Johnston withdrew the principal Confederate field army in northern Virginia from Centreville and Manassas to the Rappahannock before McClellan attacked. The withdrawal nullified McClellan’s proposed Urbanna landing because Johnston could now oppose that route. After a short United States advance into the abandoned works, McClellan substituted an amphibious movement to Fort Monroe and the Virginia Peninsula. Lincoln approved that operation subject to the security of Washington and reorganized the Army of the Potomac into corps. McClellan ceased to be general-in-chief on March 11 but retained command of the Army of the Potomac, whose first divisions embarked from Alexandria on March 17',
  facts: [
    {
      label: 'Harpers Ferry force',
      value: 'About 23,000 United States troops',
      note: 'A pontoon bridge carried the advance troops across the Potomac; the heavier bridge intended for artillery and baggage could not be built as planned.',
    },
    {
      label: 'Canal-boat error',
      value: 'Boats roughly 4–6 inches too wide for the lift lock',
      note: 'McClellan’s own later account gave a range of four to six inches. The episode rounds the mismatch to six inches.',
    },
    {
      label: 'Lower Potomac force',
      value: 'About 4,000 troops under Joseph Hooker',
      note: 'The proposed crossing against the Confederate river batteries was canceled when McClellan also canceled the march from Harpers Ferry toward Winchester.',
    },
    {
      label: 'Johnston’s field force',
      value: 'About 42,000 troops east of the Blue Ridge',
      note: 'This is the figure stated in the episode for the force ordered back toward the Rappahannock on March 7.',
    },
    {
      label: 'Jackson’s command',
      value: 'About 5,400 troops near Winchester',
      note: 'Jackson’s Valley force was excluded from Johnston’s withdrawal order.',
    },
    {
      label: 'Supply accumulation',
      value: 'More than 2 million pounds of bacon and salted meat',
      note: 'Johnston later wrote that the Confederate commissary had accumulated excessive stores around Manassas and the nearby meat-curing establishment.',
    },
    {
      label: 'Rail movement',
      value: 'As long as 36 hours for about 60 miles',
      note: 'The episode describes severe congestion on the single-track Orange and Alexandria Railroad between Manassas and Gordonsville.',
    },
    {
      label: 'Evacuation order',
      value: 'March 7, 1862',
      note: 'The last Confederate infantry left the Centreville–Manassas works by the evening of March 9.',
    },
    {
      label: 'Destroyed stores',
      value: 'Rail equipment, buildings, and commissary supplies burned',
      note: 'The episode states that one million pounds of meat were burned; that exact quantity was not independently established for this guide. The specific story that the smell of bacon first alerted United States scouts is presented as an allegation, not a confirmed fact.',
    },
    {
      label: 'Urbanna plan vote',
      value: '8 division commanders in favor, 4 opposed',
      note: 'McClellan called the vote on March 8 after Lincoln reported political accusations that the movement would leave Washington exposed.',
    },
    {
      label: 'Army reorganization',
      value: '12 divisions organized into 4 army corps',
      note: 'President’s General War Order No. 2 assigned McDowell, Sumner, Heintzelman, and Keyes as corps commanders on March 8.',
    },
    {
      label: 'Hampton Roads',
      value: 'CSS Virginia attacked March 8; USS Monitor fought her March 9',
      note: 'The Confederate ironclad’s continued existence affected planning for an army movement through the Chesapeake and operations near the Peninsula.',
    },
    {
      label: 'Command change',
      value: 'McClellan relieved as general-in-chief on March 11',
      note: 'He remained commander of the Army of the Potomac. Department commanders thereafter reported directly to the secretary of war.',
    },
    {
      label: 'Peninsula movement',
      value: 'First division embarked March 17, 1862',
      note: 'Hamilton’s division sailed from Alexandria to Fort Monroe, beginning the Army of the Potomac’s transfer.',
    },
    {
      label: 'Combat losses in this episode',
      value: 'None in the land operations described',
      note: 'The episode discusses planning, a failed bridging operation, evacuation, and maneuver. It references the separate Battle of Hampton Roads but does not recount its casualties.',
    },
    {
      label: 'Book recommendation',
      value:
        'Echoes of Glory: Illustrated Atlas of the Civil War by the editors of Time-Life Books',
    },
  ],
  maps: [
    {
      title: 'Johnston withdraws from Centreville and Manassas',
      caption:
        'This operational schematic shows Johnston’s March 7–9 withdrawal toward the Rappahannock, the congested railroad route toward Gordonsville, Jackson’s separate position near Winchester, and the United States advance from Washington on March 10. Positions are approximate and the map is not to scale.',
      source:
        'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
      image: '/images/ep129-northern-virginia-withdrawal.svg',
      alt: 'Schematic map of the Confederate withdrawal from Centreville and Manassas to the Rappahannock and the United States advance from Washington',
    },
    {
      title: 'The plan changes from Urbanna to Fort Monroe',
      caption:
        'Johnston’s new position near the Rappahannock could oppose a landing at Urbanna, eliminating the maneuver’s intended advantage. McClellan retained the waterborne concept but shifted the base to Fort Monroe and planned to advance up the Peninsula between the York and James Rivers. The schematic is not to scale.',
      source: 'https://www.presidency.ucsb.edu/documents/executive-order-454',
      image: '/images/ep129-urbanna-to-peninsula.svg',
      alt: 'Schematic map comparing the abandoned Urbanna route with the adopted route to Fort Monroe and up the Virginia Peninsula',
    },
  ],
  moments: [
    {
      time: '1:09',
      audioTime: 69,
      title: 'Lincoln’s order forces McClellan to disclose his plan',
      detail:
        'The episode resumes with the dispute between Lincoln’s proposed movement against Johnston at Manassas and McClellan’s plan to move by water to Urbanna and approach Richmond from the east.',
    },
    {
      time: '3:43',
      audioTime: 223,
      title: 'Pressure for an eastern offensive increases',
      detail:
        'Northern newspapers, Congress, and the Joint Committee on the Conduct of the War demanded action while Burnside, Thomas, and Grant won victories elsewhere.',
    },
    {
      time: '4:47',
      audioTime: 287,
      title: 'Stanton publicly calls for aggressive action',
      detail:
        'Secretary of War Edwin M. Stanton sent the New-York Tribune a February 19 statement calling for bold pursuit of the enemy. His early cooperation with McClellan had already given way to opposition.',
    },
    {
      time: '7:28',
      audioTime: 448,
      title: 'The Joint Committee questions McClellan',
      detail:
        'After McClellan recovered from typhoid fever, the congressional committee examined him for six hours. Its members distrusted his caution, Democratic politics, and limited-war approach.',
    },
    {
      time: '11:40',
      audioTime: 700,
      title: 'Willie Lincoln dies',
      detail:
        'The president’s eleven-year-old son died on February 20. McClellan sent Lincoln a letter of condolence and said that he was completing the military measures they had discussed.',
    },
    {
      time: '12:36',
      audioTime: 756,
      title: 'McClellan plans two preliminary operations',
      detail:
        'Before the Urbanna movement, McClellan intended to clear the Confederate batteries on the lower Potomac and restore the Baltimore and Ohio Railroad crossing at Harpers Ferry.',
    },
    {
      time: '14:03',
      audioTime: 843,
      title: 'The Harpers Ferry crossing begins',
      detail:
        'McClellan supervised the operation on February 26. A pontoon bridge carried the leading troops across, but a stronger bridge was required for the main force, artillery, and baggage.',
    },
    {
      time: '15:01',
      audioTime: 901,
      title: 'The canal boats do not fit the lock',
      detail:
        'Boats intended to support the heavier bridge could not pass through the lift lock into the Potomac. McClellan canceled the planned advance on Winchester and the simultaneous lower-Potomac crossing.',
    },
    {
      time: '16:06',
      audioTime: 966,
      title: 'Lincoln reacts to the failure',
      detail:
        'Lincoln summoned McClellan’s chief of staff, Randolph B. Marcy, and demanded to know why the lock had not been measured before the boats and resources were assembled.',
    },
    {
      time: '18:44',
      audioTime: 1124,
      title: 'The focus shifts to Confederate command',
      detail:
        'The episode compares Lincoln’s difficulties with McClellan to the long-running conflict between Jefferson Davis and Joseph E. Johnston over authority, communication, and military judgment.',
    },
    {
      time: '20:54',
      audioTime: 1254,
      title: 'Johnston recommends withdrawal',
      detail:
        'At a February 19 meeting with Davis and the Confederate cabinet, Johnston argued that the Centreville–Manassas position would become untenable when roads and weather permitted McClellan to use his superior force.',
    },
    {
      time: '22:15',
      audioTime: 1335,
      title: 'Johnston begins preparations without fixing a date with Davis',
      detail:
        'After hearing that the withdrawal had already become a public rumor, Johnston began moving surplus stores and withheld his schedule from the Confederate government.',
    },
    {
      time: '23:46',
      audioTime: 1426,
      title: 'Stores overwhelm the available transportation',
      detail:
        'Large stocks of baggage, rations, bacon, and salted meat had to move over a congested single-track railroad because muddy roads restricted wagon traffic.',
    },
    {
      time: '25:32',
      audioTime: 1532,
      title: 'Johnston orders the retreat',
      detail:
        'On March 7 Johnston directed roughly 42,000 troops east of the Blue Ridge to move toward the Rappahannock. Jackson’s smaller Valley force remained near Winchester.',
    },
    {
      time: '25:55',
      audioTime: 1555,
      title: 'The Manassas line is abandoned',
      detail:
        'By the evening of March 9 the Confederate infantry had left Centreville and Manassas. The rear guard destroyed rail equipment, buildings, and supplies that could not be removed; many heavy guns were left behind.',
    },
    {
      time: '26:18',
      audioTime: 1578,
      title: 'The episode explains its title',
      detail:
        'The hosts report the allegation that the smell of burning bacon helped alert United States scouts to the evacuation. The episode does not identify a primary witness for that specific claim.',
    },
    {
      time: '28:17',
      audioTime: 1697,
      title: 'Lincoln questions the Urbanna plan again',
      detail:
        'According to McClellan’s account, Lincoln told him that critics portrayed the movement as a plot to expose Washington. McClellan assembled his twelve division commanders for a formal vote.',
    },
    {
      time: '29:17',
      audioTime: 1757,
      title: 'The division commanders vote eight to four',
      detail:
        'Eight commanders supported the Urbanna operation and four opposed it. McClellan brought the commanders to the White House to report the result.',
    },
    {
      time: '29:27',
      audioTime: 1767,
      title: 'Lincoln imposes conditions on the movement',
      detail:
        'President’s General War Order No. 3 required Washington to remain secure, restricted the initial movement until the lower Potomac was clear, required Army-Navy action against the river batteries, and set March 18 as the deadline to begin moving onto the Chesapeake.',
    },
    {
      time: '30:14',
      audioTime: 1814,
      title: 'Lincoln creates four army corps',
      detail:
        'President’s General War Order No. 2 organized the active Army of the Potomac into corps under Irvin McDowell, Edwin V. Sumner, Samuel P. Heintzelman, and Erasmus D. Keyes.',
    },
    {
      time: '31:00',
      audioTime: 1860,
      title: 'CSS Virginia threatens the water route',
      detail:
        'Virginia attacked the United States blockading squadron in Hampton Roads on March 8. Monitor fought the Confederate ironclad on March 9, preventing Virginia from completing the destruction but leaving an operational threat in place.',
    },
    {
      time: '31:40',
      audioTime: 1900,
      title: 'Washington confirms Johnston’s withdrawal',
      detail:
        'News of the abandoned Centreville–Manassas line reached McClellan while he met with Lincoln and Stanton. He crossed the Potomac to organize a pursuit.',
    },
    {
      time: '32:28',
      audioTime: 1948,
      title: 'The Army of the Potomac marches to empty works',
      detail:
        'On March 10 United States columns entered Centreville and Manassas, finding burned stores, abandoned camps, and wooden Quaker guns. The evidence contradicted McClellan’s estimate of 150,000 Confederates in the position.',
    },
    {
      time: '33:23',
      audioTime: 2003,
      title: 'McClellan loses the general-in-chief role',
      detail:
        'Lincoln’s March 11 order relieved McClellan of command over the other military departments while leaving him in command of the Department and Army of the Potomac.',
    },
    {
      time: '35:54',
      audioTime: 2154,
      title: 'The Urbanna operation becomes impractical',
      detail:
        'Johnston’s new position near the Rappahannock could rapidly oppose a landing at Urbanna. McClellan therefore abandoned that landing point rather than advance overland from Manassas.',
    },
    {
      time: '36:31',
      audioTime: 2191,
      title: 'McClellan proposes Fort Monroe',
      detail:
        'McClellan asked his four corps commanders to approve a transfer farther down the Chesapeake to Fort Monroe, followed by an advance up the Virginia Peninsula toward Richmond.',
    },
    {
      time: '39:01',
      audioTime: 2341,
      title: 'The Peninsula movement begins',
      detail:
        'On March 17 the first Army of the Potomac division embarked at Alexandria for Fort Monroe, one day before the deadline in Lincoln’s March 8 order.',
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
            'Approved the waterborne operation with conditions, created the Army of the Potomac’s corps, and ended McClellan’s authority over the other military departments',
        },
        {
          commander: 'Edwin M. Stanton',
          command: 'Secretary of War',
          subordinates:
            'Directed War Department administration, pressed for action, and became the reporting authority for the separate military departments after March 11',
        },
        {
          commander: 'George B. McClellan',
          command:
            'General-in-chief through March 11; commander, Army of the Potomac',
          subordinates:
            'Directed the Harpers Ferry operation, pursued Johnston after the evacuation, replaced the Urbanna plan with the Fort Monroe operation, and retained field command after losing the general-in-chief post',
        },
        {
          commander: 'Randolph B. Marcy',
          command: 'Chief of staff, Army of the Potomac',
          subordinates:
            'McClellan’s chief of staff and father-in-law; reported Lincoln’s angry reaction to the Harpers Ferry bridge failure',
        },
        {
          commander: 'Irvin McDowell',
          command: 'I Corps, Army of the Potomac',
          subordinates:
            'One of the four corps commanders appointed by Lincoln on March 8; had voted against the Urbanna plan',
        },
        {
          commander: 'Edwin V. Sumner',
          command: 'II Corps, Army of the Potomac',
          subordinates:
            'One of the four corps commanders appointed by Lincoln on March 8; had voted against the Urbanna plan',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'III Corps, Army of the Potomac',
          subordinates:
            'One of the four corps commanders appointed by Lincoln on March 8; had voted against the Urbanna plan',
        },
        {
          commander: 'Erasmus D. Keyes',
          command: 'IV Corps, Army of the Potomac',
          subordinates:
            'One of the four corps commanders appointed by Lincoln on March 8',
        },
        {
          commander: 'Joseph Hooker',
          command: 'Division commander, Army of the Potomac',
          subordinates:
            'Assigned about 4,000 troops for the proposed crossing against Confederate batteries on the lower Potomac',
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
            'Approved the principle of withdrawing from the Centreville–Manassas line but was not told when Johnston began the movement',
        },
        {
          commander: 'Judah P. Benjamin',
          command: 'Secretary of War',
          subordinates:
            'Civilian head of the Confederate War Department during the February 19 strategy conference and the preparations for withdrawal',
        },
        {
          commander: 'Joseph E. Johnston',
          command:
            'Department of Northern Virginia and principal field army near Manassas',
          subordinates:
            'Ordered the March 7 withdrawal from Centreville and Manassas and established a new defensive position behind the Rappahannock',
        },
        {
          commander: 'Thomas J. “Stonewall” Jackson',
          command: 'Valley District',
          subordinates:
            'Commanded the approximately 5,400 troops left near Winchester rather than included in Johnston’s east-of-the-Blue-Ridge withdrawal',
        },
        {
          commander: 'J. E. B. Stuart',
          command: 'Cavalry brigade and rear guard',
          subordinates:
            'Covered Johnston’s withdrawal from the Bull Run line after the infantry departed',
        },
        {
          commander: 'Franklin Buchanan',
          command: 'Flag officer commanding CSS Virginia on March 8',
          subordinates:
            'Led Virginia’s attack on the United States blockading squadron before being wounded; command passed to Lieutenant Catesby ap Roger Jones for the March 9 engagement with Monitor',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Directed the Army of the Potomac’s preliminary operations and changed its destination from Urbanna to Fort Monroe after Johnston withdrew',
      side: 'United States',
      image: '/images/ep129-george-mcclellan-1861.jpg',
      source: 'https://www.loc.gov/item/2005683068/',
    },
    {
      name: 'Abraham Lincoln',
      role: 'Approved the Chesapeake movement with conditions, imposed the four-corps structure, and removed McClellan from the general-in-chief role',
      side: 'United States',
    },
    {
      name: 'Edwin M. Stanton',
      role: 'Managed the War Department, publicly demanded offensive action, and became the direct reporting authority for military departments after March 11',
      side: 'United States',
    },
    {
      name: 'Randolph B. Marcy',
      role: 'Served as McClellan’s chief of staff and received Lincoln’s criticism after the Harpers Ferry bridge plan failed',
      side: 'United States',
    },
    {
      name: 'Irvin McDowell',
      role: 'Voted against the Urbanna plan and was assigned command of I Corps by Lincoln',
      side: 'United States',
    },
    {
      name: 'Edwin V. Sumner',
      role: 'Voted against the Urbanna plan and was assigned command of II Corps by Lincoln',
      side: 'United States',
    },
    {
      name: 'Samuel P. Heintzelman',
      role: 'Voted against the Urbanna plan and was assigned command of III Corps by Lincoln',
      side: 'United States',
    },
    {
      name: 'Erasmus D. Keyes',
      role: 'Supported the waterborne concept subject to conditions and was assigned command of IV Corps',
      side: 'United States',
    },
    {
      name: 'Joseph Hooker',
      role: 'Prepared a division-sized operation against the Confederate batteries blockading the lower Potomac',
      side: 'United States',
    },
    {
      name: 'Jefferson Davis',
      role: 'Authorized withdrawal in principle but did not receive Johnston’s timetable or timely notice that the movement was underway',
      side: 'Confederacy',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Withdrew the principal Confederate field army from Manassas to the Rappahannock before McClellan could attack or outflank it',
      side: 'Confederacy',
      image: '/images/ep129-joseph-johnston.jpg',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      name: 'Judah P. Benjamin',
      role: 'Served as Confederate secretary of war during Johnston’s February strategy conference and the preparation for evacuation',
      side: 'Confederacy',
    },
    {
      name: 'Thomas J. “Stonewall” Jackson',
      role: 'Held the Confederate position near Winchester with a force excluded from Johnston’s March 7 withdrawal order',
      side: 'Confederacy',
    },
    {
      name: 'J. E. B. Stuart',
      role: 'Commanded cavalry covering the withdrawal from the Bull Run line',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep129-quaker-guns-centreville.jpg',
      alt: 'Former Confederate fortification on the heights at Centreville with wooden Quaker guns in March 1862',
      caption:
        'George N. Barnard and James F. Gibson photographed the abandoned Centreville fortifications and their wooden Quaker guns after the United States advance.',
      source: 'https://www.loc.gov/item/2018666126/',
    },
    {
      image: '/images/ep129-confederate-winter-quarters-manassas.jpg',
      alt: 'Confederate winter quarters at Manassas photographed after the evacuation',
      caption:
        'Timothy O’Sullivan photographed the remains of Confederate winter quarters at Manassas in 1862. Johnston’s army had accumulated extensive camps, baggage, and stores during the winter.',
      source: 'https://www.loc.gov/item/2018666131/',
    },
    {
      image: '/images/ep129-monitor-virginia.jpg',
      alt: 'Lithograph showing USS Monitor and CSS Virginia fighting at close range in Hampton Roads',
      caption:
        'A lithograph after W. F. Halsall depicts Monitor and Virginia on March 9. The Confederate ironclad’s continued presence affected the naval guarantees required for McClellan’s Peninsula movement.',
      source:
        'https://www.history.navy.mil/our-collections/photography/wars-and-events/the-american-civil-war--1861-1865/uss-monitor-vs-virginia-9-march-1862/nh-1053-battle-between-uss-monitor-and-css-virginia-in-hampton-r.html',
    },
    {
      image: '/images/ep129-joseph-johnston.jpg',
      alt: 'Portrait of Confederate General Joseph E. Johnston in civilian clothing',
      caption:
        'Johnston concluded that the Centreville–Manassas position could not be held against McClellan’s larger army once the roads improved and withdrew before a United States attack.',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      image: '/images/ep129-george-mcclellan-1861.jpg',
      alt: 'Major General George B. McClellan standing in uniform in 1861',
      caption:
        'McClellan retained command of the Army of the Potomac after March 11 and adapted his amphibious concept to use Fort Monroe as the new base.',
      source: 'https://www.loc.gov/item/2005683068/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 129 page',
      url: 'https://civilwarpodcast.org/2015/10/18/civil-war-podcast-episode-129/',
    },
    {
      label:
        'Library of Congress: McClellan’s complete report on the Army of the Potomac',
      url: 'https://www.loc.gov/item/08017394/',
    },
    {
      label:
        'Official Records via Ohio State University: McClellan’s general report, Series I, Volume V',
      url: 'https://ehistory.osu.edu/books/official-records/005/0041',
    },
    {
      label:
        'American Presidency Project: President’s General War Order No. 2, March 8, 1862',
      url: 'https://www.presidency.ucsb.edu/documents/executive-order-presidents-general-war-order-no-2',
    },
    {
      label:
        'American Presidency Project: President’s General War Order No. 3, March 8, 1862',
      url: 'https://www.presidency.ucsb.edu/documents/executive-order-presidents-general-war-order-no-3',
    },
    {
      label:
        'American Presidency Project: President’s Special War Order No. 3, March 11, 1862',
      url: 'https://www.presidency.ucsb.edu/documents/executive-order-presidents-special-war-order-no-3',
    },
    {
      label:
        'American Presidency Project: Lincoln’s March 13 directions for the Fort Monroe movement',
      url: 'https://www.presidency.ucsb.edu/documents/executive-order-454',
    },
    {
      label:
        'U.S. Army Center of Military History: Civil War campaign summaries',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
    },
    {
      label: 'Naval History and Heritage Command: Battle of Hampton Roads',
      url: 'https://www.history.navy.mil/content/history/museums/hrnm/explore/the-battle-of-hampton-roads.html',
    },
    {
      label:
        'Prince William County Historical Commission: The Civil War in Prince William County',
      url: 'https://www.pwcva.gov/assets/documents/library/HistComm_Book_The_Civil_War_in_PWC.pdf',
    },
    {
      label: 'Joseph E. Johnston: Narrative of Military Operations, 1874',
      url: 'https://archive.org/details/narrativeofmilit00john',
    },
    {
      label: 'James Longstreet: From Manassas to Appomattox',
      url: 'https://www.gutenberg.org/files/38418/38418-h/38418-h.htm',
    },
    {
      label: 'Library of Congress: Centreville fortification with Quaker guns',
      url: 'https://www.loc.gov/item/2018666126/',
    },
    {
      label: 'Library of Congress: Confederate winter quarters at Manassas',
      url: 'https://www.loc.gov/item/2018666131/',
    },
    {
      label: 'Library of Congress: Joseph E. Johnston portrait',
      url: 'https://www.loc.gov/item/2018666539/',
    },
  ],
} satisfies Enrichment;
