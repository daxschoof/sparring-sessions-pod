import type { Metadata } from "next";
import Image from "next/image";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparring Sessions Podcast",
  description: "Sparring Sessions Podcast - MMA Predictions, Betting, and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen overflow-clip`}
      >
        <div className="flex-1 bg-gradient-to-br from-[#eadabe] to-[#1d314e] from-30% content-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 h-screen w-screen">
          <div className="fixed inline-block top-4 right-4 rounded-3xl overflow-hidden max-sm:w-[100] max-sm:h-[100]">
            <Image
              src="/Sparring_Sessions_Logo.jpg"
              alt="Sparring Sessions Logo"
              width={150}
              height={150}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
