import type { PersonId } from './people';

type Biography = {
  sections: { title: string; text: string }[];
  sources: { label: string; url: string }[];
};

export const personBiographies: Record<PersonId, Biography> = {
  'ulysses-s-grant': {
    sections: [
      { title: 'Early life', text: 'Born in Point Pleasant, Ohio, Grant graduated from West Point in 1843. He served in the Mexican–American War and married Julia Dent in 1848. After leaving the army in 1854, he tried farming and later worked in his family’s business in Galena, Illinois.' },
      { title: 'Military leadership', text: 'Grant returned to military service in 1861. His western victories brought him to national attention, and in March 1864 he became commanding general of all United States armies. He accepted Robert E. Lee’s surrender at Appomattox in April 1865.' },
      { title: 'Presidency and final years', text: 'As the eighteenth president, Grant supported Reconstruction and Black voting rights. After leaving office he traveled abroad, then lost his savings in a financial fraud. He completed his memoirs shortly before his death in 1885; their publication helped support his family.' },
    ],
    sources: [{ label: 'National Park Service: Ulysses S. Grant', url: 'https://www.nps.gov/people/ulysses-s-grant.htm' }],
  },
  'lew-wallace': {
    sections: [
      { title: 'Soldier and public servant', text: 'Born in Brookville, Indiana, Lewis “Lew” Wallace became a lawyer, army officer, and public official. He entered the Civil War as colonel of the 11th Indiana Infantry and rose to major general in 1862.' },
      { title: 'Wartime career', text: 'Wallace served at Fort Donelson and Shiloh. In July 1864 his outnumbered force fought Jubal Early’s army at Monocacy, delaying the Confederate advance toward Washington. In 1865 he served on the Lincoln assassination tribunal and presided over the trial of Andersonville commandant Henry Wirz.' },
      { title: 'Writer and diplomat', text: 'Wallace later governed New Mexico Territory from 1878 to 1881 and served as United States minister to the Ottoman Empire from 1881 to 1885. His novel Ben-Hur became an enduring publishing success and was adapted for stage and screen.' },
    ],
    sources: [{ label: 'National Park Service: Lew Wallace', url: 'https://www.nps.gov/people/lew-wallace.htm' }],
  },
  'nathan-bedford-forrest': {
    sections: [
      { title: 'Before the war', text: 'Forrest built his prewar wealth through business, plantations, and the buying and selling of enslaved people in Tennessee and Mississippi. He entered Confederate service in 1861 without the professional military education shared by many senior officers.' },
      { title: 'Cavalry command', text: 'Forrest became known for rapid movements and aggressive cavalry operations, eventually reaching lieutenant general. His campaigns included Brice’s Cross Roads and the retreat from Nashville. In April 1864, troops under his command massacred United States soldiers, many of them Black, at Fort Pillow.' },
      { title: 'After the war', text: 'Forrest pursued business ventures after Confederate defeat and became the first Grand Wizard of the Ku Klux Klan, which used white-supremacist intimidation and violence during Reconstruction. He died in Memphis in 1877.' },
    ],
    sources: [
      { label: 'Tennessee Historical Society: Nathan Bedford Forrest', url: 'https://tennesseeencyclopedia.net/entries/nathan-bedford-forrest/' },
      { label: 'National Park Service: The Hard Reality of Fort Pillow', url: 'https://www.nps.gov/articles/000/hard-reality-of-fort-pillow.htm' },
    ],
  },
  'bushrod-r-johnson': {
    sections: [
      { title: 'Education and early service', text: 'Johnson was born in Ohio to a Quaker family and graduated from West Point in 1840. He served in the Seminole and Mexican–American wars, resigning from the army in 1847 after involvement in a scheme to sell government goods.' },
      { title: 'Teaching and the Civil War', text: 'He taught at the Western Military Institute and the University of Nashville before joining Confederate service. His wartime career included Fort Donelson, Shiloh, Chickamauga, and Petersburg. He became a major general in 1864 and was paroled at Appomattox in 1865.' },
      { title: 'Later life', text: 'Johnson returned to education after the war, serving as a professor and co-chancellor at the University of Nashville. He retired to Illinois in 1875 and died there in 1880.' },
    ],
    sources: [{ label: 'National Park Service: Bushrod Johnson', url: 'https://home.nps.gov/people/bushrod-johnson.htm' }],
  },
  'gideon-j-pillow': {
    sections: [
      { title: 'Law and politics', text: 'Pillow grew up in Tennessee and graduated from the University of Nashville in 1827. He became a successful lawyer, a wealthy planter, and a close political ally of James K. Polk. He also held a senior position in the Tennessee militia.' },
      { title: 'Military career', text: 'Pillow served as a general in the Mexican–American War and later helped organize Tennessee’s Confederate forces. His Confederate career combined field commands with recruiting duties, and his conduct repeatedly brought him into conflict with other officers.' },
      { title: 'After the war', text: 'Much of Pillow’s wealth was lost during the war. He resumed practicing law in Memphis with Isham G. Harris and died during the city’s yellow-fever epidemic in 1878.' },
    ],
    sources: [{ label: 'Tennessee Historical Society: Gideon Johnson Pillow', url: 'https://tennesseeencyclopedia.net/entries/gideon-johnson-pillow/' }],
  },
  'john-b-floyd': {
    sections: [
      { title: 'Lawyer and governor', text: 'Floyd was born in Virginia in 1806. He practiced law in Virginia and Arkansas and also pursued cotton planting using enslaved labor. He served in Virginia’s legislature and was governor from 1849 to 1852.' },
      { title: 'Secretary of war', text: 'President James Buchanan appointed Floyd secretary of war in 1857. His administration ended in December 1860 amid disputes over federal forts and financial irregularities involving government contractors.' },
      { title: 'Confederate service', text: 'Floyd became a Confederate brigadier general and served in western Virginia and Tennessee. Jefferson Davis removed him from command after Fort Donelson. He later held a Virginia state military commission and died in Abingdon in 1863.' },
    ],
    sources: [{ label: 'U.S. Army Center of Military History: Secretaries of War and Secretaries of the Army', url: 'https://history.army.mil/Portals/143/Images/Publications/Publication%20By%20Title%20Images/S%20PDF/CMH_Pub_70-12.pdf' }],
  },
  'john-a-mcclernand': {
    sections: [
      { title: 'Law and elected office', text: 'Born in Kentucky and raised in Illinois, McClernand became a lawyer, newspaper founder, and Democratic politician. He served in the Illinois legislature and represented the state in Congress during the 1840s and again from 1859.' },
      { title: 'Military service', text: 'McClernand resigned from Congress in October 1861 to accept a commission as a brigadier general of volunteers. He recruited soldiers for the United States Army and was promoted to major general in 1862.' },
      { title: 'Later public career', text: 'After the war he served as an Illinois circuit judge from 1870 to 1873, resumed legal practice, and presided over the Democratic National Convention in 1876. He died in Springfield in 1900 and was buried in Oak Ridge Cemetery.' },
    ],
    sources: [{ label: 'U.S. House of Representatives: John Alexander McClernand', url: 'https://history.house.gov/People/Listing/M/MCCLERNAND,-John-Alexander-(M000337)/' }],
  },
  'simon-b-buckner': {
    sections: [
      { title: 'Professional soldier', text: 'Buckner was born in Hart County, Kentucky, and graduated from West Point in 1844. He taught at the academy and served in the Mexican–American War before taking on militia responsibilities in Kentucky.' },
      { title: 'Confederate service', text: 'He entered Confederate service and surrendered Fort Donelson in 1862. After his release in a prisoner exchange, he continued serving in the Confederate army, including commands in Kentucky and Tennessee.' },
      { title: 'Governor of Kentucky', text: 'Buckner served as Kentucky’s governor from 1887 to 1891. His administration addressed state finances, schools, and prisons. In 1896 he was the vice-presidential candidate of the Gold Democrats. He died in 1914.' },
    ],
    sources: [{ label: 'National Governors Association: Simon Bolivar Buckner', url: 'https://www.nga.org/governor/simon-bolivar-buckner/' }],
  },
  'charles-f-smith': {
    sections: [
      { title: 'Career officer and teacher', text: 'Charles Ferguson Smith was a professional United States Army officer and West Point graduate. As an instructor and commandant of cadets, he helped train officers who later held important commands during the Civil War.' },
      { title: 'Military service', text: 'Smith served in the Mexican–American War and the Utah expedition before becoming a senior United States commander in the Civil War. His assault on the Confederate defenses at Fort Donelson contributed to the Union victory.' },
      { title: 'Final months', text: 'A leg injury suffered during the advance up the Tennessee River kept Smith out of the fighting at Shiloh. He died at Savannah, Tennessee, on April 25, 1862, and was buried in Laurel Hill Cemetery in Philadelphia.' },
    ],
    sources: [
      { label: 'Charles Ferguson Smith: biography and bibliography', url: 'https://en.wikipedia.org/wiki/Charles_Ferguson_Smith' },
      { label: 'Library of Congress: Charles F. Smith portrait record', url: 'https://www.loc.gov/pictures/item/2018668625/' },
    ],
  },
  'jeffrey-e-forrest': {
    sections: [
      { title: 'Family and service', text: 'Jeffrey Edward Forrest was Nathan Bedford Forrest’s youngest brother and a Confederate cavalry officer. By 1864 he held the rank of colonel and led troops in the cavalry fighting in northern Mississippi.' },
      { title: 'Death at Okolona', text: 'He was killed during the Battle of Okolona in February 1864, while attacking a United States defensive position near Prairie Mount. His death occurred during the running battle between Nathan Bedford Forrest’s cavalry and the force commanded by William Sooy Smith.' },
    ],
    sources: [{ label: 'National Park Service: Summary of the Battle of Okolona', url: 'https://www.nps.gov/common/uploads/teachers/lessonplans/Summary-of-the-Battle-of-Okolona.pdf' }],
  },
};
