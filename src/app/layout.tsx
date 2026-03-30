import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Klearpath Solutions - Data, AI & Digital Transformation Consulting",
    template: "%s | Klearpath Solutions",
  },
  description:
    "Klearpath Solutions helps organizations harness data, AI, and the Microsoft platform to maximize efficiency, quality, and value.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Klearpath Solutions",
    title: "Klearpath Solutions - Data, AI & Digital Transformation Consulting",
    description:
      "Klearpath Solutions helps organizations harness data, AI, and the Microsoft platform to maximize efficiency, quality, and value.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${sourceSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
