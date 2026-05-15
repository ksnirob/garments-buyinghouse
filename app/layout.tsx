import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import LoadingScreen from "@/components/ui/LoadingScreen";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.martxbd.com"),
  title: {
    default: "MartX BD | Premium Garments Buying House Bangladesh",
    template: "%s | MartX BD",
  },
  description:
    "MartX BD is a world-class garments buying house and apparel sourcing company based in Bangladesh. We connect global fashion brands with premium garment manufacturers for ethical, quality-driven apparel production.",
  keywords: [
    "Garments Buying House Bangladesh",
    "Apparel Sourcing Bangladesh",
    "Bangladesh Garment Exporter",
    "Clothing Manufacturer Bangladesh",
    "Apparel Buying House",
    "Knitwear Manufacturer Bangladesh",
    "Ethical Apparel Sourcing",
    "Garment Supplier Bangladesh",
    "MartX BD",
    "RMG Bangladesh",
  ],
  authors: [{ name: "MartX BD" }],
  creator: "MartX BD",
  publisher: "MartX BD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.martxbd.com",
    siteName: "MartX BD",
    title: "MartX BD | Premium Garments Buying House Bangladesh",
    description:
      "World-class garments buying house and apparel sourcing partner from Bangladesh. Ethical manufacturing, premium quality, on-time delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MartX BD - Premium Garments Buying House Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MartX BD | Premium Garments Buying House Bangladesh",
    description:
      "World-class garments buying house and apparel sourcing partner from Bangladesh.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MartX BD",
    url: "https://www.martxbd.com",
    logo: "https://www.martxbd.com/og-image.jpg",
    description: "Premium garments buying house and apparel sourcing company based in Bangladesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Uttara",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801800000000",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/martxbd",
      "https://www.facebook.com/martxbd",
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0b0b0b] text-white antialiased overflow-x-hidden">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppFloat />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}

