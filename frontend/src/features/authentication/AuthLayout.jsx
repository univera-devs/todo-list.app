import AuthTabNavLink from '../../ui/AuthTabButton';

function AuthLayout({ children }) {
  return (
    <div className="w-full flex-wrap flex justify-center xl:justify-end items-center p-10">
      <div className="xl:mr-40 max-w-xl w-full flex flex-col gap-y-3 sm:gap-y-12 justify-center items-center">
        <div className="flex justify-center font-medium rounded-lg text-primary-500 py-2 mb-10 w-full gap-x-3 xl:hidden text-2xl">
          <p>Hello</p>
          <p>Welcome</p>
          <p className=" font-bold">todo app</p>
        </div>
        <div className="w-full flex justify-between items-center gap-x-10">
          <AuthTabNavLink to="/auth/login">Login</AuthTabNavLink>
          <AuthTabNavLink to="/auth/signup">Sign up</AuthTabNavLink>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
