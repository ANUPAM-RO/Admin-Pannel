import React from 'react'
import "./topbar.css";
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topLeft">
                <span className="logo">Anupam</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <img src="bell-regular.svg" className='bell' />
                <span className="topIconBag">2</span>
                </div>
                
                <div className="topbarIconContainer">
                <img src="globe-solid.svg" className='bell' />
                <span className="topIconBag">2</span>
                </div>

                <div className="topbarIconContainer">
                <img src="gear-solid.svg" className='bell' />
                </div>
               <img src="https://th.bing.com/th/id/OIP.yNEImcaINuWO8SXWEYYS-gHaF5?pid=ImgDet&w=736&h=586&rs=1" alt="" className='topImg' />
           
            </div>
        </div>

    </div>
  )
}

export default Topbar