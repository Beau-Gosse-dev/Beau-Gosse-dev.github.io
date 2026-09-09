import type { Enrichment } from '../types';

export const enrichment = {
  date: 'May 18–23, 1862',
  place:
    'The Shenandoah and Luray valleys from Mount Solon and New Market to Front Royal, Virginia, with the battle extending north from the town across the South and North Forks of the Shenandoah River to Guard Hill and Cedarville',
  result:
    'Decisive Confederate victory at Front Royal. Jackson and Ewell crossed Massanutten Mountain, concentrated in the Luray Valley, and surprised John R. Kenly’s isolated United States garrison on May 23. Kenly delayed the first Confederate infantry on Richardson’s Hill, then withdrew across both river forks and made another stand on Guard Hill. Confederate cavalry overtook and broke the retreating column near Cedarville. The destruction of the garrison placed Jackson on Nathaniel Banks’s flank and threatened the Federal line from Strasburg to Winchester, but slow and poorly coordinated Confederate deployment consumed most of the day and prevented an earlier exploitation',
  facts: [
    {
      label: 'Episode scope',
      value:
        'Confederate concentration and the Battle of Front Royal, May 18–23, 1862',
      note: 'The title also names Winchester, but this installment ends on the night of May 23. Banks’s retreat on May 24 and the First Battle of Winchester on May 25 belong to later episodes.',
    },
    {
      label: 'Strategic purpose',
      value: 'Strike Banks before he could reinforce McDowell or McClellan',
      note: 'Jackson and Ewell first intended to unite near New Market and attack Strasburg. Their revised plan crossed Massanutten Mountain and attacked the exposed Federal post at Front Royal instead.',
    },
    {
      label: 'Confederate command dispute',
      value:
        'Jackson temporarily suspended Johnston’s May 17 order recalling Ewell east',
      note: 'Jackson asked Robert E. Lee for immediate guidance. Joseph E. Johnston then authorized Jackson and Ewell to attack if they believed they could defeat Banks.',
    },
    {
      label: 'Revised plan',
      value:
        'Cross New Market Gap, join Ewell, and advance north through the Luray Valley',
      note: 'Taking Front Royal would turn Banks’s Strasburg position and place Confederate troops between Banks and Irvin McDowell’s command east of the Blue Ridge.',
    },
    {
      label: 'Confederate force condition',
      value: 'Exhausted by roughly 200 miles of marching in twenty days',
      note: 'The episode reports severe straggling, desertion, and supply problems. It says fewer than 5,000 of the 8,597 men Jackson claimed on May 3 remained present when his division entered the Luray Valley.',
    },
    {
      label: 'Combined Confederate strength',
      value: 'Probably about 12,000 effective in the episode’s estimate',
      note: 'The Confederate War Department expected about 18,000, and National Park Service accounts often use about 17,000 for Jackson’s combined command. Totals vary by date and by whether paper strength, present-for-duty strength, or only troops engaged at Front Royal are counted.',
    },
    {
      label: 'May 22 movement',
      value:
        'Seven infantry brigades, twenty cavalry companies, and forty-eight guns moved north',
      note: 'The episode calls this the largest force Jackson had yet commanded. At night the column’s camps stretched about fourteen miles along the road south of Front Royal.',
    },
    {
      label: 'Front Royal garrison',
      value: 'About 1,000–1,100 United States troops under Col. John R. Kenly',
      note: 'The main body was the 1st Maryland Infantry, supported by two guns from Battery E, Pennsylvania Light Artillery, detachments of the 29th Pennsylvania, and two companies of the 5th New York Cavalry that arrived during the action.',
    },
    {
      label: 'Maryland against Maryland',
      value:
        'Jackson ordered the Confederate 1st Maryland to lead against the United States 1st Maryland',
      note: 'Only about 200 men of Bradley T. Johnson’s regiment moved forward after a dispute over enlistment terms had left much of the regiment under arrest or unwilling to fight.',
    },
    {
      label: 'Morning halt',
      value:
        'At least four and a half hours in the episode’s time-and-distance reconstruction',
      note: 'The courier had to ride to the rear of an approximately eleven-mile column; Johnson then addressed his men, and the regiment marched forward. The estimate is an inference rather than a recorded stopwatch time.',
    },
    {
      label: 'Reason for the halt',
      value: 'Unknown',
      note: 'The episode presents Gary Ecelbarger’s hypothesis that Jackson was waiting for engineer Keith Boswell or mapmaker Jedediah Hotchkiss to return. Boswell reached Jackson before the attack and worked on maps toward Winchester, but the surviving evidence does not prove that this caused the halt.',
    },
    {
      label: 'Belle Boyd’s warning',
      value: 'Dramatic but apparently not operationally new',
      note: 'Boyd ran to Jackson’s staff shortly before the attack and reported that the Federal force was small. Jackson’s local cavalry scouts had already identified the garrison, and his Confederate Marylanders were already at the head of the column.',
    },
    {
      label: 'Opening attack',
      value: 'Between about 2:00 and 2:30 p.m. on May 23',
      note: 'The Confederate 1st Maryland, Wheat’s Louisiana battalion, and a company of the 6th Virginia Cavalry quickly overran the small force in Front Royal itself.',
    },
    {
      label: 'Richardson’s Hill',
      value:
        'Kenly held roughly 600 infantry and two rifled guns north of town for nearly two hours',
      note: 'From about 2:30 until 4:00 p.m., the first Confederate infantry opposite him numbered only about 450 in the episode’s accounting: roughly 200 Marylanders and 250 of Wheat’s battalion.',
    },
    {
      label: 'Taylor brigade uncertainty',
      value:
        'The locations of the 7th, 8th, and 9th Louisiana are not established from about 2:30 to 4:00 p.m.',
      note: 'The episode states that surviving records do not account for most of these roughly 2,000 men during the critical early phase. Their absence from the first line is clear; their precise movements are not.',
    },
    {
      label: 'Confederate artillery failure',
      value:
        'Only one effective rifled gun was in action during most of the Richardson’s Hill stand',
      note: 'Chief of artillery Stapleton Crutchfield brought batteries forward without knowing their armament. Two additional long-range pieces were not unlimbered until after 4:00 p.m., leaving Kenly’s two Parrott rifles largely unopposed.',
    },
    {
      label: 'Confederate reinforcement',
      value:
        'The 6th Louisiana attacked around 4:00 p.m.; the 8th Louisiana appeared as Kenly withdrew',
      note: 'The 8th Louisiana moved east, crossed the railroad bridge over the South Fork, and helped prevent destruction of the turnpike bridge across the North Fork.',
    },
    {
      label: 'United States withdrawal',
      value: 'Richardson’s Hill to Guard Hill, then north toward Cedarville',
      note: 'Kenly began leaving Richardson’s Hill about 4:30 p.m., crossed both forks of the Shenandoah, and briefly formed again on Guard Hill before continuing up the Front Royal–Winchester Turnpike.',
    },
    {
      label: 'Bridge fires',
      value:
        'Federal troops tried to burn both crossings; Confederates extinguished the fires',
      note: 'The damage delayed but did not stop pursuit. The North Fork bridge was partly damaged, and men crossed its surviving portion in restricted files.',
    },
    {
      label: 'Cavalry pursuit',
      value: 'Seven companies of the 6th Virginia Cavalry pursued north',
      note: 'Four leading companies caught Kenly’s retreating column near Cedarville. Two charges by Thomas S. Flournoy’s cavalry broke the final roadblock and converted the retreat into a rout and mass surrender.',
    },
    {
      label: 'United States casualties',
      value:
        'Published totals conflict: roughly 770 to 904 killed, wounded, and captured',
      note: 'The detailed NPS article reports more than 690 captured and 82 killed or wounded. The NPS battle-detail database gives 904 total. The episode says all but about 100 of the roughly 800 men in the retreating column were killed, wounded, or captured; these figures measure different pools and should not be combined.',
    },
    {
      label: 'Confederate casualties',
      value: '26 in the episode’s pursuit account; 36 or 56 in NPS summaries',
      note: 'The transcript attaches 26 casualties to the cavalry action. The detailed NPS narrative gives 36 for the battle, while the NPS battle-detail database gives 56. No single total is presented here as uniquely settled.',
    },
    {
      label: 'Operational consequence',
      value: 'Banks’s Strasburg position was turned',
      note: 'Front Royal’s fall threatened Banks’s railroad, road communications, and route north. He began preparing to withdraw toward Winchester that night.',
    },
    {
      label: 'Battlefield assessment',
      value: 'Decisive result, inefficient execution',
      note: 'Jackson destroyed the isolated post and achieved surprise, but an hours-long morning halt, slow infantry deployment, poor artillery preparation, and weak coordination consumed daylight and delayed pressure on Banks.',
    },
    {
      label: 'Important leader losses',
      value: 'No senior commander was killed or mortally wounded',
      note: 'Kenly was severely wounded during the final cavalry action and captured, but he survived the war. No comparable Confederate command loss occurred in the battle.',
    },
    {
      label: 'Transcript normalizations',
      value:
        'Ewell, Luray, Massanutten, Strasburg, Kenly, Ecelbarger, and Parrott rifles',
      note: 'The automated transcript repeatedly renders these as “Yule,” “LeRae,” “Massa Nutton,” “Strasbourg,” “Kinley,” “Ecklebarger,” and “parrot” guns. The guide uses standard historical spellings.',
    },
    {
      label: 'Book recommendation',
      value:
        '“Three Days in the Shenandoah: Stonewall Jackson at Front Royal and Winchester” by Gary Ecelbarger',
    },
  ],
  maps: [
    {
      title: 'May 21–23: the turning movement against Banks',
      caption:
        'Jackson crossed Massanutten Mountain through New Market Gap, joined Ewell in the Luray Valley, and marched north against Kenly at Front Royal while Banks’s main force remained west at Strasburg. Cavalry moved toward the Strasburg–Front Royal communications. This operational map is schematic: routes, force locations, distances, and terrain bands are approximate.',
      source: 'https://www.nps.gov/articles/000/battle-of-front-royal.htm',
      image: '/images/ep148-front-royal-operation.svg',
      alt: 'Schematic operational map showing Jackson crossing Massanutten Mountain, joining Ewell in the Luray Valley, and advancing north to Front Royal on Banks’s flank.',
    },
    {
      title: 'May 23: three stages of the Battle of Front Royal',
      caption:
        'The first Confederate infantry overran Front Royal, then confronted Kenly on Richardson’s Hill. Kenly withdrew across the South and North Forks to Guard Hill and continued north, where Flournoy’s cavalry broke the final roadblock near Cedarville. This is a schematic phase map, not a surveyed plot; river courses, unit positions, arrows, times, and spacing are simplified.',
      source: 'https://www.nps.gov/articles/000/battle-of-front-royal.htm',
      image: '/images/ep148-front-royal-tactics.svg',
      alt: 'Schematic tactical map of the Confederate attack at Front Royal, Kenly’s stands on Richardson’s and Guard Hills, the river crossings, and the cavalry pursuit to Cedarville.',
    },
  ],
  moments: [
    {
      time: '2:30',
      audioTime: 150,
      title: 'Shields has left the Valley',
      detail:
        'The episode resumes with James Shields moving east toward Irvin McDowell while Jackson and Ewell seek to attack the reduced command Nathaniel Banks retained at Strasburg and Front Royal.',
    },
    {
      time: '3:43',
      audioTime: 223,
      title: 'The original plan points toward Strasburg',
      detail:
        'Jackson and Ewell expected to unite between New Market and Mount Jackson on May 21, then move north on the Valley Turnpike against Banks.',
    },
    {
      time: '4:14',
      audioTime: 254,
      title: 'Jackson’s men leave knapsacks behind',
      detail:
        'As the Valley Army passed Harrisonburg, the order to abandon knapsacks signaled that speed and combat, not a routine march, lay ahead.',
    },
    {
      time: '4:35',
      audioTime: 275,
      title: 'Jackson reaches New Market',
      detail:
        'On May 20 the Valley force camped at the junction of the Valley Turnpike and the road east through New Market Gap into the Luray Valley.',
    },
    {
      time: '5:22',
      audioTime: 322,
      title: 'Ewell receives a direct recall',
      detail:
        'Joseph E. Johnston’s May 17 order required Ewell to leave the Valley and move toward Richmond, disrupting the generals’ arrangement to attack Banks.',
    },
    {
      time: '6:12',
      audioTime: 372,
      title: 'Jackson appeals by telegraph',
      detail:
        'Jackson suspended Ewell’s departure and wired Robert E. Lee that an attack on Banks should be attempted, but that Johnston’s instruction prevented him from acting without immediate guidance.',
    },
    {
      time: '7:03',
      audioTime: 423,
      title: 'Taylor’s Louisiana Brigade arrives',
      detail:
        'About 3,000 Louisianans marched in after a twenty-six-mile movement around the southern end of Massanutten. Their discipline, bands, uniforms, and dancing impressed Jackson’s tired Valley soldiers.',
    },
    {
      time: '8:19',
      audioTime: 499,
      title: 'Richard Taylor is introduced',
      detail:
        'The episode traces the thirty-six-year-old brigadier’s family connections, limited formal military background, strict discipline, and unexpected effectiveness as a field leader.',
    },
    {
      time: '9:20',
      audioTime: 560,
      title: 'Taylor enforces discipline on the Tigers',
      detail:
        'After a failed attempt to free imprisoned comrades, two ringleaders were court-martialed and executed by a firing squad drawn from their own battalion.',
    },
    {
      time: '11:07',
      audioTime: 667,
      title: 'Taylor meets Jackson',
      detail:
        'Jackson praised the Louisiana Brigade’s lack of stragglers, then disapproved of its dancing. Taylor replied that the men’s gaiety would not prevent them from doing serious work.',
    },
    {
      time: '13:45',
      audioTime: 825,
      title: 'Johnston permits the attack',
      detail:
        'A courier brought word that Jackson and Ewell could strike Banks if they judged conditions favorable, resolving the immediate command conflict.',
    },
    {
      time: '14:19',
      audioTime: 859,
      title: 'The generals revise the plan',
      detail:
        'Instead of Ewell crossing west for a direct attack on Strasburg, Jackson would cross east, join Ewell in the Luray Valley, and attack Front Royal.',
    },
    {
      time: '15:25',
      audioTime: 925,
      title: 'Johnston gives explicit confirmation',
      detail:
        'A second message stated that if Jackson and Ewell united could defeat Banks, they should do so.',
    },
    {
      time: '16:15',
      audioTime: 975,
      title: 'The soldiers describe exhaustion',
      detail:
        'Letters and diaries report near-continuous marching, little restorative sleep, and orders to rise at 2:30 a.m. after weeks of movement and fighting.',
    },
    {
      time: '17:00',
      audioTime: 1020,
      title: 'The foot cavalry has marched about 200 miles',
      detail:
        'The episode calculates that Jackson’s infantry covered roughly 200 miles between May 3 and May 22, sharply reducing the number still present in the ranks.',
    },
    {
      time: '17:32',
      audioTime: 1052,
      title: 'The Stonewall Brigade’s paper strength collapses',
      detail:
        'Jackson claimed 3,681 men in the brigade on May 3, but fewer than 1,600 were present twenty days later; the episode attributes the decline primarily to desertion and straggling.',
    },
    {
      time: '19:15',
      audioTime: 1155,
      title: 'Paper strength and effective strength diverge',
      detail:
        'Richmond expected approximately 18,000 men, while the episode judges that no more than 14,000 and probably closer to 12,000 were effective when Jackson and Ewell moved against Banks.',
    },
    {
      time: '20:15',
      audioTime: 1215,
      title: 'Jackson crosses Massanutten',
      detail:
        'The Valley force moved through New Market Gap, crossed the South Fork near Luray, and joined Ewell in the Luray Valley.',
    },
    {
      time: '20:28',
      audioTime: 1228,
      title: 'The combined army starts north',
      detail:
        'Early on May 22, seven infantry brigades, twenty cavalry companies, and forty-eight guns moved north under Jackson’s overall command.',
    },
    {
      time: '21:03',
      audioTime: 1263,
      title: 'The column camps along fourteen miles of road',
      detail:
        'Ewell’s lead brigade stopped about ten miles from Front Royal, while Jackson’s worn Stonewall Brigade remained far to the rear near Luray.',
    },
    {
      time: '21:45',
      audioTime: 1305,
      title: 'Taylor takes the point on May 23',
      detail:
        'Taylor’s brigade led the renewed march. Bradley Johnson’s Confederate 1st Maryland marked time until the rest of the long column passed it.',
    },
    {
      time: '22:53',
      audioTime: 1373,
      title: 'Jackson orders the 1st Maryland forward',
      detail:
        'At about 8 a.m. a courier carried Jackson’s order to the rear: Johnson’s regiment was to move to the front and attack the Federal garrison.',
    },
    {
      time: '23:23',
      audioTime: 1403,
      title: 'Johnson rallies about 200 Marylanders',
      detail:
        'A speech persuaded part of the near-mutinous regiment to take up arms. Those men then hurried toward the head of the column.',
    },
    {
      time: '24:17',
      audioTime: 1457,
      title: 'The halt consumes at least four and a half hours',
      detail:
        'The episode combines the courier’s ride, Johnson’s speech and preparation, and the regiment’s approximately eleven-mile march to explain why the attack began in mid-afternoon.',
    },
    {
      time: '26:05',
      audioTime: 1565,
      title: 'The reason for Jackson’s halt remains uncertain',
      detail:
        'Gary Ecelbarger suggests Jackson may have waited for Keith Boswell or Jedediah Hotchkiss to return, but the episode makes clear that the surviving evidence does not settle the question.',
    },
    {
      time: '27:01',
      audioTime: 1621,
      title: 'Boswell reaches the army',
      detail:
        'Jackson’s engineer arrived about an hour before the attack and then prepared maps of the country between Front Royal and Winchester for Jackson and Ewell.',
    },
    {
      time: '28:09',
      audioTime: 1689,
      title: 'The army takes the Gooney Manor Road',
      detail:
        'Jackson shifted the column onto a country lane and then the graded road along Dickey Ridge, approaching Front Royal from the south.',
    },
    {
      time: '28:28',
      audioTime: 1708,
      title: 'Belle Boyd runs to the Confederates',
      detail:
        'Boyd warned staff officers that the Federal force was small. The episode concludes that cavalry scouts had already supplied the relevant intelligence.',
    },
    {
      time: '29:42',
      audioTime: 1782,
      title: 'The attack enters Front Royal',
      detail:
        'Between about 2:00 and 2:30 p.m., the Confederate 1st Maryland, Wheat’s battalion, and a company of cavalry overwhelmed the small detachment in town.',
    },
    {
      time: '30:19',
      audioTime: 1819,
      title: 'Kenly stands on Richardson’s Hill',
      detail:
        'With about 600 infantry and two rifled guns, Kenly held the height north of town for nearly two hours despite the much larger Confederate army nearby.',
    },
    {
      time: '31:27',
      audioTime: 1887,
      title: 'Most of Taylor’s brigade is unaccounted for',
      detail:
        'The episode finds no clear record of the 7th, 8th, and 9th Louisiana from roughly 2:30 to 4:00 p.m., leaving only the Marylanders and Wheat’s battalion opposite Kenly early on.',
    },
    {
      time: '31:55',
      audioTime: 1915,
      title: 'Confederate artillery arrives unprepared',
      detail:
        'Crutchfield’s first batteries yielded only three useful long-range guns, and just one was brought into action during the first hour.',
    },
    {
      time: '33:28',
      audioTime: 2008,
      title: 'Jackson demands every rifled gun and brigade',
      detail:
        'Frustrated by the slow deployment, Jackson called for all available rifled artillery and infantry to be brought forward.',
    },
    {
      time: '33:47',
      audioTime: 2027,
      title: 'The 6th Louisiana climbs Richardson’s Hill',
      detail:
        'The regiment entered the action around 4 p.m. Boswell found a closer artillery position, but Kenly withdrew before guns could use it.',
    },
    {
      time: '34:16',
      audioTime: 2056,
      title: 'Kenly begins a fighting withdrawal',
      detail:
        'At about 4:30 p.m. the United States line left Richardson’s Hill and moved toward the two river crossings north of town.',
    },
    {
      time: '34:22',
      audioTime: 2062,
      title: 'The 8th Louisiana moves around the flank',
      detail:
        'The regiment crossed the railroad bridge over the South Fork and helped extinguish fires at the turnpike bridge across the North Fork.',
    },
    {
      time: '34:37',
      audioTime: 2077,
      title: 'Kenly briefly forms on Guard Hill',
      detail:
        'After crossing both river branches, he redeployed his two guns on Guard Hill but abandoned the position by about 5 p.m. and continued north.',
    },
    {
      time: '35:24',
      audioTime: 2124,
      title: 'Flournoy’s cavalry takes up the pursuit',
      detail:
        'Seven companies of the 6th Virginia Cavalry followed Kenly. Four leading companies caught the retreating column near Cedarville and broke it in a short, violent action.',
    },
    {
      time: '36:17',
      audioTime: 2177,
      title: 'The victory has consumed the day',
      detail:
        'Most of Kenly’s surviving men did not surrender until after 6:30 p.m. The sun set soon afterward, limiting Jackson’s opportunity to move immediately into Banks’s rear.',
    },
    {
      time: '37:33',
      audioTime: 2253,
      title: 'Jackson closes around Front Royal',
      detail:
        'By May 24 the episode estimates about 12,000 Confederates within six miles of town, while Banks held roughly 6,000 men around Strasburg twelve miles west.',
    },
    {
      time: '38:07',
      audioTime: 2287,
      title: 'Operational skill and tactical weakness are separated',
      detail:
        'The hosts credit Jackson with placing the army where it could win but fault the battle’s execution: unclear instructions, missing infantry, and poorly prepared artillery turned a favorable situation into a four-hour fight.',
    },
    {
      time: '39:33',
      audioTime: 2373,
      title: 'The episode recommends Ecelbarger’s study',
      detail:
        'The book recommendation is Gary Ecelbarger’s “Three Days in the Shenandoah: Stonewall Jackson at Front Royal and Winchester.”',
    },
  ],
  command: [
    {
      side: 'United States',
      color: '#315f8c',
      branches: [
        {
          commander: 'President Abraham Lincoln / Secretary Edwin M. Stanton',
          command: 'National strategic direction',
          subordinates:
            'Had detached Shields toward McDowell and left Banks to guard the Shenandoah Valley with a reduced force',
        },
        {
          commander: 'Maj. Gen. Nathaniel P. Banks',
          command: 'Department of the Shenandoah',
          subordinates:
            'Held the main United States force around Strasburg while maintaining smaller posts at Front Royal and Buckton Station',
        },
        {
          commander: 'Brig. Gen. Alpheus S. Williams',
          command: 'Infantry division near Strasburg',
          subordinates:
            'About 4,500 infantry in the episode’s estimate; remained with Banks while Kenly fought at Front Royal',
        },
        {
          commander: 'Col. John R. Kenly',
          command: 'Front Royal garrison; 1st Maryland Infantry',
          subordinates:
            'About 1,000–1,100 total with attached infantry, artillery, and cavalry; directed the defenses on Richardson’s Hill, Guard Hill, and the road toward Cedarville',
        },
        {
          commander: 'Lt. Charles A. Atwell',
          command: 'Section, Battery E, Pennsylvania Light Artillery',
          subordinates:
            'Two Parrott rifles that supported Kenly’s successive defensive positions',
        },
        {
          commander: 'Detached United States troops',
          command: 'Bridge guards and cavalry reinforcement',
          subordinates:
            'Companies B and G, 29th Pennsylvania Infantry, and two companies of the 5th New York Cavalry joined the retreating garrison during the battle',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'Gen. Joseph E. Johnston',
          command: 'Senior Confederate field authority',
          subordinates:
            'Initially ordered Ewell east, then authorized Jackson and Ewell to attack Banks if they could defeat him',
        },
        {
          commander: 'Maj. Gen. Thomas J. “Stonewall” Jackson',
          command: 'Overall commander, combined Valley force',
          subordinates:
            'Revised the plan toward Front Royal, directed the approach and battle, and controlled Jackson’s division, Ewell’s division, cavalry, and artillery',
        },
        {
          commander: 'Maj. Gen. Richard S. Ewell',
          command: 'Division commander under Jackson',
          subordinates:
            'Brought Taylor’s, Trimble’s, and Elzey’s brigades into the concentration; Taylor’s brigade supplied most of the infantry used at Front Royal',
        },
        {
          commander: 'Brig. Gen. Richard Taylor',
          command: 'Louisiana Brigade, Ewell’s division',
          subordinates:
            '6th, 7th, 8th, and 9th Louisiana Infantry and Wheat’s 1st Special Battalion; only parts of the brigade reached the firing line in time to influence the battle',
        },
        {
          commander: 'Col. Bradley T. Johnson',
          command: '1st Maryland Infantry, Confederate States',
          subordinates:
            'Rallied about 200 men and led the opening infantry advance against Kenly’s United States 1st Maryland',
        },
        {
          commander: 'Maj. Chatham Roberdeau Wheat',
          command: '1st Special Battalion, Louisiana Infantry',
          subordinates:
            'About 250 “Louisiana Tigers” in the episode’s estimate; advanced through Front Royal and held below Richardson’s Hill until reinforced',
        },
        {
          commander: 'Col. Stapleton Crutchfield',
          command: 'Chief of artillery',
          subordinates:
            'Selected the initial artillery height but failed to bring an effective concentration of rifled guns into action promptly',
        },
        {
          commander: 'Lt. Col. Thomas S. Flournoy',
          command: '6th Virginia Cavalry pursuit force',
          subordinates:
            'Seven companies pursued Kenly; the four leading companies broke the final United States position near Cedarville',
        },
        {
          commander: 'Lt. Keith Boswell / Jedediah Hotchkiss',
          command: 'Engineering and topographical staff',
          subordinates:
            'Recalled from reconnaissance toward Strasburg; Boswell returned before the attack, mapped the route toward Winchester, and sought a closer artillery position',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Thomas J. “Stonewall” Jackson',
      role: 'Overall Confederate commander who kept Ewell in the Valley, shifted the target from Strasburg to Front Royal, and directed the May 23 attack',
      side: 'Confederacy',
      image: '/images/ep148-stonewall-jackson.jpg',
      source: 'https://www.loc.gov/item/2018670324/',
    },
    {
      name: 'Richard S. Ewell',
      role: 'Division commander whose recall order was suspended; he joined Jackson in the Luray Valley and operated under Jackson during the advance',
      side: 'Confederacy',
      image: '/images/ep148-richard-ewell.jpg',
      source: 'https://www.loc.gov/pictures/item/2018670286/',
    },
    {
      name: 'Nathaniel P. Banks',
      role: 'Department commander at Strasburg whose eastern post was destroyed and whose road and railroad communications were threatened',
      side: 'United States',
      image: '/images/ep148-nathaniel-banks.jpg',
      source: 'https://www.loc.gov/pictures/item/98506703/',
    },
    {
      name: 'Richard Taylor',
      role: 'Louisiana brigade commander praised for discipline and marching ability; parts of his brigade conducted the infantry attack at Front Royal',
      side: 'Confederacy',
      image: '/images/ep148-richard-taylor.jpg',
      source: 'https://www.loc.gov/item/2018666550/',
    },
    {
      name: 'Isabella Maria “Belle” Boyd',
      role: 'Front Royal resident and Confederate courier who ran to Jackson’s staff with a warning that the Federal garrison was small',
      side: 'Confederacy',
      image: '/images/ep148-belle-boyd.jpg',
      source: 'https://www.loc.gov/pictures/item/2017897042/',
    },
    {
      name: 'John R. Kenly',
      role: 'United States colonel who commanded the Front Royal garrison, held successive positions north of town, and was wounded and captured in the final cavalry action',
      side: 'United States',
    },
    {
      name: 'Bradley T. Johnson',
      role: 'Confederate colonel who rallied about 200 men of the 1st Maryland and led them against the United States regiment of the same designation',
      side: 'Confederacy',
    },
    {
      name: 'Chatham Roberdeau Wheat',
      role: 'Commander of the Louisiana Tigers battalion, one of the two principal Confederate infantry elements in the early fight below Richardson’s Hill',
      side: 'Confederacy',
    },
    {
      name: 'Stapleton Crutchfield',
      role: 'Jackson’s chief of artillery, whose inadequate knowledge of Ewell’s batteries delayed effective counterbattery fire',
      side: 'Confederacy',
    },
    {
      name: 'Thomas S. Flournoy',
      role: 'Lieutenant colonel of the 6th Virginia Cavalry who led the pursuit and the charges that broke Kenly’s column near Cedarville',
      side: 'Confederacy',
    },
    {
      name: 'Charles A. Atwell',
      role: 'United States artillery lieutenant whose two Parrott rifles supported Kenly on Richardson’s Hill and Guard Hill',
      side: 'United States',
    },
    {
      name: 'Keith Boswell',
      role: 'Jackson’s engineering officer who returned before the attack, prepared maps toward Winchester, and found a closer artillery position',
      side: 'Confederacy',
    },
    {
      name: 'Jedediah Hotchkiss',
      role: 'Topographical engineer recalled from reconnaissance toward Strasburg; the uncertainty over his and Boswell’s return figures in the episode’s explanation of the morning halt',
      side: 'Confederacy',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Senior Confederate commander who first recalled Ewell and then authorized an attack on Banks if Jackson and Ewell judged it practicable',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Lee',
      role: 'Confederate military adviser who communicated with Jackson by telegraph and supported action that would keep Banks from reinforcing eastern Virginia',
      side: 'Confederacy',
    },
    {
      name: 'Alpheus S. Williams',
      role: 'United States division commander whose infantry formed the core of Banks’s main force at Strasburg',
      side: 'United States',
    },
  ],
  losses: [
    {
      name: 'Col. John R. Kenly',
      side: 'United States',
      role: 'Commander, Front Royal garrison and 1st Maryland Infantry',
      outcome:
        'Severely wounded during the final cavalry action near Cedarville and captured; he survived and later returned to duty. No senior commander on either side was killed or mortally wounded at Front Royal.',
    },
  ],
  gallery: [
    {
      image: '/images/ep148-front-royal-forbes.jpg',
      alt: 'Edwin Forbes pencil drawing of United States troops under Nathaniel Banks entering Front Royal on May 20, 1862.',
      caption:
        'Edwin Forbes drew Banks’s troops entering Front Royal on May 20, three days before Jackson attacked the isolated post. The contemporary drawing is a scene of occupation, not an image of the battle itself.',
      source: 'https://www.loc.gov/pictures/item/2004661888/',
    },
    {
      image: '/images/ep148-stonewall-jackson.jpg',
      alt: 'Wartime photographic portrait of Confederate general Thomas J. Stonewall Jackson in uniform.',
      caption:
        'Jackson achieved the operational surprise he sought by crossing Massanutten and approaching Front Royal through the Luray Valley, but his battlefield deployment consumed most of May 23.',
      source: 'https://www.loc.gov/item/2018670324/',
    },
    {
      image: '/images/ep148-richard-ewell.jpg',
      alt: 'Wartime photographic portrait of Confederate general Richard S. Ewell in uniform.',
      caption:
        'Ewell remained in the Valley after Johnston revised his orders. His division supplied Taylor’s Louisiana Brigade and much of the force used at Front Royal.',
      source: 'https://www.loc.gov/pictures/item/2018670286/',
    },
    {
      image: '/images/ep148-richard-taylor.jpg',
      alt: 'Civil War-era photographic portrait of Confederate general Richard Taylor in civilian dress.',
      caption:
        'Taylor’s well-drilled Louisiana Brigade led the May 23 column. Wheat’s battalion and the 6th and 8th Louisiana fought at Front Royal, while the other regiments’ early-afternoon locations remain uncertain.',
      source: 'https://www.loc.gov/item/2018666550/',
    },
    {
      image: '/images/ep148-belle-boyd.jpg',
      alt: 'Civil War-era photographic portrait of Confederate courier and spy Belle Boyd.',
      caption:
        'Boyd’s run to Jackson’s staff became a celebrated episode of the battle. Her warning was consistent with what Confederate scouts had already learned about Kenly’s small garrison.',
      source: 'https://www.loc.gov/pictures/item/2017897042/',
    },
    {
      image: '/images/ep148-nathaniel-banks.jpg',
      alt: 'Civil War-era photographic portrait of United States general Nathaniel P. Banks in uniform.',
      caption:
        'Banks’s main force remained at Strasburg while Kenly fought twelve miles away. Front Royal’s loss threatened the route north and forced a decision about retreat.',
      source: 'https://www.loc.gov/pictures/item/98506703/',
    },
    {
      image: '/images/ep148-front-royal-operation.svg',
      alt: 'Schematic map of Jackson’s movement across Massanutten Mountain and north to Front Royal.',
      caption:
        'The operational schematic shows how the move through New Market Gap placed Jackson east of Banks and enabled a strike at the separated Front Royal garrison.',
      source: 'https://www.nps.gov/articles/000/battle-of-front-royal.htm',
    },
    {
      image: '/images/ep148-front-royal-tactics.svg',
      alt: 'Schematic phase map of the Battle of Front Royal from the town to Cedarville.',
      caption:
        'The tactical schematic follows Kenly’s successive positions from Richardson’s Hill across the river forks to Guard Hill and the final cavalry action near Cedarville.',
      source: 'https://www.nps.gov/articles/000/battle-of-front-royal.htm',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 148 page',
      url: 'https://civilwarpodcast.org/2016/04/03/civil-war-podcast-episode-148/',
    },
    {
      label: 'National Park Service: Battle of Front Royal',
      url: 'https://www.nps.gov/articles/000/battle-of-front-royal.htm',
    },
    {
      label: 'National Park Service: Front Royal battle detail',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va103',
    },
    {
      label: 'National Park Service: Jackson’s 1862 Shenandoah Valley Campaign',
      url: 'https://www.nps.gov/articles/000/jackson1862-valley-campaign.htm',
    },
    {
      label:
        'U.S. Army Center of Military History: “Action and Reaction: The Spring 1862 Shenandoah Valley Campaign Revisited,” Robert S. Rush',
      url: 'https://history.army.mil/Portals/143/Images/Publications/ArmyHistoryMag/pdf/19901999/AH47newOCR.pdf',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
    },
    {
      label:
        'Primary source collection: Official Records, Series I, Volume XII, Part I',
      url: 'https://ehistory.osu.edu/books/official-records/015',
    },
    {
      label:
        'Primary correspondence collection: Official Records, Series I, Volume XII, Part III',
      url: 'https://ehistory.osu.edu/books/official-records/018',
    },
    {
      label: 'Official Records Atlas index: Front Royal map, Plate 5, map 5',
      url: 'https://ehistory.osu.edu/books/official-records/atlas_11',
    },
    {
      label:
        'Shenandoah Valley Battlefields National Historic District: Battle of Front Royal',
      url: 'https://www.shenandoahatwar.org/battle-of-front-royal',
    },
    {
      label:
        'Maryland State Archives: The Maryland Line in the Confederate Army, Front Royal chapter',
      url: 'https://msa.maryland.gov/megafile/msa/speccol/sc2900/sc2908/000001/000371/html/am371--43.html',
    },
    {
      label:
        'Library of Congress: Edwin Forbes, “Front Royal Va.—The Union Army under Banks entering the town”',
      url: 'https://www.loc.gov/pictures/item/2004661888/',
    },
    {
      label: 'Library of Congress: Hotchkiss Map Collection',
      url: 'https://www.loc.gov/collections/hotchkiss-maps/about-this-collection/',
    },
    {
      label: 'Library of Congress: Thomas J. “Stonewall” Jackson portrait',
      url: 'https://www.loc.gov/item/2018670324/',
    },
    {
      label: 'Library of Congress: Richard S. Ewell portrait',
      url: 'https://www.loc.gov/pictures/item/2018670286/',
    },
    {
      label: 'Library of Congress: Nathaniel P. Banks portrait',
      url: 'https://www.loc.gov/pictures/item/98506703/',
    },
    {
      label: 'Library of Congress: Richard Taylor portrait',
      url: 'https://www.loc.gov/item/2018666550/',
    },
    {
      label: 'Library of Congress: Belle Boyd portrait',
      url: 'https://www.loc.gov/pictures/item/2017897042/',
    },
    {
      label: 'Official podcast book-recommendations list',
      url: 'https://civilwarpodcast.org/book-recommendations/',
    },
  ],
} satisfies Enrichment;
