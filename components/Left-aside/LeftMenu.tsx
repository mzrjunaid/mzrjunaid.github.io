import navData from "@/data/navigation.json";
import Link from "next/link";
import MenuIcon from "../Elements/MenuIcon";

const LeftMenu = () => {
  const nav = navData.navigation;
  return (
    <div className="w-full flex flex-col gap-6 py-5 lg:px-4 font-medium overflow-hidden">
      {nav.map((item) => (
        <Link
          href={item.link}
          key={item.link}
          className="flex flex-row items-center gap-4 hover:hoverItem"
        >
          <MenuIcon icon={item.name.toLowerCase()} size={24} /> {item.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;
