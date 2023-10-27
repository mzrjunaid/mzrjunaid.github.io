import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-anton text-3xl font-extralight uppercase tracking-wider hover:scale-110 transition-all ease-in-out duration-300"
    >
      J{"</>"}Code
    </Link>
  );
};

export default Logo;
