import type { Enrichment } from '../types';

export const enrichment = {
  date: 'July 22, 1861–January 10, 1862',
  place:
    'Washington, D.C.; northern Virginia from Leesburg to Centreville and Manassas Junction; and the Potomac River corridor',
  result:
    'George B. McClellan transformed the forces around Washington into the Army of the Potomac and, after Winfield Scott retired on November 1, also became general-in-chief. He did not begin a major offensive in 1861. Joseph E. Johnston consolidated the principal Confederate army around Centreville and Manassas Junction, while the failed United States crossing at Ball’s Bluff intensified political scrutiny. Congress created the Joint Committee on the Conduct of the War, the Lincoln administration resolved the Trent crisis without war with Britain, and McClellan’s late-December illness left Lincoln confronting both military inactivity and a widening crisis of confidence.',
  facts: [
    {
      label: 'Army organized',
      value: 'Army of the Potomac, named August 21, 1861',
      note: 'The U.S. Army history credits McClellan with organizing it into eleven divisions planned at roughly 10,000 men each.',
    },
    {
      label: 'Two commands',
      value: 'McClellan led the Army of the Potomac and the entire U.S. Army',
      note: 'Lincoln appointed him general-in-chief when Winfield Scott retired on November 1.',
    },
    {
      label: 'United States field strength',
      value:
        'More than 105,000 in the Army of the Potomac at the start of 1862',
      note: 'This U.S. Army Center of Military History figure is field strength, not the larger aggregate strength cited in the episode.',
    },
    {
      label: 'Confederate field strength',
      value: 'About 45,000 around Centreville and Manassas',
      note: 'U.S. Army Center of Military History estimate for the start of 1862.',
    },
    {
      label: 'Confederate consolidation',
      value: 'Munson’s Hill to Fairfax Court House to Centreville–Manassas',
      note: 'Johnston abandoned the exposed advanced positions in late September and October 1861.',
    },
    {
      label: 'Ball’s Bluff',
      value: 'Confederate victory, October 21, 1861',
      note: 'A poorly coordinated United States crossing near Leesburg ended in retreat over the bluff and across the Potomac.',
    },
    {
      label: 'Ball’s Bluff forces',
      value: '3,600 engaged',
      note: 'NPS estimate: 2,000 United States and 1,600 Confederate troops.',
    },
    {
      label: 'Ball’s Bluff casualties',
      value: '1,070 total',
      note: 'NPS estimate: 921 United States and 149 Confederate casualties; more than 700 United States soldiers were captured.',
    },
    {
      label: 'Congressional oversight',
      value: 'Joint Committee on the Conduct of the War created December 10',
      note: 'The committee had three senators and four representatives and authority to summon people and papers.',
    },
    {
      label: 'Trent crisis',
      value: 'November 8 seizure; December 26 settlement',
      note: 'The United States released Confederate envoys James Mason and John Slidell after Britain protested their removal from a British mail steamer.',
    },
    {
      label: 'McClellan’s illness',
      value: 'Typhoid fever in late December 1861',
      note: 'The illness removed the general-in-chief from active direction while pressure for an advance was at its height.',
    },
    {
      label: 'Episode title',
      value: 'Lincoln’s January 10, 1862 appeal to Montgomery C. Meigs',
      note: 'Meigs recorded Lincoln asking what he should do and saying that “the bottom is out of the tub.” The wording survives through Meigs’s diary account.',
    },
  ],
  maps: [
    {
      title: 'Northern Virginia in autumn 1861',
      caption:
        'This schematic follows Johnston’s consolidation from the exposed position at Munson’s Hill through Fairfax Court House to the Centreville–Manassas line. It also locates the separate Confederate outpost at Leesburg and Ball’s Bluff on the Potomac.',
      source: 'https://www.loc.gov/item/99439216/',
      image: '/images/ep127-northern-virginia-autumn-1861.svg',
      alt: 'Schematic map of Confederate withdrawals in northern Virginia and the location of Ball’s Bluff in autumn 1861',
    },
    {
      title: 'The trap at Ball’s Bluff',
      caption:
        'United States troops crossed from Maryland in limited boats by way of Harrison’s Island. Nathan Evans’s counterattack drove the force back against the steep bluff and the river, where retreat and evacuation became chaotic.',
      source:
        'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va006',
      image: '/images/ep127-balls-bluff-crossing.svg',
      alt: 'Schematic map of the United States crossing and retreat at Ball’s Bluff on October 21, 1861',
    },
    {
      title: 'Contemporary map of the 1861 seat of war',
      caption:
        'V. P. Corbett’s 1861 map shows Washington, Alexandria, Manassas, Leesburg, troop camps, fortifications, and an inset of the ground between Leesburg and Harpers Ferry. Its annotations connect First Manassas and Ball’s Bluff to the positions discussed in the episode.',
      source: 'https://www.loc.gov/item/lva0000218/',
      embed: 'https://www.loc.gov/resource/glva01.lva00218/',
    },
  ],
  moments: [
    {
      time: '0:39',
      audioTime: 39,
      title: 'McClellan rebuilds the army around Washington',
      detail:
        'After First Manassas, McClellan took command of the troops defending Washington and organized, trained, and disciplined the force that he named the Army of the Potomac.',
    },
    {
      time: '1:59',
      audioTime: 119,
      title: 'Private confidence becomes a claim of destiny',
      detail:
        'The episode uses McClellan’s letters to his wife to show how quickly public acclaim and military authority reinforced his belief that he had been selected for a great national task.',
    },
    {
      time: '2:53',
      audioTime: 173,
      title: 'Scott and McClellan clash over enemy strength',
      detail:
        'McClellan repeatedly estimated Confederate strength above its actual level. Allan Pinkerton’s intelligence reports reinforced that tendency, while Winfield Scott disputed the younger commander’s assumptions and methods.',
    },
    {
      time: '3:23',
      audioTime: 203,
      title: 'Political pressure grows during good campaigning weather',
      detail:
        'Members of Congress and northern newspapers questioned why the expanding Army of the Potomac continued drilling and reviewing instead of advancing against Johnston’s army.',
    },
    {
      time: '5:28',
      audioTime: 328,
      title: 'Davis and Beauregard feud after Manassas',
      detail:
        'P.G.T. Beauregard used his public prominence after Fort Sumter and First Manassas to defend his reputation, worsening his relationship with Jefferson Davis before his transfer west.',
    },
    {
      time: '5:52',
      audioTime: 352,
      title: 'Johnston contests Confederate seniority',
      detail:
        'Joseph E. Johnston believed his former United States Army rank entitled him to greater seniority. Davis placed him fourth among the first Confederate full generals, beginning a durable command dispute.',
    },
    {
      time: '6:40',
      audioTime: 400,
      title: 'Johnston pulls back his exposed outposts',
      detail:
        'Confederates evacuated Munson’s Hill in late September, then withdrew from Fairfax Court House in October and concentrated around Centreville and Manassas Junction.',
    },
    {
      time: '7:26',
      audioTime: 446,
      title: 'Leesburg remains outside the main Confederate line',
      detail:
        'McClellan noticed that the Leesburg position had not been abandoned and ordered reconnaissance and a demonstration intended to make the Confederates reveal their intentions.',
    },
    {
      time: '7:55',
      audioTime: 475,
      title: 'The demonstration leads to Ball’s Bluff',
      detail:
        'On October 21, a badly coordinated crossing near Leesburg put a United States force above the Potomac with inadequate transportation. Evans’s counterattack drove it into a costly retreat.',
    },
    {
      time: '8:33',
      audioTime: 513,
      title: 'Senators demand an advance after the defeat',
      detail:
        'The death of Senator Edward D. Baker and the scale of United States losses made the small battle politically explosive and increased pressure on McClellan and the administration.',
    },
    {
      time: '9:30',
      audioTime: 570,
      title: 'McClellan becomes general-in-chief',
      detail:
        'On November 1, Scott retired and Lincoln placed McClellan in command of the entire United States Army while allowing him to retain direct command of the Army of the Potomac.',
    },
    {
      time: '14:15',
      audioTime: 855,
      title: 'The Lincoln–McClellan relationship breaks down',
      detail:
        'The episode recounts John Hay’s diary report that McClellan returned home while Lincoln, William H. Seward, and Hay waited, then went upstairs without meeting them. Lincoln thereafter more often summoned the general to the White House.',
    },
    {
      time: '15:44',
      audioTime: 944,
      title: 'No offensive follows the command change',
      detail:
        'McClellan’s army remained near Washington after he replaced Scott. Lincoln defended him publicly but faced rising criticism of the delay from Congress and the press.',
    },
    {
      time: '17:27',
      audioTime: 1047,
      title: 'Congress creates the Joint Committee',
      detail:
        'Congress established the Joint Committee on the Conduct of the War on December 10. Radical Republicans dominated the committee and pressed for a more aggressive military and emancipation policy.',
    },
    {
      time: '17:52',
      audioTime: 1072,
      title: 'McClellan falls ill',
      detail:
        'McClellan became seriously ill with typhoid fever in late December, interrupting command at the moment the new congressional committee wanted answers about the army’s inactivity.',
    },
    {
      time: '18:30',
      audioTime: 1110,
      title: 'The Trent crisis adds the risk of war with Britain',
      detail:
        'Captain Charles Wilkes had seized Confederate envoys Mason and Slidell from the British mail steamer Trent. Britain protested and reinforced Canada; Seward’s December 26 response agreed to release the envoys.',
    },
    {
      time: '19:42',
      audioTime: 1182,
      title: 'Lincoln turns directly to senior officers',
      detail:
        'With McClellan still recovering and no major movement underway, Lincoln sought operational advice from Quartermaster General Montgomery C. Meigs and other officers.',
    },
    {
      time: '20:12',
      audioTime: 1212,
      title: '“The bottom is out of the tub”',
      detail:
        'Meigs recorded Lincoln’s January 10 lament: the public was impatient, Treasury financing was strained, and the general-in-chief was sick. The phrase captures a crisis of leadership, money, and military momentum rather than a battlefield event.',
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
            'Appointed the general-in-chief, set national policy, and increasingly intervened in strategy as inactivity continued',
        },
        {
          commander: 'Winfield Scott',
          command: 'General-in-chief through October 31, 1861',
          subordinates:
            'Exercised army-wide supervision while McClellan commanded the troops around Washington; retired November 1',
        },
        {
          commander: 'George B. McClellan',
          command: 'Army of the Potomac; general-in-chief from November 1',
          subordinates:
            'Retained direct command of the principal eastern field army while also supervising the other United States departments and armies',
        },
        {
          commander: 'Charles P. Stone',
          command: 'Division guarding the upper Potomac',
          subordinates:
            'Directed the October 20–21 reconnaissance and operations near Leesburg; Edward D. Baker controlled the main force on the Virginia bank',
        },
        {
          commander: 'Montgomery C. Meigs',
          command: 'Quartermaster General',
          subordinates:
            'Managed army transportation and supply and became one of the senior officers Lincoln consulted during McClellan’s illness',
        },
      ],
    },
    {
      side: 'Confederacy',
      color: '#8b3f35',
      branches: [
        {
          commander: 'Jefferson Davis',
          command: 'President and commander in chief',
          subordinates:
            'Set national military policy, assigned senior generals, and maintained difficult working relationships with both Johnston and Beauregard',
        },
        {
          commander: 'Joseph E. Johnston',
          command: 'Department of Northern Virginia from October 22',
          subordinates:
            'Held overall command of the principal Confederate force confronting Washington and consolidated it around Centreville and Manassas',
        },
        {
          commander: 'P.G.T. Beauregard',
          command: 'First Corps, Army of the Potomac',
          subordinates:
            'Commanded the Manassas sector under Johnston before transfer to the western theater early in 1862',
        },
        {
          commander: 'Nathan G. Evans',
          command: 'Brigade at Leesburg',
          subordinates:
            'Defended the Confederate left and led the counterattack that defeated the United States force at Ball’s Bluff',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Organized the Army of the Potomac, displaced Scott as general-in-chief, and resisted demands for a major autumn offensive',
      side: 'United States',
      image: '/images/ep126-george-mcclellan-portrait.jpg',
      source: 'https://www.loc.gov/item/2021669480/',
    },
    {
      name: 'Abraham Lincoln',
      role: 'Appointed McClellan, absorbed political pressure over inactivity, resolved the Trent crisis with Seward, and sought direct military advice during McClellan’s illness',
      side: 'United States',
    },
    {
      name: 'Winfield Scott',
      role: 'Aging general-in-chief whose conflict with McClellan ended with his retirement on November 1',
      side: 'United States',
      image: '/images/ep126-winfield-scott-portrait.jpg',
      source: 'https://www.loc.gov/item/2018667776/',
    },
    {
      name: 'Allan Pinkerton',
      role: 'Directed McClellan’s intelligence service; his reports reinforced the general’s persistent overestimation of Confederate strength',
      side: 'United States',
      image: '/images/ep126-allan-pinkerton-portrait.jpg',
      source: 'https://www.loc.gov/item/2006679475/',
    },
    {
      name: 'Charles P. Stone',
      role: 'Commanded the United States division responsible for the Ball’s Bluff operation',
      side: 'United States',
    },
    {
      name: 'Edward D. Baker',
      role: 'United States senator and colonel who took tactical command at Ball’s Bluff and was killed in the battle',
      side: 'United States',
    },
    {
      name: 'Benjamin F. Wade',
      role: 'Radical Republican senator who chaired the Joint Committee on the Conduct of the War',
      side: 'United States',
    },
    {
      name: 'Montgomery C. Meigs',
      role: 'Quartermaster General who recorded Lincoln’s January 10 “bottom is out of the tub” remark',
      side: 'United States',
      source: 'https://www.loc.gov/item/2005677227/',
    },
    {
      name: 'William H. Seward',
      role: 'Secretary of State who negotiated the release of Mason and Slidell and defused the Trent crisis',
      side: 'United States',
    },
    {
      name: 'Charles Wilkes',
      role: 'U.S. Navy captain who seized Mason and Slidell from Trent without prior authorization from Washington',
      side: 'United States',
    },
    {
      name: 'Jefferson Davis',
      role: 'Confederate president whose command relationships with Johnston and Beauregard deteriorated during 1861',
      side: 'Confederacy',
      image: '/images/jefferson-davis.jpg',
      source: 'https://www.loc.gov/item/2004673617/',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Commanded the Confederate army facing Washington, withdrew exposed outposts, and established the Centreville–Manassas winter line',
      side: 'Confederacy',
      image: '/images/joseph-e-johnston.jpg',
      source: 'https://www.loc.gov/item/2018666539/',
    },
    {
      name: 'P.G.T. Beauregard',
      role: 'Commanded the First Corps near Manassas and feuded with Davis over strategy and credit before being sent west',
      side: 'Confederacy',
      image: '/images/pgt-beauregard.jpg',
      source: 'https://www.loc.gov/item/2018668472/',
    },
    {
      name: 'Nathan G. Evans',
      role: 'Commanded the Confederate brigade at Leesburg and defeated the United States crossing at Ball’s Bluff',
      side: 'Confederacy',
    },
    {
      name: 'James Mason and John Slidell',
      role: 'Confederate diplomatic envoys seized from Trent while traveling to seek European recognition',
      side: 'Confederacy',
    },
  ],
  losses: [
    {
      name: 'Colonel Edward D. Baker',
      side: 'United States',
      role: 'Commander at Ball’s Bluff and sitting United States senator from Oregon',
      outcome:
        'Killed while leading the United States force at Ball’s Bluff on October 21, 1861; his death intensified the political reaction to the defeat',
    },
  ],
  gallery: [
    {
      image:
        'https://tile.loc.gov/storage-services/service/pnp/ppmsca/22500/22578v.jpg',
      alt: 'Panoramic drawing of George B. McClellan reviewing soldiers near Bailey’s Cross Roads in November 1861',
      caption:
        'Alfred Waud’s November 1861 drawing records McClellan reviewing the Army of the Potomac near Bailey’s Cross Roads. The published version described a grand review of 70,000 troops.',
      source: 'https://www.loc.gov/item/2004660490/',
    },
    {
      image: '/images/ep126-george-mcclellan-portrait.jpg',
      alt: 'Full-length portrait of George B. McClellan in United States Army uniform',
      caption:
        'McClellan’s success as an organizer and his popularity with the Army of the Potomac brought him to the top of the United States command structure by November 1861.',
      source: 'https://www.loc.gov/item/2021669480/',
    },
    {
      image: '/images/ep126-winfield-scott-portrait.jpg',
      alt: 'Portrait of Lieutenant General Winfield Scott in uniform',
      caption:
        'Winfield Scott had served in the United States Army since 1808. His retirement on November 1 removed the last institutional restraint between McClellan and the president.',
      source: 'https://www.loc.gov/item/2018667776/',
    },
    {
      image: '/images/joseph-e-johnston.jpg',
      alt: 'Portrait of Confederate General Joseph E. Johnston',
      caption:
        'Johnston commanded the Confederate forces facing Washington and concentrated them around Centreville and Manassas after abandoning exposed forward positions.',
      source: 'https://www.loc.gov/item/2018666539/',
    },
  ],
  sources: [
    {
      label: 'Civil War Podcast: Episode 127',
      url: 'https://civilwarpodcast.org/2015/10/04/civil-war-podcast-episode-127/',
    },
    {
      label:
        'U.S. Army Center of Military History: American Military History, volume 1',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/30-21.pdf',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
    },
    {
      label: 'National Park Service: Ball’s Bluff battle detail',
      url: 'https://www.nps.gov/civilwar/search-battles-detail.htm?battleCode=va006',
    },
    {
      label: 'National Park Service: Ball’s Bluff and the Potomac corridor',
      url: 'https://www.nps.gov/pohe/learn/historyculture/the-civil-war.htm',
    },
    {
      label: 'United States Senate: Joint Committee on the Conduct of the War',
      url: 'https://www.senate.gov/about/powers-procedures/investigations/joint-committee-conduct-of-war.htm',
    },
    {
      label: 'United States Senate: Resolution creating the Joint Committee',
      url: 'https://www.senate.gov/about/resources/pdf/jccw-resolution.pdf',
    },
    {
      label:
        'U.S. Department of State, Office of the Historian: The Trent Affair',
      url: 'https://history.state.gov/milestones/1861-1865/trent-affair',
    },
    {
      label: 'National Park Service: Joseph E. Johnston',
      url: 'https://www.nps.gov/people/joseph-e-johnston.htm',
    },
    {
      label:
        'U.S. Army Quartermaster Museum: Lincoln and His Quartermaster General',
      url: 'https://qmmuseum.army.mil/research/history-heritage/history/civil-war/Lincoln-and-His-Quartermaster-General.html',
    },
    {
      label: 'Library of Congress: George B. McClellan timeline',
      url: 'https://www.loc.gov/collections/george-brinton-mcclellan-papers/articles-and-essays/timeline/',
    },
    {
      label: 'Library of Congress: John Hay diary extracts, 1861–1863',
      url: 'https://www.loc.gov/item/mss347360179/',
    },
    {
      label:
        'Library of Congress: McClellan’s official report on the Army of the Potomac',
      url: 'https://www.loc.gov/item/08010508/',
    },
    {
      label: 'Library of Congress: 1861 map of Manassas and Ball’s Bluff',
      url: 'https://www.loc.gov/item/99439216/',
    },
    {
      label:
        'Library of Congress: McClellan reviewing troops near Bailey’s Cross Roads',
      url: 'https://www.loc.gov/item/2004660490/',
    },
    {
      label: 'Journal of the Abraham Lincoln Association: Typhoid and Tumult',
      url: 'https://quod.lib.umich.edu/j/jala/2629860.0018.203/--typhoid-and-tumult-lincolns-response-to-general-mcclellans',
    },
  ],
} satisfies Enrichment;
