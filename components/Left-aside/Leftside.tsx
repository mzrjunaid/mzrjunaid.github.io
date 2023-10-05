"use client";
import { useMenuContext } from "@/contexts/menu-context";
import React from "react";
import { LeftMenuSocialLinks } from "../Elements/SocialLinks";
import Logo from "../Header/Logo";
import { RiCloseLine } from "react-icons/ri";
import LeftMenu from "./LeftMenu";

const Leftside = () => {
  const { menuOpen, setMenuOpen } = useMenuContext();
  return (
    <aside
      className={`${
        menuOpen ? "" : "hidden"
      } absolute md:sticky top-0 md:block w-full h-screen col-span-2 px-2 xl:px-3 py-2 z-[999] md:z-40 bg-slate-50 dark:bg-slate-900`}
    >
      <div className="flex flex-row justify-between md:justify-center py-1 sm:invisible border-b border-gray-300">
        <Logo />
        <RiCloseLine
          size={32}
          className="md:hidden transform transition-transform duration-700 ease-in-out hover:rotate-180 hover:scale-105"
          cursor="pointer"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        />
      </div>
      <div className="p-4 mt-8 shadow-lg rounded-2xl bg-slate-200 dark:bg-slate-800">
        <LeftMenu />
        <h3 className="text-lg font-semibold tracking-wide">Socials</h3>
        <LeftMenuSocialLinks />
      </div>
    </aside>
  );
};

export default Leftside;
