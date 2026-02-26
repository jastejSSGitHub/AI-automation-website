import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingShowreel from "@/components/FloatingShowreel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loopsuitai.com"),
  title: {
    default: "LoopSuit | App Design, Website Design & AI Automation Agency — USA, Canada & India",
    template: "%s | LoopSuit",
  },
  description:
    "LoopSuit is a premium app design, website design, dashboard design & AI automation agency. We build MVPs in 2 weeks and automate businesses with AI agents. Serving USA, Canada & India.",
  keywords: [
    "app design",
    "website design",
    "dashboard design",
    "UI UX design",
    "product design",
    "mobile app design",
    "web app design",
    "SaaS design",
    "MVP development",
    "rapid MVP",
    "AI automation",
    "AI automation services",
    "AI integration",
    "AI in business",
    "AI agents",
    "workflow automation",
    "business automation",
    "design agency USA",
    "design agency Canada",
    "design agency India",
    "AI automation agency",
    "LoopSuit",
  ],
  authors: [{ name: "LoopSuit", url: "https://loopsuitai.com" }],
  creator: "LoopSuit",
  publisher: "LoopSuit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://loopsuitai.com/",
    languages: {
      "en-US": "https://loopsuitai.com/",
      "en-CA": "https://loopsuitai.com/",
      "en-IN": "https://loopsuitai.com/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://loopsuitai.com/",
    siteName: "LoopSuit",
    title: "LoopSuit | App Design, Website Design & AI Automation Agency",
    description:
      "Premium app design, website design, dashboard design & AI automation agency. Launch your MVP in 2 weeks. Serving USA, Canada & India.",
    images: [
      {
        url: "https://loopsuitai.com/api/og",
        width: 1200,
        height: 630,
        alt: "LoopSuit — App Design, Website Design & AI Automation Agency",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@loopsuitai",
    title: "LoopSuit | App Design, Website Design & AI Automation Agency",
    description:
      "Premium app design, website design, dashboard design & AI automation agency. Launch your MVP in 2 weeks. USA, Canada & India.",
    images: ["https://loopsuitai.com/api/og"],
  },
  verification: {
    google: "",   // Add your Google Search Console verification token here
    // bing: "",  // Add Bing Webmaster Tools token here
  },
  other: {
    "geo.region": "US, CA, IN",
    "geo.placename": "United States, Canada, India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />
      </head>
      <body className={`${inter.variable} antialiased bg-white overflow-x-hidden`}>
        {children}
        <FloatingShowreel />
        <Footer />
      </body>
    </html>
  );
}
