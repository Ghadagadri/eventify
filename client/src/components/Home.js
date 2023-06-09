import React from 'react'
import Feed from './Feed'
import Header from './Header'
import Sidebar from './SideBar'
import Widgets from './Widgets'

const Home = () => {
  return (
    <div>
      <Header /> 

      <div className='app__body'>
        <Sidebar/>
        <Feed />
        <Widgets />
      </div>


    </div>
  )
}

export default Home