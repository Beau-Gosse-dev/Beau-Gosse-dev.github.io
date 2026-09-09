import type { Enrichment } from '../types';

export const enrichment = {
  date: 'March 11–April 5, 1862',
  place:
    'Washington, D.C.; Alexandria, Manassas, and Warrenton, Virginia; the Shenandoah Valley; and the Virginia Peninsula from Fort Monroe to Yorktown',
  result:
    'McClellan moved the Army of the Potomac to the Peninsula while presenting the soldiers as a force personally connected to him. His April 1 accounting treated troops at Washington, Manassas, Warrenton, the lower Potomac, and in the Shenandoah Valley as part of a 73,456-man defensive system. James Wadsworth reported that only 19,022 troops were present for duty under his immediate command at Washington and that further detachments had been ordered. After Lorenzo Thomas and Ethan Allen Hitchcock concluded that Lincoln’s security requirement had not been fully met, Lincoln and Stanton retained Irvin McDowell’s I Corps in northern Virginia instead of sending it to McClellan. The decision reduced the reinforcements then expected on the Peninsula, but it does not by itself explain McClellan’s decision to besiege Yorktown',
  facts: [
    {
      label: 'Episode focus',
      value: 'Army loyalty, Washington’s security, and McDowell’s I Corps',
      note: 'The episode pauses the battlefield narrative to examine command relationships and force allocation.',
    },
    {
      label: 'McClellan’s army address',
      value: 'Dated March 14, 1862, at Fairfax Court House',
      note: 'The transcript associates the address with the March 17 start of embarkation, but surviving printed texts date the address March 14.',
    },
    {
      label: 'Command change',
      value: 'McClellan ceased serving as general-in-chief on March 11',
      note: 'Lincoln’s Special War Order No. 3 left him in command of the Department and Army of the Potomac.',
    },
    {
      label: 'Lincoln’s condition',
      value: 'Washington had to be left “entirely secure”',
      note: 'The March 8 order required the general-in-chief and corps commanders to agree that the capital was secure; Stanton repeated the condition on March 13.',
    },
    {
      label: 'Corps commanders’ estimates',
      value: '40,000 at the low end; about 55,000 under the majority formula',
      note: 'Sumner proposed 40,000. Keyes, Heintzelman, and McDowell called for fully garrisoning the forts, occupying the remaining forts, and adding a 25,000-man covering force. Thomas and Hitchcock interpreted that formula as about 55,000 in all.',
    },
    {
      label: 'McClellan’s April 1 total',
      value: '73,456 men',
      note: 'The total combined 18,000 for Washington, 10,859 at Manassas, 7,780 at Warrenton, 35,467 in the Shenandoah Valley, and 1,350 on the lower Potomac.',
    },
    {
      label: 'Why the total was disputed',
      value: 'It mixed immediate, distant, and proposed forces',
      note: 'McClellan’s report described several concentrations as what “will” or “are to” be present. Thomas and Hitchcock declined to decide whether Banks’s force in the Shenandoah could count toward Washington’s immediate defense.',
    },
    {
      label: 'Wadsworth’s April 2 return',
      value: '19,022 present for duty',
      note: 'Wadsworth reported that nearly all were new and imperfectly disciplined, that he had no mounted light artillery under his command, and that he had orders to send additional regiments and 4,000 men away.',
    },
    {
      label: 'Official review',
      value: 'Security requirement not fully complied with',
      note: 'Adjutant General Lorenzo Thomas and Major General Ethan Allen Hitchcock reached this conclusion on April 2 after reviewing McClellan’s and Wadsworth’s reports.',
    },
    {
      label: 'Decision on I Corps',
      value: 'Ordered retained April 3–4; McClellan learned of it April 5',
      note: 'Lincoln first directed that either McDowell’s or Sumner’s corps remain in front of Washington. The War Department then notified McClellan that McDowell’s corps was detached because the force left near Washington was considered insufficient.',
    },
    {
      label: 'Yorktown forces',
      value:
        'About 58,000 United States troops initially available against roughly 11,000 Confederates',
      note: 'These are approximate early-April figures from U.S. Army and National Park Service histories. Both armies received additional troops; Magruder’s command was later absorbed into Johnston’s much larger force.',
    },
    {
      label: 'Effect on the siege',
      value:
        'Reduced expected reinforcements, but causation remains interpretive',
      note: 'McClellan later called the decision a fatal error. The episode follows Stephen W. Sears in arguing that it did not dictate the choice to besiege Yorktown. That counterfactual judgment cannot be proved from the orders alone.',
    },
    {
      label: 'Combat and leader losses in this episode',
      value: 'None',
      note: 'No battle is narrated and no senior leader is killed or mortally wounded during the events covered here.',
    },
    {
      label: 'Book recommendation',
      value:
        'Forward to Richmond: McClellan’s Peninsula Campaign by Ronald H. Bailey and the Editors of Time-Life Books',
    },
  ],
  maps: [
    {
      title: 'Washington and the Peninsula were one operational problem',
      caption:
        'McClellan’s army traveled from Alexandria to Fort Monroe and advanced toward Yorktown and Richmond. Lincoln also had to consider Confederate access to Washington through northern Virginia and the Shenandoah Valley. The arrows show broad operational movements, not daily march routes.',
      source:
        'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
      image: '/images/ep131-washington-peninsula-context.svg',
      alt: 'Schematic map connecting Washington, northern Virginia, the Shenandoah Valley, and the Peninsula Campaign route to Richmond',
    },
    {
      title: 'McClellan’s force accounting around Washington',
      caption:
        'The map places the five parts of McClellan’s April 1 total in geographic context. The 73,456 figure described a regional defensive system, not a force concentrated inside Washington’s forts. Wadsworth’s April 2 report counted 19,022 present for duty under his immediate command before further ordered detachments.',
      source: 'https://www.latinamericanstudies.org/civil-war/OR-11-3.pdf',
      image: '/images/ep131-washington-force-disposition.svg',
      alt: 'Schematic map of McClellan’s April 1 troop figures at Washington, Manassas, Warrenton, the Shenandoah Valley, and the lower Potomac',
    },
    {
      title: 'The Virginia Peninsula and Richmond in 1862',
      caption:
        'This contemporary map shows the York and James Rivers, Fort Monroe, Yorktown, Williamsburg, the road and rail network, and Richmond. It helps locate the army McClellan was moving away from Washington and the defensive line where his advance stopped.',
      source: 'https://www.loc.gov/item/99448355/',
      image: '/images/ep131-peninsula-map-1862.jpg',
      alt: 'Contemporary map of Richmond and the Virginia Peninsula published in 1862',
    },
  ],
  moments: [
    {
      time: '1:10',
      audioTime: 70,
      title: 'The campaign narrative pauses',
      detail:
        'The episode turns from the advance on Yorktown to three connected subjects: McClellan’s relationship with his army, his accounting for Washington’s defense, and the retention of McDowell’s corps.',
    },
    {
      time: '2:14',
      audioTime: 134,
      title: 'McClellan’s relationship with the army',
      detail:
        'The discussion describes the personal loyalty McClellan cultivated through frequent appearances, praise, and a paternal style of command.',
    },
    {
      time: '4:41',
      audioTime: 281,
      title: 'McClellan addresses the Army of the Potomac',
      detail:
        'The address told the soldiers that their training was complete and linked McClellan’s fate to theirs. The document is dated March 14; embarkation from Alexandria began March 17.',
    },
    {
      time: '6:19',
      audioTime: 379,
      title: 'McClellan loses the general-in-chief role',
      detail:
        'Lincoln’s March 11 order removed McClellan’s authority over the other military departments while leaving him in command of the Army of the Potomac.',
    },
    {
      time: '7:02',
      audioTime: 422,
      title: 'The army also becomes a political base',
      detail:
        'The episode distinguishes McClellan’s effective work organizing the army from his use of personal loyalty and patronage within its officer corps and headquarters.',
    },
    {
      time: '10:22',
      audioTime: 622,
      title: 'The security of Washington',
      detail:
        'Lincoln’s approval of the Fort Monroe plan depended on leaving the capital secure after the Army of the Potomac moved south.',
    },
    {
      time: '10:49',
      audioTime: 649,
      title: 'Corps commanders give different requirements',
      detail:
        'Sumner proposed 40,000 men. The other three corps commanders required garrisons for the forts plus a 25,000-man covering force, a formula later interpreted as about 55,000.',
    },
    {
      time: '11:23',
      audioTime: 683,
      title: 'McClellan reports from the steamer Commodore',
      detail:
        'On April 1, after embarkation was underway, McClellan sent the War Department his first detailed accounting of the troops assigned to Washington and its approaches.',
    },
    {
      time: '11:55',
      audioTime: 715,
      title: 'The 73,456 total',
      detail:
        'McClellan combined troops assigned or intended for Washington, Manassas, Warrenton, the lower Potomac, and the Shenandoah Valley into one regional defense figure.',
    },
    {
      time: '13:07',
      audioTime: 787,
      title: 'The location of the troops matters',
      detail:
        'The episode argues that the headline total obscured how many trained troops were immediately available at the capital and how many were distant or only scheduled to move.',
    },
    {
      time: '13:41',
      audioTime: 821,
      title: 'McClellan does not resolve Lincoln’s concern',
      detail:
        'McClellan viewed distant field forces and pressure against Richmond as parts of Washington’s defense, but his April 1 report did not produce agreement with Lincoln and Stanton on that concept.',
    },
    {
      time: '14:38',
      audioTime: 878,
      title: 'McDowell’s corps is withheld',
      detail:
        'The episode connects the review of McClellan’s figures to the decision to keep I Corps in northern Virginia rather than send it immediately to the Peninsula.',
    },
    {
      time: '15:22',
      audioTime: 922,
      title: 'Wadsworth reports his immediate force',
      detail:
        'The Washington district commander counted 19,022 present for duty, described most as new and imperfectly disciplined, and reported no mounted light artillery under his command.',
    },
    {
      time: '16:02',
      audioTime: 962,
      title: 'I Corps is the formation still available to retain',
      detail:
        'McDowell’s corps had not completed movement to the Peninsula when the administration decided that one corps had to remain in front of Washington.',
    },
    {
      time: '16:17',
      audioTime: 977,
      title: 'McClellan condemns the decision',
      detail:
        'In private correspondence and later in his official report, McClellan presented the loss of McDowell’s corps as a crippling blow to the campaign.',
    },
    {
      time: '18:20',
      audioTime: 1100,
      title: 'The episode separates I Corps from the Yorktown decision',
      detail:
        'It argues that McDowell’s absence did not require a siege because McClellan’s original embarkation schedule did not place the corps at Fort Monroe in time for the opening advance.',
    },
    {
      time: '19:44',
      audioTime: 1184,
      title: 'McClellan had an early numerical advantage',
      detail:
        'U.S. Army history places about 58,000 troops immediately with McClellan when the advance began; the National Park Service gives Magruder roughly 11,000 before Confederate reinforcements arrived.',
    },
    {
      time: '21:08',
      audioTime: 1268,
      title: 'Book recommendation',
      detail:
        'The hosts recommend Forward to Richmond: McClellan’s Peninsula Campaign by Ronald H. Bailey and the Editors of Time-Life Books.',
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
            'Approved the Fort Monroe operation on conditions, changed the national command structure, and ordered one corps retained near Washington',
        },
        {
          commander: 'Edwin M. Stanton',
          command: 'Secretary of War',
          subordinates:
            'Transmitted Lincoln’s directions, ordered an official review of the April 1–2 reports, and administered the decision to detach I Corps',
        },
        {
          commander: 'George B. McClellan',
          command:
            'Commander, Army of the Potomac and Department of the Potomac',
          subordinates:
            'Commanded the Peninsula expedition after March 11 and submitted the disputed April 1 force accounting',
        },
        {
          commander: 'Irvin McDowell',
          command: 'Commander, I Corps; then Department of the Rappahannock',
          subordinates:
            'His corps was detached from McClellan and retained in northern Virginia for Washington’s security',
        },
        {
          commander: 'James S. Wadsworth',
          command:
            'Military governor and commander, Military District of Washington',
          subordinates:
            'Reported the strength, condition, and artillery limitations of the troops immediately under his command',
        },
        {
          commander: 'Nathaniel P. Banks',
          command: 'Commander, V Corps in the Shenandoah Valley',
          subordinates:
            'His field force was included in McClellan’s regional total even though Thomas and Hitchcock did not decide whether it was available for Washington’s immediate defense',
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
            'Directed Confederate national policy and the defense of Richmond',
        },
        {
          commander: 'Joseph E. Johnston',
          command: 'Commander, Army of Northern Virginia',
          subordinates:
            'Shifted the main Confederate field army toward the Peninsula while Lincoln considered the northern approaches to Washington',
        },
        {
          commander: 'John B. Magruder',
          command: 'Commander, Army of the Peninsula',
          subordinates:
            'Held the Yorktown–Warwick line with roughly 11,000 troops before Johnston’s reinforcements arrived',
        },
      ],
    },
  ],
  people: [
    {
      name: 'George B. McClellan',
      role: 'Built and commanded the Army of the Potomac, issued the March 14 paternal address to its soldiers, and argued that his regional troop dispositions protected Washington',
      side: 'United States',
      image: '/images/ep131-george-mcclellan.jpg',
      source: 'https://www.loc.gov/item/2005683068/',
    },
    {
      name: 'Abraham Lincoln',
      role: 'Required Washington to remain secure and directed that one corps stay in front of the capital after the April 2 review',
      side: 'United States',
    },
    {
      name: 'Edwin M. Stanton',
      role: 'Had Thomas and Hitchcock compare McClellan’s accounting with Wadsworth’s return and communicated the administration’s orders',
      side: 'United States',
    },
    {
      name: 'Irvin McDowell',
      role: 'Commanded the I Corps retained in northern Virginia and was assigned the new Department of the Rappahannock',
      side: 'United States',
      image: '/images/ep131-irvin-mcdowell.jpg',
      source: 'https://www.loc.gov/item/2018666455/',
    },
    {
      name: 'James S. Wadsworth',
      role: 'Commanded the Military District of Washington and warned that the strength and quality of his immediate force were inadequate for its assigned duty',
      side: 'United States',
      image: '/images/ep131-james-wadsworth.jpg',
      source: 'https://www.loc.gov/item/2018666507/',
    },
    {
      name: 'Nathaniel P. Banks',
      role: 'Commanded V Corps in the Shenandoah Valley, a distant force included in McClellan’s April 1 regional defense total',
      side: 'United States',
    },
    {
      name: 'Lorenzo Thomas',
      role: 'Adjutant General who, with Hitchcock, reviewed the April reports and found Lincoln’s security requirement had not been fully met',
      side: 'United States',
    },
    {
      name: 'Ethan Allen Hitchcock',
      role: 'Major general who joined Thomas in the April 2 review of the forces left for Washington and Manassas',
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Commanded the principal Confederate field army, which moved from northern Virginia to reinforce the defense between Yorktown and Richmond',
      side: 'Confederacy',
    },
    {
      name: 'John B. Magruder',
      role: 'Commanded the initially outnumbered Confederate force holding the Yorktown–Warwick defensive line',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep131-george-mcclellan.jpg',
      alt: 'George B. McClellan standing in uniform in an 1861 carte de visite',
      caption:
        'McClellan combined army organization, personal appearances, and paternal language to build strong loyalty among many Army of the Potomac soldiers.',
      source: 'https://www.loc.gov/item/2005683068/',
    },
    {
      image: '/images/ep131-irvin-mcdowell.jpg',
      alt: 'Major General Irvin McDowell seated in uniform during the Civil War',
      caption:
        'McDowell commanded I Corps, the formation the War Department detached from McClellan and retained in northern Virginia.',
      source: 'https://www.loc.gov/item/2018666455/',
    },
    {
      image: '/images/ep131-james-wadsworth.jpg',
      alt: 'Three exposures on one glass negative showing Brigadier General James S. Wadsworth seated in uniform',
      caption:
        'Wadsworth’s April 2 report distinguished the troops immediately under his command from McClellan’s wider regional total and emphasized their limited preparation.',
      source: 'https://www.loc.gov/item/2018666507/',
    },
    {
      image: '/images/ep131-mcclellan-yorktown-headquarters.jpg',
      alt: 'Tents and soldiers at George B. McClellan’s headquarters near Yorktown on May 3, 1862',
      caption:
        'McClellan’s headquarters at Camp Winfield Scott near Yorktown on May 3, the eve of the Confederate withdrawal from the Warwick line.',
      source: 'https://www.loc.gov/item/2018666134/',
    },
    {
      image: '/images/ep131-peninsula-map-1862.jpg',
      alt: 'Printed 1862 map of Richmond, the Virginia Peninsula, and the York and James Rivers',
      caption:
        'A contemporary map records the water routes and Peninsula geography that separated McClellan’s field army from the forces retained near Washington.',
      source: 'https://www.loc.gov/item/99448355/',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 131 page',
      url: 'https://civilwarpodcast.org/2015/11/01/civil-war-podcast-episode-131/',
    },
    {
      label:
        'Official Records, Series I, Volume XI, Part III: March–April orders, reports, and correspondence',
      url: 'https://www.latinamericanstudies.org/civil-war/OR-11-3.pdf',
    },
    {
      label:
        'Library of Congress: McClellan’s official report on the Army of the Potomac',
      url: 'https://www.loc.gov/item/08010508/',
    },
    {
      label:
        'Library of Congress: George B. McClellan Papers, Army of the Potomac general orders, 1861–1862',
      url: 'https://www.loc.gov/item/mss318980258/',
    },
    {
      label:
        'American Presidency Project: Lincoln’s Special War Order No. 3, March 11, 1862',
      url: 'https://www.presidency.ucsb.edu/documents/executive-order-presidents-special-war-order-no-3',
    },
    {
      label:
        'American Presidency Project: Stanton’s March 13 directions to McClellan',
      url: 'https://www.presidency.ucsb.edu/documents/executive-order-454',
    },
    {
      label:
        'U.S. Army Center of Military History: The Virginia Campaigns, March–August 1862',
      url: 'https://history.army.mil/portals/143/Images/Publications/catalog/75-5.pdf',
    },
    {
      label:
        'U.S. Army Center of Military History: American Military History, Volume I',
      url: 'https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/A%20Titles%20PDF/CMH_Pub_30-21.pdf',
    },
    {
      label: 'National Park Service: Yorktown in the Civil War',
      url: 'https://www.nps.gov/york/learn/historyculture/yorktown-in-the-civil-war.htm',
    },
    {
      label: 'National Park Service: The fortifications of Washington',
      url: 'https://www.nps.gov/articles/the-fortifications-of-washington.htm',
    },
    {
      label:
        'Library of Congress: 1862 map of Richmond and the Peninsula Campaign',
      url: 'https://www.loc.gov/item/99448355/',
    },
    {
      label: 'Library of Congress: George B. McClellan portrait',
      url: 'https://www.loc.gov/item/2005683068/',
    },
    {
      label: 'Library of Congress: Irvin McDowell portrait',
      url: 'https://www.loc.gov/item/2018666455/',
    },
    {
      label: 'Library of Congress: James S. Wadsworth portrait',
      url: 'https://www.loc.gov/item/2018666507/',
    },
    {
      label:
        'Library of Congress: McClellan’s Yorktown headquarters, May 3, 1862',
      url: 'https://www.loc.gov/item/2018666134/',
    },
  ],
} satisfies Enrichment;
