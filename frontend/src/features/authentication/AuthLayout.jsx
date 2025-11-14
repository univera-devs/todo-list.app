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
    <div className="w-full flex-wrap flex justify-center xl:justify-end items-center p-10">
      <div className="xl:mr-40 max-w-xl w-full flex flex-col gap-y-3 sm:gap-y-12 justify-center items-center">
        <div className="flex justify-center font-medium rounded-lg text-primary-500 py-2 mb-10 w-full gap-x-3 xl:hidden text-2xl">
          <p>Hello</p>
          <p>Welcome</p>
          <p className=" font-bold">todo app</p>
        </div>
        <div className="w-full flex justify-between items-center gap-x-10">
          <QueryNavLink queryValue="login">Login</QueryNavLink>
          <QueryNavLink queryValue="signup">Sign up</QueryNavLink>
        </div>

        {tab === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default AuthLayout;
