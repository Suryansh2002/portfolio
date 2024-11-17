import type { Metadata } from "next";
import "../globals.css";
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
      <body className="overflow-x-hidden max-h-fit w-screen pt-4">
        <div id="background" className="bg-gradient-to-tr from-black via-black to-blue-950 h-screen w-screen fixed top-0 left-0 -z-10"/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}