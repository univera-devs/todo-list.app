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
    <div className="w-full md:w-[470px] flex flex-col p-5 gap-10 justify-between items-center">
      <div className="w-full flex justify-between items-center gap-x-10">
        <QueryNavLink queryValue="login">Login</QueryNavLink>
        <QueryNavLink queryValue="signup">Sign up</QueryNavLink>
      </div>
      {tab === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default AuthLayout;
