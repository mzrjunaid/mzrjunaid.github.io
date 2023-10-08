import Link from "next/link";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";

import junaid from "@/public/images/junaid.webp";

const Cover = () => {
  return (
    <div className="w-full h-[200px] overflow-hidden md:rounded-3xl relative bg-[url('../public/images/home/cover-2.webp')] bg-cover bg-no-repeat">
      <div className="absolute w-full h-full flex flex-row text-white px-3 md:px-16 backdrop-blur-[2px]">
        <div className="flex-1 flex flex-row w-full justify-between">
          <div className="flex items-center gap-2 md:gap-5">
            <Image
              src={junaid}
              alt="Junaid"
              width={150}
              height={150}
              className="rounded-full w-24 md:w-32 object-cover"
            />
            <div className="flex flex-col gap-1.5 md:gap-2.5">
              <h2 className="text-2xl sm:text-3xl font-semibold uppercase ms-2">
                Junaid Mazhar
              </h2>
              <p>
                <a href="/About">
                  <span role="img" aria-label="hand">
                    👋🏻
                  </span>
                </a>
                I am{" "}
                <span className="inline-block bg-yellow-200 ms-1 px-2 py-1 rounded-es-xl rounded-se-xl font-bold text-black">
                  Frontend Web Developer
                </span>
              </p>
            </div>
          </div>
          <div className="absolute inline-block bottom-4 right-4 md:right-10">
            <Link
              href="mailto:mzrjunaid@gmail.com"
              className="flex-1 flex gap-2 items-center"
            >
              <FaEnvelope size={24} />
              <span className="hover__link">mzrjunaid@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
