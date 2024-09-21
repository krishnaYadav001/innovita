import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthOverlay from "./components/AuthOverlay";



export const metadata: Metadata = {
  title: "innovita",
  description: "innovita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthOverlay />
        {children}
      </body>
    </html>
  );
}
