import React, {useEffect, useState} from 'react'
import "./CreateActivity.css"
import { Avatar } from '@mui/material';   
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addevent, getevent } from './js/eventsSlice.js/eventSlice';





function CreateActivity() {
  const dispatch = useDispatch()
	let navigate = useNavigate();

  const [events , setevents] = useState(
    {
      eventname:"",
      eventdate:"",
      eventplace:"",
      eventtime:"",
      eventdesc:"",
    }

  );

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input

            type="text"
            className="messageSender__input"
            placeholder={`Event Name `}
            onChange={(e)=>setevents({...events,eventname:e.target.value})} 
          />

          <input type="date" onChange={(e)=>setevents({...events,eventdate:e.target.value})} /> 
    
          <input
            type="text"
            className="messageSender__input"
            placeholder={`Event address `}
            onChange={(e)=>setevents({...events,eventplace:e.target.value})}
          />
        </form>
      </div>
      <div className="messageSender__bottom">
        
        <form>
        
           <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Maximum  `}
            onChange={(e)=>setevents({...events,eventtime:e.target.value})}
          />

            <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Description `}
            onChange={(e)=>setevents({...events,eventdesc:e.target.value})}
          />
         <button id="neonShadow" onClick={()=>dispatch(addevent(events))}>Create Activity</button>
        </form>
      </div>
    </div>
  )
}

export default CreateActivity
// onClick={()=>dispatch(addevent(events))}