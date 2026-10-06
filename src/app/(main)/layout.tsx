import type { Metadata, Viewport } from "next";
import "../globals.css";
import {Nunito} from "next/font/google"
import Navbar from "@/components/navbar";
import {Toaster} from "react-hot-toast";

const font = Nunito({weight: "500", subsets:["latin"]});

const SITE_URL = "https://suryansh.me";
const SITE_NAME = "Suryansh Sharma";
const SITE_DESCRIPTION =
  "Suryansh Sharma is a full stack developer and tech enthusiast crafting modern web applications. Explore projects, skills, and blog.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Full Stack Developer`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Suryansh Sharma",
    "full stack developer",
    "web developer",
    "software engineer",
    "portfolio",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} — Full Stack Developer`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Full Stack Developer`,
    description: SITE_DESCRIPTION,
    creator: "@suryansh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
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
        <Toaster />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}