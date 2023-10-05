import navData from "@/data/navigation.json";
import MenuIcon from "../Elements/MenuIcon";

const LeftMenu = () => {
  const nav = navData.navigation;
  return (
    <div className="w-full flex flex-col gap-6 py-5 lg:px-4 font-medium overflow-hidden">
      {nav.map((item) => (
        <a
          href={`#${item.name}`}
          key={item.link}
          className="group flex flex-row items-center gap-4 hover:hoverItem"
        >
          <MenuIcon icon={item.name.toLowerCase()} size={24} />
          <span className="group-hover__link">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default LeftMenu;
