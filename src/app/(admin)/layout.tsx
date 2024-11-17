import "../globals.css";
import type { Metadata } from "next";
import {Nunito} from "next/font/google"
import { auth } from "@/auth";
import Unauthorized from "@/components/unauthorized";

const font = Nunito({weight: "500", subsets:["latin"]});

export const metadata: Metadata = {
  title: "Portfolio-Admin",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <html lang="en" className={font.className}>
      <body>{session?.user?.email != process.env.ADMIN_EMAIL ? <Unauthorized/> : children
      }</body>
    </html>
  )
}
