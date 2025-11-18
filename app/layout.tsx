import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/lib/brand";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: brandConfig.name,
    template: `%s | ${brandConfig.name}`,
  },
  description: brandConfig.description,
  keywords: [
    "web development",
    "mobile apps",
    "ui/ux design",
    "digital marketing",
    "technology solutions",
    "company profile",
  ],
  authors: [{ name: brandConfig.name }],
  creator: brandConfig.name,
  publisher: brandConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wormibox.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://wormibox.com",
    title: brandConfig.name,
    description: brandConfig.description,
    siteName: brandConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: brandConfig.name,
    description: brandConfig.description,
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
    <html lang="id">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
