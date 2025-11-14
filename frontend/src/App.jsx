import { Route, Routes } from 'react-router-dom';
import './index.css';
import Auth from './pages/auth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </div>
  );
}

export default App;
