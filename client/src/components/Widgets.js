import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.california-gym.com/tn/"
        width="310"
       
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;