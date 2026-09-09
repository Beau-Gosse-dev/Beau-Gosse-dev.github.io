import type { Enrichment } from '../types';

export const enrichment = {
  date: 'January 21, 1824–April 21, 1861',
  place:
    'Clarksburg and Jackson’s Mill in western Virginia; West Point and Fort Hamilton, New York; Veracruz and Mexico City, Mexico; Fort Meade, Florida; and Lexington and Richmond, Virginia',
  result:
    'This biographical episode follows Thomas J. Jackson from childhood through West Point, the Mexican War, peacetime U.S. Army service, and ten years at Virginia Military Institute. It ends when Jackson takes the VMI cadet corps from Lexington toward Richmond on April 21, 1861. No Civil War battle is narrated. The experiences emphasized in the episode—academic persistence, aggressive service under fire, rigid adherence to duty, conflict with superiors, religious discipline, and demanding physical standards—later shaped his Confederate command style',
  facts: [
    {
      label: 'Episode scope',
      value: 'Jackson’s life before active Civil War field command',
      note: 'The opening discusses his later reputation and the 1862 Valley Campaign, but the chronological biography stops on April 21, 1861.',
    },
    {
      label: 'Birth',
      value: 'January 21, 1824, Clarksburg, Virginia',
      note: 'Clarksburg became part of West Virginia in 1863. Jackson’s father died when he was two and his mother when he was seven; relatives, especially his uncle Cummins Jackson, raised him.',
    },
    {
      label: 'West Point',
      value: 'Cadet, July 1, 1842–July 1, 1846; graduated 17th of 59',
      note: 'Jackson entered with weak formal preparation and improved his standing through sustained study.',
    },
    {
      label: 'U.S. Army branch',
      value: '1st U.S. Artillery',
      note: 'He graduated as a brevet second lieutenant and served in Winfield Scott’s campaign in Mexico.',
    },
    {
      label: 'Mexican War service',
      value:
        'Veracruz, Cerro Gordo, La Hoya, Ocalaca, Contreras, Churubusco, Molino del Rey, Chapultepec, and Mexico City',
      note: 'This is the engagement list in Cullum’s register. The episode names the principal actions but omits several smaller or intermediate engagements.',
    },
    {
      label: 'Mexican War promotions',
      value:
        'Second lieutenant on August 20, 1847; brevet captain on August 20; brevet major on September 13',
      note: 'Cullum’s register dates the captain’s brevet to gallantry at Contreras and Churubusco and the major’s brevet to Chapultepec. The episode incorrectly connects promotion to first lieutenant with the siege of Veracruz.',
    },
    {
      label: 'Peacetime stations',
      value: 'Fort Columbus, Fort Hamilton, and Fort Meade',
      note: 'The official register places Jackson at Fort Columbus in 1848, Fort Hamilton in 1849–1851, and in Florida operations against Seminoles in 1851.',
    },
    {
      label: 'Fort Meade dispute',
      value: 'A command conflict with Maj. William H. French',
      note: 'The episode traces the dispute from control of a construction worker through competing accusations. Department commander David E. Twiggs transferred French; Jackson remained but soon left for VMI.',
    },
    {
      label: 'Army resignation chronology',
      value:
        'VMI service began in 1851; resignation was formally recorded February 29, 1852',
      note: 'The episode says Jackson resigned in August 1851 and then joined VMI. Cullum’s register records the later formal resignation date, so his VMI appointment and separation from the Army overlapped administratively.',
    },
    {
      label: 'VMI position',
      value:
        'Professor of Natural and Experimental Philosophy and instructor of artillery, 1851–1861',
      note: 'Francis H. Smith was VMI superintendent. D. H. Hill, then teaching at nearby Washington College, helped secure Jackson’s appointment.',
    },
    {
      label: 'First marriage',
      value: 'Elinor “Ellie” Junkin, married August 4, 1853',
      note: 'Ellie and the couple’s stillborn son died from complications of childbirth on October 22, 1854.',
    },
    {
      label: 'Second marriage',
      value: 'Mary Anna Morrison, married July 16, 1857',
      note: 'The episode covers their courtship and structured household routine. Their first daughter, Mary Graham Jackson, died in infancy in 1858, a fact not mentioned in the episode.',
    },
    {
      label: 'Religion, education, and slavery',
      value:
        'Jackson helped operate a Sabbath school for free and enslaved Black people while enslaving people in his own household',
      note: 'VMI’s Jackson House Museum identifies seven individuals whom Jackson enslaved during his Lexington years: Albert, Amy, Hetty, Cyrus, George, Ann, and Emma. This context is necessary alongside the episode’s account of his religious teaching.',
    },
    {
      label: 'The lemon story',
      value: 'A disputed element of Jackson’s postwar image',
      note: 'The episode treats habitual lemon-eating as a postwar legend associated with Henry Kyd Douglas. The evidence does not justify turning either the habit or its complete invention into a firm biographical fact.',
    },
    {
      label: 'Departure for Richmond',
      value: 'April 21, 1861',
      note: 'The episode gives 1:00 p.m. as the departure time. A VMI publication says Jackson ordered the corps forward at 12:30 p.m.; the date and purpose are not in dispute, but the exact time is.',
    },
    {
      label: 'Combat and senior-leader losses',
      value: 'None within the chronological episode narrative',
      note: 'Mexican War actions are summarized retrospectively, but the episode does not identify a senior leader killed or mortally wounded in those passages.',
    },
    {
      label: 'Book recommendation',
      value: 'Mighty Stonewall by Frank E. Vandiver',
      note: 'The hosts also refer listeners to James I. Robertson Jr.’s longer Stonewall Jackson: The Man, the Soldier, the Legend, recommended in episode 57.',
    },
  ],
  maps: [
    {
      title: 'Jackson’s prewar path',
      caption:
        'The route places the principal locations in Jackson’s life from his birth in western Virginia through West Point, New York garrison duty, Fort Meade, VMI, and the cadet corps movement toward Richmond. It shows chronology and regional relationships; the lines are not reconstructed travel routes.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/35-3-1.pdf',
      image: '/images/ep138-jackson-life-route.svg',
      alt: 'Schematic map of Jackson’s movement from Clarksburg to West Point, Fort Hamilton, Fort Meade, Lexington, and Richmond',
    },
    {
      title: 'Jackson in Winfield Scott’s Mexico City campaign',
      caption:
        'Scott’s army landed at Veracruz and advanced inland through Cerro Gordo to Mexico City. Jackson served with the artillery through the siege and the later battles, receiving brevet rank for Contreras and Churubusco and for Chapultepec. Locations and the inland line of advance are schematic.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/73-3.pdf',
      image: '/images/ep138-mexico-campaign.svg',
      alt: 'Operational map of the 1847 United States advance from Veracruz through Cerro Gordo to Mexico City and Jackson’s engagements',
    },
  ],
  moments: [
    {
      time: '3:40',
      audioTime: 220,
      title: 'The podcast turns toward the Shenandoah Valley',
      detail:
        'The hosts pause the Peninsula Campaign and explain that Jackson’s biography will precede their account of his 1862 Valley Campaign.',
    },
    {
      time: '5:00',
      audioTime: 300,
      title: 'Confederate fortunes form the strategic context',
      detail:
        'The episode places Jackson’s later Valley victories against United States successes from New Orleans and Nashville to Forts Henry and Donelson, Shiloh, Pea Ridge, and the advance on Richmond.',
    },
    {
      time: '6:00',
      audioTime: 360,
      title: 'Five Valley victories are named',
      detail:
        'McDowell, Front Royal, First Winchester, Cross Keys, and Port Republic are summarized as the victories that produced Jackson’s wartime fame. Their battle narratives belong to later episodes.',
    },
    {
      time: '7:12',
      audioTime: 432,
      title: 'Jackson’s names and reputation',
      detail:
        'The episode distinguishes the later public name “Stonewall,” the soldiers’ “Old Jack” and “Old Blue Light,” and the VMI cadets’ derisive “Tom Fool.”',
    },
    {
      time: '8:16',
      audioTime: 496,
      title: 'A demanding marching standard',
      detail:
        'The hosts describe Jackson’s later field routine of fifty minutes marching, ten minutes resting, and long days in which he expected troops to cover exceptional distances before fighting.',
    },
    {
      time: '9:33',
      audioTime: 573,
      title: 'The Lexington Sabbath school',
      detail:
        'Jackson’s religious instruction of Black people is introduced. The fuller record includes free and enslaved students and seven people Jackson enslaved during his Lexington years.',
    },
    {
      time: '11:29',
      audioTime: 689,
      title: 'Childhood in western Virginia',
      detail:
        'Jackson was born at Clarksburg in 1824, lost both parents while young, and lived with several relatives, chiefly his uncle Cummins Jackson.',
    },
    {
      time: '12:36',
      audioTime: 756,
      title: 'Health concerns shape daily habits',
      detail:
        'The episode connects Jackson’s recurrent digestive complaints to rigid posture, restricted food, exercise, and other self-directed treatments. Retrospective diagnosis is not possible from these accounts.',
    },
    {
      time: '14:25',
      audioTime: 865,
      title: 'The lemon tradition is challenged',
      detail:
        'The hosts reject the familiar image of Jackson constantly eating lemons as postwar mythmaking. Surviving anecdotes do not establish either a constant habit or complete invention with certainty.',
    },
    {
      time: '15:32',
      audioTime: 932,
      title: 'Jackson explains the raised arm',
      detail:
        'Soldiers later read religious meaning into the gesture, but the episode says Jackson believed lifting his left arm corrected an imbalance in blood and weight.',
    },
    {
      time: '16:36',
      audioTime: 996,
      title: 'Illness at Fort Hamilton deepens his faith',
      detail:
        'The episode describes a severe illness during New York garrison duty and uses a letter to Jackson’s sister to mark a more personal, providential religious conviction.',
    },
    {
      time: '17:59',
      audioTime: 1079,
      title: 'Sabbath observance and war',
      detail:
        'Jackson refused ordinary Sunday tasks such as letter writing but accepted combat on Sunday when military circumstances required it.',
    },
    {
      time: '19:40',
      audioTime: 1180,
      title: 'Jackson enters West Point',
      detail:
        'He arrived in 1842 with limited formal preparation, steadily improved his class standing, and graduated seventeenth of fifty-nine in 1846.',
    },
    {
      time: '20:45',
      audioTime: 1245,
      title: 'The Mexican War begins his active service',
      detail:
        'Commissioned in the 1st U.S. Artillery, Jackson reached Texas after Zachary Taylor’s Monterrey campaign and sought an opportunity for combat.',
    },
    {
      time: '21:26',
      audioTime: 1286,
      title: 'Artillery service at Veracruz',
      detail:
        'Jackson served during the March 1847 siege. Contrary to the episode’s wording, the official register dates his permanent promotion to second lieutenant and brevet captain to August 20, after Contreras and Churubusco.',
    },
    {
      time: '21:43',
      audioTime: 1303,
      title: 'Jackson volunteers to serve with Magruder',
      detail:
        'After Cerro Gordo, he joined John B. Magruder’s captured light battery because he expected that command to see additional fighting.',
    },
    {
      time: '22:21',
      audioTime: 1341,
      title: 'Combat on the approaches to Mexico City',
      detail:
        'The episode follows Jackson through Churubusco, Chapultepec, and the San Cosme gate. His brevet major dated September 13 recognized conduct at Chapultepec.',
    },
    {
      time: '23:38',
      audioTime: 1418,
      title: 'Jackson is ordered to Florida',
      detail:
        'He was ordered to Florida in October 1850 and served at Fort Meade under Maj. William H. French during 1851 operations connected to Seminole resistance.',
    },
    {
      time: '24:52',
      audioTime: 1492,
      title: 'The dispute with French reaches headquarters',
      detail:
        'Jackson complained that French had infringed his authority over construction work. Brig. Gen. Thomas Childs rejected Jackson’s broad claim of independence from the post commander.',
    },
    {
      time: '26:18',
      audioTime: 1578,
      title: 'A personal investigation escalates the conflict',
      detail:
        'Jackson questioned enlisted men about an allegation concerning French and a household servant. French arrested him and both officers prepared accusations.',
    },
    {
      time: '28:22',
      audioTime: 1702,
      title: 'The Fort Meade dispute is resolved administratively',
      detail:
        'After the dispute reached senior headquarters, Maj. Gen. David E. Twiggs transferred French. Jackson remained temporarily, then accepted the VMI position.',
    },
    {
      time: '29:00',
      audioTime: 1740,
      title: 'Jackson joins the VMI faculty',
      detail:
        'D. H. Hill helped arrange Jackson’s appointment in Lexington. Jackson taught Natural and Experimental Philosophy and artillery from 1851 to 1861.',
    },
    {
      time: '30:15',
      audioTime: 1815,
      title: 'The conflict with cadet James A. Walker',
      detail:
        'Jackson reported Walker for classroom insubordination. Walker was expelled and challenged Jackson to a duel, but no duel occurred; both men later served in the Confederate army.',
    },
    {
      time: '31:50',
      audioTime: 1910,
      title: 'Marriage to Elinor Junkin ends in tragedy',
      detail:
        'Jackson married Ellie in August 1853. She and their stillborn son died from complications of childbirth in October 1854.',
    },
    {
      time: '32:52',
      audioTime: 1972,
      title: 'Jackson courts Mary Anna Morrison',
      detail:
        'After traveling in Europe, Jackson renewed contact with D. H. Hill’s sister-in-law Anna Morrison. They married in July 1857.',
    },
    {
      time: '34:09',
      audioTime: 2049,
      title: 'The Jackson household follows a fixed routine',
      detail:
        'Anna’s memoir describes prayer, exercise, teaching, study, meals, gardening, and evening preparation on a strict schedule. Enslaved household members were required to attend morning prayers.',
    },
    {
      time: '35:40',
      audioTime: 2140,
      title: 'Jackson leaves Lexington for Richmond',
      detail:
        'On April 21, 1861, Jackson took the VMI cadet corps toward Richmond to train Virginia recruits. The episode says the column departed at 1 p.m.; a VMI account gives 12:30 p.m.',
    },
    {
      time: '36:30',
      audioTime: 2190,
      title: 'Book recommendation',
      detail:
        'The hosts recommend Mighty Stonewall by Frank E. Vandiver and identify James I. Robertson Jr.’s larger biography as the more comprehensive alternative.',
    },
  ],
  command: [
    {
      side: 'United States Army, 1846–1852',
      color: '#315f8c',
      branches: [
        {
          commander: 'Maj. Gen. Winfield Scott',
          command: 'Commander, army operating from Veracruz to Mexico City',
          subordinates:
            'Directed the campaign in which Jackson served with the 1st U.S. Artillery',
        },
        {
          commander: 'Capt. John B. Magruder',
          command:
            'Commander of a light battery during the Mexico City campaign',
          subordinates:
            'Jackson volunteered for Magruder’s battery after Cerro Gordo and served in later actions on the approaches to Mexico City',
        },
        {
          commander: 'Bvt. Maj. Thomas J. Jackson',
          command: '1st U.S. Artillery officer',
          subordinates:
            'Began as a junior artillery officer and ended the Mexican War holding the brevet rank of major; his permanent rank was second lieutenant',
        },
        {
          commander: 'Maj. William H. French',
          command: 'Post commander, Fort Meade',
          subordinates:
            'Jackson served as company quartermaster and commissary officer but disputed the scope of French’s command authority',
        },
        {
          commander: 'Brig. Gen. Thomas Childs and Maj. Gen. David E. Twiggs',
          command: 'Senior Florida and departmental commanders',
          subordinates:
            'Childs rejected Jackson’s claim of administrative independence; Twiggs later transferred French after the dispute escalated',
        },
      ],
    },
    {
      side: 'Virginia Military Institute and Virginia forces, 1851–1861',
      color: '#9a3d32',
      branches: [
        {
          commander: 'Francis H. Smith',
          command: 'Superintendent, Virginia Military Institute',
          subordinates:
            'Supervised the institution where Jackson held the chair of Natural and Experimental Philosophy and taught artillery',
        },
        {
          commander: 'Maj. Thomas J. Jackson',
          command: 'VMI professor and commander of the cadet corps movement',
          subordinates:
            'Led the cadets from Lexington toward Richmond on April 21, 1861, for duty training Virginia recruits',
        },
        {
          commander: 'VMI Corps of Cadets',
          command: 'Cadet formation assigned to Richmond',
          subordinates:
            'Served as drill instructors for the expanding Virginia forces after secession',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Thomas J. Jackson',
      role: 'West Point graduate, U.S. artillery officer, VMI professor, enslaver, and future Confederate commander whose prewar life is the episode’s subject',
      side: 'Confederacy',
      image: '/images/ep138-thomas-jackson.jpg',
      source: 'https://www.loc.gov/item/2018670326/',
    },
    {
      name: 'Winfield Scott',
      role: 'Commanded the United States army that landed at Veracruz and captured Mexico City in the campaign where Jackson established his combat reputation',
      side: 'United States',
    },
    {
      name: 'John B. Magruder',
      role: 'Then a U.S. artillery captain, later a Confederate general; Jackson sought duty in his Mexican War battery because he expected further combat',
      side: 'Confederacy',
    },
    {
      name: 'Daniel Harvey Hill',
      role: 'Mexican War comrade and Washington College professor who promoted Jackson for the VMI appointment; later a Confederate general',
      side: 'Confederacy',
    },
    {
      name: 'William H. French',
      role: 'Senior U.S. Army officer at Fort Meade whose dispute with Jackson exposed Jackson’s rigid and combative view of subordinate authority',
      side: 'United States',
    },
    {
      name: 'Thomas Childs',
      role: 'Senior U.S. Army officer in Florida who ruled that Jackson remained subject to the post commander and criticized the officers’ personal hostility',
      side: 'United States',
    },
    {
      name: 'David E. Twiggs',
      role: 'U.S. departmental commander who transferred French after the Fort Meade dispute; Twiggs later entered Confederate service',
      side: 'Confederacy',
    },
    {
      name: 'Francis H. Smith',
      role: 'VMI superintendent who brought Jackson onto the faculty and led the institution during Jackson’s decade in Lexington',
      side: 'Confederacy',
    },
    {
      name: 'James A. Walker',
      role: 'VMI cadet expelled after a classroom dispute with Jackson; he later commanded the Stonewall Brigade and served as a Confederate brigadier general',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep138-thomas-jackson.jpg',
      alt: 'Civil War-era photographic portrait of Thomas J. Stonewall Jackson facing left',
      caption:
        'This photograph records Jackson after he became a Confederate general. The episode concerns the earlier experiences that shaped the officer and professor shown here.',
      source: 'https://www.loc.gov/item/2018670326/',
    },
    {
      image: '/images/ep138-chapultepec.jpg',
      alt: 'Hand-colored 1847 or 1848 lithograph depicting the United States attack on Chapultepec',
      caption:
        'A contemporary popular print of the September 13, 1847 attack on Chapultepec. It is an artistic representation, not an exact tactical record. Jackson received the brevet rank of major for his conduct in this battle.',
      source: 'https://www.loc.gov/item/98516127/',
    },
    {
      image: '/images/ep138-vmi-cadet.jpg',
      alt: 'Hand-colored ambrotype of an unidentified Virginia Military Institute cadet around 1860',
      caption:
        'An unidentified VMI cadet photographed about 1860. Jackson taught artillery and Natural and Experimental Philosophy at VMI, then led the cadet corps toward Richmond in April 1861.',
      source: 'https://www.loc.gov/item/2012645972/',
    },
    {
      image: '/images/ep138-jackson-life-route.svg',
      alt: 'Schematic map of Jackson’s prewar movement through Virginia, New York, and Florida',
      caption:
        'Jackson’s prewar career moved him from western Virginia to West Point, the U.S. Army, Florida, and finally a decade in Lexington before the Civil War.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/35-3-1.pdf',
    },
    {
      image: '/images/ep138-mexico-campaign.svg',
      alt: 'Schematic map of Winfield Scott’s 1847 advance from Veracruz to Mexico City',
      caption:
        'Jackson served in the artillery along Scott’s route from Veracruz to Mexico City and earned brevet promotions for his conduct in the later battles.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/73-3.pdf',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 138 page',
      url: 'https://civilwarpodcast.org/2016/01/10/civil-war-podcast-episode-138/',
    },
    {
      label: 'Virginia Military Institute: Jackson House Museum',
      url: 'https://www.vmi.edu/research/museums-and-archives/jhm/',
    },
    {
      label:
        'Rockbridge Historical Society: research on the people enslaved by Jackson',
      url: 'https://rockbridgehistory.org/wp-content/uploads/2020/06/Thomas-Stonewall-Jacksons-Slaves-Larry-Spurgeon-1.pdf',
    },
    {
      label: 'Primary source: Mary Anna Jackson’s Memoirs of Stonewall Jackson',
      url: 'https://archive.org/details/memoirsstonewal00jackgoog',
    },
    {
      label: 'Primary sources: VMI Archives Stonewall Jackson Papers',
      url: 'https://vmi.contentdm.oclc.org/digital/collection/p15821coll4',
    },
    {
      label: 'VMI Archives: Stonewall Jackson papers finding aid',
      url: 'https://arvasarchive.org/catalog/vilxv_repositories_3_resources_591_c01',
    },
    {
      label:
        'Virginia Military Institute: April 21 cadet corps departure account',
      url: 'https://digitalcollections.vmi.edu/digital/api/collection/p15821coll8/id/21002/download',
    },
    {
      label:
        'U.S. Army Center of Military History: Thomas J. Jackson biography',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/35-3-1.pdf',
    },
    {
      label: 'U.S. Army Center of Military History: The Occupation of Mexico',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/73-3.pdf',
    },
    {
      label:
        'U.S. Army Center of Military History: Mexican War campaign summaries',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Mexican-War-Campaigns/',
    },
    {
      label: 'Cullum’s Register: Thomas J. Jackson’s U.S. Army service record',
      url: 'https://penelope.uchicago.edu/Thayer/E/Gazetteer/Places/America/United_States/Army/USMA/Cullums_Register/1288%2A.html',
    },
    {
      label: 'Encyclopedia Virginia: Thomas J. “Stonewall” Jackson',
      url: 'https://encyclopediavirginia.org/entries/jackson-thomas-j-stonewall-1824-1863/',
    },
    {
      label: 'Library of Congress: Thomas J. Jackson photographic portrait',
      url: 'https://www.loc.gov/item/2018670326/',
    },
    {
      label: 'Library of Congress: Attack on Chapultepec lithograph',
      url: 'https://www.loc.gov/item/98516127/',
    },
    {
      label: 'Library of Congress: unidentified VMI cadet, about 1860',
      url: 'https://www.loc.gov/item/2012645972/',
    },
  ],
} satisfies Enrichment;
