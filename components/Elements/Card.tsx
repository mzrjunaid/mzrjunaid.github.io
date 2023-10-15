"use client";
import Image from "next/image";

type CardProps = {
  title: string;
  lang: string[];
  imageName: string;
  gitURL: string;
  projectURL: string;
};

const Card = ({ title, lang, imageName, gitURL, projectURL }: CardProps) => {
  return (
    <div className="group flex flex-col border rounded-lg overflow-hidden max-w-full md:max-w-sm">
      <div className="w-full h-64 relative overflow-hidden cursor-pointer">
        <Image
          src={require(`../../public/images/projects/${imageName}.webp`)}
          fill
          alt="first"
          sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="group-hover:scale-150 transition ease-in-out duration-1000 origin-top-left object-cover"
        />
      </div>
      <div className="py-4 px-4">
        <h2 className="text-lg font-bold capitalize tracking-wider">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 px-3 mt-4">
          {lang.map((item) => item).join(", ")}
        </p>
      </div>
      <div className="flex justify-center gap-4 mb-3">
        <a
          href={gitURL}
          className="py-1 px-4 block bg-blue-600 rounded-md hover__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
        <a
          href={projectURL}
          className="py-1 px-4 block bg-yellow-400 dark:text-black font-semibold tracking-wide rounded-md hover__link from-black/80 to-black/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default Card;
