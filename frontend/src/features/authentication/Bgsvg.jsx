import Slogen from './slogen';

function Bgsvg({ className }) {
  return (
    <div className={` ${className}`}>
      <svg
        className="md:h-screen relative 2xl:left-0 lg:-left-48 sm:-left-80 hidden top-0 left-0 md:block"
        viewBox="0 0 1115 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="900"
          height="1539.4"
          transform="translate(392.238 -572.183) rotate(38.3673)"
          fill="url(#paint0_linear_26_11)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_26_11"
            x1="918.763"
            y1="32.2266"
            x2="734.264"
            y2="1528.36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#1ABABC" />
          </linearGradient>
        </defs>
      </svg>
      {/* ----------------------------- */}
      <svg
        className="w-full md:hidden relative -top-36 sm:-top-44"
        width="408"
        height="400"
        viewBox="0 0 408 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="180.716"
          height="552.877"
          transform="translate(462.86 -44) rotate(80.8619)"
          fill="url(#paint0_linear_156_2)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_156_2"
            x1="177.124"
            y1="11.5742"
            x2="58.0837"
            y2="529.737"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3B82F6" />
            <stop offset="1" stop-color="#1ABABC" />
          </linearGradient>
        </defs>
      </svg>

      <Slogen className="hidden sm:flex" />
      <div className="absolute text-gray-50 top-5 sm:top-10 text-4xl left-10 sm:hidden">
        <div className="flex">
          <p>Hello</p>
          <p>Welcome</p>
        </div>
        <p className=" font-bold">todo app</p>
      </div>
    </div>
  );
}

export default Bgsvg;
