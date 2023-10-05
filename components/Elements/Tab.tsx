type TabProps = {
  title: string;
  skills: string[];
};

const Tab = ({ title, skills }: TabProps) => {
  // const skill = skills.lang;
  return (
    <div className="group flex flex-col gap-4 border py-3 px-4 rounded-md shadow-xl">
      <h3 className="text-lg">
        <span
          className="bg-gradient-to-r from-yellow-200 to-yellow-200 bg-[length:0px_4px] 
                group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
        >
          {title}
        </span>
      </h3>
      <div className="flex flex-row flex-wrap gap-2 gap-y-3">
        {skills.map((skill) => (
          <span
            className="bg-blue-700 rounded-full py-2 px-5 text-sm text-white tracking-wide cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 hover:bg-yellow-200 hover:text-gray-900 hover:font-semibold"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// const Tab = () => {
//   return (
//     <div className="group relative flex flex-col group rounded-xl overflow-hidden h-24 md:h-36 bg-[url('../public/images/html-css.jpg')] bg-center bg-cover bg-no-repeat">
//       <div className="absolute w-full h-full z-10 bg-black/10 backdrop-blur-[2px]" />
//       <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center">
//         <h2
//           className="text-2xl font-extrabold text-gray-900 bg-gradient-to-r from-yellow-200 to-yellow-200 bg-[length:0px_4px]
//                     group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
//         >
//           HTML & CSS
//         </h2>
//       </div>
//     </div>
//   );
// };

export default Tab;
