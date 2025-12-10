import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiUser, PiList, PiX } from 'react-icons/pi';
import logo from '../../assets/image/univera.jpg';

const nav = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/todo',
    text: 'Todo',
  },
  {
    link: '/auth',
    text: 'Login',
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-full px-5 py-3 w-[90%] lg:w-2/3 bg-linear-to-r from-primary-600 to-primary-500 shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-3 z-50">
          <img
            className="rounded-full shadow-lg ring-2 ring-white/30"
            src={logo}
            width={40}
            height={40}
            alt="logo"
          />
          <span className="hidden sm:block text-sm font-semibold text-white tracking-wide">
            Univera
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {nav.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                `transition-all duration-300 px-4 py-2 rounded-full ${
                  isActive
                    ? 'text-white font-bold bg-white/20 shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3 z-50">
          <span className="hidden sm:block text-sm text-white font-medium">
            Univera
          </span>
          <div className="flex items-center justify-center shadow-lg rounded-full w-10 h-10 bg-back-950 ring-2 ring-white/30 transition-transform hover:scale-110 cursor-pointer">
            <PiUser className="text-2xl text-primary-500" />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <PiX className="text-2xl text-white" />
            ) : (
              <PiList className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-linear-to-b from-primary-600 to-primary-700 shadow-2xl transition-transform duration-300 ease-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2 p-6 pt-24">
          {nav.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition-all duration-300 px-6 py-4 rounded-2xl text-lg ${
                  isActive
                    ? 'text-white font-bold bg-white/20 shadow-lg transform scale-105'
                    : 'text-white/90 hover:text-white hover:bg-white/10 hover:translate-x-2'
                }`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
