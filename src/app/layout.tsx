import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/providers";
import { AppContextProvider } from "@/contexts/AppContext";
import { Toaster } from "@/components/ui/toasts/toaster";

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
          <Provider>
              <AppContextProvider>
                  {children}
                  <Toaster />
              </AppContextProvider>
          </Provider>
      </body>
    </html>
  );
}
