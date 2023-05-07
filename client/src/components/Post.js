import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./Post.css";
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteevent, getevent, updtevent } from './js/eventsSlice.js/eventSlice';
function Post( {profilePic, username, timestamp, message}) {
    const dispatch = useDispatch()
let navigate = useNavigate();
  useEffect(() => {

    dispatch(getevent()) 
}, [])

const event = useSelector(state => state.event?.event)
console.log(event)
const [showedit, setshowedit] = useState(0);
const [newevent, setevent] = useState(
    {eventname:"",eventdate:"",eventplace:"",eventdesc:''})


  return (
    <div className='post'>

        {event?.map((el)=>(
             <div className='post-des'>
        <div className='post__top'>
            <Avatar src={profilePic}
            className="post__avatar" />
            <div className="post__topInfo">
                <h3>{el.eventname}</h3>
                <p>{el.eventdate}</p>
                <p>{el.eventplace}</p>
                </div>
        </div>
    <div className='post__bottom'>
        <p>{el.eventdesc}</p>
    </div>
    <div className="post__option">

    
        {/* <InfoIcon /> */}
        <button id="deleteEvent" onClick={()=>dispatch(deleteevent(el._id))}>X</button>
        {/* <button id="neonShadow" onClick={()=>setshowedit(1)}>Editer</button> */}
        
        </div>
       
        <div className="input">
           <input type="text" onChange={(e)=>setevent({...newevent,eventname:e.target.value})} placeholder={el.eventname}/> 
           <button onClick={()=>dispatch(updtevent({id:el._id,event:newevent}))}>OK</button>
        </div>
    
        
    <div className="post__options">
        

    </div>  
    </div>
      ))}
     
    </div>
  )
}
export default Post