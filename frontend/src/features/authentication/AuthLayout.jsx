import { useSearchParams } from 'react-router-dom';
import QueryNavLink from '../../ui/QueryNavLink';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useEffect } from 'react';

function AuthLayout() {
  const [params, setParams] = useSearchParams();
  const tab = params.get('tab') || 'login';

  useEffect(() => {
    if (!params.get('tab')) {
      setParams({ tab: 'login' });
    }
  }, [params, setParams]);

  return (
    <div className="w-full flex-wrap flex justify-center md:justify-end items-center p-10">
      <div className="xl:mr-40 lg:max-w-lg sm:max-w-sm w-full flex flex-col gap-y-3 sm:gap-y-12 justify-center items-center">
        <div className="w-full flex justify-between items-center mt-28 gap-x-10">
          <QueryNavLink queryValue="login">Login</QueryNavLink>
          <QueryNavLink queryValue="signup">Sign up</QueryNavLink>
        </div>

        {tab === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default AuthLayout;
