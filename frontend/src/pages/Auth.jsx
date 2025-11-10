import { Outlet } from 'react-router-dom';
import AuthLayout from '../features/authentication/AuthLayout';
import Bgsvg from '../features/authentication/Bgsvg';

function Auth() {
  return (
    <div className="relative w-full h-screen bg-back-950 overflow-hidden">
      <Bgsvg />

      <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center">
        <AuthLayout>
          <Outlet />
        </AuthLayout>
      </div>
    </div>
  );
}

export default Auth;
