import type { Enrichment } from '../types';

export const enrichment = {
  date: 'April 6–7, 1862, with consequences through June 1862',
  place:
    'Shiloh and Pittsburg Landing, Tennessee; Corinth, Mississippi; and the Mississippi Valley',
  result:
    'The United States victory at Shiloh prevented Albert Sidney Johnston’s army from destroying Grant before Buell joined him. Halleck then combined three armies for a methodical advance on Corinth. Beauregard evacuated the railroad junction on the night of May 29–30 and preserved his army, but the loss of Corinth strengthened United States control of West Tennessee and northern Mississippi. Together with the capture of Island No. 10, New Orleans, and Memphis, the campaign opened more of the Mississippi River and broke the Confederacy’s principal east–west railroad connection in the region. Grant endured public criticism and a temporary loss of field authority but remained in the army; Beauregard was replaced by Braxton Bragg in June',
  facts: [
    {
      label: 'Shiloh casualties',
      value: '23,746 killed, wounded, or missing',
      note: 'NPS total: 13,047 United States and 10,699 Confederate casualties.',
    },
    {
      label: 'Confederate objective',
      value:
        'Defeat Grant before Buell’s Army of the Ohio completed its junction with him',
    },
    {
      label: 'Corinth’s importance',
      value: 'Junction of the Memphis & Charleston and Mobile & Ohio railroads',
    },
    {
      label: 'Parallel river gains',
      value:
        'Island No. 10 fell April 7–8; New Orleans was occupied May 1; Memphis fell June 6',
    },
    {
      label: 'Halleck’s army group',
      value: 'Three armies and about 120,000 soldiers on paper',
      note: 'The episode describes 16 divisions and more than 108,000 troops assembled in the field; NPS interpretive material gives about 120,000.',
    },
    {
      label: 'Grant’s post-Shiloh role',
      value: 'Halleck’s deputy, with little independent responsibility',
    },
    { label: 'Siege of Corinth', value: 'April 29–May 30, 1862' },
    {
      label: 'Forces at Corinth',
      value:
        'About 120,000 United States troops against about 53,000 effective Confederates',
      note: 'The Confederate paper strength was near 75,000, but sickness sharply reduced the number fit for duty.',
    },
    {
      label: 'Confederate withdrawal ruse',
      value:
        'Empty trains, staged cheering, bugles, campfires, planted reports, and log “Quaker guns”',
    },
    {
      label: 'Corinth occupied',
      value: 'May 30, after Beauregard withdrew toward Tupelo',
    },
    {
      label: 'Confederate command change',
      value: 'Braxton Bragg replaced Beauregard in June 1862',
    },
    {
      label: 'Grant’s later conclusion',
      value:
        'Shiloh ended his expectation that the rebellion could be defeated without complete conquest',
    },
  ],
  maps: [
    {
      title: 'Shiloh battlefield today',
      caption:
        'The NPS map locates Pittsburg Landing, Shiloh Church, the April 6 defensive lines, and the April 7 counterattack that forced Beauregard back toward Corinth.',
      source: 'https://www.nps.gov/shil/planyourvisit/maps.htm',
      image: '/images/shiloh-nps-auto-tour-map.jpg',
      alt: 'National Park Service map of the Shiloh battlefield',
    },
    {
      title: 'Shiloh and the western theater after April 1862',
      caption:
        'This schematic connects the victory at Shiloh and the occupation of Corinth with United States advances at Island No. 10, New Orleans, and Memphis. It also shows the railroad junction that made Corinth strategically important.',
      source:
        'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
      image: '/images/shiloh-western-theater-aftermath.svg',
      alt: 'Schematic map of United States advances at Shiloh, Corinth, Island Number Ten, Memphis, and New Orleans in spring 1862',
    },
    {
      title: 'Halleck’s advance on Corinth',
      caption:
        'Otto H. Matz’s 1862 map records the roads, railroads, streams, United States approaches, and successive entrenchments between Monterey and Corinth during the month-long advance.',
      source: 'https://www.loc.gov/item/99447412/',
      image: '/images/corinth-halleck-advance-map-1862.jpg',
      alt: '1862 map of Halleck’s approaches and entrenchments north of Corinth, Mississippi',
    },
    {
      title: 'Shiloh troop positions',
      caption:
        'The 1862 manuscript map approved by Beauregard shows the battlefield roads, camps, river landing, and positions from which the two armies began the campaign’s decisive battle.',
      source: 'https://www.loc.gov/item/85690890/',
      image: '/images/shiloh-beauregard-map.jpg',
      alt: '1862 manuscript map of the Battle of Shiloh',
    },
  ],
  moments: [
    {
      time: '3:30',
      audioTime: 210,
      title: 'The episode begins its assessment of Shiloh',
      detail:
        'The fighting had ended, and the discussion turns to the battle’s strategic results and the campaign that followed.',
    },
    {
      time: '3:46',
      audioTime: 226,
      title: 'Johnston had sought a decisive battle',
      detail:
        'Albert Sidney Johnston attacked near Pittsburg Landing to destroy Grant before Buell’s approaching army could unite with him.',
    },
    {
      time: '6:41',
      audioTime: 401,
      title: 'The Confederate offensive failed',
      detail:
        'Grant’s army survived the surprise attack, Buell joined it, and the combined force drove Beauregard from the field on April 7.',
    },
    {
      time: '6:57',
      audioTime: 417,
      title: 'United States victories changed the western theater',
      detail:
        'Shiloh was followed by the occupation of Corinth and Memphis. Island No. 10 and New Orleans also fell during the spring Mississippi River offensives.',
    },
    {
      time: '8:53',
      audioTime: 533,
      title: 'Richmond first received reports of victory',
      detail:
        'Telegrams arriving on April 6 presented the Confederate advance as victorious, and Jefferson Davis prepared a message for Congress before the outcome was known.',
    },
    {
      time: '9:34',
      audioTime: 574,
      title: 'Davis learned that Johnston was dead',
      detail:
        'Johnston had bled to death after being wounded on April 6. Davis added a eulogy to his congressional message while reports still described the battle as a Confederate success.',
    },
    {
      time: '10:15',
      audioTime: 615,
      title: 'The scale of the defeat became clear',
      detail:
        'Beauregard emphasized the gains made on April 6 and attributed the April 7 withdrawal to the larger United States force, but his request for reinforcements showed the army’s condition.',
    },
    {
      time: '12:32',
      audioTime: 752,
      title: 'Grant filed a brief official report',
      detail:
        'Grant reported a victory but supplied few details, leaving newspapers to shape much of the early public account of Shiloh.',
    },
    {
      time: '13:23',
      audioTime: 803,
      title: 'Newspaper criticism centered on surprise and disorder',
      detail:
        'Whitelaw Reid’s widely reprinted Cincinnati Gazette account emphasized the lack of fortifications, weak reconnaissance, surprise, and the mass of stragglers below Pittsburg Landing.',
    },
    {
      time: '15:31',
      audioTime: 931,
      title: 'Halleck took personal command',
      detail:
        'Halleck arrived at Pittsburg Landing on April 11 and assembled the Armies of the Tennessee, Ohio, and Mississippi for the advance on Corinth.',
    },
    {
      time: '16:02',
      audioTime: 962,
      title: 'Grant was sidelined as Halleck’s deputy',
      detail:
        'Halleck made Grant nominal second-in-command of the combined force but gave him little authority; George H. Thomas led the Army of the Tennessee during the Corinth operation.',
    },
    {
      time: '17:44',
      audioTime: 1064,
      title: 'Grant remained with the army',
      detail:
        'Grant considered leaving the immediate command and later described seeking a leave of absence. Sherman urged him to stay, and Grant resumed an active role after Halleck went to Washington.',
    },
    {
      time: '18:34',
      audioTime: 1114,
      title: 'The advance on Corinth began',
      detail:
        'Starting April 29, Halleck kept the three armies on a connected front, repeatedly stopping to entrench as they moved toward the railroad junction.',
    },
    {
      time: '20:15',
      audioTime: 1215,
      title: 'Beauregard concealed his evacuation',
      detail:
        'Confederates used train whistles, cheering, drums, bugles, campfires, false reports, and wooden guns to suggest reinforcements while the army and supplies moved south.',
    },
    {
      time: '22:00',
      audioTime: 1320,
      title: 'United States troops entered Corinth',
      detail:
        'On May 30, Halleck’s patrols found that Beauregard’s main army had withdrawn toward Tupelo, leaving the vital rail junction in United States hands.',
    },
    {
      time: '22:34',
      audioTime: 1354,
      title: 'Davis replaced Beauregard',
      detail:
        'After leaving Corinth, Beauregard took sick leave without prior presidential approval. Davis replaced him with Braxton Bragg in June.',
    },
    {
      time: '23:36',
      audioTime: 1416,
      title: 'Shiloh changed Grant’s understanding of the war',
      detail:
        'Grant later wrote that the scale of the fighting and the Confederacy’s determination convinced him that restoring the Union required complete conquest.',
    },
  ],
  command: [
    {
      side: 'United States',
      color: '#315f8c',
      branches: [
        {
          commander: 'Henry W. Halleck',
          command: 'Department of the Mississippi and combined army group',
          subordinates:
            'Directed the Armies of the Tennessee, Ohio, and Mississippi during the advance on Corinth',
        },
        {
          commander: 'Ulysses S. Grant',
          command: 'Deputy to Halleck',
          subordinates:
            'Nominal second-in-command of the combined force, with little independent authority',
        },
        {
          commander: 'George H. Thomas',
          command: 'Army of the Tennessee; right wing',
          subordinates:
            'Five divisions, including William T. Sherman’s division on the extreme right',
        },
        {
          commander: 'Don Carlos Buell',
          command: 'Army of the Ohio; center',
          subordinates:
            'Advanced over rain-soaked ground while building roads and bridges',
        },
        {
          commander: 'John Pope',
          command: 'Army of the Mississippi; left wing',
          subordinates:
            'Joined Halleck after the capture of New Madrid and Island No. 10',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#9a3d32',
      branches: [
        {
          commander: 'P.G.T. Beauregard',
          command: 'Overall command at Corinth',
          subordinates:
            'Defended the railroad junction, planned the withdrawal, and evacuated toward Tupelo',
        },
        {
          commander: 'Braxton Bragg',
          command: 'Army of the Mississippi',
          subordinates:
            'Led the principal Confederate army at Corinth and replaced Beauregard in June',
        },
        {
          commander: 'Earl Van Dorn',
          command: 'Army of the West',
          subordinates:
            'Reinforced Beauregard from the Trans-Mississippi and held part of the Corinth defenses',
        },
        {
          commander: 'Leonidas Polk / William J. Hardee',
          command: 'Corps under Beauregard and Bragg',
          subordinates:
            'Held the defenses and prepared to exploit Van Dorn’s planned May 22 attack before it was canceled',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Henry W. Halleck',
      role: 'Took field command of the three United States armies, sidelined Grant, and directed the advance on Corinth',
      side: 'United States',
      image: '/images/henry-halleck.jpg',
      source: 'https://www.loc.gov/pictures/item/2022631586/',
    },
    {
      personId: 'ulysses-s-grant',
      role: 'Won at Shiloh, served briefly as Halleck’s deputy, remained in the army, and later described Shiloh as a turning point in his understanding of the war',
    },
    {
      name: 'P.G.T. Beauregard',
      role: 'Succeeded Johnston at Shiloh, evacuated Corinth while preserving the army, and was replaced after taking sick leave',
      side: 'Confederacy',
      image: '/images/pgt-beauregard.jpg',
      source: 'https://www.loc.gov/item/2018668472/',
    },
    {
      name: 'Jefferson Davis',
      role: 'Announced the early reports as a victory, mourned Johnston, blamed Beauregard for lost opportunities, and authorized his replacement',
      side: 'Confederacy',
      image: '/images/jefferson-davis.jpg',
      source: 'https://www.loc.gov/pictures/item/2004673617/',
    },
    {
      name: 'Albert Sidney Johnston',
      role: 'Planned the offensive against Grant and died while directing the Confederate attack on April 6',
      side: 'Confederacy',
      image: '/images/albert-sidney-johnston.jpg',
      source: 'https://www.loc.gov/pictures/item/2018670318/',
    },
    {
      name: 'George H. Thomas',
      role: 'Led the Army of the Tennessee on Halleck’s right during the advance on Corinth',
      side: 'United States',
    },
    {
      name: 'Don Carlos Buell',
      role: 'Led the Army of the Ohio in the center of Halleck’s line',
      side: 'United States',
    },
    {
      name: 'John Pope',
      role: 'Brought the Army of the Mississippi from its Island No. 10 victory to Halleck’s left wing',
      side: 'United States',
    },
    {
      name: 'Earl Van Dorn',
      role: 'Reinforced Beauregard at Corinth with the Army of the West',
      side: 'Confederacy',
    },
    {
      name: 'Braxton Bragg',
      role: 'Led the Army of the Mississippi at Corinth and replaced Beauregard in June 1862',
      side: 'Confederacy',
      image: '/images/braxton-bragg.jpg',
      source: 'https://www.loc.gov/pictures/item/2018670042/',
    },
  ],
  losses: [
    {
      name: 'General Albert Sidney Johnston',
      side: 'Confederacy',
      role: 'Commander, Army of the Mississippi',
      outcome:
        'Mortally wounded behind the right knee while directing the attack on April 6; died from blood loss on the battlefield',
    },
    {
      name: 'Brigadier General W.H.L. Wallace',
      side: 'United States',
      role: 'Commander, 2nd Division, Army of the Tennessee',
      outcome:
        'Shot through the head during the April 6 withdrawal from the Hornet’s Nest; recovered alive April 7 and died April 10',
    },
  ],
  gallery: [
    {
      image: '/images/shiloh-battlefield-april-9.jpg',
      alt: 'The Shiloh battlefield photographed on April 9, 1862',
      caption:
        'This photograph made two days after the battle records the wooded ground on which more than 23,000 soldiers were killed, wounded, or reported missing.',
      source: 'https://www.loc.gov/pictures/item/2017646904/',
    },
    {
      image: '/images/corinth-confederate-hospital-1862.jpg',
      alt: '1862 graphite drawing of a Confederate hospital at Corinth, Mississippi',
      caption:
        'Adolph Metzner’s 1862 drawing shows a building at Corona Women’s College used as a Confederate hospital. Disease and poor water left nearly one-third of Beauregard’s force unfit for duty during the siege.',
      source: 'https://www.loc.gov/pictures/item/2017646923/',
    },
    {
      image: '/images/pgt-beauregard.jpg',
      alt: 'Wartime portrait of Confederate General P.G.T. Beauregard',
      caption:
        'Beauregard preserved his army by abandoning Corinth but lost the strategic rail junction and, soon afterward, his command.',
      source: 'https://www.loc.gov/item/2018668472/',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 125 page',
      url: 'https://civilwarpodcast.org/2015/09/13/civil-war-podcast-episode-125/',
    },
    {
      label: 'National Park Service: Battle of Shiloh',
      url: 'https://www.nps.gov/shil/learn/historyculture/shiloh-history.htm',
    },
    {
      label: 'National Park Service: Was General Grant Surprised at Shiloh?',
      url: 'https://home.nps.gov/articles/000/was-general-grant-surprised-by-the-confederate-attack-at-shiloh.htm',
    },
    {
      label: 'National Park Service: Corinth Battlefield Unit',
      url: 'https://www.nps.gov/shil/planyourvisit/corinth.htm',
    },
    {
      label: 'National Park Service: Union Siege Lines at Corinth',
      url: 'https://home.nps.gov/articles/000/union-siege-lines-may-19.htm',
    },
    {
      label: 'National Park Service: Siege and Battle of Corinth',
      url: 'https://www.nps.gov/articles/the-siege-and-battle-of-corinth-a-new-kind-of-war-teaching-with-historic-places.htm',
    },
    {
      label: 'National Park Service: Siege and Battle of Corinth NHL record',
      url: 'https://npgallery.nps.gov/NRHP/GetAsset/NHLS/91001050_text',
    },
    {
      label: 'National Park Service: Corinth rail crossover',
      url: 'https://www.nps.gov/places/corinth-tour-2-stop-1-rail-crossover.htm',
    },
    {
      label: 'U.S. Army Center of Military History: Civil War campaign summary',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label: 'Naval History and Heritage Command: Capture of New Orleans',
      url: 'https://www.history.navy.mil/browse-by-topic/heritage/usn-lessons-learned/farragut-new-orleans.html',
    },
    {
      label: 'Library of Congress: Shiloh in the press',
      url: 'https://blogs.loc.gov/headlinesandheroes/2022/04/battle-of-shiloh-160th-anniversary/',
    },
    {
      label: 'National Park Service: Grant’s military career',
      url: 'https://www.nps.gov/subjects/ulyssesgrantexhibit/military-career.htm',
    },
    {
      label: 'National Park Service: Albert Sidney Johnston',
      url: 'https://www.nps.gov/people/albert-sidney-johnston.htm',
    },
    {
      label: 'Library of Congress: Halleck’s advance on Corinth map',
      url: 'https://www.loc.gov/item/99447412/',
    },
    {
      label: 'Library of Congress: Confederate hospital at Corinth drawing',
      url: 'https://www.loc.gov/pictures/item/2017646923/',
    },
  ],
} satisfies Enrichment;
