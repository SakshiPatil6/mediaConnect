import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/Home/home";
import Connect from './Components/connect/connect';
import CardProfile from './Components/profile/profile';
import ChattPage from './Components/chatt/chatt';
import Log from './Components/Login/login';
import Signup from './Components/Login/signup';
import Profile from './Components/profile/profile';

function App() {
  return (
    <>
      
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<CardProfile />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/chatt' element={<ChattPage />} />
          <Route path='/login' element={<Log />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
export default App;