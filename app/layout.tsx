import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://base93.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Base93 | Global Company Formation Infrastructure",
  description:
    "Base93 helps businesses, advisors, CSPs, and partners manage company formation workflows across 51 countries and 14 UAE free zones through verified networks and digital infrastructure.",
  keywords: [
    "global company formation",
    "company formation infrastructure",
    "business setup platform",
    "incorporation platform",
    "UAE free zone company setup",
    "international business setup",
    "CSP network",
    "formation workflow management",
    "white-label company formation",
    "business setup infrastructure",
  ],
  openGraph: {
    title: "Base93 | Global Company Formation Infrastructure",
    description:
      "Enterprise infrastructure for managing incorporation workflows across global markets and UAE free zones.",
    url: siteUrl,
    siteName: "Base93",
    images: [
      {
        url: "/brand/base93-logo-dark.png",
        width: 800,
        height: 141,
        alt: "Base93",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base93 | Global Company Formation Infrastructure",
    description:
      "Company formation workflow infrastructure for businesses, advisors, CSPs, and partners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Base93 Limited",
    url: siteUrl,
    logo: `${siteUrl}/brand/base93-logo-dark.png`,
    email: "connect@base93.com",
    description:
      "Enterprise infrastructure for global company formation workflows.",
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
