import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a 
import { Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/5.jpg"
import { height } from '@mui/system';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const fadeImages = [
    {
  url: img1,
      
    },
    {
  url: img2,
      
    },
    {
  url:img3   
    },
    {
        url:img4   
          },
  ];
const DemoCarousel  = () => {
    const zoomOutProperties = {
        duration: 2000,
        transitionDuration: 50,
        infinite: true,
        autoplay: true,
        // indicators: true,
        scale: 0.1,
        arrows: true
      };
      const [show, setshow] = useState(false);
      const [showR, setshowR] = useState(false);
  return (

    <div className="slide-container" >
        
       {show?<div className='loginregister'><Login show={show} setshow={setshow}/></div> : null}
       {showR? <div className='loginregister'><Register show={showR} setshow={setshowR}/></div>  : null} 
        {!show && !showR?
        <div className="btn">
        

        <button id="gooey-button" onClick={()=> setshow(!show)}>
        Login
        <span class="bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </span>
    </button>
    

    
    
    
    <button   id="gooey-button" onClick={()=> setshowR(!showR)} >
        Sign In
        <span class="bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </span>
    </button>

    
        </div>

:null}



        
      <Zoom className='zoom-carousel' {...zoomOutProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' ,height:'650px'}} src={fadeImage.url} />
            
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default DemoCarousel 