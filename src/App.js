
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Services from './pages/Services';
import Mobile from './pages/Mobile';
import Laptop from './pages/Laptop';
import Accessories from './pages/Accessories';
import Selectedser from './pages/Selectedser';
import Landingpage from './pages/Landingpage';
import ListofServices from './pages/ListofServices';
import Lapservices from './pages/Lapservices';
import Home from './pages/Home';


function App() {
  return (
    <div >
  
  <Routes>
    <Route path='/login' element={<Landingpage/>}/>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/unknown' element={<Login/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/servicelap' element={<Lapservices/>}/>
    <Route path='/mobileservices' element={<Mobile/>}/>
    <Route path='/laptopservices' element={<Laptop/>}/>
    <Route path='/accessories' element={<Accessories/>}/>
    <Route path='/selectedservices' element={<Selectedser/>}/>
    <Route path='/listofservices' element={<ListofServices/>}/>
    <Route path='/home' element={<Home/>}/>
    
  </Routes>

  
    </div>
  );
}

export default App;
