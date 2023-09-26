"use client";
import { useMenuContext } from "@/contexts/menu-context";
import React from "react";

const Leftside = () => {
  const { menuOpen } = useMenuContext();
  return <aside className={`${menuOpen ? "hidden" : ""} md:block`}>Left Aside</aside>;
};

export default Leftside;
