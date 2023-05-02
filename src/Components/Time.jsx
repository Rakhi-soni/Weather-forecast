import React from 'react';
import {FaCloudRain,FaCloudSun,FaCloudMoon} from 'react-icons/fa';
import './Time.css';

function Time() {
    return (
<div className='T-main'>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudSun className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudSun className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudRain className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudRain className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudRain className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
        <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudRain className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudRain className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudMoon className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudMoon className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    <div className='T-section'>
    <div className='T-time'>10:00</div>
        <div className='T-divider'></div>
        <div className='T-box'><FaCloudMoon className='cloud'/> </div>
        <div className='T-time'>15 &deg;C</div>
    </div>
    
</div>
        );
    }
    
    export default Time;