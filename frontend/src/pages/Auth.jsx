import { useAuthContext } from '../context/AuthContext';
import AuthLayout from '../features/authentication/AuthLayout';
import Bgsvg from '../features/authentication/Bgsvg';

function Auth() {

  return (
    <div className="relative flex-col md:flex-row w-full min-h-screen overflow-x-hidden pt-32 md:pt-0 flex items-center justify-end ">
      <div className='absolute inset-0 overflow-hidden'>
        <Bgsvg />
      </div>

      <div className="relative z-10 w-full md:w-1/2 xl:w-2/3 h-full flex justify-center items-center">
        <AuthLayout />
      </div>
    </div>

  );
}

export default Auth;
