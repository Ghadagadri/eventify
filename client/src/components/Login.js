import React, { useState } from 'react'

import "../scss/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from './js/userSlice/userSlice';

const Login = ({show, setshow}) => {
	const isAuth = localStorage.getItem("token")
	const [login, setLogin] = useState({
		
		email:"",
		password:""
	  })
	const dispatch = useDispatch()
	let navigate = useNavigate();
	return (


		<div className="wrapper ">
			<form  onSubmit={(e)=> e.preventDefault()} className="form-signin">
				<h2 className="form-signin-heading">Please login</h2>
				<input onChange={(e)=> setLogin({...login,email:e.target.value}) } type="text" className="form-control"  placeholder="Email Address" />
				<input onChange={(e)=> setLogin({...login,password:e.target.value}) } type="password" className="form-control"  placeholder="Password"  />

				<button className="btn-primary"
				 onClick={()=>{dispatch(userLogin(login))
					setTimeout(() => {
						navigate("/home")
					}, 1000);
					setTimeout(() => {
						window.location.reload()
					}, 1000);
						
				
				 } }>Login</button>
				<Link to="/">Sign up</Link>
			</form>
		</div>

	)
}

export default Login;