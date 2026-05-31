import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { WhatsAppFloat } from "@/src/widgets/whatsapp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://globalrawmaterials.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Global Raw Materials | Premium Botanical Export Enterprise",
    template: "%s | Global Raw Materials",
  },
  description:
    "Premium certified medicinal herbs, aromatic leaves, seeds, and botanical raw materials for global enterprise partners. ISO, GMP, and USDA Organic certified exports worldwide.",
  keywords: [
    "botanical export",
    "medicinal herbs",
    "raw materials supplier",
    "herbal export",
    "certified organic herbs",
    "pharmaceutical botanicals",
    "Egypt herbs export",
    "bulk herbal supply",
    "GMP certified herbs",
    "natural raw materials",
  ],
  authors: [{ name: "Global Raw Materials Enterprise" }],
  creator: "Global Raw Materials Enterprise",
  publisher: "Global Raw Materials Enterprise",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AE",
    siteName: "Global Raw Materials",
    title: "Global Raw Materials | Premium Botanical Export Enterprise",
    description:
      "Premium certified medicinal herbs, aromatic leaves, seeds, and botanical raw materials for global enterprise partners. ISO, GMP, and USDA Organic certified.",
    url: siteUrl,
    images: [{ url: "/logo-light.png", width: 512, height: 512, alt: "Global Raw Materials" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Raw Materials | Premium Botanical Export",
    description: "Premium certified botanical raw materials for global enterprise partners.",
    images: ["/logo-light.png"],
  },
  icons: {
    apple: "/logo-light.png",
  },
  alternates: {
    canonical: siteUrl,
    languages: { en: siteUrl, ar: `${siteUrl}/ar` },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Raw Materials Enterprise",
    url: siteUrl,
    logo: `${siteUrl}/logo-light.png`,
    description: "Premium certified medicinal herbs, aromatic leaves, seeds, and botanical raw materials for global enterprise partners.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+20-123-456-7890",
      contactType: "sales",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://linkedin.com/company/globalrawmaterials",
      "https://facebook.com/globalrawmaterials",
    ],
  };

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Providers>
          {children}
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
