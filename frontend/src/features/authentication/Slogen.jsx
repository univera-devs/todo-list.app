function Slogen({ className }) {
  return (
    <div
      className={`absolute w-full top-0 left-0 h h-full sm:text-3xl sm:-top-4 md:text-5xl lg:flex-col gap-x-2 text-gray-50 text-wrap text-xl mt-15 ml-10 lg:mt-20 md:flex-col lg:ml-15 xl:mt-20 xl:ml-15 2xl:mt-40 2xl:ml-15 2xl:text-[84px] lg:text-6xl sm:gap-y-3 ${className}`}
    >
      <p>Hello</p>
      <p>Welcome</p>
      <p className=" font-bold">todo app</p>
    </div>
  );
}

export default Slogen;
