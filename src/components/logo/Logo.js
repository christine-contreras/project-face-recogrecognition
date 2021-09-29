import React from 'react'
import Tilt from 'react-parallax-tilt'
import './logo.css'
import logo from './idea.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
           <Tilt
           className="tilt"
           tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={900}
            scale={1.1}
            transitionSpeed={2000}
            gyroscope={true}>

            <div className="tilt-inner">
                <img src={logo} alt="face recognition app" title="brain logo"/>
            </div>

            </Tilt> 
        </div>
    )
}

export default Logo