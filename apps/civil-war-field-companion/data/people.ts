export type HistoricalSide = 'United States' | 'Confederacy';

export type PersonAsset = {
  name: string;
  side: HistoricalSide;
  lifespan: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imageSource?: string;
};

export const people = {
  'bushrod-r-johnson': {
    name: 'Bushrod R. Johnson',
    side: 'Confederacy',
    lifespan: '1817–1880',
    summary: 'West Point graduate and military educator who became a Confederate general.',
    image: '/images/bushrod-r-johnson.jpg',
    imageAlt: 'Portrait of Bushrod R. Johnson in Confederate uniform',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Bust_portrait_of_Major_General_Bushrod_Rust_Johnson.jpg',
  },
  'charles-f-smith': {
    name: 'Charles F. Smith',
    side: 'United States',
    lifespan: '1807–1862',
    summary: 'Career United States Army officer and former West Point commandant whose division captured part of the outer works at Fort Donelson.',
    image: '/images/charles-f-smith.jpg',
    imageAlt: 'Portrait of Major General Charles F. Smith in United States Army uniform',
    imageSource: 'https://catalog.archives.gov/id/528469',
  },
  'gideon-j-pillow': {
    name: 'Gideon J. Pillow',
    side: 'Confederacy',
    lifespan: '1806–1878',
    summary: 'Tennessee lawyer, politician, Mexican–American War general, and Confederate brigadier general who directed the Fort Donelson breakout attack.',
    image: '/images/gideon-j-pillow.jpg',
    imageAlt: 'Portrait of Gideon J. Pillow in civilian clothing',
    imageSource: 'https://catalog.archives.gov/id/528290',
  },
  'jeffrey-e-forrest': {
    name: 'Jeffrey E. Forrest',
    side: 'Confederacy',
    lifespan: 'c. 1837–1864',
    summary: 'Younger brother of Nathan Bedford Forrest and a Confederate cavalry officer who was killed at Okolona in 1864.',
    image: '/images/jeffrey-e-forrest.jpg',
    imageAlt: 'Ninth-plate ambrotype portrait of Jeffrey E. Forrest in Confederate uniform',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Jeffrey_E._Forrest_(~1837%E2%80%931864)_Ninth-plate_ambrotype_by_an_anonymous_photographer._Matt_Hagans_Collection._Military_Images,_Vol._36,_No._2_(SPRING_2018),_pp._66-69_-.jpg',
  },
  'john-a-mcclernand': {
    name: 'John A. McClernand',
    side: 'United States',
    lifespan: '1812–1900',
    summary: 'Illinois politician and volunteer United States Army general who commanded a division at Fort Donelson and Shiloh and later led XIII Corps.',
    image: '/images/john-a-mcclernand.jpg',
    imageAlt: 'Portrait of Major General John A. McClernand in United States Army uniform',
    imageSource: 'https://www.loc.gov/item/2018666452/',
  },
  'john-b-floyd': {
    name: 'John B. Floyd',
    side: 'Confederacy',
    lifespan: '1806–1863',
    summary: 'Former Virginia governor and United States secretary of war who became a Confederate brigadier general and senior commander at Fort Donelson.',
    image: '/images/john-b-floyd.jpg',
    imageAlt: 'Portrait of John B. Floyd in civilian clothing',
    imageSource: 'https://www.loc.gov/item/2017895939/',
  },
  'lew-wallace': {
    name: 'Lew Wallace',
    side: 'United States',
    lifespan: '1827–1905',
    summary: 'Indiana lawyer, United States Army general, and author who commanded troops at Fort Donelson, Shiloh, and Monocacy.',
    image: '/images/lew-wallace.jpg',
    imageAlt: 'Portrait of Lew Wallace in United States Army uniform',
    imageSource: 'https://www.loc.gov/pictures/item/2017895498/',
  },
  'nathan-bedford-forrest': {
    name: 'Nathan Bedford Forrest',
    side: 'Confederacy',
    lifespan: '1821–1877',
    summary: 'Tennessee and Mississippi businessman, slave trader, plantation owner, and Confederate cavalry officer who rose from private to lieutenant general.',
    image: '/images/nathan-bedford-forrest.jpg',
    imageAlt: 'Wartime portrait of Nathan Bedford Forrest in Confederate uniform',
    imageSource: 'https://www.loc.gov/item/2010647758/',
  },
  'simon-b-buckner': {
    name: 'Simon B. Buckner',
    side: 'Confederacy',
    lifespan: '1823–1914',
    summary: 'Kentucky-born career officer who became a Confederate general, surrendered Fort Donelson, and later served as governor of Kentucky.',
    image: '/images/simon-b-buckner.jpg',
    imageAlt: 'Portrait of Brigadier General Simon B. Buckner in Confederate uniform',
    imageSource: 'https://www.loc.gov/item/2016649609/',
  },
  'ulysses-s-grant': {
    name: 'Ulysses S. Grant',
    side: 'United States',
    lifespan: '1822–1885',
    summary: 'United States Army officer who rose from western theater command to general-in-chief of all U.S. armies in 1864.',
    image: '/images/ulysses-s-grant.jpg',
    imageAlt: 'Portrait of Major General Ulysses S. Grant in United States Army uniform',
    imageSource: 'https://www.loc.gov/item/2018666428/',
  },
} as const satisfies Record<string, PersonAsset>;

export type PersonId = keyof typeof people;

export function getPerson(id: PersonId): PersonAsset {
  return people[id];
}
