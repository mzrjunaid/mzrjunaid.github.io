"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        title="dark"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        {/* {theme === "light" ? "Dark" : "light"} */}
      </button>
    </>
  );
};

export default ThemeButton;
