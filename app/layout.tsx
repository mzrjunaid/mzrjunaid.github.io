import { Footer, Header, Leftside, SocialLinks } from "@/components";
import { montserrat, anton } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";
import MenuContextProvider from "@/contexts/menu-context";

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
      className={`${anton.variable} ${montserrat.variable} relative dark`}
    >
      <MenuContextProvider>
        <body className="dark:bg-slate-900 dark:text-white">
          <Header />
          <Leftside />
          <main className="font-montserrat">
            {children}
            <SocialLinks
              size={28}
              socialLinkStyle="flex flex-col gap-2 fixed bottom-16 right-3 bg-black bg-opacity-30 p-2 rounded-lg"
            />
          </main>
          <Footer />
        </body>
      </MenuContextProvider>
    </html>
  );
}
