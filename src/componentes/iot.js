import React, { Component } from 'react';
import '../css/iot.css'
class Iot extends Component{
    render(){
    return(
      <div>
        <div className="iframe-container">
            <iframe
          src="https://proyecto.heladoshuastecos.com/proyecto/tortuguero/"
           width="600" height="450" allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className='w-100 p-2' scrolling=no ></iframe>
        </div>
      </div>
        
        
    )      
  }
}

export default Iot;