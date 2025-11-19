import { useSearchParams } from 'react-router-dom';
import QueryNavLink from '../../ui/QueryNavLink';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useNavigateHome from '../../hook/useNavigateHome';

function AuthLayout() {
  const { token } = useAuthContext();
  const navigateHome = useNavigateHome();

  const [params, setParams] = useSearchParams();

  const tab = params.get('tab') || 'login';

  useEffect(() => {
    if (!params.get('tab')) {
      setParams({ tab: 'login' });
    }
  }, [params, setParams]);

  useEffect(() => {
    if (token) {
      navigateHome();
    }
  }, [token, navigateHome]);

  return (
    <div className="w-full md:w-[470px] flex flex-col p-5 gap-10 justify-between items-center">
      <div className="w-full">
        {/* Tabs */}
        <div className="relative flex justify-between items-center">
          <QueryNavLink queryValue="login">Login</QueryNavLink>
          <QueryNavLink queryValue="signup">Sign up</QueryNavLink>

          {/* Sliding underline */}
          <div
            className={`
        absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-500
        ${tab === 'login' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'}
      `}
          ></div>
        </div>
      </div>

      {tab === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default AuthLayout;
