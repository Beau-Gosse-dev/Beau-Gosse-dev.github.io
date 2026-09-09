import type { Enrichment } from '../types';

export const enrichment = {
  date: 'May 4-7, 1862',
  place:
    "The Virginia Peninsula from Yorktown through Williamsburg to Eltham's Landing near West Point, Virginia",
  result:
    "The Battle of Williamsburg on May 5 and the fight at Eltham's Landing on May 7 were tactically inconclusive. Operationally, the Confederate rear guard achieved its purpose: it delayed and contained the United States pursuit while Joseph E. Johnston's army, artillery, and trains continued toward Richmond. Hancock repulsed Early's poorly coordinated attack at Williamsburg, but the opportunity against the Confederate flank was not exploited. Franklin established a bridgehead at Eltham's Landing but did not reach the retreat road in time to block Johnston's column",
  facts: [
    {
      label: 'Battle of Williamsburg',
      value: 'May 5, 1862',
      note: 'Also called the Battle of Fort Magruder; the National Park Service classifies the result as indecisive.',
    },
    {
      label: 'Rear-guard objective',
      value: "Protect Johnston's withdrawal toward Richmond",
      note: 'Longstreet held the prepared Williamsburg line while Confederate trains struggled over rain-soaked roads.',
    },
    {
      label: 'Williamsburg defensive position',
      value: 'Fort Magruder and a line of smaller redoubts',
      note: 'Creeks, swampy ground, felled timber, and the narrow Peninsula restricted the routes of approach. Contemporary accounts and later summaries describe 13 smaller redoubts in addition to Fort Magruder.',
    },
    {
      label: 'Williamsburg casualties',
      value: 'About 2,300 United States and 1,600 Confederate',
      note: 'The NPS battle database gives 2,283 and 1,560. Other authoritative summaries give approximately 2,300 and 1,600, while a commonly cited Confederate total of 1,682 includes the May 4 cavalry fighting. The 5th North Carolina return was omitted from one Official Records-based tabulation.',
    },
    {
      label: "Hooker's division",
      value: 'Fought unsupported for much of May 5',
      note: "Kearny's arriving division stabilized the United States left after Confederate attacks pushed Hooker's line toward the Lee's Mill Road.",
    },
    {
      label: "Hancock's flanking force",
      value: 'About 3,400 infantry and eight guns',
      note: "Hancock crossed Cub Creek, occupied two empty redoubts on the Confederate left, and repulsed elements of Early's brigade.",
    },
    {
      label: "Early's brigade losses",
      value: '508 reported in the episode',
      note: 'The episode says the 5th North Carolina alone lost 302 killed, wounded, or captured. Published tabulations differ because returns are incomplete and may separate that regiment from the rest of the brigade.',
    },
    {
      label: 'Senior officers killed at Williamsburg',
      value: 'At least four regimental commanders',
      note: 'United States Lieutenant Colonel John P. Van Leer and Confederate Colonel George T. Ward, Lieutenant Colonel Thomas E. Irby, and Colonel Christopher H. Mott were killed.',
    },
    {
      label: 'Hancock becomes "the Superb"',
      value: "McClellan praised Hancock's performance",
      note: 'Newspaper use of the phrase helped establish the nickname after the battle.',
    },
    {
      label: "Battle of Eltham's Landing",
      value: 'May 7, 1862',
      note: 'Also called Barhamsville or West Point; the National Park Service classifies it as indecisive.',
    },
    {
      label: "Eltham's Landing casualties",
      value: 'Approximately 186 United States and 48 Confederate',
      note: 'The NPS battle database gives a total of 234. Some secondary accounts give a slightly higher United States figure.',
    },
    {
      label: 'Operational outcome at Eltham',
      value: 'The bridgehead did not cut the Confederate retreat route',
      note: "Hood's brigade pushed the United States picket line back before disengaging; Johnston's column continued toward Richmond.",
    },
    {
      label: 'Book recommendation',
      value: 'Civil War Times Illustrated, March 2001',
      note: 'George W. Contant, "The Men Who Made Hancock Superb." The transcript renders the surname as "Content."',
    },
  ],
  maps: [
    {
      title: "Williamsburg and Eltham's Landing in the Peninsula Campaign",
      caption:
        "This operational map shows Johnston's retreat from Yorktown through Williamsburg toward Richmond and Franklin's water movement to Eltham's Landing near West Point. The May 5 rear-guard action delayed the land pursuit; the May 7 landing came too late to block the retreat road.",
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
      image: '/images/ep133-williamsburg-elthams-operations.svg',
      alt: "Schematic operational map of the Confederate retreat through Williamsburg and the United States water movement to Eltham's Landing",
    },
    {
      title: 'Battle of Williamsburg: divided attacks and an unexploited flank',
      caption:
        "Hooker fought west of the road junction at Fort Magruder. Kearny arrived to stop Longstreet's counterattack. On the opposite flank, Hancock crossed Cub Creek and occupied empty redoubts, but Sumner withheld broader support. Early then attacked Hancock without adequate reconnaissance and was repulsed.",
      source: 'https://www.loc.gov/item/gvhs01.vhs00006/',
      image: '/images/ep133-williamsburg-tactical.svg',
      alt: "Schematic tactical map of Hooker's attack, Kearny's reinforcement, Hancock's flank movement, and Early's counterattack at Williamsburg",
    },
  ],
  moments: [
    {
      time: '0:59',
      audioTime: 59,
      title: 'The Confederate army leaves Yorktown',
      detail:
        'The episode resumes with Johnston withdrawing on the night of May 3-4 before McClellan could open his planned bombardment.',
    },
    {
      time: '2:49',
      audioTime: 169,
      title: 'Stoneman reaches the Confederate rear guard',
      detail:
        "On May 4, Stoneman's cavalry skirmished with J. E. B. Stuart's cavalry. Confederate infantry support caused Stoneman to wait for his own infantry.",
    },
    {
      time: '3:24',
      audioTime: 204,
      title: 'Rain further slows both armies',
      detail:
        'About thirty hours of rain turned the limited roads through Williamsburg into deep mud and delayed troops, artillery, wagons, and supplies.',
    },
    {
      time: '4:07',
      audioTime: 247,
      title: 'Longstreet receives the rear-guard mission',
      detail:
        "Johnston needed time to clear his trains from Williamsburg and assigned Longstreet's division to block the pursuit.",
    },
    {
      time: '4:17',
      audioTime: 257,
      title: 'Terrain narrows the battlefield',
      detail:
        "Queen's Creek, College Creek, swampy ground, and a prepared line of redoubts restricted the United States approach to the Williamsburg position.",
    },
    {
      time: '5:25',
      audioTime: 325,
      title: 'Hooker and Smith approach on separate roads',
      detail:
        "The pursuing columns used the Yorktown and Lee's Mill routes and shifted between them. Hooker ultimately fought on the Hampton or Lee's Mill approach while Smith occupied the Yorktown Road; woods and marshes prevented effective mutual support.",
    },
    {
      time: '6:08',
      audioTime: 368,
      title: 'Sumner directs the pursuit',
      detail:
        'Edwin V. Sumner exercised field command by seniority although his II Corps remained at Yorktown. McClellan stayed behind to organize the water movement toward West Point.',
    },
    {
      time: '8:00',
      audioTime: 480,
      title: 'Hooker opens the battle',
      detail:
        "Hooker's artillery and infantry engaged west of the road in rain and mud. He waited for support from Keyes's IV Corps that did not arrive.",
    },
    {
      time: '8:22',
      audioTime: 502,
      title: 'Longstreet seizes the initiative',
      detail:
        'Longstreet reinforced the Fort Magruder line and placed Richard H. Anderson in immediate charge of attacks against Hooker.',
    },
    {
      time: '9:22',
      audioTime: 562,
      title: 'An enslaved man identifies the open flank',
      detail:
        'A man who had escaped slavery informed United States headquarters that a road crossed Cub Creek at a dam and reached an unoccupied Confederate redoubt. An engineer confirmed the report.',
    },
    {
      time: '10:24',
      audioTime: 624,
      title: 'Hancock moves across Cub Creek',
      detail:
        "Smith sent Hancock with five regiments and two batteries. The column crossed the dam and moved beyond the empty redoubt toward Longstreet's left flank.",
    },
    {
      time: '11:29',
      audioTime: 689,
      title: 'Confederates break through Hooker’s line',
      detail:
        "Longstreet's attack reached the Lee's Mill Road and overran ten guns. Canister fire from another United States battery checked the advance at close range.",
    },
    {
      time: '12:44',
      audioTime: 764,
      title: 'Kearny stabilizes the United States left',
      detail:
        'Philip Kearny brought his division forward through the mud, halted the retreat, and drove the Confederates off the road into the woods west of it.',
    },
    {
      time: '13:21',
      audioTime: 801,
      title: 'Hancock occupies the Confederate flank',
      detail:
        'Hancock placed about 3,400 infantry and eight guns on high ground near two abandoned redoubts and requested reinforcements to exploit the position.',
    },
    {
      time: '14:14',
      audioTime: 854,
      title: 'Sumner orders Hancock back',
      detail:
        'Smith sent a supporting brigade, but Sumner recalled it and repeatedly directed Hancock to withdraw toward Cub Creek.',
    },
    {
      time: '15:10',
      audioTime: 910,
      title: "Early's brigade moves against Hancock",
      detail:
        "D. H. Hill sent Early's brigade from the College of William and Mary grounds toward the unexpected United States artillery fire on the Confederate left.",
    },
    {
      time: '16:31',
      audioTime: 991,
      title: 'The Confederate attack loses alignment',
      detail:
        "Early's four regiments entered dense, wet woods in line. The formation broke apart, and the 24th Virginia and 5th North Carolina emerged separately in front of Hancock's guns.",
    },
    {
      time: '17:30',
      audioTime: 1050,
      title: 'Early attacks without waiting',
      detail:
        'Early led the 24th Virginia across the open field toward the guns. The attack gave Hancock grounds to halt his ordered withdrawal.',
    },
    {
      time: '18:03',
      audioTime: 1083,
      title: 'Early is wounded',
      detail:
        'A bullet struck Early through the shoulder. He was carried from the field and remained out of action for weeks.',
    },
    {
      time: '19:29',
      audioTime: 1169,
      title: 'D. H. Hill stops the attack',
      detail:
        "Hill recognized Hancock's strength and ordered the assault broken off. Hancock then counterattacked as the Confederates began to withdraw.",
    },
    {
      time: '20:53',
      audioTime: 1253,
      title: "Early's attack produces severe losses",
      detail:
        "The episode reports 302 casualties in the 5th North Carolina, 508 in Early's brigade as a whole, and 100 in Hancock's force. Published returns are incomplete and do not align cleanly with all three figures.",
    },
    {
      time: '21:08',
      audioTime: 1268,
      title: 'McClellan reaches Williamsburg near the end',
      detail:
        'McClellan arrived as the fighting around Hancock ended. Darkness brought the broader battle to a close soon afterward.',
    },
    {
      time: '24:32',
      audioTime: 1472,
      title: 'The Confederate rear guard leaves Williamsburg',
      detail:
        'At first light on May 6, United States skirmishers found the line empty. Longstreet and D. H. Hill had rejoined the retreat toward Richmond.',
    },
    {
      time: '25:11',
      audioTime: 1511,
      title: 'The episode assesses the cost and result',
      detail:
        'It gives roughly 2,200 United States and just over 1,600 Confederate casualties and emphasizes that the Confederate army continued its withdrawal without being blocked.',
    },
    {
      time: '27:02',
      audioTime: 1622,
      title: 'Hancock receives his enduring nickname',
      detail:
        "McClellan highlighted Hancock's repulse of Early, and the description of Hancock as superb spread through Northern newspapers.",
    },
    {
      time: '28:43',
      audioTime: 1723,
      title: 'Franklin begins the water movement',
      detail:
        "McClellan sent William B. Franklin's division up the York River in an attempt to establish a position beyond Williamsburg and cut the Confederate route.",
    },
    {
      time: '29:22',
      audioTime: 1762,
      title: "Franklin lands at Eltham's Landing",
      detail:
        'The division came ashore near West Point on May 7, after the opportunity to block the main Confederate column had largely passed.',
    },
    {
      time: '30:20',
      audioTime: 1820,
      title: 'Johnston contains the bridgehead',
      detail:
        "Johnston detached troops that included John Bell Hood's Texas brigade to hold Franklin near the landing while the Confederate army and trains continued west.",
    },
    {
      time: '31:30',
      audioTime: 1890,
      title: 'A loaded musket saves Hood',
      detail:
        'Hood had ordered unloaded muskets during the advance through woods. Private John Deal of the 4th Texas had kept his musket loaded and shot a United States corporal who aimed at Hood at close range.',
    },
    {
      time: '31:58',
      audioTime: 1918,
      title: 'Hood pushes back the picket line',
      detail:
        'The Confederates drove the United States line more than a mile toward open ground near the landing, then broke off rather than attack the stronger position.',
    },
    {
      time: '32:17',
      audioTime: 1937,
      title: "Eltham's Landing losses are reported",
      detail:
        'The episode gives 48 Confederate and about 185 United States casualties. The NPS database gives 48 and 186.',
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
            'Directed the pursuit and the West Point water movement; remained at Yorktown until late in the Battle of Williamsburg',
        },
        {
          commander: 'Edwin V. Sumner',
          command: 'Senior corps commander and field commander of the pursuit',
          subordinates:
            'Exercised authority at Williamsburg although his II Corps troops were absent; controlled support sent toward Hooker and Hancock',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'Commander, III Corps',
          subordinates:
            "Joseph Hooker's division opened the main action; Philip Kearny's division arrived to stabilize the left",
        },
        {
          commander: 'Erasmus D. Keyes',
          command: 'Commander, IV Corps',
          subordinates:
            "William F. Smith's division approached on the right; Winfield S. Hancock led the brigade sent across Cub Creek",
        },
        {
          commander: 'William B. Franklin',
          command: "Division commander at Eltham's Landing",
          subordinates:
            'Moved by transport up the York River, established the bridgehead, and held his position during the May 7 fighting',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'Joseph E. Johnston',
          command: 'Overall commander of the Confederate field army',
          subordinates:
            'Directed the withdrawal toward Richmond and assigned forces to delay the land pursuit and contain the Eltham bridgehead',
        },
        {
          commander: 'James Longstreet',
          command: 'Rear-guard commander at Williamsburg',
          subordinates:
            'Used his division at the fortified line and placed Richard H. Anderson in immediate charge of attacks against Hooker',
        },
        {
          commander: 'D. H. Hill',
          command: 'Senior commander and reserve at Williamsburg',
          subordinates:
            "Returned part of his division to support Longstreet and led elements of Early's brigade against Hancock",
        },
        {
          commander: 'Jubal A. Early',
          command: 'Brigade commander under D. H. Hill',
          subordinates:
            'Led the 24th Virginia in the unsuccessful attack on Hancock and was wounded through the shoulder',
        },
        {
          commander: 'Gustavus W. Smith and W. H. C. Whiting',
          command: "Commanders responsible for containing Eltham's Landing",
          subordinates:
            "John Bell Hood's brigade and supporting Confederate troops confronted Franklin's bridgehead while the retreat continued",
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Commanded the Army of the Potomac, remained at Yorktown for most of the Williamsburg battle, and ordered Franklin toward West Point',
      side: 'United States',
    },
    {
      name: 'Edwin V. Sumner',
      role: 'Directed the pursuit at Williamsburg and repeatedly limited or recalled support for Hooker and Hancock',
      side: 'United States',
    },
    {
      name: 'Joseph Hooker',
      role: "Opened the main fight at Williamsburg and held against Longstreet's attacks until reinforcements arrived",
      side: 'United States',
    },
    {
      name: 'Philip Kearny',
      role: "Brought his division forward through the mud and stabilized Hooker's collapsing left",
      side: 'United States',
    },
    {
      name: 'William F. Smith',
      role: 'Commanded the IV Corps division on the United States right and sent Hancock across Cub Creek',
      side: 'United States',
    },
    {
      name: 'Winfield S. Hancock',
      role: "Occupied empty redoubts on the Confederate flank and repulsed Early's attack, earning the nickname 'Hancock the Superb'",
      side: 'United States',
      image: '/images/ep133-winfield-scott-hancock.jpg',
      source: 'https://www.loc.gov/item/2002719476/',
    },
    {
      name: 'William B. Franklin',
      role: "Led the amphibious movement to Eltham's Landing and established a bridgehead that did not block Johnston's retreat",
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Directed the Confederate withdrawal and used rear guards to protect his army and trains',
      side: 'Confederacy',
    },
    {
      name: 'James Longstreet',
      role: 'Commanded the Williamsburg rear guard and counterattacked Hooker while the main Confederate army withdrew',
      side: 'Confederacy',
    },
    {
      name: 'D. H. Hill',
      role: "Supplied Early's brigade from the Confederate reserve and led the 5th North Carolina before stopping its attack",
      side: 'Confederacy',
    },
    {
      name: 'Jubal A. Early',
      role: 'Led an inadequately reconnoitered attack against Hancock and was wounded through the shoulder',
      side: 'Confederacy',
    },
    {
      name: 'John Bell Hood',
      role: "Led the Texas brigade in the fighting that pushed Franklin's pickets back toward Eltham's Landing",
      side: 'Confederacy',
    },
    {
      name: 'John Deal',
      role: 'Private in the 4th Texas who fired the loaded musket that prevented a United States corporal from shooting Hood at close range',
      side: 'Confederacy',
    },
  ],
  losses: [
    {
      name: 'John P. Van Leer',
      side: 'United States',
      role: 'Lieutenant colonel commanding the 6th New Jersey Infantry',
      outcome: 'Killed in action at Williamsburg on May 5, 1862',
    },
    {
      name: 'George T. Ward',
      side: 'Confederacy',
      role: 'Colonel commanding the 2nd Florida Infantry',
      outcome: 'Killed in action at Williamsburg on May 5, 1862',
    },
    {
      name: 'Thomas E. Irby',
      side: 'Confederacy',
      role: 'Lieutenant colonel commanding four companies of the 8th Alabama Infantry',
      outcome: 'Killed in action at Williamsburg on May 5, 1862',
    },
    {
      name: 'Christopher H. Mott',
      side: 'Confederacy',
      role: 'Colonel commanding the 19th Mississippi Infantry',
      outcome: 'Killed in action at Williamsburg on May 5, 1862',
    },
  ],
  gallery: [
    {
      image: '/images/ep133-hookers-division-williamsburg.jpg',
      alt: "Alfred Waud drawing of Hooker's division fighting in rain and mud at Williamsburg",
      caption:
        "Alfred R. Waud's field drawing records Hooker's division near Fort Magruder. Waud annotated the rain, mud, felled timber, rifle pits, and guns sunk in the road. The Library of Congress catalogs the sheet as May 4 although it depicts the May 5 battle.",
      source: 'https://www.loc.gov/item/2004660492/',
    },
    {
      image: '/images/ep133-hancock-charge-print.jpg',
      alt: "Color lithograph depicting Hancock's counterattack at the Battle of Williamsburg",
      caption:
        "A later popular print depicts Hancock's counterattack on May 5. It is useful evidence of how the episode was commemorated, not a literal record of formations or terrain.",
      source: 'https://www.loc.gov/item/91482054/',
    },
    {
      image: '/images/ep133-battle-of-williamsburg-print.jpg',
      alt: 'Nineteenth-century print depicting infantry and artillery at the Battle of Williamsburg',
      caption:
        'This nineteenth-century battle print represents the large, confused engagement around the Williamsburg earthworks. Its composition is illustrative rather than a precise tactical source.',
      source: 'https://www.loc.gov/item/90709459/',
    },
    {
      image: '/images/ep133-winfield-scott-hancock.jpg',
      alt: 'Major General Winfield Scott Hancock seated in uniform during the Civil War',
      caption:
        "Hancock was a brigadier general at Williamsburg. His localized victory over Early's brigade and McClellan's praise made 'Hancock the Superb' a lasting nickname.",
      source: 'https://www.loc.gov/item/2002719476/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 133 page',
      url: 'https://civilwarpodcast.org/2015/11/18/civil-war-podcast-episode-133/',
    },
    {
      label: 'National Park Service: Williamsburg battle summary',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va010',
    },
    {
      label: "National Park Service: Eltham's Landing battle summary",
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va011',
    },
    {
      label: 'National Park Service: Yorktown and the May 1862 withdrawal',
      url: 'https://www.nps.gov/york/learn/historyculture/yorktown-in-the-civil-war.htm',
    },
    {
      label:
        'National Park Service Civil War Series: The Battles for Richmond, 1862',
      url: 'https://npshistory.com/publications/civil_war_series/21/sec2.htm',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March-August 1862',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
    },
    {
      label: 'U.S. Army Center of Military History: Civil War campaign summary',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label:
        'National Archives: Official Records of the Union and Confederate Armies',
      url: 'https://www.archives.gov/research/alic/reference/military/civil-war-armies-records.html',
    },
    {
      label: "Official Records: Erasmus D. Keyes's report on Williamsburg",
      url: 'https://ehistory.osu.edu/books/official-records/012/0511',
    },
    {
      label:
        "Library of Congress: McClellan's official report on the Army of the Potomac",
      url: 'https://www.loc.gov/item/08010508/',
    },
    {
      label:
        'Library of Congress: Robert Knox Sneden battlefield map of Williamsburg',
      url: 'https://www.loc.gov/item/gvhs01.vhs00006/',
    },
    {
      label:
        "Library of Congress: Alfred Waud drawing of Hooker's division at Williamsburg",
      url: 'https://www.loc.gov/item/2004660492/',
    },
    {
      label: "Library of Congress: print of Hancock's charge at Williamsburg",
      url: 'https://www.loc.gov/item/91482054/',
    },
    {
      label: 'Library of Congress: Battle of Williamsburg print',
      url: 'https://www.loc.gov/item/90709459/',
    },
    {
      label: 'Library of Congress: Winfield Scott Hancock portrait',
      url: 'https://www.loc.gov/item/2002719476/',
    },
    {
      label:
        "New York State Military Museum: bibliography for George W. Contant's article",
      url: 'https://museum.dmna.ny.gov/unit-history/infantry/33rd-infantry-regiment',
    },
    {
      label:
        'Library of Congress: eastern Virginia newspaper map including Barhamsville',
      url: 'https://www.loc.gov/item/99448504/',
    },
  ],
} satisfies Enrichment;
