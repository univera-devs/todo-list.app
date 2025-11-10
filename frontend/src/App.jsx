import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import Auth from './pages/auth';
import Login from './features/authentication/LoginForm';
import Signup from './features/authentication/SignupForm';
import { Toaster } from 'react-hot-toast';
import LoginForm from './features/authentication/LoginForm';
import SignupForm from './features/authentication/SignupForm';

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
