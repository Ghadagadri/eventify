import React from 'react'
import "./Event.css"

function event({image, title}) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="event">
      
      <h4>{title}</h4>
    </div>
  )
}

export default event