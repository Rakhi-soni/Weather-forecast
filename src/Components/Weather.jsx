import React from 'react';
import { FaCloudRain, FaCloudSun, FaCloudMoon, FaSearch } from 'react-icons/fa';
import './Weather.css';

function Weather() {
    return (
        <div className='W-main'>
            <div className='W-section'>
                <div className='W-icon'><FaCloudRain className='W-cloud'/></div>
                <div className='W-date'>Friday,April 21<br/><span>Heavy Rain</span></div>
                <div className='W-deg'>9&deg;<br/>16&deg;</div>
            </div>
            <div className='W-section'>
                <div className='W-icon'><FaCloudRain className='W-cloud'/></div>
                <div className='W-date'>Friday,April 21<br/><span>Heavy Rain</span></div>
                <div className='W-deg'>9&deg;<br/>16&deg;</div>
            </div>
            <div className='W-section'>
                <div className='W-icon'><FaCloudRain className='W-cloud'/></div>
                <div className='W-date'>Friday,April 21<br/><span>Heavy Rain</span></div>
                <div className='W-deg'>9&deg;<br/>16&deg;</div>
            </div>
            <div className='W-section'>
                <div className='W-icon'><FaCloudRain className='W-cloud'/></div>
                <div className='W-date'>Friday,April 21<br/><span>Heavy Rain</span></div>
                <div className='W-deg'>9&deg;<br/>16&deg;</div>
            </div>
            <div className='W-section'>
                <div className='W-icon'><FaCloudRain className='W-cloud'/></div>
                <div className='W-date'>Friday,April 21<br/><span>Heavy Rain</span></div>
                <div className='W-deg'>9&deg;<br/>16&deg;</div>
            </div>
        </div>
    );
}

export default Weather;