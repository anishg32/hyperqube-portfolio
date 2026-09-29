import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "HyperQube — Software, Data & Intelligent Systems",
  description: "HyperQube builds custom software, digital products, intelligent systems and data-driven solutions for startups, businesses and growing teams.",
  metadataBase: new URL("https://hyperqube.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HyperQube — Software, Data & Intelligent Systems",
    description: "HyperQube builds custom software, digital products, intelligent systems and data-driven solutions for startups, businesses and growing teams.",
    url: "https://hyperqube.com",
    siteName: "HyperQube",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HyperQube — Software, Data & Intelligent Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperQube — Software, Data & Intelligent Systems",
    description: "HyperQube builds custom software, digital products, intelligent systems and data-driven solutions for startups, businesses and growing teams.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-primary text-[var(--color-brand-text)] bg-[var(--color-brand-bg)]">{children}</body>
    </html>
  );
}
