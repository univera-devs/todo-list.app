import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Auth from './pages/auth';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import MainHome from './pages/home/MainHome';
import MainTodo from './pages/todo/MainTodo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const token = sessionStorage.getItem("token")
  
  function ProtectRoutes() {
    return token
      ? <Outlet />
      : <Navigate to='/auth' replace />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-back-950 w-full min-h-screen flex items-center justify-start flex-col gap-8">
        <Toaster />
        {!location?.pathname.startsWith('/auth') && (
          <div className="flex items-center justify-center w-full py-3">
            <Header />
          </div>
        )}
        <div
          className={`bg-back-950 flex items-center justify-center 
        ${location?.pathname !== '/auth' ? ' w-[90%] lg:w-2/3' : 'w-full'}`}
        >
          <Routes>
              <Route path="/auth" element={<Auth />}></Route>
            <Route element={<ProtectRoutes />}>
            <Route path="/" element={<MainHome />}></Route>
              <Route path="/todo" element={<MainTodo />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
