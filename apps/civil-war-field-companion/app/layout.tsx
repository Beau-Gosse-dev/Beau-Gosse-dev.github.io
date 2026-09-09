import type { Metadata } from 'next';
import { Cormorant_Garamond, Libre_Franklin } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['500', '600', '700'] });
const sans = Libre_Franklin({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const metadata: Metadata = { metadataBase: new URL(`${SITE_URL}/`), title: 'Civil War Field Companion', description: 'Maps, people, command structures, timelines, and primary sources for The Civil War & Reconstruction podcast.', openGraph: { title: 'Civil War Field Companion', description: 'A visual listening companion for The Civil War & Reconstruction podcast.', images: [`${SITE_URL}/og.png`] }, twitter: { card: 'summary_large_image', title: 'Civil War Field Companion', description: 'A visual listening companion for The Civil War & Reconstruction podcast.', images: [`${SITE_URL}/og.png`] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>; }
