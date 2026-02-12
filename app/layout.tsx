import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- 1. Navbar'ı buraya import et

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa Alp Ekici | Researcher",
  description: "Portfolio of Mustafa Alp Ekici",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar /> {/* <-- 2. Navbar'ı buraya ekle (children'ın üstüne) */}
        {children}
      </body>
    </html>
  );
}