import { config } from "@/config";
import { cookieToInitialState } from "@account-kit/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";
import { FamilyProvider } from "@/context/FamilyContext";
import { sfPro } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family",
  description:
    "A simple way to manage black Tax powered by AI & Alchemy Account Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Persist state across pages
  // https://accountkit.alchemy.com/react/ssr#persisting-the-account-state
  const initialState = cookieToInitialState(
    config,
    headers().get("cookie") ?? undefined
  );

  return (
    <html lang="en" className="dots">
      <body className={sfPro.className}>
        <FamilyProvider>
          <Providers initialState={initialState}>{children}</Providers>
        </FamilyProvider>
      </body>
    </html>
  );
}
