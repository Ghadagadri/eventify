import React from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from './js/userSlice/userSlice';

const Profile = () => {
  const isAuth = localStorage.getItem('token');
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const user = useSelector(state => state.user.user)
 
  return (

    <>
     {isAuth? <button onClick={()=>{ 
  dispatch(logout());
  navigate("/")
  }}>logout</button>: null }
    <h1>hello si {user? user.name: <h1>Loaging...</h1>}</h1>
    </>
  )
}

export default Profile;