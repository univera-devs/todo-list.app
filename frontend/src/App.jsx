import { Route, Routes } from 'react-router-dom';
import './index.css';
import Auth from './pages/auth';
import { Toaster } from 'react-hot-toast';
import MainList from './pages/todo/list/MainList';
import Header from './components/header/Header';

function App() {
  return (
    <div className='bg-back-950 w-full'>
      <Toaster />
      <div className='flex items-center justify-center w-full py-3'>
        <Header />
      </div>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/todo" element={<MainList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
