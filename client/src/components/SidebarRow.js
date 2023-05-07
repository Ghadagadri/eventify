import React from 'react'
import "./SidebarRow.css"
import { Avatar } from '@mui/material';

function SidebarRow({ Icon, title })  {
  return (
    <div className='sidebarRow'>
        {Icon && <Icon />}

        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow