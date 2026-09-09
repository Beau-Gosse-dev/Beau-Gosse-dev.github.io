import type { Enrichment } from '../types';

export const enrichment = {
  date: 'May 3–24, 1862',
  place:
    'Eltham’s Landing and West Point on the York River; Fort Monroe, Hampton Roads, Norfolk, and Craney Island; the James River at Drewry’s Bluff below Richmond; White House Landing on the Pamunkey River; and the Chickahominy approaches east and northeast of Richmond, Virginia',
  result:
    'The engagement at Eltham’s Landing did not interrupt Joseph E. Johnston’s withdrawal toward Richmond. A separate United States operation directed from Fort Monroe occupied Norfolk and forced the Confederates to destroy CSS Virginia. The opened James River then allowed Commander John Rodgers’s five-vessel flotilla to approach Richmond, but Confederate artillery, infantry, naval personnel, and river obstructions repulsed it at Drewry’s Bluff on May 15. McClellan meanwhile established a major supply base at White House Landing and deployed the Army of the Potomac on both sides of the Chickahominy while expecting Irvin McDowell’s force to approach from Fredericksburg. The Peninsula Campaign remained unresolved at the end of the episode',
  facts: [
    {
      label: 'Eltham’s Landing',
      value: 'May 7, 1862 — indecisive',
      note: 'The National Park Service estimates 234 casualties: 186 United States and 48 Confederate. Other published totals differ, so this guide uses the NPS battlefield database consistently.',
    },
    {
      label: 'Lincoln at Fort Monroe',
      value: 'May 6–11, 1862',
      note: 'Secretary of War Edwin M. Stanton and Treasury Secretary Salmon P. Chase accompanied the president.',
    },
    {
      label: 'Norfolk operation',
      value: 'About 5,000 soldiers landed May 10',
      note: 'Major General John E. Wool commanded the landing and advance. Confederate Major General Benjamin Huger evacuated Norfolk and Portsmouth and ordered destruction at the Gosport Navy Yard.',
    },
    {
      label: 'CSS Virginia',
      value: 'Destroyed off Craney Island, May 11',
      note: 'The deep-draft ironclad could neither remain at Norfolk nor pass the shoals required to reach the upper James. Flag Officer Josiah Tattnall ordered her run aground and burned; her magazine exploded before dawn.',
    },
    {
      label: 'James River flotilla',
      value: 'Five vessels under Commander John Rodgers',
      note: 'USS Galena and USS Monitor were accompanied by USS Aroostook, USS Port Royal, and the experimental revenue cutter Naugatuck.',
    },
    {
      label: 'Drewry’s Bluff',
      value: 'May 15, 1862 — Confederate victory',
      note: 'The position, also called Fort Darling, stood approximately seven to eight river miles below Richmond. The river narrowed and turned beneath a bluff about 90 feet high.',
    },
    {
      label: 'River barrier',
      value: 'Sunken vessels, piles, stone-filled cribs, and debris',
      note: 'CSS Jamestown was among the vessels sunk in the channel. The obstruction prevented the deeper-draft United States ships from passing while the fort remained active.',
    },
    {
      label: 'Drewry’s Bluff casualties',
      value: '39–42 in the cited official summaries',
      note: 'The NPS battle database gives 24 United States and 15 Confederate casualties. A separate NPS park account gives at least 14 United States dead and 13 wounded across the force, plus 7 Confederate dead and 8 wounded. The Naval History and Heritage Command gives 13 dead and 11 wounded aboard Galena alone and 41 total for both sides. The transcript’s 13 dead and 11 wounded applies to Galena, not necessarily the entire flotilla.',
    },
    {
      label: 'USS Galena',
      value: 'Armor penetrated under concentrated fire',
      note: 'Naval History and Heritage Command accounts also differ on exact hit and casualty totals. They agree that Galena absorbed most of the fire, exhausted much of her ammunition, and proved that her armor was penetrable.',
    },
    {
      label: 'Medal of Honor',
      value: 'Corporal John F. Mackie, U.S. Marine Corps',
      note: 'Mackie received the Medal of Honor for his conduct aboard Galena during the May 15 action and became the first Marine to receive the decoration.',
    },
    {
      label: 'White House Landing',
      value: 'Army of the Potomac’s principal supply base',
      note: 'The Pamunkey River and the Richmond and York River Railroad connected water transport to the army’s westward advance.',
    },
    {
      label: 'Military railroad equipment',
      value: 'Five locomotives and 80 cars initially ordered forward',
      note: 'The Army Transportation Corps history quotes General Manager Daniel C. McCallum’s 1866 report. A sixth locomotive was added in June.',
    },
    {
      label: 'Expected reinforcement',
      value: 'McDowell’s I Corps advancing from Fredericksburg',
      note: 'McClellan wanted the troops sent by water to White House Landing. Lincoln ordered an overland approach that would keep the force between Washington and the Confederate army.',
    },
    {
      label: 'Army reorganization',
      value: 'Five corps of two divisions each',
      note: 'On May 18 McClellan created the V and VI Corps under Fitz John Porter and William B. Franklin, joining the existing II, III, and IV Corps.',
    },
    {
      label: 'Position by May 24',
      value: 'Three corps north and two corps south of the Chickahominy',
      note: 'Sumner, Franklin, and Porter extended the right toward Mechanicsville. Keyes and Heintzelman formed the left toward Seven Pines and the Williamsburg Road. The river made rapid mutual support difficult after heavy rain.',
    },
    {
      label: 'Senior commanders killed or mortally wounded',
      value: 'None in the operations covered by this episode',
    },
    {
      label: 'Book recommendation',
      value:
        'Ships of the Civil War, 1861–1865: An Illustrated Guide to the Fighting Vessels of the Union and the Confederacy by Kevin J. Dougherty',
    },
  ],
  maps: [
    {
      title: 'From Eltham’s Landing to the Chickahominy',
      caption:
        'This schematic follows the May 6–24 operations: Franklin’s landing near West Point, Johnston’s withdrawal toward Richmond, the United States occupation of Norfolk, the destruction of CSS Virginia, Rodgers’s advance up the James, and McClellan’s supply movement through White House Landing. The final symbols show the Army of the Potomac divided by the Chickahominy. Locations and routes are approximate and the map is not to scale.',
      source:
        'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
      image: '/images/ep134-peninsula-operations.svg',
      alt: 'Operational schematic of the May 1862 movements from Fort Monroe, Norfolk, and Eltham’s Landing to White House Landing, Drewry’s Bluff, and Richmond',
    },
    {
      title: 'The river defense at Drewry’s Bluff',
      caption:
        'The James narrowed and turned beneath a roughly 90-foot bluff. Confederate guns above the river, infantry along the banks, naval guns and personnel, and a barrier of sunken vessels and other obstructions stopped Rodgers’s flotilla. Galena anchored nearest the barrier and received most of the Confederate fire; Monitor’s guns could not elevate enough to engage the high position effectively. Positions are schematic and approximate.',
      source: 'https://www.nps.gov/places/drewry-s-bluff.htm',
      image: '/images/ep134-drewrys-bluff.svg',
      alt: 'Tactical schematic of Confederate batteries and river obstructions at Drewry’s Bluff facing USS Galena, USS Monitor, Naugatuck, Aroostook, and Port Royal',
    },
    {
      title: 'Contemporary map of the Peninsula and Richmond',
      caption:
        'A. J. Johnson’s 1862 map shows the James, Chickahominy, Pamunkey, and York river corridors; Norfolk and Fort Monroe; White House; the Richmond and York River Railroad; and the approaches to Richmond. It is useful for regional orientation but does not show every May 1862 troop position precisely.',
      source: 'https://www.loc.gov/item/99448355/',
      image: '/images/ep134-peninsula-map-1862.jpg',
      alt: 'A. J. Johnson 1862 map of the Virginia Peninsula, Richmond, and the James, Chickahominy, Pamunkey, and York Rivers',
    },
  ],
  moments: [
    {
      time: '1:08',
      audioTime: 68,
      title: 'The episode resumes after Williamsburg',
      detail:
        'Johnston’s army was withdrawing from Yorktown and Williamsburg toward Richmond. Longstreet’s rear guard had delayed the United States pursuit at Williamsburg on May 5.',
    },
    {
      time: '2:27',
      audioTime: 147,
      title: 'Franklin lands near Eltham',
      detail:
        'McClellan sent William B. Franklin’s division up the York River to threaten the Confederate retreat route. The troops landed too late to cut Johnston’s army off.',
    },
    {
      time: '3:44',
      audioTime: 224,
      title: 'Hood’s Texans enter the Eltham’s Landing fight',
      detail:
        'Elements of John Bell Hood’s Texas Brigade engaged Franklin’s troops on May 7 while the main Confederate army continued its withdrawal.',
    },
    {
      time: '4:16',
      audioTime: 256,
      title: 'A separate operation begins at Fort Monroe',
      detail:
        'While McClellan pursued Johnston, President Abraham Lincoln arrived at Fort Monroe to assess operations and press for more active use of United States army and naval forces.',
    },
    {
      time: '5:18',
      audioTime: 318,
      title: 'CSS Virginia restricts use of the James',
      detail:
        'The Confederate ironclad based at Norfolk remained a threat in Hampton Roads and prevented the United States Navy from treating the James River as a secure route toward Richmond.',
    },
    {
      time: '7:00',
      audioTime: 420,
      title: 'Lincoln directs an operation against Norfolk',
      detail:
        'The occupation of Norfolk would remove Virginia’s base. The Fort Monroe garrison remained outside McClellan’s command and operated under Major General John E. Wool.',
    },
    {
      time: '8:04',
      audioTime: 484,
      title: 'Lincoln, Stanton, and Chase inspect the landing area',
      detail:
        'The president and the two cabinet secretaries used small vessels to examine the south side of Hampton Roads before Wool’s landing.',
    },
    {
      time: '8:25',
      audioTime: 505,
      title: 'Wool lands on May 10',
      detail:
        'Approximately 5,000 United States soldiers came ashore and began marching toward Norfolk. Treasury Secretary Chase accompanied Wool while Lincoln helped direct movement across Hampton Roads.',
    },
    {
      time: '9:22',
      audioTime: 562,
      title: 'Norfolk is surrendered after the Confederate evacuation',
      detail:
        'Benjamin Huger’s garrison had withdrawn, and demolition parties damaged the Gosport Navy Yard. Norfolk’s mayor, William W. Lamb, met Wool’s force outside the city.',
    },
    {
      time: '10:05',
      audioTime: 605,
      title: 'Tattnall tries to save CSS Virginia',
      detail:
        'Flag Officer Josiah Tattnall intended to move the ironclad into the James, but Virginia’s draft and the river shoals made the escape dependent on substantial lightening and favorable water.',
    },
    {
      time: '11:24',
      audioTime: 684,
      title: 'Virginia is grounded and burned',
      detail:
        'After the pilots concluded that the ship still could not clear the bar, her crew ran her ashore near Craney Island, evacuated, and set her on fire.',
    },
    {
      time: '11:33',
      audioTime: 693,
      title: 'Virginia’s magazine explodes',
      detail:
        'Before dawn on May 11, fire reached the magazine and destroyed the ironclad. The James River was now open to a United States naval advance as far as the remaining defenses allowed.',
    },
    {
      time: '12:50',
      audioTime: 770,
      title: 'Rodgers receives orders to move up the James',
      detail:
        'Flag Officer Louis M. Goldsborough sent Commander John Rodgers upstream with a force that ultimately comprised Galena, Monitor, Naugatuck, Aroostook, and Port Royal.',
    },
    {
      time: '13:21',
      audioTime: 801,
      title: 'Richmond faces threats by land and water',
      detail:
        'Johnston’s withdrawal brought McClellan’s army closer from the east while the destruction of Virginia allowed United States warships to approach on the James.',
    },
    {
      time: '14:37',
      audioTime: 877,
      title: 'Davis consults Lee about Richmond’s defense',
      detail:
        'On May 14 President Jefferson Davis and his cabinet considered the consequences of losing the capital. Military adviser Robert E. Lee argued that Richmond should be held.',
    },
    {
      time: '15:36',
      audioTime: 936,
      title: 'The flotilla reaches Drewry’s Bluff',
      detail:
        'At 6:30 a.m. on May 15, Rodgers’s ships came in sight of Fort Darling, approximately seven to eight river miles below Richmond.',
    },
    {
      time: '16:11',
      audioTime: 971,
      title: 'Terrain gives the defenders a strong position',
      detail:
        'A sharp bend and narrow channel confined the vessels below a bluff about 90 feet high. Confederate heavy guns commanded the river from above.',
    },
    {
      time: '16:30',
      audioTime: 990,
      title: 'Obstructions close the channel',
      detail:
        'Sunken vessels and constructed barriers blocked passage. The James River Squadron added CSS Jamestown to the obstruction and positioned naval guns and ships behind it.',
    },
    {
      time: '17:12',
      audioTime: 1032,
      title: 'Army and navy personnel man the Confederate defense',
      detail:
        'Augustus Drewry’s Southside Heavy Artillery, naval personnel from the James River Squadron and the destroyed Virginia, and Confederate infantry occupied the bluff and riverbanks.',
    },
    {
      time: '18:10',
      audioTime: 1090,
      title: 'Galena anchors nearest the barrier',
      detail:
        'Rodgers placed Galena broadside to the channel so her guns could bear on the fort. Confederate fire struck the ship as she took position.',
    },
    {
      time: '18:30',
      audioTime: 1110,
      title: 'Monitor cannot engage the high batteries effectively',
      detail:
        'Monitor’s guns could not elevate sufficiently against the position above the river. She withdrew downstream with Aroostook and Port Royal while Galena and Naugatuck continued the principal exchange.',
    },
    {
      time: '19:42',
      audioTime: 1182,
      title: 'Galena’s armor fails under fire',
      detail:
        'Repeated Confederate hits penetrated Galena’s interlocking iron armor. Exact hit and casualty totals differ among official summaries, but all describe serious damage and heavy losses aboard the ship.',
    },
    {
      time: '20:05',
      audioTime: 1205,
      title: 'John F. Mackie serves the guns',
      detail:
        'Marine Corporal Mackie helped keep Galena’s guns in action under fire. He later became the first Marine to receive the Medal of Honor.',
    },
    {
      time: '20:40',
      audioTime: 1240,
      title: 'The flotilla withdraws',
      detail:
        'Rodgers broke off the action as ammunition ran low. The Confederate defense kept the United States ships below Richmond and secured a tactical victory.',
    },
    {
      time: '21:18',
      audioTime: 1278,
      title: 'McClellan continues toward Richmond',
      detail:
        'The Army of the Potomac moved from West Point toward White House Landing while Johnston’s army took positions closer to the Confederate capital.',
    },
    {
      time: '22:36',
      audioTime: 1356,
      title: 'White House Landing becomes the main supply base',
      detail:
        'McClellan used the Pamunkey River landing and the Richmond and York River Railroad to connect waterborne supplies with the westward-moving army.',
    },
    {
      time: '23:14',
      audioTime: 1394,
      title: 'McDowell is expected from Fredericksburg',
      detail:
        'Washington indicated that most of McDowell’s I Corps and additional troops under James Shields would move toward McClellan. Lincoln required the reinforcement to travel overland rather than by water.',
    },
    {
      time: '24:21',
      audioTime: 1461,
      title: 'McClellan organizes five corps',
      detail:
        'The army now had II Corps under Edwin V. Sumner, III Corps under Samuel P. Heintzelman, IV Corps under Erasmus D. Keyes, V Corps under Fitz John Porter, and VI Corps under William B. Franklin.',
    },
    {
      time: '24:46',
      audioTime: 1486,
      title: 'Three corps extend the right north of the Chickahominy',
      detail:
        'Sumner, Franklin, and Porter held the northern wing, protecting the White House supply line and reaching toward Mechanicsville to facilitate the expected junction with McDowell.',
    },
    {
      time: '25:11',
      audioTime: 1511,
      title: 'Two corps form the left south of the river',
      detail:
        'Keyes advanced toward Seven Pines on the Williamsburg Road, with Heintzelman farther to the rear. By May 24 the Army of the Potomac was deployed on both sides of the Chickahominy.',
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
            'Directed the Norfolk operation during his Fort Monroe visit and determined that McDowell would approach Richmond overland from Fredericksburg',
        },
        {
          commander: 'John E. Wool',
          command:
            'Major general commanding the Department of Virginia and Fort Monroe',
          subordinates:
            'Led approximately 5,000 soldiers ashore on May 10 and occupied Norfolk after the Confederate evacuation; his command was separate from McClellan’s Army of the Potomac',
        },
        {
          commander: 'Gideon Welles',
          command: 'Secretary of the Navy',
          subordinates:
            'Exercised civilian authority over naval operations; Flag Officer Louis M. Goldsborough commanded the North Atlantic Blockading Squadron and Commander John Rodgers led the James River flotilla',
        },
        {
          commander: 'George B. McClellan',
          command: 'Major general commanding the Army of the Potomac',
          subordinates:
            'Directed the advance from West Point and White House Landing toward Richmond and reorganized the field army into five corps',
        },
        {
          commander: 'Edwin V. Sumner',
          command: 'II Corps, Army of the Potomac',
          subordinates: 'Held part of the right wing north of the Chickahominy',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'III Corps, Army of the Potomac',
          subordinates:
            'Formed part of the left wing south of the Chickahominy',
        },
        {
          commander: 'Erasmus D. Keyes',
          command: 'IV Corps, Army of the Potomac',
          subordinates:
            'Advanced along the Williamsburg Road toward Seven Pines',
        },
        {
          commander: 'Fitz John Porter and William B. Franklin',
          command: 'V and VI Corps, Army of the Potomac',
          subordinates:
            'Commanded the two corps created on May 18; both formed part of the northern wing extending toward Mechanicsville',
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
            'Consulted his cabinet and military adviser Robert E. Lee as Richmond faced threats from the James River and the Army of the Potomac',
        },
        {
          commander: 'Joseph E. Johnston',
          command: 'General commanding the field army defending Richmond',
          subordinates:
            'Continued the withdrawal from the Peninsula and positioned the army east of Richmond near the Chickahominy',
        },
        {
          commander: 'Benjamin Huger',
          command: 'Major general commanding the Department of Norfolk',
          subordinates:
            'Evacuated the Norfolk-Portsmouth position and ordered military property at the Gosport Navy Yard destroyed before Wool’s arrival',
        },
        {
          commander: 'Josiah Tattnall',
          command:
            'Flag officer commanding CSS Virginia and Confederate naval forces in Hampton Roads',
          subordinates:
            'Ordered Virginia destroyed when evacuation of Norfolk left the deep-draft ironclad without a viable base or route to the upper James',
        },
        {
          commander: 'Ebenezer Farrand',
          command: 'Commander supervising the naval defense at Drewry’s Bluff',
          subordinates:
            'Worked with Captain Augustus Drewry’s artillery, John R. Tucker’s James River Squadron, former Virginia personnel, and infantry along the riverbanks',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Abraham Lincoln',
      role: 'Used his May visit to Fort Monroe to press army-navy cooperation, help select the Norfolk landing area, and direct the occupation that removed CSS Virginia’s base',
      side: 'United States',
    },
    {
      name: 'John E. Wool',
      role: 'Commanded Fort Monroe and led the independent United States column that occupied Norfolk',
      side: 'United States',
    },
    {
      name: 'George B. McClellan',
      role: 'Commanded the Army of the Potomac, established the White House supply base, and deployed five corps on both sides of the Chickahominy',
      side: 'United States',
    },
    {
      name: 'William B. Franklin',
      role: 'Commanded the division landed at Eltham’s Landing and later took command of the newly created VI Corps',
      side: 'United States',
    },
    {
      name: 'John Rodgers',
      role: 'Commanded USS Galena and the five-vessel James River flotilla repulsed at Drewry’s Bluff',
      side: 'United States',
    },
    {
      name: 'John F. Mackie',
      role: 'Marine corporal aboard Galena whose service under fire at Drewry’s Bluff led to the first Medal of Honor received by a U.S. Marine',
      side: 'United States',
      source:
        'https://www.history.navy.mil/our-collections/photography/us-people/m/mackie-john-f/nh-79909.html',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Commanded the Confederate field army withdrawing toward Richmond and used forces under Gustavus W. Smith to protect the retreat near Eltham’s Landing',
      side: 'Confederacy',
    },
    {
      name: 'John Bell Hood',
      role: 'Led the Texas Brigade in the aggressive Confederate skirmishing at Eltham’s Landing',
      side: 'Confederacy',
    },
    {
      name: 'Benjamin Huger',
      role: 'Commanded the Confederate Department of Norfolk and evacuated the city when Johnston’s retreat exposed the position',
      side: 'Confederacy',
    },
    {
      name: 'Josiah Tattnall',
      role: 'Commanded CSS Virginia and ordered the ironclad destroyed when she could not escape from Hampton Roads',
      side: 'Confederacy',
    },
    {
      name: 'Ebenezer Farrand',
      role: 'Supervised the combined Confederate naval defense at Drewry’s Bluff',
      side: 'Confederacy',
    },
    {
      name: 'Augustus H. Drewry',
      role: 'Local landowner and captain of the Southside Heavy Artillery whose battery occupied the bluff bearing his name',
      side: 'Confederacy',
    },
    {
      name: 'Catesby ap Roger Jones',
      role: 'Former executive officer of CSS Virginia who helped command naval personnel defending Drewry’s Bluff',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Lee',
      role: 'Served as Jefferson Davis’s military adviser and argued that Richmond should not be abandoned',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep134-galena-shot-damage.jpg',
      alt: 'USS Galena with sailors on deck and visible damage to the iron armor after Drewry’s Bluff',
      caption:
        'James F. Gibson photographed USS Galena in July 1862 after the fighting at Drewry’s Bluff. The image records damage along the ship’s armored side.',
      source: 'https://www.loc.gov/item/2022631036/',
    },
    {
      image: '/images/ep134-white-house-landing.jpg',
      alt: 'United States supply vessels anchored at White House Landing on the Pamunkey River in 1862',
      caption:
        'Supply vessels at White House Landing. McClellan used the Pamunkey and the Richmond and York River Railroad to sustain the army’s approach to Richmond.',
      source: 'https://www.loc.gov/item/2018666164/',
    },
    {
      image: '/images/ep134-drewrys-bluff-columbiad.jpg',
      alt: 'A large Columbiad gun inside Fort Darling at Drewry’s Bluff',
      caption:
        'A Columbiad at Fort Darling on Drewry’s Bluff. The photograph was made later in the war, after the May 1862 position had been expanded, and should not be read as an exact view of the first battle’s gun layout.',
      source: 'https://www.loc.gov/item/2018671168/',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 134 page',
      url: 'https://civilwarpodcast.org/2015/12/06/civil-war-podcast-episode-134/',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo72995/pdf/GOVPUB-D114-PURL-gpo72995.pdf',
    },
    {
      label: 'National Park Service battle summary: Eltham’s Landing',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va011',
    },
    {
      label:
        'Official Records at Ohio State eHistory: Peninsula Campaign correspondence, May 10, 1862',
      url: 'https://ehistory.osu.edu/books/official-records/014/0162',
    },
    {
      label:
        'Official Records of the Union and Confederate Navies, series I, volume 7: Rodgers and Farrand reports',
      url: 'https://digital.library.unt.edu/ark:/67531/metapth192842/',
    },
    {
      label: 'Naval History and Heritage Command: Hampton Roads',
      url: 'https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/civil-war/cw-operations-and-engagements/1862-civil-war/hampton-roads.html',
    },
    {
      label: 'Naval History and Heritage Command ship history: CSS Virginia',
      url: 'https://www.history.navy.mil/research/histories/ship-histories/confederate_ships/virginia.html',
    },
    {
      label: 'Naval History and Heritage Command: Drewry’s Bluff',
      url: 'https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/civil-war/cw-operations-and-engagements/1862-civil-war/drewry-s-bluff.html',
    },
    {
      label: 'National Park Service: Drewry’s Bluff',
      url: 'https://www.nps.gov/places/drewry-s-bluff.htm',
    },
    {
      label: 'National Park Service battle summary: Drewry’s Bluff',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va012',
    },
    {
      label: 'Naval History and Heritage Command ship history: USS Galena',
      url: 'https://www.history.navy.mil/research/histories/ship-histories/danfs/g/galena-i.html',
    },
    {
      label: 'Naval History and Heritage Command ship history: CSS Jamestown',
      url: 'https://www.history.navy.mil/research/histories/ship-histories/confederate_ships/jamestown.html',
    },
    {
      label: 'Naval History and Heritage Command: John F. Mackie',
      url: 'https://www.history.navy.mil/our-collections/photography/us-people/m/mackie-john-f/nh-79909.html',
    },
    {
      label: 'U.S. Army Transportation Corps: White House Landing staff ride',
      url: 'https://transportation.army.mil/History/whitehouselanding.html',
    },
    {
      label:
        'Library of Congress: Johnson’s 1862 map of the Peninsula and Richmond',
      url: 'https://www.loc.gov/item/99448355/',
    },
    {
      label:
        'Library of Congress: USS Galena showing the effect of Confederate shot',
      url: 'https://www.loc.gov/item/2022631036/',
    },
    {
      label: 'Library of Congress: White House Landing supply vessels',
      url: 'https://www.loc.gov/item/2018666164/',
    },
    {
      label: 'Library of Congress: Columbiad at Fort Darling, Drewry’s Bluff',
      url: 'https://www.loc.gov/item/2018671168/',
    },
  ],
} satisfies Enrichment;
