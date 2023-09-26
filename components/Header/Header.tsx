"use client";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";

import Navbar from "./Navbar";
import Logo from "./Logo";
import { useMenuContext } from "@/contexts/menu-context";

const Header = () => {
  const { setMenuOpen } = useMenuContext();
  return (
    <header className="w-full border-b px-3 py-3">
      <div className="mx-auto flex flex-row justify-between 2xl:container">
        <Logo />
        <div className="flex flex-row items-center gap-10">
          <button
            type="button"
            className="flex flex-row font-medium items-center gap-2 border py-2 px-3 rounded-md hover:bg-white hover:text-slate-900 hover:scale-105 transition-all ease-in-out duration-300"
          >
            Contact Me <FaUser size={18} />
          </button>
          <RiMenu3Fill
            className="md:hidden hover:scale-105 transition-all ease-in-out duration-300"
            cursor="pointer"
            id="menu"
            size={32}
            onClick={() => setMenuOpen((prevState) => !prevState)}
          />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
