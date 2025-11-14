import { useSearchParams } from 'react-router-dom';

function QueryNavLink({ children, queryKey = 'tab', queryValue }) {
  const navActive =
    'py-3 text-xl font-bold border-b-2 border-primary-500 text-primary-500 bg-transparent flex-1 text-center transition-all duration-500';

  const navInActive =
    'py-3 text-xl border-b-2 border-transparent text-gray-50 bg-transparent flex-1 text-center transition-all duration-500';

  const [params, setParams] = useSearchParams();
  const active = params.get(queryKey) === queryValue;

  const handleTab = () => {
    setParams({ [queryKey]: queryValue });
  };

  return (
    <button onClick={handleTab} className={active ? navActive : navInActive}>
      {children}
    </button>
  );
}

export default QueryNavLink;
