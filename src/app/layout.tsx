import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

export const revalidate = 60; // revalidate at most every hour

const outfit = Outfit({ subsets: ["latin"], display: "swap", style: "normal", weight: "400" });

export const metadata: Metadata = {
  title: "Cindy Jorgji",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-black">
      <body className={outfit.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
