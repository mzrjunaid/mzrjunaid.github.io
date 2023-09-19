import Link from "next/link";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";

interface SocialProps {
  socialLinkStyle?: string;
  size: number;
}

const SocialLinks = ({ size, socialLinkStyle }: SocialProps) => {
  return (
    <div className={`parent ${socialLinkStyle}`}>
      <Link
        href={"https://www.linkedin.com/in/junaidmazhar/"}
        target="__blank"
        className="group/item relative"
      >
        <FaLinkedin size={size} />
        <span className="invisible group-hover/item:visible absolute top-0 right-9 bg-black bg-opacity-80 py-1 px-3 rounded-lg">
          @junaidmazhar
        </span>
      </Link>
      <Link
        href={"https://github.com/mzrjunaid"}
        target="__blank"
        className="group/item relative"
      >
        <FaSquareGithub size={size} />
        <span className="invisible group-hover/item:visible absolute top-0 right-9 bg-black bg-opacity-80 py-1 px-3 rounded-lg">
          @mzrjunaid
        </span>
      </Link>
      <Link
        href={"https://www.facebook.com/m.junaidmazhar"}
        target="__blank"
        className="group/item relative"
      >
        <FaSquareFacebook size={size} />
        <span className="invisible group-hover/item:visible absolute top-0 right-9 bg-black bg-opacity-80 py-1 px-3 rounded-lg">
          @m.junaidmazhar
        </span>
      </Link>
      <Link
        href={"https://www.instagram.com/junaid.muhamd/"}
        target="__blank"
        className="group/item relative"
      >
        <FaSquareInstagram size={size} />
        <span className="invisible group-hover/item:visible absolute top-0 right-9 bg-black bg-opacity-80 py-1 px-3 rounded-lg">
          @junaid.muhamd
        </span>
      </Link>
    </div>
  );
};

export default SocialLinks;
