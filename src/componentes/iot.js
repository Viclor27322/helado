import React, { Component } from 'react';
import '../css/iot.css'
class Iot extends Component{
    render(){
    return(
        <div className="iframe-container">
            <iframe
          src="http://proyecto.heladoshuastecos.com/proyecto/tortuguero"
           width="600" height="450" allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className='w-100 p-2'></iframe>
        </div>
    )      
  }
}

export default Iot;