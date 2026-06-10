import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIHA DESIGNER STUDIO | Premium Fashion Designer",
  description:
    "Premium designer fashion for custom styling, rentals, and memorable occasions. Expert in wedding wear, rental collections, maternity gowns, and pre-wedding styling.",
  keywords: [
    "fashion designer",
    "custom clothing",
    "rental wear",
    "pre-wedding styling",
    "maternity gowns",
    "designer blouses",
    "niha designer studio",
    "luxury fashion",
  ],
  authors: [{ name: "NIHA DESIGNER STUDIO" }],
  creator: "NIHA DESIGNER STUDIO",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nihadesignerstudio.com",
    siteName: "NIHA DESIGNER STUDIO",
    title: "NIHA DESIGNER STUDIO | Premium Fashion Designer",
    description:
      "Premium designer fashion for custom styling, rentals, and memorable occasions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NIHA DESIGNER STUDIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIHA DESIGNER STUDIO | Premium Fashion Designer",
    description:
      "Premium designer fashion for custom styling, rentals, and memorable occasions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "NIHA DESIGNER STUDIO",
              description:
                "Premium fashion designer studio specializing in custom clothing, rental wear, pre-wedding styling, and maternity gowns.",
              url: "https://nihadesignerstudio.com",
              sameAs: [
                "https://www.instagram.com/niha_designer_studioo",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              priceRange: "₹₹₹",
              openingHours: "Mo-Sa 10:00-19:00",
            }),
          }}
        />
      </head>
      <body className="noise-overlay antialiased">{children}</body>
    </html>
  );
}
