import type { Enrichment } from '../types';

export const enrichment = {
  date: 'April 5–May 4, 1862',
  place:
    'The Virginia Peninsula between the York and James Rivers: Yorktown and the Warwick River line, Gloucester Point, Lee’s Mill, the roads toward Williamsburg, and the York River route toward West Point',
  result:
    'The Army of the Potomac prepared a formal siege rather than forcing the Yorktown–Warwick line. The delay allowed Joseph E. Johnston to reinforce the position and organize his army, but the United States siege artillery made the line untenable. Johnston evacuated during the night of May 3–4. United States troops occupied Yorktown and Gloucester Point, captured dozens of heavy guns, and began a pursuit toward Williamsburg. The Confederates gave up the lower Peninsula but preserved their field army and gained nearly a month for the defense of Richmond. The National Park Service classifies the Yorktown operation as indecisive',
  facts: [
    {
      label: 'Operation',
      value: 'Siege of Yorktown, April 5–May 4, 1862',
    },
    {
      label: 'Confederate position',
      value: 'Yorktown–Warwick line',
      note: 'Earthworks at Yorktown and Gloucester Point were connected to defenses extending along the dammed and flooded Warwick River toward the James River.',
    },
    {
      label: 'Confederate strength after reinforcement',
      value: 'Up to about 56,000',
      note: 'The National Park Service gives 56,000 as the force ultimately concentrated under Johnston. Strength figures vary by date, organizational scope, and whether present-for-duty or aggregate totals are used.',
    },
    {
      label: 'United States siege command',
      value: 'Brigadier General Fitz John Porter',
      note: 'Porter directed the siege preparations while continuing to command his division.',
    },
    {
      label: 'Siege artillery',
      value: '101 siege guns and more than 40 siege mortars',
      note: 'These are National Park Service figures for the siege arsenal. The episode says 114 siege pieces were nearly ready by May 3 and separately mentions more than 300 field pieces. The totals use different dates or counting conventions and should not be treated as directly equivalent.',
    },
    {
      label: 'Largest weapons described in the episode',
      value: '200-pounder Parrott rifles and 13-inch seacoast mortars',
      note: 'Moving and mounting these weapons required corduroy roads, barges, large horse teams, and block-and-tackle equipment.',
    },
    {
      label: 'Franklin’s reinforcement',
      value: 'About 12,000 soldiers arrived April 22',
      note: 'The episode gives this estimate for William B. Franklin’s division, transferred from McDowell’s retained command. McClellan initially considered using it against Gloucester Point and later sent it by water toward West Point after the evacuation.',
    },
    {
      label: 'Planned bombardment',
      value: 'Early May; never executed as planned',
      note: 'The episode, the National Park Service Yorktown history, and the U.S. Army campaign history give May 5. A separate National Park Service battle summary gives dawn on May 4. Johnston’s night evacuation preempted either timetable.',
    },
    {
      label: 'Evacuation',
      value: 'Night of May 3–4, 1862',
      note: 'Johnston’s report states that he ordered the movement toward Williamsburg after the United States batteries appeared nearly ready.',
    },
    {
      label: 'Captured Confederate artillery',
      value:
        'At least 71 heavy guns; 77 guns and mortars in McClellan’s later total',
      note: 'McClellan reported 71 heavy guns by the evening of May 4 and later listed 77 guns and mortars from Yorktown, Gloucester Point, and the other abandoned works. The episode says more than 70.',
    },
    {
      label: 'Yorktown land-mine casualties',
      value: 'Several United States soldiers killed; exact total uncertain',
      note: 'The National Park Service says the mines claimed several lives. The episode estimates four or five killed and about a dozen wounded, but it presents those numbers as approximate.',
    },
    {
      label: 'May 4 pursuit',
      value: 'Stoneman reached the Confederate rear guard east of Williamsburg',
      note: 'Confederate artillery and infantry checked the initial United States cavalry advance at Magruder’s earlier line of redoubts. The larger Battle of Williamsburg followed on May 5.',
    },
    {
      label: 'Senior commanders killed or mortally wounded',
      value: 'None in the operations covered by this episode',
    },
    {
      label: 'Transcript numbering discrepancy',
      value: 'The audio introduction says episode 133',
      note: 'The official podcast page and dataset identify this installment as episode 132, “Peninsula Campaign (Part the Third).” The next installment is episode 133, Part the Fourth.',
    },
    {
      label: 'Book recommendation',
      value:
        'The Peninsula Campaign and the Necessity of Emancipation: African Americans and the Fight for Freedom by Glenn David Brasher',
    },
  ],
  maps: [
    {
      title: 'Operational setting on the Virginia Peninsula',
      caption:
        'Johnston reinforced the Yorktown–Warwick line after McClellan advanced from Fort Monroe. On May 3–4 the Confederates withdrew through Williamsburg toward Richmond. McClellan pursued by road and ordered Franklin’s division up the York River toward West Point in an attempt to threaten the retreat. This explanatory map is schematic and not to scale.',
      source:
        'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
      image: '/images/ep132-peninsula-operations.svg',
      alt: 'Schematic map of the Virginia Peninsula showing United States and Confederate movements between Fort Monroe, Yorktown, Williamsburg, West Point, and Richmond',
    },
    {
      title: 'The May 3–4 evacuation and pursuit',
      caption:
        'Two Confederate columns left the Warwick line by the Yorktown and Lee’s Mill roads. George Stoneman’s cavalry and horse artillery began the United States pursuit around noon on May 4 and met the rear guard near the fortified line east of Williamsburg. Four divisions were also ordered toward West Point by water. Roads, works, and movements are approximate.',
      source:
        'https://www.nps.gov/york/learn/historyculture/yorktown-in-the-civil-war.htm',
      image: '/images/ep132-yorktown-williamsburg-pursuit.svg',
      alt: 'Schematic map of the Confederate withdrawal from Yorktown, United States pursuit toward Williamsburg, and planned water movement toward West Point',
    },
    {
      title: 'Official plan of the Siege of Yorktown',
      caption:
        'Henry L. Abbot’s contemporary U.S. Army Corps of Engineers plan records the United States siege works, proposed battery armaments, Confederate fortifications, headquarters, roads, creeks, and terrain from April 5 through May 3. The map is oriented with north toward the upper right.',
      source: 'https://www.loc.gov/item/99446373/',
      image: '/images/ep132-official-siege-plan.jpg',
      alt: 'United States Army Corps of Engineers official plan of the Siege of Yorktown from April 5 to May 3, 1862',
    },
  ],
  moments: [
    {
      time: '1:24',
      audioTime: 84,
      title: 'The Army of the Potomac is stopped at Yorktown',
      detail:
        'The episode resumes with McClellan’s army on the Peninsula and the president withholding McDowell’s corps after concluding that Washington had not been left adequately protected.',
    },
    {
      time: '2:38',
      audioTime: 158,
      title: 'The Warwick line disrupts McClellan’s timetable',
      detail:
        'Resistance along the Warwick River extended the obstacle beyond Yorktown. McClellan halted the intended rapid advance and spent most of April preparing a siege.',
    },
    {
      time: '4:43',
      audioTime: 283,
      title: 'Lincoln waits for action',
      detail:
        'Lincoln followed events from the War Department telegraph office while the Army of the Potomac remained before Yorktown and fighting unfolded at Pittsburg Landing in Tennessee.',
    },
    {
      time: '5:01',
      audioTime: 301,
      title: 'Lincoln urges an immediate break in the line',
      detail:
        'Lincoln telegraphed McClellan that he should break the line between Yorktown and the Warwick River at once. McClellan continued siege preparations.',
    },
    {
      time: '5:18',
      audioTime: 318,
      title: 'McClellan chooses formal siege operations',
      detail:
        'He rejected an infantry assault in favor of the slower method of constructing batteries and placing heavy artillery against the Confederate defenses.',
    },
    {
      time: '6:57',
      audioTime: 417,
      title: 'The delay permits Confederate concentration',
      detail:
        'The month before Yorktown gave Johnston time to transfer forces from northern Virginia to the Peninsula, placing the main Confederate field army between McClellan and Richmond.',
    },
    {
      time: '8:28',
      audioTime: 508,
      title: 'Johnston inspects Magruder’s defenses',
      detail:
        'Johnston judged the line too weak for a sustained defense against McClellan’s army and heavy artillery and sought authority to withdraw closer to Richmond.',
    },
    {
      time: '10:00',
      audioTime: 600,
      title: 'Confederate leaders meet in Richmond on April 14',
      detail:
        'Jefferson Davis and his advisers Robert E. Lee and George W. Randolph met Johnston, Gustavus W. Smith, and James Longstreet to decide whether the army should hold Yorktown or retreat.',
    },
    {
      time: '11:22',
      audioTime: 682,
      title: 'Davis orders the Yorktown line held',
      detail:
        'After a prolonged strategy conference, Davis accepted the case for using the lower Peninsula’s defensive advantages and directed Johnston to remain. Johnston complied while expecting that withdrawal would become necessary.',
    },
    {
      time: '12:06',
      audioTime: 726,
      title: 'United States soldiers build the siege works',
      detail:
        'Working largely at night, soldiers dug a parallel about a mile from the Confederate line and built roads, ramps, platforms, magazines, and protected battery positions.',
    },
    {
      time: '12:43',
      audioTime: 763,
      title: 'Heavy artillery moves through the mud',
      detail:
        'Barges carried the largest pieces partway up creeks from the York River. Corduroy roads, large horse teams, and rigging then moved the guns to their platforms.',
    },
    {
      time: '13:19',
      audioTime: 799,
      title: 'The siege train nears readiness',
      detail:
        'By May 3 the episode reports 114 siege pieces nearly in position in addition to the Army of the Potomac’s field artillery. Authoritative summaries use different totals according to weapon type and date.',
    },
    {
      time: '13:45',
      audioTime: 825,
      title: 'Franklin’s division reaches McClellan',
      detail:
        'About 12,000 troops from William B. Franklin’s division arrived on April 22. McClellan considered an amphibious move near Gloucester Point but initially kept the division aboard its transports.',
    },
    {
      time: '14:16',
      audioTime: 856,
      title: 'Porter directs the siege preparations',
      detail:
        'Fitz John Porter supervised the work and used Thaddeus Lowe’s observation balloons. During one flight a broken mooring carried Porter over the Confederate line before a change of wind returned the balloon.',
    },
    {
      time: '15:13',
      audioTime: 913,
      title: 'Johnston prepares to leave',
      detail:
        'As the United States batteries approached readiness, Johnston notified Richmond and ordered the army to evacuate Yorktown during the night of May 3.',
    },
    {
      time: '15:31',
      audioTime: 931,
      title: 'Confederate artillery covers the evacuation',
      detail:
        'A heavy barrage masked the movement. After dark the Confederate columns left the Yorktown–Warwick defenses and moved toward Williamsburg.',
    },
    {
      time: '17:04',
      audioTime: 1024,
      title: 'Johnston divides the withdrawal into four commands',
      detail:
        'The episode identifies commands under Longstreet, D. H. Hill, Gustavus W. Smith, and David R. Jones, who replaced the ill Magruder. J. E. B. Stuart’s cavalry covered the rear.',
    },
    {
      time: '17:34',
      audioTime: 1054,
      title: 'United States troops find Yorktown abandoned',
      detail:
        'At daybreak on May 4, McClellan’s army entered the works without the planned bombardment and found heavy artillery and military stores that the Confederates could not remove.',
    },
    {
      time: '18:04',
      audioTime: 1084,
      title: 'Buried explosive devices slow the occupation',
      detail:
        'Confederate troops left artillery shells fitted with pressure fuses or trip wires in and around the abandoned works. The devices were then called torpedoes and are now described as land mines.',
    },
    {
      time: '18:49',
      audioTime: 1129,
      title: 'The mine casualties remain approximate',
      detail:
        'The episode estimates that four or five United States soldiers were killed and roughly a dozen wounded. National Park Service material confirms several deaths but does not give the same precise total.',
    },
    {
      time: '19:53',
      audioTime: 1193,
      title: 'The United States pursuit begins late',
      detail:
        'Surprise at the evacuation and concern about the mines delayed the cavalry until about noon. Mud also slowed the infantry, Confederate wagons, and Confederate artillery.',
    },
    {
      time: '20:28',
      audioTime: 1228,
      title: 'Stoneman reaches the rear guard',
      detail:
        'George Stoneman’s cavalry and horse artillery caught Confederate cavalry several miles short of Williamsburg. Confederate artillery and infantry then checked the pursuit near the prepared works.',
    },
    {
      time: '20:58',
      audioTime: 1258,
      title: 'Fort Magruder anchors the Williamsburg line',
      detail:
        'Thirteen redoubts extended across the narrow Peninsula east of Williamsburg. Fort Magruder covered the junction of the Yorktown and Lee’s Mill roads, with marshes and creeks protecting the flanks.',
    },
    {
      time: '22:02',
      audioTime: 1322,
      title: 'Neither army commander is at the initial contact',
      detail:
        'McClellan remained near Yorktown to arrange a water movement toward West Point. Johnston had moved beyond Williamsburg because he anticipated an attempt to cut his line of retreat.',
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
            'Required the protection of Washington and continued to press McClellan for prompt action at Yorktown',
        },
        {
          commander: 'Edwin M. Stanton',
          command: 'Secretary of War',
          subordinates:
            'Directed the War Department and received McClellan’s reports on the occupation and pursuit',
        },
        {
          commander: 'George B. McClellan',
          command: 'Commander, Army of the Potomac',
          subordinates:
            'Directed the siege, the May 4 occupation, the land pursuit, and the planned water movement toward West Point',
        },
        {
          commander: 'Fitz John Porter',
          command: 'Division commander and director of siege operations',
          subordinates:
            'Supervised construction of approaches and batteries and observed the Confederate position from balloons',
        },
        {
          commander: 'William B. Franklin',
          command:
            'Division commander, formerly assigned to McDowell’s I Corps',
          subordinates:
            'Reached the Peninsula on April 22 and was assigned to the water movement toward West Point after Yorktown fell',
        },
        {
          commander: 'George Stoneman',
          command: 'Chief of cavalry, Army of the Potomac',
          subordinates:
            'Led the cavalry and horse artillery pursuit toward Williamsburg on May 4',
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
            'Directed national strategy and ordered Johnston to continue defending the lower Peninsula after the April 14 conference',
        },
        {
          commander: 'George W. Randolph',
          command: 'Secretary of War',
          subordinates:
            'Served as the civilian head of the Confederate War Department and participated in the April 14 strategy conference',
        },
        {
          commander: 'Robert E. Lee',
          command: 'Military adviser to President Davis',
          subordinates:
            'Argued that the Peninsula offered advantages to an outnumbered defender and supported holding the Yorktown line',
        },
        {
          commander: 'Joseph E. Johnston',
          command:
            'Department of Northern Virginia and principal field army on the Peninsula',
          subordinates:
            'Assumed overall field command, opposed a prolonged defense at Yorktown, and ordered the May 3–4 withdrawal',
        },
        {
          commander:
            'James Longstreet, D. H. Hill, Gustavus W. Smith, and David R. Jones',
          command: 'Senior commanders in Johnston’s retreat organization',
          subordinates:
            'Led the four principal commands moving from the Yorktown–Warwick line; Jones temporarily replaced the ill John B. Magruder',
        },
        {
          commander: 'J. E. B. Stuart',
          command: 'Cavalry commander and rear guard',
          subordinates:
            'Covered the Confederate withdrawal and skirmished with Stoneman’s pursuit on May 4',
        },
        {
          commander: 'Gabriel J. Rains',
          command: 'Brigade commander at Yorktown',
          subordinates:
            'Promoted the use of explosive “torpedoes”; mines were left around the evacuated position and caused United States casualties',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Commanded the Army of the Potomac, chose formal siege operations, and directed the occupation and pursuit after Johnston withdrew',
      side: 'United States',
    },
    {
      name: 'Abraham Lincoln',
      role: 'Pressed McClellan to break the Yorktown–Warwick line while following both the Peninsula operations and the fighting at Pittsburg Landing',
      side: 'United States',
    },
    {
      name: 'Fitz John Porter',
      role: 'Directed the United States siege preparations and conducted aerial observation of the Confederate position',
      side: 'United States',
      image: '/images/ep132-fitz-john-porter.jpg',
      source: 'https://www.loc.gov/item/2017652160/',
    },
    {
      name: 'William B. Franklin',
      role: 'Brought a roughly 12,000-man division to the Peninsula and received orders to move by water toward West Point',
      side: 'United States',
    },
    {
      name: 'George Stoneman',
      role: 'Led the cavalry and horse artillery pursuit toward Williamsburg on May 4',
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Concentrated the main Confederate army on the Peninsula, argued that Yorktown was untenable, and ordered the evacuation',
      side: 'Confederacy',
    },
    {
      name: 'Jefferson Davis',
      role: 'Ordered Johnston to hold the Yorktown line after the April 14 strategy conference',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Lee',
      role: 'Served as Davis’s military adviser and supported continuing the defense of the lower Peninsula',
      side: 'Confederacy',
    },
    {
      name: 'George W. Randolph',
      role: 'Served as Confederate secretary of war and participated in the April 14 strategy conference',
      side: 'Confederacy',
    },
    {
      name: 'James Longstreet',
      role: 'Commanded one of Johnston’s major formations and helped organize the withdrawal toward Williamsburg',
      side: 'Confederacy',
    },
    {
      name: 'Gustavus W. Smith',
      role: 'Served as Johnston’s second in command, attended the April 14 conference, and led a division in the withdrawal',
      side: 'Confederacy',
    },
    {
      name: 'John B. Magruder',
      role: 'Built the Peninsula defenses and remained a senior subordinate after Johnston assumed overall command; illness kept him from leading his command during the withdrawal',
      side: 'Confederacy',
    },
    {
      name: 'Gabriel J. Rains',
      role: 'Commanded a brigade at Yorktown and advocated explosive devices that were left in the abandoned works',
      side: 'Confederacy',
      image: '/images/ep132-gabriel-rains.jpg',
      source: 'https://www.loc.gov/item/2018670379/',
    },
    {
      name: 'J. E. B. Stuart',
      role: 'Led the cavalry rear guard covering Johnston’s withdrawal',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep132-federal-battery-no-1.jpg',
      alt: 'United States soldiers and heavy rifled guns in Federal Battery Number 1 at Yorktown',
      caption:
        'Federal Battery No. 1 mounted the heavy rifled artillery prepared for the Yorktown bombardment. The Library of Congress identifies this May 1862 photograph as one view from a multi-image mount showing one 200-pounder and five 100-pounder rifles.',
      source: 'https://www.loc.gov/item/2023634123/',
    },
    {
      image: '/images/ep132-mcclellan-headquarters.jpg',
      alt: 'Tents and personnel at George B. McClellan’s Camp Winfield Scott headquarters near Yorktown',
      caption:
        'James F. Gibson photographed McClellan’s headquarters near Yorktown on May 3, the day Johnston began the final evacuation of the Confederate line.',
      source: 'https://www.loc.gov/item/2018666134/',
    },
    {
      image: '/images/ep132-red-redoubt.jpg',
      alt: 'Alfred Waud drawing of United States troops taking possession of a Confederate redoubt near Yorktown',
      caption:
        'Alfred R. Waud recorded soldiers of the 40th and 38th New York taking possession of the Red Redoubt near Yorktown at 6 a.m. after the Confederate evacuation.',
      source: 'https://www.loc.gov/item/2004660046/',
    },
    {
      image: '/images/ep132-gabriel-rains.jpg',
      alt: 'Wartime portrait of Confederate Brigadier General Gabriel J. Rains',
      caption:
        'Gabriel J. Rains commanded a brigade in the Yorktown defenses and advocated the explosive devices then called torpedoes. The devices left after the evacuation killed several United States soldiers.',
      source: 'https://www.loc.gov/item/2018670379/',
    },
    {
      image: '/images/ep132-fitz-john-porter.jpg',
      alt: 'Major General Fitz John Porter standing in uniform with a sword and United States flag in March 1862',
      caption:
        'Fitz John Porter directed the construction and preparation of McClellan’s siege works and also used Thaddeus Lowe’s balloons to observe the Confederate position.',
      source: 'https://www.loc.gov/item/2017652160/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 132 page',
      url: 'https://civilwarpodcast.org/2015/11/08/civil-war-podcast-episode-132/',
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
      label: 'National Park Service: Confederate units at Yorktown',
      url: 'https://www.nps.gov/york/learn/historyculture/confedunits.htm',
    },
    {
      label: 'National Park Service: United States units at Yorktown',
      url: 'https://www.nps.gov/york/learn/historyculture/unionunits01.htm',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
    },
    {
      label:
        'National Archives: Official Records of the Union and Confederate Armies',
      url: 'https://www.archives.gov/research/alic/reference/military/civil-war-armies-records.html',
    },
    {
      label:
        'Official Records: Joseph E. Johnston’s report, April 15–May 19, 1862',
      url: 'https://www.historyofwar.org/sources/acw/officialrecords/vol011chap023part1/00015_01.html',
    },
    {
      label:
        'Library of Congress: McClellan’s official report on the Army of the Potomac',
      url: 'https://www.loc.gov/item/08010508/',
    },
    {
      label: 'Library of Congress: official plan of the Siege of Yorktown',
      url: 'https://www.loc.gov/item/99446373/',
    },
    {
      label:
        'Library of Congress: Robert Knox Sneden map of the Yorktown lines',
      url: 'https://www.loc.gov/item/gvhs01.vhs00248/',
    },
    {
      label: 'Library of Congress: Federal Battery No. 1 at Yorktown',
      url: 'https://www.loc.gov/item/2023634123/',
    },
    {
      label: 'Library of Congress: McClellan’s headquarters near Yorktown',
      url: 'https://www.loc.gov/item/2018666134/',
    },
    {
      label: 'Library of Congress: Waud drawing of the occupied Red Redoubt',
      url: 'https://www.loc.gov/item/2004660046/',
    },
    {
      label: 'Library of Congress: Gabriel J. Rains portrait',
      url: 'https://www.loc.gov/item/2018670379/',
    },
    {
      label: 'Library of Congress: Fitz John Porter portrait, March 1862',
      url: 'https://www.loc.gov/item/2017652160/',
    },
    {
      label: 'Army Historical Foundation: mine warfare in the Civil War',
      url: 'https://armyhistory.org/mine-warfare-in-the-civil-war/',
    },
    {
      label:
        'University of North Carolina Press: The Peninsula Campaign and the Necessity of Emancipation',
      url: 'https://uncpress.org/9781469617503/the-peninsula-campaign-and-the-necessity-of-emancipation/',
    },
  ],
} satisfies Enrichment;
