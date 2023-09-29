import socialLinksData from "@/data/socialLinks.json";
import Link from "next/link";
import SocialIcon from "../Elements/SocialIcon";

interface SocialProps {
  socialLinkStyle?: string;
  size: number;
}

export const FloatingSocialLinks = ({ size, socialLinkStyle }: SocialProps) => {
  const socialLinks = socialLinksData.socialLinks;
  return (
    <div className={`parent ${socialLinkStyle}`}>
      {socialLinks.map((item) => (
        <Link
          href={item.url}
          target="__blank"
          className="group/item relative"
          key={item.url}
        >
          <SocialIcon icon={item.media.toLowerCase()} size={size} />
          <span className="invisible group-hover/item:visible absolute top-0 right-9 text-white bg-black/80  py-1 px-3 rounded-lg">
            @{item.username}
          </span>
        </Link>
      ))}
    </div>
  );
};


export const LeftMenuSocialLinks = () => {
  const socialLinks = socialLinksData.socialLinks;
  return (
    <div className="w-full flex flex-col gap-4 py-5 lg:px-4 overflow-hidden">
      {socialLinks.map((item) => (
        <Link
          href={item.url}
          key={item.media}
          className="flex flex-row items-center gap-4 hover:hoverItem"
        >
          <SocialIcon icon={item.media.toLowerCase()} size={24} />
          <span className="text-xs xl:text-lg font-medium tracking-wider">
            {item.media}
          </span>
        </Link>
      ))}
    </div>
  );
};
