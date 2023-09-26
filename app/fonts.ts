import { Montserrat, Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anton",
});

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export { montserrat, anton };
