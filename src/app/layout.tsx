import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/providers";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRVL",
  description: "TRVL web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
