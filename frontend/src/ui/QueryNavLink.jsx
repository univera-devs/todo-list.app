import { useLocation } from "react-router-dom";

function QueryNavLink({ children, queryKey, handleSearch }) {
  const location = useLocation()

  const navActive = 'py-3 text-xl font-bold text-primary-500 bg-transparent flex-1 text-center';
  const navInActive = 'py-3 text-xl text-gray-50 bg-transparent flex-1 text-center';

  return (
    <button
      onClick={() => handleSearch("tab", queryKey)}
      className={`transition-all duration-300 ${(("?tab=" + queryKey) === location?.search) ? navActive : navInActive}`}
    >
      {children}
    </button>
  );
}

export default QueryNavLink;
