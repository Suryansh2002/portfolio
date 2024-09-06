import type { Metadata } from "next";
import "./globals.css";
import {Nunito} from "next/font/google"
import Navbar from "@/components/navbar";

const font = Nunito({weight: "500", subsets:["latin"]});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="overflow-x-hidden max-h-fit w-screen bg-gradient-to-tr from-black via-black to-blue-950 pt-4">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
