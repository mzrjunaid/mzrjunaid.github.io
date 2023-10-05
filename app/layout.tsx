import { Footer, Header, Leftside, FloatingSocialLinks } from "@/components";

import { montserrat, anton } from "./fonts";
import "./globals.css";

import MenuContextProvider from "@/contexts/menu-context";

import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme-context";
export const metadata: Metadata = {
  title: "Junaid Mazhar - Portfolio",
  description:
    "Hi, I am Junaid Mazhar, I develop Websites Front-End with (React, Nextjs, Bootstrap, Tailwind) and Mobile Applications with React Native",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${montserrat.variable} bg-slate-50 dark:bg-slate-900 dark`}
      suppressHydrationWarning={false}
    >
      <MenuContextProvider>
        <body className="relative font-montserrat grid grid-cols-12  dark:bg-slate-900  dark:text-white">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <Leftside />
            <main className="w-full py-[64px] md:px-4 md:py-[5.4rem] col-span-12 md:col-span-10">
              {children}
            </main>
            <Footer />
            <FloatingSocialLinks
              size={28}
              socialLinkStyle="flex flex-col gap-2 fixed bottom-32 right-3 bg-black bg-opacity-30 p-2 z-50 rounded-lg md:hidden"
            />
          </ThemeProvider>
        </body>
      </MenuContextProvider>
    </html>
  );
}
