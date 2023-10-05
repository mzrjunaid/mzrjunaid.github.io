const Progressbar = () => {
  return (
    <div className="relative overflow-hidden w-full h-2 bg-slate-400 rounded-lg">
      <div
        className="absolute bg-yellow-200 h-full w-[90%]
    group-hover:hidden"
      ></div>
      <div
        className="bg-gradient-to-r from-yellow-200 to-yellow-200 h-full bg-[length:0px] 
        group-hover:bg-[length:90%] bg-left-bottom bg-no-repeat transition-[background-size] duration-1000"
      ></div>
    </div>
  );
};

export default Progressbar;
