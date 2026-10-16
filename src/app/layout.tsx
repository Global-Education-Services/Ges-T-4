import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ges.om'),
  title: 'GES Quality Education | Leading Private Education Group in Oman',
  description: 'Global Education Services Company (GES Quality Education) is a premier private education group in Oman, delivering world-class K-12 British schools, preschools, and early learning centers since 2012.',
  keywords: [
    'GES',
    'Education Services',
    'Oman',
    'Quality Education',
    'Private Schools',
    'Early Childhood Education',
    'SIPS',
    'Shomoukh',
    'Muscat',
    'Cognia',
    'Reggio Emilia'
  ],
  authors: [{ name: 'Global Education Services Company (GES)' }],
  openGraph: {
    title: 'GES Quality Education | Leading Private Education Group in Oman',
    description: 'Premier private education group in the Sultanate of Oman, operating world-class K-12 schools, preschools, and early learning centers.',
    url: 'https://ges.om',
    siteName: 'GES Quality Education',
    images: [
      {
        url: '/assets/img/project-1.jpg',
        width: 1200,
        height: 630,
        alt: 'GES Quality Education Oman',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GES Quality Education | Leading Private Education Group in Oman',
    description: 'Premier private education group in the Sultanate of Oman, operating world-class K-12 schools, preschools, and early learning centers.',
    images: ['/assets/img/project-1.jpg'],
    site: '@GES_education',
  },
  icons: {
    icon: '/assets/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://ges.om/#organization",
        "name": "Global Education Services Company",
        "alternateName": "GES Quality Education",
        "legalName": "Global Education Services L.L.C.",
        "url": "https://ges.om",
        "logo": "https://ges.om/assets/img/banner/ges-logo.png",
        "description": "Leading private education group in the Sultanate of Oman, delivering world-class K-12 premium schools, preschools, and early learning centers since 2012.",
        "foundingDate": "2012",
        "founder": {
          "@type": "Person",
          "name": "Honorable Sheikh Salim Hamood Al Hashmi",
          "jobTitle": "Chairman"
        },
        "address": {
          "@type": "PostalAddress",
          "postOfficeBoxNumber": "1756",
          "postalCode": "111",
          "streetAddress": "Airport Heights",
          "addressLocality": "Muscat",
          "addressCountry": "OM"
        },
        "telephone": "+968 24554422",
        "email": "info@ges.om"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen text-slate-900 bg-ges-sand-50">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-ges-navy-950 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
