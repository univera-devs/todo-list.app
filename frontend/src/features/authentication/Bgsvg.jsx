function Bgsvg() {
  return (
    <div className='flex flex-col h-full items-start justify-start md:justify-center p-5 w-full '>
      <div className='w-[200%] md:w-[500px] lg:w-[600px] h-50 md:min-h-[125vh] absolute -translate-x-[35%] md:-translate-x-[30%] -translate-y-[50%] md:-translate-y-[5%] -rotate-10 md:rotate-20 bg-linear-to-b from-primary-500 to-secondary-500'></div>
      <div className='w-full z-10 flex flex-col items-start md:pl-10 gap-3 md:gap-5 '>
        <div className="flex flex-row gap-2 md:gap-5 md:flex-col">
          <span className='text-3xl md:text-5xl text-white'>Hello</span>
          <span className='text-3xl md:text-5xl text-white'>Welcome</span>
        </div>
        <span className='text-3xl md:text-5xl text-white font-bold'>TODO APP</span>
      </div>
    </div>
  );
}

export default Bgsvg;
