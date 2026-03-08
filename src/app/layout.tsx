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
    default: "Klearpath — Enterprise Data Engineering & Security Consultancy",
    template: "%s | Klearpath",
  },
  description:
    "Klearpath helps enterprise organizations build secure, scalable data platforms on the Microsoft stack. Data engineering, security & compliance, and AI-accelerated delivery.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Klearpath",
    title: "Klearpath — Enterprise Data Engineering & Security Consultancy",
    description:
      "Klearpath helps enterprise organizations build secure, scalable data platforms on the Microsoft stack.",
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
