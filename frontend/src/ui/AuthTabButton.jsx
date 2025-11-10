import { NavLink } from 'react-router-dom';

function AuthTabNavLink({ children, to }) {
  const navActive =
    'py-3 text-xl text-primary-500 font-bold border-b-2 border-primary-500 text-primary-500 bg-transparent text-lg flex-1 text-center transition-all duration-500';
  const navInActive =
    'py-3 text-xl border-b-2 border-transparent text-gray-50 bg-transparent text-lg flex-1 text-center transition-all duration-500';

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? navActive : navInActive)}
    >
      {children}
    </NavLink>
  );
}

export default AuthTabNavLink;
