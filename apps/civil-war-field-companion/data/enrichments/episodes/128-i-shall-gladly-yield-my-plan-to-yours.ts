import type { Enrichment } from '../types';

export const enrichment = {
  date: 'December 1, 1861–February 3, 1862',
  place:
    'Washington, D.C.; the United States and Confederate lines around Centreville and Manassas, Virginia; and McClellan’s proposed route through the Chesapeake Bay, Rappahannock River, Urbanna, and Richmond',
  result:
    'Lincoln’s effort to force an advance produced two war orders and a direct strategic test for McClellan. Lincoln favored an overland movement against the Confederate railroad communications southwest of Manassas; McClellan argued for transporting the Army of the Potomac by water to Urbanna and approaching Richmond from the east. McClellan’s argument prevailed for the moment, and Lincoln’s January 31 order was not carried out. When Joseph E. Johnston withdrew from the Centreville–Manassas line in March, the Urbanna concept lost its intended advantage and McClellan shifted the landing point to Fort Monroe for the Peninsula Campaign',
  facts: [
    {
      label: 'Immediate planning crisis',
      value: 'January 10–13, 1862 White House conferences',
      note: 'McClellan was recovering from typhoid fever when Lincoln consulted Irvin McDowell, William B. Franklin, Montgomery C. Meigs, and cabinet members.',
    },
    {
      label: 'Opposing armies',
      value: 'About 30 miles apart',
      note: 'The Army of the Potomac guarded Washington while Joseph E. Johnston’s Confederates wintered around Centreville and Manassas.',
    },
    {
      label: 'Lincoln’s preferred line',
      value: 'Overland toward the railroad southwest of Manassas',
    },
    {
      label: 'McClellan’s preferred line',
      value: 'By water to Urbanna, then overland toward Richmond',
      note: 'Urbanna is the correct Virginia place-name; the automated transcript renders it “Urbana.”',
    },
    {
      label: 'Proposed waterborne force',
      value: '110,000–140,000 soldiers',
      note: 'McClellan gave this range in his January 31 memorandum to Secretary of War Edwin M. Stanton.',
    },
    {
      label: 'Transportation estimate',
      value: '30 days after authorization',
      note: 'McClellan proposed collecting canal boats, barges, schooners, wood boats, and small steamers.',
    },
    {
      label: 'General War Order No. 1',
      value: 'Issued January 27, 1862',
      note: 'It named February 22 as the date for a general movement of United States land and naval forces.',
    },
    {
      label: 'Special War Order No. 1',
      value: 'Issued January 31, 1862',
      note: 'It directed the Army of the Potomac to seize a point on the railroad southwest of Manassas Junction while leaving Washington secure.',
    },
    {
      label: 'Lincoln’s test',
      value: 'Five questions about time, cost, certainty, value, communications, and retreat',
    },
    {
      label: 'Immediate outcome',
      value: 'McClellan’s plan accepted in principle',
      note: 'The January 31 order was never carried out, although Lincoln did not formally revoke it.',
    },
    {
      label: 'Combat in this episode',
      value: 'None',
      note: 'The episode concerns command, logistics, and campaign planning rather than a battle.',
    },
    {
      label: 'Book recommendation',
      value: 'Mr. Lincoln’s Army by Bruce Catton',
    },
  ],
  maps: [
    {
      title: 'Lincoln’s plan and McClellan’s plan',
      caption:
        'This schematic follows Lincoln’s February 3 description of the alternatives: an overland movement toward the railroad southwest of Manassas, or a water movement down the Chesapeake and up the Rappahannock to Urbanna before marching toward Richmond.',
      source: 'https://www.loc.gov/item/mal1434200/',
      image: '/images/ep128-lincoln-mcclellan-plans.svg',
      alt: 'Schematic map comparing Lincoln’s Manassas plan with McClellan’s water route to Urbanna and Richmond',
    },
    {
      title: 'Eastern Virginia and its rail and water corridors',
      caption:
        'This 1862 U.S. Coast Survey map shows Washington, Manassas, the Rappahannock, Urbanna, West Point, Richmond, Fort Monroe, the Chesapeake Bay, and the railroads that shaped the strategic dispute.',
      source: 'https://www.loc.gov/item/2006629772/',
      image: '/images/ep128-eastern-virginia-map-1862.jpg',
      alt: 'United States Coast Survey map of eastern Virginia published in 1862',
    },
  ],
  moments: [
    {
      time: '1:01',
      audioTime: 61,
      title: 'The episode returns to the command crisis',
      detail:
        'In January 1862, the Army of the Potomac remained inactive while McClellan recovered from typhoid fever and Lincoln sought a workable campaign plan.',
    },
    {
      time: '1:44',
      audioTime: 104,
      title: 'Lincoln summons McDowell and Franklin',
      detail:
        'Lincoln called the two Army of the Potomac division commanders to the White House on January 10 to discuss how the army could begin operations.',
    },
    {
      time: '2:37',
      audioTime: 157,
      title: 'Lincoln asks how the army can be used',
      detail:
        'McDowell’s notes recorded Lincoln’s statement that if McClellan would not use the army, he wanted to know how it could be made to do something.',
    },
    {
      time: '3:19',
      audioTime: 199,
      title: 'Lincoln had drafted a turning movement',
      detail:
        'The proposed operation would hold Johnston near Centreville while columns moved south along the Potomac to turn the Confederate right and cut its railroad communications.',
    },
    {
      time: '4:15',
      audioTime: 255,
      title: 'McClellan rejects the direct approach',
      detail:
        'McClellan believed the Confederates were stronger than they were and argued that Johnston could defeat a divided United States turning force.',
    },
    {
      time: '5:34',
      audioTime: 334,
      title: 'Two plans emerge',
      detail:
        'McDowell favored a shorter overland turning movement. Franklin outlined a deeper movement by water into the Chesapeake, consistent with the plan McClellan had kept from Lincoln.',
    },
    {
      time: '6:19',
      audioTime: 379,
      title: 'Meigs questions the water route',
      detail:
        'The quartermaster general saw no logistical advantage in opening a new base east of Richmond and recommended operating from Washington.',
    },
    {
      time: '6:42',
      audioTime: 402,
      title: 'McClellan appears at the White House',
      detail:
        'After learning that the administration was examining the army’s condition, McClellan left his sickbed for the January 12 meeting and stated that he had a plan.',
    },
    {
      time: '7:26',
      audioTime: 446,
      title: 'The January 13 conference convenes',
      detail:
        'Lincoln, cabinet officers, McClellan, McDowell, Franklin, and Meigs met to consider the army’s condition and possible operations.',
    },
    {
      time: '8:31',
      audioTime: 511,
      title: 'Chase demands an answer',
      detail:
        'Treasury Secretary Salmon P. Chase asked what McClellan intended to do with the Army of the Potomac and when he intended to do it. McClellan declined to disclose the plan unless ordered.',
    },
    {
      time: '9:35',
      audioTime: 575,
      title: 'Lincoln still permits McClellan to act',
      detail:
        'Despite the strained conference, Lincoln continued to place sufficient confidence in the general-in-chief to await the operation McClellan said he had fixed in mind.',
    },
    {
      time: '11:35',
      audioTime: 695,
      title: 'Lincoln expresses confidence',
      detail:
        'On January 18, Lincoln told Senator Orville H. Browning that he retained great confidence in McClellan.',
    },
    {
      time: '11:52',
      audioTime: 712,
      title: 'Edwin Stanton enters the War Department',
      detail:
        'Lincoln replaced Simon Cameron with Stanton in January. McClellan initially welcomed the choice, but Stanton soon joined those demanding prompt military action.',
    },
    {
      time: '14:10',
      audioTime: 850,
      title: 'Lincoln issues General War Order No. 1',
      detail:
        'The January 27 order called for a general movement of United States land and naval forces by February 22 and held commanders responsible for execution.',
    },
    {
      time: '14:25',
      audioTime: 865,
      title: 'A special order targets Manassas',
      detail:
        'On January 31, Lincoln directed the Army of the Potomac to seize and occupy a point on the railroad southwest of Manassas Junction while maintaining Washington’s security.',
    },
    {
      time: '15:58',
      audioTime: 958,
      title: 'McClellan submits his plan',
      detail:
        'His memorandum opposed the Manassas operation and proposed shifting 110,000–140,000 troops to a new line of operations based on the lower Chesapeake.',
    },
    {
      time: '16:20',
      audioTime: 980,
      title: 'Urbanna is the intended landing point',
      detail:
        'McClellan proposed moving down the Potomac, through the Chesapeake, and up the Rappahannock to Urbanna, then advancing through West Point toward Richmond.',
    },
    {
      time: '16:59',
      audioTime: 1019,
      title: 'The plans pursue different immediate objectives',
      detail:
        'Lincoln emphasized striking Johnston’s army and railroad communications. McClellan emphasized forcing Johnston from Manassas by threatening Richmond.',
    },
    {
      time: '17:32',
      audioTime: 1052,
      title: 'Lincoln asks five questions',
      detail:
        'He tested the water route against the direct plan by asking about time and money, certainty and value of victory, enemy communications, and the difficulty of retreat after a defeat.',
    },
    {
      time: '18:13',
      audioTime: 1093,
      title: 'Lincoln offers to yield',
      detail:
        'Lincoln told McClellan that satisfactory answers would persuade him to accept the general’s plan, the statement that supplies the episode title.',
    },
    {
      time: '18:25',
      audioTime: 1105,
      title: 'McClellan defends the Urbanna operation',
      detail:
        'McClellan argued that a waterborne approach coordinated with operations in the western theater offered decisive results and accepted personal responsibility for the proposal.',
    },
    {
      time: '19:01',
      audioTime: 1141,
      title: 'Lincoln accepts the plan in principle',
      detail:
        'Lincoln remained concerned that the enemy army, rather than Richmond alone, should be the main objective, but he permitted McClellan’s concept to proceed.',
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
            'Set national strategy, consulted army leaders, and issued General War Order No. 1 and Special War Order No. 1',
        },
        {
          commander: 'Edwin M. Stanton',
          command: 'Secretary of War',
          subordinates:
            'Replaced Simon Cameron in January 1862 and served as the civilian head of the War Department during the final exchange over the campaign plan',
        },
        {
          commander: 'George B. McClellan',
          command: 'General-in-chief and commander, Army of the Potomac',
          subordinates:
            'Controlled the principal United States army in the East and proposed the waterborne Urbanna operation',
        },
        {
          commander: 'Irvin McDowell',
          command: 'Division commander, Army of the Potomac',
          subordinates:
            'Senior division commander consulted by Lincoln; recommended an overland turning movement from the Washington base',
        },
        {
          commander: 'William B. Franklin',
          command: 'Division commander, Army of the Potomac',
          subordinates:
            'McClellan ally consulted by Lincoln; outlined the deeper waterborne approach toward Richmond',
        },
        {
          commander: 'Montgomery C. Meigs',
          command: 'Quartermaster General, United States Army',
          subordinates:
            'Evaluated transport and supply requirements and initially recommended operating from the army’s existing Washington base',
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
            'Exercised national authority over Confederate forces and their defense of Virginia',
        },
        {
          commander: 'Joseph E. Johnston',
          command: 'Department of Northern Virginia; field army around Centreville and Manassas',
          subordinates:
            'Held the fortified line that Lincoln wanted turned and that McClellan hoped to make untenable by threatening Richmond',
        },
        {
          commander: 'John B. Magruder',
          command: 'Army of the Peninsula',
          subordinates:
            'Defended the approaches between Fort Monroe and Richmond; McClellan expected an Urbanna landing to isolate his force',
        },
      ],
    },
  ],
  people: [
    {
      name: 'Abraham Lincoln',
      role: 'Pressed for coordinated offensives, issued the January war orders, and required McClellan to justify the Urbanna plan against an overland movement at Manassas',
      side: 'United States',
      image: '/images/ep128-abraham-lincoln-1861.jpg',
      source: 'https://www.loc.gov/item/2009630687/',
    },
    {
      name: 'George B. McClellan',
      role: 'Served simultaneously as general-in-chief and Army of the Potomac commander and advocated shifting the army by water to Urbanna',
      side: 'United States',
      image: '/images/ep128-george-mcclellan-1861.jpg',
      source: 'https://www.loc.gov/item/2005683068/',
    },
    {
      name: 'Edwin M. Stanton',
      role: 'Became secretary of war in January 1862 and transmitted the memoranda through which Lincoln and McClellan debated the campaign',
      side: 'United States',
      image: '/images/ep128-edwin-stanton.jpg',
      source: 'https://www.loc.gov/item/2018666385/',
    },
    {
      name: 'Irvin McDowell',
      role: 'Senior Army of the Potomac division commander who advised Lincoln in favor of an overland turning movement',
      side: 'United States',
    },
    {
      name: 'William B. Franklin',
      role: 'Army of the Potomac division commander and McClellan confidant who outlined the waterborne alternative during Lincoln’s consultations',
      side: 'United States',
    },
    {
      name: 'Montgomery C. Meigs',
      role: 'Quartermaster general who helped Lincoln examine the feasibility and logistics of moving the Army of the Potomac',
      side: 'United States',
    },
    {
      name: 'Salmon P. Chase',
      role: 'Treasury secretary who directly asked McClellan what he intended to do with the army and when he intended to act',
      side: 'United States',
    },
    {
      name: 'Joseph E. Johnston',
      role: 'Commanded the Confederate army defending the Centreville–Manassas line and feared a United States turning movement against his right and railroad communications',
      side: 'Confederacy',
    },
    {
      name: 'John B. Magruder',
      role: 'Commanded Confederate forces on the Peninsula that McClellan intended to bypass and isolate with an Urbanna landing',
      side: 'Confederacy',
    },
  ],
  losses: [],
  gallery: [
    {
      image: '/images/ep128-lincoln-mcclellan-letter.jpg',
      alt: 'Library of Congress transcription image of Lincoln’s February 3, 1862 letter to McClellan',
      caption:
        'Lincoln’s February 3 letter sets the competing routes side by side and asks five questions before stating that he would yield if McClellan answered them satisfactorily.',
      source: 'https://www.loc.gov/item/mal1434200/',
    },
    {
      image: '/images/ep128-eastern-virginia-map-1862.jpg',
      alt: 'Color map of eastern Virginia prepared by the United States Coast Survey in 1862',
      caption:
        'The 1862 map records the railroads, rivers, roads, and Chesapeake waterways on which both campaign proposals depended.',
      source: 'https://www.loc.gov/item/2006629772/',
    },
    {
      image: '/images/ep128-abraham-lincoln-1861.jpg',
      alt: 'Abraham Lincoln seated for a portrait in May 1861',
      caption:
        'Lincoln moved from private consultation to written orders as he tried to convert the United States advantage in numbers into simultaneous pressure on Confederate armies.',
      source: 'https://www.loc.gov/item/2009630687/',
    },
    {
      image: '/images/ep128-george-mcclellan-1861.jpg',
      alt: 'Major General George B. McClellan standing in uniform in 1861',
      caption:
        'McClellan built the Army of the Potomac into a large organized force but resisted an advance from Washington and argued for a new line of operations by water.',
      source: 'https://www.loc.gov/item/2005683068/',
    },
    {
      image: '/images/ep128-edwin-stanton.jpg',
      alt: 'Wartime portrait of Secretary of War Edwin M. Stanton',
      caption:
        'Stanton entered the War Department during the planning dispute and transmitted the written arguments between Lincoln and McClellan.',
      source: 'https://www.loc.gov/item/2018666385/',
    },
  ],
  sources: [
    {
      label: 'Official Civil War Podcast episode 128 page',
      url: 'https://civilwarpodcast.org/2015/10/11/civil-war-podcast-episode-128/',
    },
    {
      label: 'Library of Congress: Lincoln’s draft of General War Order No. 1, January 27, 1862',
      url: 'https://www.loc.gov/item/mal1418000/',
    },
    {
      label: 'Library of Congress: McClellan to Stanton, January 31, 1862',
      url: 'https://www.loc.gov/item/mal1426200/',
    },
    {
      label: 'Library of Congress: Lincoln to McClellan, February 3, 1862',
      url: 'https://www.loc.gov/item/mal1434200/',
    },
    {
      label: 'Library of Congress: Lincoln to Buell on simultaneous pressure, January 13, 1862',
      url: 'https://www.loc.gov/item/mal1397100/',
    },
    {
      label: 'Library of Congress exhibition: Lincoln as commander in chief',
      url: 'https://www.loc.gov/exhibits/lincoln/lincoln-as-commander-in-chief.html',
    },
    {
      label: 'Library of Congress: McClellan’s official report on the Army of the Potomac',
      url: 'https://www.loc.gov/item/08010508/',
    },
    {
      label: 'U.S. Army Center of Military History: Civil War campaign summary',
      url: 'https://history.army.mil/Research/Reference-Topics/Army-Campaigns/Brief-Summaries/Civil-War/',
    },
    {
      label: 'U.S. Army Center of Military History: United States Army commanding generals',
      url: 'https://history.army.mil/Research/Reference-Topics/-CONTINENTAL-ARMY-GENERAL-AND-COMMANDER-IN-CHIEF/',
    },
    {
      label: 'U.S. Army Center of Military History: An Overview of the Eastern Theater',
      url: 'https://history.army.mil/Portals/143/Images/Publications/ArmyHistoryMag/pdf/19901999/AH47newOCR.pdf',
    },
    {
      label: 'National Park Service: George B. McClellan',
      url: 'https://www.nps.gov/people/george-b-mcclellan.htm',
    },
    {
      label: 'National Park Service: Civil War timeline',
      url: 'https://www.nps.gov/gett/learn/historyculture/civil-war-timeline.htm',
    },
    {
      label: 'Library of Congress: 1862 map of eastern Virginia',
      url: 'https://www.loc.gov/item/2006629772/',
    },
    {
      label: 'Library of Congress: Irvin McDowell portrait',
      url: 'https://www.loc.gov/item/2018666455/',
    },
    {
      label: 'Library of Congress: William B. Franklin portrait',
      url: 'https://www.loc.gov/item/2018666420/',
    },
    {
      label: 'Library of Congress: Montgomery C. Meigs portrait',
      url: 'https://www.loc.gov/item/2018667254/',
    },
  ],
} satisfies Enrichment;
