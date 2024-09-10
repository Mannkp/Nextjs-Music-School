import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import localFont from "next/font/local";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>
      <main
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
      >
        {children}
      </main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
