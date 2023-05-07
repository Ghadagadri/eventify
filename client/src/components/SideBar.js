import React from 'react'
import "./SideBar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Notifications" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messanger" />
    </div>
  )
}

export default Sidebar;