import React from 'react'
import "./Events.css"
import Event from "./Event.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Events() {
  return (
    <div className='events'>
       <Swiper className='swiper-con'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      Autoplay 
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
      <SwiperSlide>  <Event
        image={'https://AymenGadri.github.io/football.jpg'}
        
        title="Football"
      /></SwiperSlide>
      <SwiperSlide><Event
        image={'https://AymenGadri.github.io/basket.jpg'}
       
        title="Basketball"
      /></SwiperSlide>
    
      
   

  
      <SwiperSlide><Event
        image={'https://AymenGadri.github.io/tennis.jpg'}
        
        title="Tennis"
      /></SwiperSlide>
      <SwiperSlide><Event
        image={'https://AymenGadri.github.io/camping.jpg'}
        
        title="Camping"
      /></SwiperSlide>
      <SwiperSlide><Event
        image={'https://AymenGadri.github.io/yoga.webp'}
        
        title="Yoga"
      />    </SwiperSlide>
       <SwiperSlide><Event
        image={'https://AymenGadri.github.io/party.jpg'}
        
        title="Party"
      /> </SwiperSlide>
       <SwiperSlide><Event
        image={'https://AymenGadri.github.io/education.webp'}
        
        title="Education"
      /> </SwiperSlide>
       <SwiperSlide><Event
        image={'https://AymenGadri.github.io/fitness.jpg'}
        
        title="Fitness"
      /> </SwiperSlide>
       <SwiperSlide>
        <Event
        image={'https://AymenGadri.github.io/conference.webp'}
        
        title="Conference"
      />  </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Events