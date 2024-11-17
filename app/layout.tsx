import { config } from "./config";
import { cookieToInitialState } from "@account-kit/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Embedded Accounts UI Components Quickstart NextJs Template",
  description: "Embedded Accounts UI Components Quickstart NextJs Template",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = undefined;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}