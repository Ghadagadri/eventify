import React, { useState } from 'react' 

import {useDispatch} from 'react-redux'
import { userRegister } from './js/userSlice/userSlice'
import {Link} from 'react-router-dom'

const Register = () => {
  const [register, setRegister] = useState({
    name:"",
    lastName:"",
    email:"",
    password:""
  })
const dispatch = useDispatch()
  

  return (
    <div class="wrapper">
    <form onSubmit={(e)=> e.preventDefault()} class="form-signin">
        <h2 class="form-signin-heading">Please Register</h2>
        <input onChange={(e)=> setRegister({...register,name:e.target.value}) } type="text" class="form-control"  placeholder="Name" required="" />
        <input onChange={(e)=> setRegister({...register,lastName:e.target.value}) } type="text" class="form-control"  placeholder="LastName" required="" />
        <input onChange={(e)=> setRegister({...register,email:e.target.value}) } type="email" class="form-control"  placeholder="Email" required="" />
        <input onChange={(e)=> setRegister({...register,password:e.target.value}) } type="password" class="form-control"  placeholder="Password" required="" />

        <button class="btn-primary" onClick={()=> dispatch(userRegister(register))}>Register</button>
        <Link to="/login">Sign in</Link>
    </form>
    
</div>
  )
}

export default Register;