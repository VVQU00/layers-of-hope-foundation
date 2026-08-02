import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.layersofhopefoundation.org"),

  title: {
    default: "Layers of Hope Foundation",
    template: "%s | Layers of Hope Foundation",
  },

  description:
    "Layers of Hope Foundation supports individuals and families affected by Mycosis Fungoides and Cutaneous T-Cell Lymphoma through education, awareness, advocacy, research, and community.",

  keywords: [
    "Mycosis Fungoides",
    "Cutaneous T-Cell Lymphoma",
    "CTCL",
    "MF",
    "Skin Cancer",
    "Cancer Foundation",
    "Patient Resources",
    "Rare Disease",
    "Cancer Support",
    "Layers of Hope Foundation",
  ],

  authors: [
    {
      name: "Layers of Hope Foundation",
    },
  ],

  creator: "Layers of Hope Foundation",
  publisher: "Layers of Hope Foundation",

  alternates: {
    canonical: "https://www.layersofhopefoundation.org",
  },

  openGraph: {
    title: "Layers of Hope Foundation",
    description:
      "Supporting individuals and families affected by Mycosis Fungoides and Cutaneous T-Cell Lymphoma through education, awareness, advocacy, research, and community.",
    url: "https://www.layersofhopefoundation.org",
    siteName: "Layers of Hope Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png?v=3",
        width: 1200,
        height: 630,
        alt: "Layers of Hope Foundation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Layers of Hope Foundation",
    description:
      "Education, awareness, advocacy, research, and hope for individuals affected by Mycosis Fungoides and CTCL.",
    images: ["/og-image.png?v=3"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}