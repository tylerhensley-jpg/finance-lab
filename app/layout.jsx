import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "The Finance Lab",
  url: "https://www.thefinancelab.co",
  logo: "https://www.thefinancelab.co/images/og-card.png",
  email: "team@thefinancelab.co",
  taxID: "82-5305120",
  nonprofitStatus: "Nonprofit501c3",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roseville",
    addressRegion: "CA",
    addressCountry: "US",
  },
  founder: { "@type": "Person", name: "Tyler Hensley" },
  description:
    "A 501(c)(3) nonprofit teaching students to invest and build wealth through experiential education: The College Project, The Launchpad, and The Finance Lab Scholarship.",
};

export const metadata = {
  metadataBase: new URL("https://www.thefinancelab.co"),
  title: "The Finance Lab: The Plan, Then the Portfolio",
  description:
    "A 501(c)(3) nonprofit teaching students to invest and build wealth through experiential education. The College Project, The Launchpad, and The Finance Lab Scholarship give students a personalized roadmap and a real investment portfolio.",
  keywords: [
    "financial literacy",
    "student investing",
    "nonprofit",
    "scholarship",
    "college planning",
    "The Finance Lab",
    "The College Project",
    "The Launchpad",
  ],
  openGraph: {
    title: "The Finance Lab: The Plan, Then the Portfolio",
    description:
      "Two connected programs. One complete student journey. We teach students to plan for college and invest real money.",
    type: "website",
    locale: "en_US",
    siteName: "The Finance Lab",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "The Finance Lab: preparing every student for financial independence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-card.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
