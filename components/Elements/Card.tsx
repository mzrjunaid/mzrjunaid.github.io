"use client";
import Image from "next/image";

type CardProps = {
  title: string;
  lang: string[];
  imageName: string;
  url: string;
};

const Card = ({ title, lang, imageName, url }: CardProps) => {
  return (
    <div className="group flex flex-col border rounded-lg overflow-hidden max-w-sm">
      <div className="w-full h-64 relative overflow-hidden cursor-pointer">
        <Image
          src={require(`../../public/images/projects/${imageName}-large.webp`)}
          fill
          alt="first"
          sizes="(max-width:768px) 768px, (max-width: 1200px) 50vw, 100vw"
          className="group-hover:scale-150 transition ease-in-out duration-1000 origin-top object-cover"
        />
      </div>
      <div className="py-2 px-4">
        <h2 className="text-lg font-bold capitalize tracking-wider my-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 px-3">
          {lang.map((item) => item).join(", ")}
        </p>
      </div>
      <div className="p-2 text-center">
        <a
          href={url}
          className="py-1 block bg-blue-600 rounded-md hover__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Repository
        </a>
      </div>
    </div>
  );
};

export default Card;
