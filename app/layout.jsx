import "./globals.css";

export const metadata = {
  title: "The Finance Lab — The Plan, Then the Portfolio",
  description:
    "A 501(c)(3) nonprofit teaching students to invest and build wealth through experiential education. Two connected programs — The College Project and The Finance Lab Scholarship — give underserved students a personalized roadmap and a real investment portfolio.",
  keywords: [
    "financial literacy",
    "student investing",
    "nonprofit",
    "scholarship",
    "college planning",
    "The Finance Lab",
    "The College Project",
  ],
  openGraph: {
    title: "The Finance Lab — The Plan, Then the Portfolio",
    description:
      "Two connected programs. One complete student journey. We teach students to plan for college and invest real money.",
    type: "website",
    locale: "en_US",
    siteName: "The Finance Lab",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
