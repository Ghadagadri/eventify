import './App.css';
import { Route, Routes ,Navigate, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';




import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, userCurrent } from './components/js/userSlice/userSlice';
import Acceuil from './components/Acceuil';



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

    <>

    
    
  

<Routes>
<Route exact path="/" element={<Acceuil/>} />
<Route exact path="/register" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route element={<PrivateRoute/>}>
<Route path="/profil" element={<Profile/>} /> 
</Route>{""}
  </Routes>    
 
    </>
  );
}

export default App;
