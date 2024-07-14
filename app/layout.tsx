import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@tldraw/tldraw/tldraw.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta Site AI",
  description: "Make your drawings go live!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}
        </body>
    </html>
  );
}
