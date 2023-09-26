"use client";

import React, { createContext, useContext, useState } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

type MenuContext = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContext | null>(null);

export default function MenuContextProvider({
  children,
}: ContextProviderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
}
