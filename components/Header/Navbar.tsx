import Link from "next/link";
import navData from "@/data/navigation.json";
import ThemeButton from "../Elements/ThemeButton";

const Navbar = () => {
  const data = navData.navigation;
  return (
    <nav
      className="flex flex-row gap-4 font-roboto uppercase border py-2 px-5
        rounded-full dark:bg-white/80 dark:text-black
        fixed bottom-14 left-1/2 -translate-x-1/2 md:hidden
        "
    >
      {data.map((item) => (
        <Link href={item.link} key={item.name}>
          {item.name}
        </Link>
      ))}
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
