import React from 'react'
import { Outlet } from 'react-router-dom'
import DemoCarousel from './DemoCarousel '
import Login from './Login'


const Acceuil = () => {
  return (
    <div>
    
    <DemoCarousel/>
    <Outlet/>


    </div>
    
  )
}

export default Acceuil