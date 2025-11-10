import Slogen from './slogen';

function Bgsvg({ className }) {
  return (
    <div className={`hidden top-0 left-0 xl:block ${className}`}>
      <svg
        className="h-screen relative top-0 left-0"
        viewBox="0 0 1115 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="921.834"
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
      <Slogen className="absolute top-0 left-0 h h-full flex mt-40 ml-20" />
    </div>
  );
}

export default Bgsvg;
