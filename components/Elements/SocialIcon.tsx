import React from "react";
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

type IconProps = {
  icon: string;
  size: number;
  iconStyle?: string;
};

const SocialIcon = ({ icon, size, iconStyle }: IconProps) => {
  switch (icon) {
    case "facebook":
      return <FaSquareFacebook size={size} className={iconStyle} />;
    case "instagram":
      return <FaSquareInstagram size={size} className={iconStyle} />;
    case "github":
      return <FaSquareGithub size={size} className={iconStyle} />;
    case "linkedin":
      return <FaLinkedin size={size} className={iconStyle} />;
    default:
      return <></>;
  }
};

export default SocialIcon;
