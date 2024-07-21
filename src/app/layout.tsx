import type { Metadata } from "next";

import "./globals.css";

import { fontInter, fontSatoshi } from "@/assets/fonts";

import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Ui Hub",
  description: "A little space for mickasmt's experiments!",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "grid min-h-dvh grid-rows-[1fr_auto] font-satoshi",
          fontInter.variable,
          fontSatoshi.variable,
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <main className="mx-auto flex w-full max-w-2xl flex-col px-4 md:px-0">
            <div className="mb-20 flex w-full flex-col gap-16 sm:gap-20">
              <Header />
              {modal}
              {children}
            </div>
          </main>
          <Footer />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
