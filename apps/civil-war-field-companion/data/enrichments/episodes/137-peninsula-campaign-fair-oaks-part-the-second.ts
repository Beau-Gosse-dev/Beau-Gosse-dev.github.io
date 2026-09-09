import type { Enrichment } from '../types';

export const enrichment = {
  date: 'May 31–June 2, 1862 (battle on May 31–June 1; immediate command change and withdrawal through June 2)',
  place:
    'East of Richmond, Virginia, between the Chickahominy River, Fair Oaks Station, Seven Pines, the Richmond and York River Railroad, Nine Mile Road, and Williamsburg Road',
  result:
    'Indecisive. Sumner’s II Corps crossed the flooded Chickahominy and stopped Whiting’s late May 31 attack near the Adams House. Joseph E. Johnston was seriously wounded, and Gustavus W. Smith assumed temporary command. Poorly coordinated Confederate attacks on June 1 failed against Richardson and Kearny; D. H. Hill ordered a withdrawal, and the fighting ended about 2 p.m. The Confederate army returned to its earlier lines, but Johnston’s removal led Jefferson Davis to place Robert E. Lee in command of the forces defending Richmond',
  facts: [
    {
      label: 'Two names',
      value: 'Fair Oaks (United States) / Seven Pines (Confederate)',
      note: 'The battle was fought on May 31 and June 1, 1862. The names emphasize different parts of the same battlefield.',
    },
    {
      label: 'Fair Oaks and Seven Pines',
      value: 'About one mile apart',
      note: 'Fair Oaks Station stood at the railroad crossing of Nine Mile Road; Seven Pines was the crossroads farther south.',
    },
    {
      label: 'Couch’s isolated force',
      value:
        'Four infantry regiments and Battery H, 1st Pennsylvania Light Artillery',
      note: 'Jenkins’s May 31 penetration separated Couch and these troops from the rest of IV Corps. They formed near the Adams House and opened fire on Whiting.',
    },
    {
      label: 'Sumner’s crossing order',
      value: 'About 2:30 p.m., May 31',
      note: 'Sumner had already moved II Corps near the crossings. Sedgwick’s division crossed first over the damaged bridge commonly called Grapevine Bridge.',
    },
    {
      label: 'Sedgwick’s lead force',
      value: 'About 8,000 men in three brigades',
      note: 'This is the episode’s estimate for the force that reached Couch shortly after 5 p.m., not the strength of all II Corps troops eventually south of the river.',
    },
    {
      label: 'United States artillery at the Adams House',
      value: '11 guns; the episode reports at least 500 rounds fired',
      note: 'James Brady’s six 10-pounder Parrott rifles were joined by Edmund Kirby’s five 12-pounder Napoleons.',
    },
    {
      label: 'Confederate brigade commanders hit',
      value: 'Robert Hatton killed; James Pettigrew and Wade Hampton wounded',
      note: 'Pettigrew was left on the field and captured. Hampton remained mounted while a surgeon removed a bullet from his foot.',
    },
    {
      label: 'Johnston wounded',
      value: 'About 7 p.m., May 31',
      note: 'The episode describes a bullet wound to his right shoulder followed by a shell fragment striking his chest and throwing him from his horse. He survived but was absent from field command for about six months.',
    },
    {
      label: 'Command after Johnston',
      value: 'Gustavus W. Smith took temporary command',
      note: 'Smith ordered a renewed attack for June 1. The episode attributes the reduced morning operation to Longstreet’s decision to direct only a reconnaissance in force; postwar accounts dispute intentions and responsibility.',
    },
    {
      label: 'June 1 opening',
      value: 'About 6:30 a.m.',
      note: 'Mahone and Armistead struck William French’s brigade near the railroad. Pickett advanced on their right but did not maintain close contact.',
    },
    {
      label: 'Oliver O. Howard',
      value: 'Right arm amputated after two wounds',
      note: 'Howard was hit while leading the 61st and 64th New York forward. The wounds were not mortal; he returned to duty later in 1862.',
    },
    {
      label: 'June 1 ending',
      value: 'Withdrawal ordered about 1 p.m.; firing ended about 2 p.m.',
      note: 'Ward struck Armistead’s exposed flank, Richardson pressed forward, and Hooker advanced as Wilcox and Pryor withdrew.',
    },
    {
      label: 'Episode casualty figures',
      value:
        'Confederacy: just over 6,100, including 980 killed; United States: just over 5,000, including 790 killed',
      note: 'These are the traditional totals used by the episode and the National Park Service battle summary. Later battlefield studies give higher and materially different totals, so casualty counts should be identified by source.',
    },
    {
      label: 'Strategic consequence',
      value: 'Robert E. Lee received command of the army defending Richmond',
      note: 'The tactical result did not move the front decisively. The command change, rather than ground gained or lost, was the battle’s most consequential immediate result.',
    },
    {
      label: 'Book recommendation',
      value: 'Smithsonian Civil War: Inside the National Collection',
      note: 'Edited by Neil Kagan and Stephen G. Hyslop. The automated transcript misspells both surnames.',
    },
  ],
  maps: [
    {
      title: 'Sumner crosses the flooded Chickahominy',
      caption:
        'Sumner moved II Corps from the Gaines Mill area toward two temporary crossings. One span failed after a brigade crossed. Sedgwick’s division used the damaged Grapevine Bridge, struggled through the flooded south-bank approaches, and reached Couch near the Adams House shortly after 5 p.m. Whiting approached from Fair Oaks on Nine Mile Road. Locations and routes are schematic.',
      source: 'https://www.loc.gov/item/2004660060/',
      image: '/images/ep137-sumner-relief-route.svg',
      alt: 'Operational map of Sumner’s route across the Chickahominy to Couch and Sedgwick at Fair Oaks',
    },
    {
      title: 'The June 1 attacks and Confederate withdrawal',
      caption:
        'Mahone, Armistead, and Pickett advanced separately toward Richardson’s line along the railroad. Mahone’s piecemeal attacks failed; Ward moved along the railroad cut into Armistead’s exposed flank; and Pickett withdrew without closing the gap. Hill ordered the brigades back about 1 p.m., while Hooker advanced along Williamsburg Road. Positions and frontages are approximate.',
      source:
        'https://history.army.mil/Research/Reference-Topics/Irish-and-the-US-Army/Fair-Oaks-Seven-Pines/',
      image: '/images/ep137-june1-tactical.svg',
      alt: 'Tactical map of the June 1 Confederate attacks, United States flank attack, and Confederate withdrawal',
    },
  ],
  moments: [
    {
      time: '6:10',
      audioTime: 370,
      title: 'The episode resumes the May 31 battle',
      detail:
        'The recap follows Hill’s advance past Casey and Jenkins’s penetration, then returns to Johnston and Whiting on Nine Mile Road.',
    },
    {
      time: '13:12',
      audioTime: 792,
      title: 'Johnston and Whiting reach Fair Oaks',
      detail:
        'Shortly before 5 p.m., Whiting’s fresh division approached Fair Oaks. Johnston did not know that Couch’s separated force was nearby.',
    },
    {
      time: '15:01',
      audioTime: 901,
      title: 'Couch forms at the Adams House',
      detail:
        'Couch placed four regiments and Brady’s six-gun battery on a rise north of Fair Oaks and opened fire on Whiting’s exposed column.',
    },
    {
      time: '16:28',
      audioTime: 988,
      title: 'Reinforcements appear from across the river',
      detail:
        'Sedgwick’s lead brigades arrived after crossing the flooded Chickahominy and marching through the swampy southern approach.',
    },
    {
      time: '17:11',
      audioTime: 1031,
      title: 'McClellan orders Sumner across',
      detail:
        'McClellan’s order arrived about 2:30 p.m. Sumner had already placed his divisions near the temporary bridges and began crossing immediately.',
    },
    {
      time: '18:18',
      audioTime: 1098,
      title: 'Sedgwick uses the Grapevine Bridge',
      detail:
        'Infantry and artillery settled the unstable log flooring under their weight, then dragged guns through roughly 200 yards of flooded ground on the south bank.',
    },
    {
      time: '19:07',
      audioTime: 1147,
      title: 'Sumner reaches Couch',
      detail:
        'Three of Sedgwick’s brigades reinforced Couch and formed intersecting lines that could place attackers under artillery and musket crossfire.',
    },
    {
      time: '20:08',
      audioTime: 1208,
      title: 'Whiting renews the attack',
      detail:
        'Johnston sent three brigades against the Adams House position without effective artillery support. Eleven United States guns broke up repeated advances.',
    },
    {
      time: '21:06',
      audioTime: 1266,
      title: 'Whiting’s brigade commanders fall',
      detail:
        'Robert Hatton was killed, James Pettigrew was shot and captured, and Wade Hampton was wounded in the foot.',
    },
    {
      time: '22:30',
      audioTime: 1350,
      title: 'Johnston is seriously wounded',
      detail:
        'Near dusk, Johnston was struck by a bullet and then by a shell fragment. His staff removed him from the field, ending his active command in the battle.',
    },
    {
      time: '27:27',
      audioTime: 1647,
      title: 'Smith assumes command',
      detail:
        'Gustavus W. Smith inherited a divided battlefield: Whiting had stalled at Fair Oaks, while Hill held ground west of the United States line at Seven Pines.',
    },
    {
      time: '30:59',
      audioTime: 1859,
      title: 'Smith orders a June 1 attack',
      detail:
        'Smith directed Longstreet’s right wing to wheel north toward the railroad while Whiting held the troops opposite Fair Oaks.',
    },
    {
      time: '33:37',
      audioTime: 2017,
      title: 'The ordered attack becomes a limited probe',
      detail:
        'The episode says Longstreet told Hill to send only several brigades to test the United States front. Responsibility and intent remain disputed in the commanders’ later accounts.',
    },
    {
      time: '40:42',
      audioTime: 2442,
      title: 'Hill deploys for the second day',
      detail:
        'Wilcox and Pryor guarded Williamsburg Road. Pickett, Armistead, and Mahone moved north through woods without a coordinated formation or clear knowledge of one another’s positions.',
    },
    {
      time: '41:47',
      audioTime: 2507,
      title: 'Mahone and Armistead strike French',
      detail:
        'At about 6:30 a.m., the Confederate advance met William French’s brigade near the railroad. French stabilized his line and called Howard forward.',
    },
    {
      time: '45:13',
      audioTime: 2713,
      title: 'Howard leads two New York regiments',
      detail:
        'Howard rode forward with the 61st and 64th New York, was hit twice in the right arm, and left the field. Surgeons amputated the arm.',
    },
    {
      time: '46:37',
      audioTime: 2797,
      title: 'Barlow presses Mahone',
      detail:
        'Francis Barlow led the 61st New York through French’s line. Mahone committed regiments separately; the 3rd Alabama lost its colonel and was repulsed.',
    },
    {
      time: '49:59',
      audioTime: 2999,
      title: 'Ward reaches Armistead’s flank',
      detail:
        'J. H. Hobart Ward moved along the railroad cut and attacked the open gap between Armistead and Pickett, forcing Armistead’s brigade back.',
    },
    {
      time: '52:32',
      audioTime: 3152,
      title: 'Hill ends the Confederate attack',
      detail:
        'Unable to obtain reinforcements, Hill ordered his brigades to withdraw about 1 p.m. Hooker and Ward attacked as Wilcox and Pryor pulled back.',
    },
    {
      time: '54:14',
      audioTime: 3254,
      title: 'The battle ends',
      detail:
        'Firing ended about 2 p.m. Neither army had won a decisive tactical victory, and both claimed success.',
    },
    {
      time: '57:00',
      audioTime: 3420,
      title: 'Lee takes command',
      detail:
        'With Johnston disabled and Smith unable to continue, Jefferson Davis placed Robert E. Lee in command of the Confederate army defending Richmond.',
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
            'Ordered Sumner across the Chickahominy; remained ill at headquarters during most of the battle',
        },
        {
          commander: 'Edwin V. Sumner',
          command: 'Commander, II Corps',
          subordinates:
            'John Sedgwick’s division reached Couch on May 31; Israel B. Richardson’s division formed along the railroad and fought on June 1',
        },
        {
          commander: 'John Sedgwick',
          command: '2nd Division, II Corps',
          subordinates:
            'Willis Gorman, Napoleon J. T. Dana, and William W. Burns led the brigades that crossed to Fair Oaks; Brady’s and Kirby’s batteries supported the line',
        },
        {
          commander: 'Israel B. Richardson',
          command: '1st Division, II Corps',
          subordinates:
            'William H. French and Oliver O. Howard met the June 1 attack; Thomas F. Meagher’s Irish Brigade formed the division’s third line',
        },
        {
          commander: 'Darius N. Couch',
          command: '1st Division, IV Corps',
          subordinates:
            'A separated group of four regiments and Battery H formed near the Adams House before Sedgwick arrived',
        },
        {
          commander: 'Samuel P. Heintzelman',
          command: 'Commander, III Corps',
          subordinates:
            'Philip Kearny’s division included J. H. Hobart Ward’s brigade; Joseph Hooker’s division advanced on Williamsburg Road as the Confederates withdrew',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'Joseph E. Johnston',
          command: 'Army commander through the evening of May 31',
          subordinates:
            'Personally accompanied Whiting toward Fair Oaks and was seriously wounded near dusk',
        },
        {
          commander: 'Gustavus W. Smith',
          command: 'Temporary army commander after Johnston’s wounding',
          subordinates:
            'Ordered Longstreet to conduct a three-division attack on June 1 while Whiting held at Fair Oaks; the full plan was not executed',
        },
        {
          commander: 'James Longstreet',
          command: 'Right wing',
          subordinates:
            'Held tactical authority over his own, D. H. Hill’s, and Benjamin Huger’s divisions; directed Hill to test the United States front on June 1',
        },
        {
          commander: 'W. H. C. Whiting',
          command: 'Division at Fair Oaks on May 31',
          subordinates:
            'Brigades under Wade Hampton, James J. Pettigrew, Robert H. Hatton, and John B. Hood attacked near the Adams House',
        },
        {
          commander: 'D. H. Hill',
          command: 'Division commander directing the June 1 operation',
          subordinates:
            'Sent George Pickett, Lewis Armistead, and William Mahone north toward the railroad; Cadmus Wilcox and Roger Pryor held Williamsburg Road',
        },
        {
          commander: 'Robert E. Lee',
          command:
            'Assigned to command the army defending Richmond after the battle',
          subordinates:
            'Inherited the force previously commanded by Johnston and temporarily by Smith',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Edwin V. Sumner',
      role: 'Commanded II Corps and moved it across the flooded Chickahominy in time to reinforce Couch at Fair Oaks',
      side: 'United States',
      image: '/images/ep137-edwin-sumner.jpg',
      source: 'https://www.nps.gov/people/edwin-vose-sumner.htm',
    },
    {
      name: 'John Sedgwick',
      role: 'Led the first II Corps division across Grapevine Bridge and formed the reinforced defense near the Adams House',
      side: 'United States',
    },
    {
      name: 'Darius N. Couch',
      role: 'Established the isolated United States position at the Adams House and held it until Sedgwick arrived',
      side: 'United States',
    },
    {
      name: 'Israel B. Richardson',
      role: 'Commanded the II Corps division along the railroad that resisted the June 1 attacks',
      side: 'United States',
    },
    {
      name: 'Oliver O. Howard',
      role: 'Led two New York regiments into the June 1 fighting, was wounded twice, and lost his right arm',
      side: 'United States',
      image: '/images/ep137-oliver-howard.jpg',
      source: 'https://goordnance.army.mil/HallOfFame/2000/2005/howard.html',
    },
    {
      name: 'Francis C. Barlow',
      role: 'Commanded the 61st New York and pressed Mahone’s brigade during the June 1 fighting south of the railroad',
      side: 'United States',
    },
    {
      name: 'J. H. Hobart Ward',
      role: 'Led a III Corps brigade along the railroad cut into Armistead’s exposed right flank',
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Directed Whiting at Fair Oaks, was seriously wounded on May 31, and was removed from command',
      side: 'Confederacy',
      image: '/images/ep137-joseph-e-johnston.jpg',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      name: 'Gustavus W. Smith',
      role: 'Succeeded Johnston temporarily and proposed the June 1 attack that Longstreet did not execute as ordered',
      side: 'Confederacy',
    },
    {
      name: 'W. H. C. Whiting',
      role: 'Commanded the division that attacked Couch and Sedgwick near the Adams House late on May 31',
      side: 'Confederacy',
    },
    {
      name: 'D. H. Hill',
      role: 'Directed the limited June 1 attacks and ordered the Confederate withdrawal about 1 p.m.',
      side: 'Confederacy',
    },
    {
      name: 'Lewis A. Armistead',
      role: 'Led a brigade against Richardson and withdrew after Ward struck its exposed flank',
      side: 'Confederacy',
    },
    {
      name: 'William Mahone',
      role: 'Led three regiments in separate attacks against Richardson’s line; each was repulsed',
      side: 'Confederacy',
    },
    {
      name: 'Robert E. Lee',
      role: 'Davis’s military adviser during the battle; assigned to command the Confederate army defending Richmond after Johnston was disabled',
      side: 'Confederacy',
    },
  ],
  losses: [
    {
      name: 'Brig. Gen. Robert H. Hatton',
      side: 'Confederacy',
      role: 'Brigade commander, Whiting’s division',
      outcome:
        'Killed while leading his brigade near the Adams House on May 31.',
    },
    {
      name: 'Col. James Miller',
      side: 'United States',
      role: 'Commander, 81st Pennsylvania Infantry',
      outcome: 'Killed by Armistead’s close-range opening volley on June 1.',
    },
    {
      name: 'Col. Tennant Lomax',
      side: 'Confederacy',
      role: 'Commander, 3rd Alabama Infantry, Mahone’s brigade',
      outcome: 'Killed while leading the regiment’s June 1 attack.',
    },
    {
      name: 'Gen. Joseph E. Johnston',
      side: 'Confederacy',
      role: 'Army commander',
      outcome:
        'Seriously wounded by a bullet and shell fragment on May 31; survived and returned to duty later in 1862.',
    },
    {
      name: 'Brig. Gen. James J. Pettigrew',
      side: 'Confederacy',
      role: 'Brigade commander, Whiting’s division',
      outcome:
        'Shot in the chest, left on the field, and captured; the wound was not mortal.',
    },
    {
      name: 'Brig. Gen. Wade Hampton',
      side: 'Confederacy',
      role: 'Brigade commander, Whiting’s division',
      outcome: 'Wounded in the foot on May 31; remained on the field.',
    },
    {
      name: 'Brig. Gen. Oliver O. Howard',
      side: 'United States',
      role: 'Brigade commander, Richardson’s division',
      outcome:
        'Wounded twice in the right arm on June 1; the arm was amputated. He survived and returned to service.',
    },
  ],
  gallery: [
    {
      image: '/images/ep137-sumner-relief-route.svg',
      alt: 'Schematic of Sumner’s May 31 relief march across the Chickahominy',
      caption:
        'Sumner’s advance over the damaged Grapevine Bridge connected McClellan’s divided wings and prevented Whiting from overwhelming Couch near Fair Oaks.',
      source: 'https://www.loc.gov/item/gvhs01.vhs00292/',
    },
    {
      image: '/images/ep137-sumner-crossing.jpg',
      alt: 'Alfred Waud drawing of Sumner’s troops crossing the Chickahominy toward Fair Oaks',
      caption:
        'Alfred R. Waud drew Sumner’s II Corps crossing the Chickahominy on May 31, 1862. The Library of Congress dates the drawing to the day of the battle.',
      source: 'https://www.loc.gov/item/2004660060/',
    },
    {
      image: '/images/ep137-seven-pines-twin-houses.jpg',
      alt: 'June 1862 stereographic photograph of the twin houses and a field howitzer at Seven Pines',
      caption:
        'George N. Barnard photographed the twin houses and a 32-pounder field howitzer at Seven Pines in June 1862, shortly after the battle.',
      source: 'https://www.loc.gov/item/2018666177/',
    },
    {
      image: '/images/ep137-edwin-sumner.jpg',
      alt: 'Portrait of United States major general Edwin Vose Sumner in uniform',
      caption:
        'Edwin V. Sumner placed II Corps near the bridges before receiving the final order to cross, then personally moved toward the fighting at Fair Oaks.',
      source: 'https://www.nps.gov/people/edwin-vose-sumner.htm',
    },
    {
      image: '/images/ep137-oliver-howard.jpg',
      alt: 'Portrait of United States brigadier general Oliver Otis Howard in uniform',
      caption:
        'Oliver O. Howard lost his right arm after being wounded while leading two regiments forward on June 1. He returned to active service later that year.',
      source: 'https://goordnance.army.mil/HallOfFame/2000/2005/howard.html',
    },
    {
      image: '/images/ep137-joseph-e-johnston.jpg',
      alt: 'Portrait of Confederate general Joseph E. Johnston',
      caption:
        'Johnston’s serious wounding ended his command of the army outside Richmond and led directly to the appointment of Robert E. Lee.',
      source: 'https://www.loc.gov/item/2018666539/',
    },
  ],
  sources: [
    {
      label: 'The Civil War Podcast: episode 137 page',
      url: 'https://civilwarpodcast.org/2016/01/03/civil-war-podcast-episode-137/',
    },
    {
      label: 'National Park Service: Seven Pines battle summary',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va014',
    },
    {
      label:
        'U.S. Army Center of Military History: Virginia Campaigns, March–August 1862',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
    },
    {
      label:
        'U.S. Army Center of Military History: Meagher’s official report at Fair Oaks',
      url: 'https://history.army.mil/Research/Reference-Topics/Irish-and-the-US-Army/Fair-Oaks-Seven-Pines/',
    },
    {
      label:
        'Official Records, Series I, Volume XI, Part I: Peninsular Campaign reports',
      url: 'https://ehistory.osu.edu/books/official-records/012',
    },
    {
      label: 'Library of Congress: Sneden plan of Fair Oaks, May 31',
      url: 'https://www.loc.gov/item/gvhs01.vhs00292/',
    },
    {
      label: 'Library of Congress: Waud drawing of Sumner’s crossing',
      url: 'https://www.loc.gov/item/2004660060/',
    },
    {
      label: 'Library of Congress: Seven Pines twin houses photograph',
      url: 'https://www.loc.gov/item/2018666177/',
    },
    {
      label: 'National Park Service: Edwin V. Sumner biography',
      url: 'https://www.nps.gov/people/edwin-vose-sumner.htm',
    },
    {
      label: 'U.S. Army Ordnance Corps: Oliver O. Howard biography',
      url: 'https://goordnance.army.mil/HallOfFame/2000/2005/howard.html',
    },
    {
      label: 'Library of Congress: Joseph E. Johnston portrait',
      url: 'https://www.loc.gov/item/2018666539/',
    },
  ],
} satisfies Enrichment;
