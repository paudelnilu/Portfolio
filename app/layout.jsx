import { DM_Mono, DM_Sans, Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import ProgressBar from '@/components/ProgressBar';
import Script from 'next/script';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap'
});

export const metadata = {
  title: 'Nilu Paudel | IT Professional & Coding Instructor',
  description:
    'Nilu Paudel is an IT professional, coding instructor, and content creator based in Kathmandu, Nepal.',
  keywords: [
    'Nilu Paudel',
    'coding instructor',
    'IT professional',
    'Nepal',
    'Kathmandu',
    'web developer',
    'Python',
    'portfolio'
  ],
  authors: [{ name: 'Nilu Paudel' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://nilupaudel.com.np'
  },
  openGraph: {
    type: 'website',
    title: 'Nilu Paudel | IT Professional & Coding Instructor',
    description:
      'IT professional, coding instructor, and content creator based in Kathmandu, Nepal.',
    url: 'https://nilupaudel.com.np',
    images: ['/nilu.jpg']
  }
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nilu Paudel',
    jobTitle: 'Coding Instructor & IT Professional',
    email: 'paudelnilu2@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Mero Coding Class'
    }
  };

  return (
    <html lang="en" className={cn(dmSans.variable, dmMono.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J2690XXHSJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2690XXHSJ');
        `}
      </Script>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
