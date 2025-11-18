import { useSearchParams } from 'react-router-dom';

function QueryNavLink({ children, queryKey = 'tab', queryValue }) {
  const navActive =
    'py-3 text-xl font-bold text-primary-500 bg-transparent flex-1 text-center';

  const navInActive =
    'py-3 text-xl text-gray-50 bg-transparent flex-1 text-center';

  const [params, setParams] = useSearchParams();
  const active = params.get(queryKey) === queryValue;

  const handleTab = () => {
    setParams({ [queryKey]: queryValue });
  };

  return (
    <button
      onClick={handleTab}
      className={`transition-all duration-300 ${
        active ? navActive : navInActive
      }`}
    >
      {children}
    </button>
  );
}

export default QueryNavLink;
