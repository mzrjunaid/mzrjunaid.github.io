"use client";
import { useMenuContext } from "@/contexts/menu-context";
import React from "react";
import { LeftMenuSocialLinks } from "../Elements/SocialLinks";
import Logo from "../Header/Logo";
import { RiCloseLine } from "react-icons/ri";

const Leftside = () => {
  const { menuOpen, setMenuOpen } = useMenuContext();
  return (
    <aside
      className={`${
        menuOpen ? "" : "hidden"
      } absolute md:block md:relative w-full h-screen col-span-2 px-2 xl:px-3 py-4 z-[999] md:z-40 dark:bg-slate-900 `}
    >
      <div className="flex flex-row justify-between md:justify-center">
        <Logo />
        <RiCloseLine
          size={32}
          className="md:hidden transform transition-transform duration-700 ease-in-out hover:rotate-180 hover:scale-105"
          cursor="pointer"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        />
      </div>
      <div className="p-4 mt-8 shadow-lg rounded-2xl dark:bg-slate-800">
        <h3 className="text-lg">Socials</h3>
        <LeftMenuSocialLinks />
      </div>
    </aside>
  );
};

export default Leftside;
