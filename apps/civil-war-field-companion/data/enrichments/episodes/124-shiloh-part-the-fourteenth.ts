import type { Enrichment } from '../types';

export const enrichment = {
  date: 'April 7, 1862, from dawn through the evening, with immediate aftermath on April 8',
  place:
    'Shiloh battlefield around Pittsburg Landing, the Corinth Road, Hamburg–Purdy Road, Water Oaks Pond, Shiloh Church, and the Tennessee River in Hardin County, Tennessee',
  result:
    'United States victory. Grant and Buell attacked at dawn with reinforced armies, recovered the ground lost on April 6, and forced Beauregard’s outnumbered army back toward Shiloh Church. Breckinridge covered the Confederate withdrawal down the Corinth Road until late afternoon. The United States armies held the battlefield, while the main Confederate force returned to Corinth and Grant mounted only a limited pursuit',
  facts: [
    {
      label: 'Second-day attack',
      value: 'United States advance began at dawn on April 7',
    },
    {
      label: 'United States strength',
      value: 'More than 54,500 in the current NPS battlefield narrative',
      note: 'The force combined Grant’s Army of the Tennessee with arriving divisions of Buell’s Army of the Ohio.',
    },
    {
      label: 'Confederate strength',
      value: 'Barely 34,000 in the current NPS battlefield narrative',
      note: 'The army was depleted and its corps, divisions, and brigades had lost much of their cohesion during April 6.',
    },
    {
      label: 'Fresh formations',
      value:
        'Lew Wallace’s division and Buell’s divisions under Nelson, Crittenden, and McCook',
    },
    {
      label: 'Hardest second-day sector',
      value: 'The Crossroads, Water Oaks Pond, and Woolf Field around midday',
    },
    {
      label: 'Withdrawal route',
      value: 'Southwest along the Corinth Road toward Corinth, Mississippi',
    },
    {
      label: 'Confederate rear guard',
      value: 'John C. Breckinridge’s Reserve Corps held until about 5 p.m.',
    },
    {
      label: 'Reported battle casualties',
      value: '23,746 total in the current NPS summary',
      note: 'Traditional component figures of 13,047 United States and 10,694 Confederate casualties sum to 23,741, so published totals differ slightly.',
    },
    {
      label: 'Pursuit',
      value: 'Short advance on April 7; reconnaissance in force on April 8',
      note: 'Sherman and Thomas J. Wood encountered Forrest’s Confederate rear guard at Fallen Timbers before returning to Pittsburg Landing.',
    },
    {
      label: 'Strategic position',
      value:
        'United States forces retained Pittsburg Landing and remained positioned to advance on Corinth',
    },
  ],
  maps: [
    {
      title: 'The April 7 counterattack and Confederate withdrawal',
      caption:
        'Lew Wallace advanced on the United States right, Grant’s battered divisions moved through the center, and Buell’s divisions advanced on the left. Confederate counterattacks near Water Oaks Pond delayed but did not stop the advance; Breckinridge covered the retreat down the Corinth Road.',
      source:
        'https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/C%20Pdf/cmhPub_75-7.pdf',
      image: '/images/shiloh-april-7-counterattack.svg',
      alt: 'Simplified map of the United States counterattack and Confederate withdrawal at Shiloh on April 7, 1862',
    },
    {
      title: 'Shiloh battlefield today',
      caption:
        'The National Park Service map locates Pittsburg Landing, Shiloh Church, the Corinth Road, the Hamburg–Purdy Road, Water Oaks Pond, the Peach Orchard, and the Hornets’ Nest.',
      source: 'https://www.nps.gov/shil/planyourvisit/maps.htm',
      image: '/images/shiloh-nps-auto-tour-map.jpg',
      alt: 'National Park Service map of Shiloh National Military Park',
    },
    {
      title: 'Historical battlefield map',
      caption:
        'This 1862 map endorsed by Beauregard records roads, ravines, camps, gunboats, and troop positions across the two-day battlefield.',
      source: 'https://www.loc.gov/item/85690890/',
      image: '/images/shiloh-beauregard-map.jpg',
      alt: '1862 manuscript map of the Battle of Shiloh',
    },
  ],
  moments: [
    {
      time: '3:28',
      audioTime: 208,
      title: 'Grant prepared to attack again',
      detail:
        'After holding the final line on April 6, Grant remained west of the Tennessee River and prepared a counterattack for the next morning.',
    },
    {
      time: '4:24',
      audioTime: 264,
      title: 'Lew Wallace reached the United States right',
      detail:
        'Wallace’s fresh 3rd Division arrived after the first day’s fighting and deployed on the right flank.',
    },
    {
      time: '4:49',
      audioTime: 289,
      title: 'Buell’s troops crossed through the night',
      detail:
        'Army of the Ohio units moved by steamboat from the east bank and formed beyond Pittsburg Landing.',
    },
    {
      time: '5:07',
      audioTime: 307,
      title: 'Nelson formed on the left',
      detail:
        'William Nelson’s division deployed nearest the Tennessee River. Thomas L. Crittenden and Alexander McCook formed to Nelson’s right as their troops arrived.',
    },
    {
      time: '6:08',
      audioTime: 368,
      title: 'The United States line advanced at dawn',
      detail:
        'Lew Wallace led on the right, Nelson led on the left, and the divisions of Sherman, McClernand, and Hurlbut advanced in the center.',
    },
    {
      time: '6:27',
      audioTime: 387,
      title: 'Nelson reached heavy resistance',
      detail:
        'The Army of the Ohio’s left advanced toward the Peach Orchard and Hornets’ Nest area before Confederate fire checked its movement.',
    },
    {
      time: '7:22',
      audioTime: 442,
      title: 'The counterattack caught the Confederate army unprepared',
      detail:
        'Beauregard had expected to resume the offensive and did not know the extent of Buell’s arrival.',
    },
    {
      time: '8:43',
      audioTime: 523,
      title: 'Confederate formations fought as improvised commands',
      detail:
        'The first day’s terrain, combat, and intermingling had left few Confederate brigades or divisions functioning as intact formations.',
    },
    {
      time: '9:31',
      audioTime: 571,
      title: 'United States troops recovered the battlefield',
      detail:
        'Local Confederate counterattacks briefly forced some units back, but the reinforced United States line rallied and resumed its advance.',
    },
    {
      time: '10:19',
      audioTime: 619,
      title: 'The center reached the Crossroads by midday',
      detail:
        'Sherman’s and McClernand’s divisions returned to the Hamburg–Purdy and Corinth roads, ground they had defended on April 6.',
    },
    {
      time: '10:36',
      audioTime: 636,
      title: 'Fighting intensified at Water Oaks Pond',
      detail:
        'Confederate attacks across Water Oaks Pond and Woolf Field pushed the United States line back a short distance before it rallied.',
    },
    {
      time: '11:30',
      audioTime: 690,
      title: 'Beauregard rallied retreating units',
      detail:
        'His intervention prevented an immediate collapse but could not stop the overall United States advance.',
    },
    {
      time: '14:37',
      audioTime: 877,
      title: 'Grant directed units near the front',
      detail:
        'Grant rode behind the firing line and personally sent regiments into position during the second-day fighting.',
    },
    {
      time: '16:45',
      audioTime: 1005,
      title: 'Beauregard prepared to withdraw',
      detail:
        'Recognizing that the reinforced United States armies outnumbered him, Beauregard arranged to move the main body down the Corinth Road.',
    },
    {
      time: '17:26',
      audioTime: 1046,
      title: 'The Confederate army disengaged',
      detail:
        'The withdrawal order went out at about 2 p.m. Breckinridge’s Reserve Corps remained as a blocking force while the main body left the field.',
    },
    {
      time: '17:37',
      audioTime: 1057,
      title: 'Grant advanced the 14th and 15th Illinois',
      detail:
        'Grant placed the two Hurlbut division regiments and led them forward before leaving their colonels to direct the charge.',
    },
    {
      time: '18:37',
      audioTime: 1117,
      title: 'The Confederates had left the field by evening',
      detail:
        'Breckinridge’s rear guard withdrew at about 5 p.m. The United States pursuit stopped after following the retreat a short distance.',
    },
    {
      time: '19:26',
      audioTime: 1166,
      title: 'Casualty reports showed unprecedented losses',
      detail:
        'Published totals differ slightly, but both the National Park Service and the U.S. Army place combined killed, wounded, and missing at roughly 23,700.',
    },
    {
      time: '21:42',
      audioTime: 1302,
      title: 'The retreat continued in rain and mud',
      detail:
        'John E. McGee’s account describes demoralized troops, Breckinridge’s covering line, and wagons struggling toward Corinth.',
    },
    {
      time: '23:24',
      audioTime: 1404,
      title: 'Burial details began work on April 8',
      detail:
        'Wilbur F. Crummer’s account describes soldiers gathering bodies into mass graves near the camps after the battle.',
    },
  ],
  command: [
    {
      side: 'United States',
      color: '#315f8c',
      branches: [
        {
          commander: 'Ulysses S. Grant',
          command: 'Army of the Tennessee',
          subordinates:
            'Lew Wallace’s 3rd Division on the right; Stephen A. Hurlbut’s 4th, John A. McClernand’s 1st, and William T. Sherman’s 5th divisions in the center; remnants of the 2nd and 6th divisions attached where they could fight',
        },
        {
          commander: 'Don Carlos Buell',
          command: 'Army of the Ohio',
          subordinates:
            'William Nelson’s 4th Division on the left, Thomas L. Crittenden’s 5th Division in the left-center, and Alexander McCook’s 2nd Division arriving and entering the line',
        },
        {
          commander: 'Lew Wallace',
          command: '3rd Division, Army of the Tennessee',
          subordinates:
            'Led the advance across Tilghman Branch on the far right',
        },
        {
          commander: 'William Nelson',
          command: '4th Division, Army of the Ohio',
          subordinates:
            'Led Buell’s attack from Pittsburg Landing toward the Sarah Bell field on the far left',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'P.G.T. Beauregard',
          command: 'Army of the Mississippi',
          subordinates:
            'Directed the defense, ordered the withdrawal, and assigned a rear guard after Albert Sidney Johnston’s death on April 6',
        },
        {
          commander: 'Braxton Bragg / Leonidas Polk / William J. Hardee',
          command: 'Second, First, and Third Corps',
          subordinates:
            'Nominal corps structure remained, but intermingled units often fought in improvised groupings on April 7',
        },
        {
          commander: 'John C. Breckinridge',
          command: 'Reserve Corps and withdrawal covering force',
          subordinates:
            'Held the Corinth Road while the main body withdrew, then left the field at about 5 p.m.',
        },
      ],
    },
  ],
  people: [
    {
      personId: 'ulysses-s-grant',
      role: 'Commanded the Army of the Tennessee and directed the April 7 counterattack',
    },
    {
      name: 'Don Carlos Buell',
      role: 'Commanded the Army of the Ohio, whose arriving divisions formed the United States left',
      side: 'United States',
      image: '/images/don-carlos-buell.jpg',
      source:
        'https://www.nps.gov/cane/highest-praise-the-army-of-the-ohio-at-shiloh.htm',
    },
    {
      name: 'Lew Wallace',
      role: 'Led the fresh 3rd Division on Grant’s right during the second-day advance',
      side: 'United States',
      source: 'https://www.nps.gov/people/lew-wallace.htm',
    },
    {
      name: 'William Nelson',
      role: 'Led the Army of the Ohio’s advance on the far left',
      side: 'United States',
    },
    {
      name: 'Thomas L. Crittenden',
      role: 'Commanded the Army of the Ohio division that formed to Nelson’s right',
      side: 'United States',
    },
    {
      name: 'Alexander McCook',
      role: 'Commanded the arriving Army of the Ohio division that fought near Water Oaks Pond',
      side: 'United States',
    },
    {
      name: 'William T. Sherman',
      role: 'Advanced in Grant’s center and reached the Crossroads by midday',
      side: 'United States',
    },
    {
      name: 'P.G.T. Beauregard',
      role: 'Commanded the Army of the Mississippi and ordered its withdrawal toward Corinth',
      side: 'Confederacy',
      source: 'https://www.nps.gov/people/pgt-beauregard.htm',
    },
    {
      name: 'Braxton Bragg',
      role: 'Rallied Confederate forces and helped direct the defense near the Crossroads',
      side: 'Confederacy',
      image: '/images/braxton-bragg.jpg',
      source: 'https://www.loc.gov/pictures/item/2018670042/',
    },
    {
      name: 'John C. Breckinridge',
      role: 'Commanded the Confederate Reserve Corps that covered the withdrawal',
      side: 'Confederacy',
    },
    {
      name: 'Thomas Jordan',
      role: 'Beauregard’s chief of staff, who urged withdrawal before the army dissolved into a rout',
      side: 'Confederacy',
    },
    {
      name: 'Henry Morton Stanley',
      role: '6th Arkansas soldier captured during the April 7 fighting; later known as an explorer and journalist',
      side: 'Confederacy',
    },
  ],
  losses: [
    {
      name: 'Albert Sidney Johnston',
      side: 'Confederacy',
      role: 'Commanding general, Army of the Mississippi',
      outcome:
        'Mortally wounded in the right leg on April 6 and bled to death on the field; Beauregard commanded the army on April 7.',
    },
    {
      name: 'W. H. L. Wallace',
      side: 'United States',
      role: 'Commander, 2nd Division, Army of the Tennessee',
      outcome:
        'Mortally wounded while attempting to escape the Hornets’ Nest encirclement on April 6; died at Savannah on April 10.',
    },
  ],
  gallery: [
    {
      image: '/images/shiloh-14th-wisconsin-charge.jpg',
      alt: 'Lithograph of the 14th Wisconsin Infantry charging a Confederate battery at Shiloh on April 7, 1862',
      caption:
        'An 1862 lithograph depicts the 14th Wisconsin Infantry attacking a New Orleans battery during the second day of the battle.',
      source: 'https://www.loc.gov/pictures/item/2003653260/',
    },
    {
      image: '/images/pittsburg-landing-1862.jpg',
      alt: 'Pittsburg Landing on the Tennessee River in 1862',
      caption:
        'Pittsburg Landing served as the supply and reinforcement point for Grant’s army and the crossing point for Buell’s arriving troops.',
      source: 'https://www.loc.gov/pictures/item/2004660985/',
    },
    {
      image: '/images/shiloh-battlefield-april-9.jpg',
      alt: 'The Shiloh battlefield photographed shortly after the battle',
      caption:
        'A photograph made immediately after the battle records the open ground and wooded terrain across which both armies fought.',
      source: 'https://www.loc.gov/pictures/item/2017646904/',
    },
    {
      image: '/images/don-carlos-buell.jpg',
      alt: 'Portrait of Major General Don Carlos Buell',
      caption:
        'Buell’s Army of the Ohio supplied the fresh divisions that formed the left half of the April 7 counterattack.',
      source:
        'https://www.nps.gov/cane/highest-praise-the-army-of-the-ohio-at-shiloh.htm',
    },
  ],
  sources: [
    {
      label: 'Civil War Podcast: Episode 124, Shiloh Part the Fourteenth',
      url: 'https://civilwarpodcast.org/2015/09/07/civil-war-podcast-episode-124/',
    },
    {
      label: 'National Park Service: Battle of Shiloh',
      url: 'https://www.nps.gov/shil/learn/historyculture/shiloh-history.htm',
    },
    {
      label: 'National Park Service: Shiloh battle detail',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=tn003',
    },
    {
      label: 'National Park Service: Water Oaks Pond',
      url: 'https://www.nps.gov/places/water-oaks-pond-tour-stop-14.htm',
    },
    {
      label:
        'U.S. Army Center of Military History: The Civil War in the Western Theater, 1862',
      url: 'https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/C%20Pdf/cmhPub_75-7.pdf',
    },
    {
      label: 'U.S. Army Center of Military History: Civil War campaign summary',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label: 'Library of Congress: Map of the battlefield of Shiloh',
      url: 'https://www.loc.gov/item/85690890/',
    },
    {
      label: 'Library of Congress: Buell’s map of Shiloh',
      url: 'https://www.loc.gov/item/2007627473/',
    },
    {
      label: 'Library of Congress: 14th Wisconsin at Shiloh lithograph',
      url: 'https://www.loc.gov/pictures/item/2003653260/',
    },
    {
      label: 'National Park Service: Albert Sidney Johnston',
      url: 'https://www.nps.gov/people/albert-sidney-johnston.htm',
    },
    {
      label: 'National Park Service: The Army of the Ohio at Shiloh',
      url: 'https://www.nps.gov/cane/highest-praise-the-army-of-the-ohio-at-shiloh.htm',
    },
    {
      label: 'National Park Service: Women at Shiloh',
      url: 'https://www.nps.gov/shil/learn/historyculture/upload/Women-Update-2021-2.pdf',
    },
  ],
} satisfies Enrichment;
