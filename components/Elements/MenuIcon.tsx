import React from "react";
import {
  RiHome7Line,
  RiProjectorLine,
  RiBriefcase4Line,
  RiUser3Line,
} from "react-icons/ri";

type IconProps = {
  icon: string;
  size: number;
  iconStyle?: string;
};

const MenuIcon = ({ icon, size, iconStyle }: IconProps) => {
  switch (icon) {
    case "home":
      return <RiHome7Line size={size} className={iconStyle} />;
    case "projects":
      return <RiProjectorLine size={size} className={iconStyle} />;
    case "experience":
      return <RiBriefcase4Line size={size} className={iconStyle} />;
    case "about":
      return <RiUser3Line size={size} className={iconStyle} />;
    default:
      return <></>;
  }
};

export default MenuIcon;
