import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/custom/Appbar";
import { Footer } from "@/components/custom/Footer";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YFQR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  session: any;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Appbar/>
    <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
