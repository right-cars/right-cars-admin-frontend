import type { Metadata } from "next";
import { Metrophobic, Work_Sans } from "next/font/google";
// import {AuthProvider} from "@/providers/AuthContext";
import Header from "../components/modules/Header/Header";

import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const metrophobic = Metrophobic({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cars",
  description: "Cars admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${workSans.className} ${metrophobic.className}`}
    >
      <body className="bg-background text-textColor">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
