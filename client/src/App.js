import './App.css';
import { Route, Routes ,Navigate, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import Header from './components/Header';
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"




import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, userCurrent } from './components/js/userSlice/userSlice';
import Acceuil from './components/Acceuil';
import SidebarRow from './components/SidebarRow';
import Home from './components/Home';



function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch =useDispatch()
  const navigate =useNavigate()

  useEffect(() => {
    if(isAuth){
      dispatch(userCurrent())
    } 
    
    
  }, [])
  

  return (

    
<div className="app">
 
  

<Routes>
<Route exact path="/" element={<Acceuil/>} />
<Route exact path="/home" element={<Home/>} />
  <Route path="/register" element={<Register/>} />
<Route path="/login" element={<Login/>} /> 
<Route element={<PrivateRoute/>}>
<Route path="/profil" element={<Profile/>} /> 
</Route>{""}
  </Routes>    
 
  </div>
  );
}

export default App;
