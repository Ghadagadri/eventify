import React from 'react'
import "./Feed.css"
import Events from "./Events"
import CreateActivity from "./CreateActivity"
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <Events />
        <CreateActivity />
        <Post/>
    </div>
  )
}

export default Feed