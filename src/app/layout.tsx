import type { Metadata } from "next";
import "./globals.css";
import { fontInter, fontSatoshi } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-satoshi min-h-[100dvh] grid grid-rows-[1fr_auto]",
          fontInter.variable,
          fontSatoshi.variable
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <main className="flex w-full max-w-2xl mx-auto flex-col px-4 md:px-0">
            <div className="flex flex-col gap-16 sm:gap-16 w-full mb-20">
              <Header />

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
