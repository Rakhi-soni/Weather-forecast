import React from 'react';
import {FaCloudRain,FaCloudSun,FaCloudMoon,FaSearch} from 'react-icons/fa';
import './Input.css';
import Weather from './Weather';


function Input() {
    return (
<div className='I-main'>
    <div className='input'><span><FaSearch className='search'/></span><input type='search' placeholder='Enter Your City Name'/></div>
    <div className='result'>11&deg;C</div>
    <div className='I-text'>Northwest, 38.9 km/h</div>
    <div className='I-divider'></div>
    <div className='I-forecast'>The Next Day Forecast</div>
    <div className='I-days'>
        <div className='days'>5 days</div>
        <div className='days'>14days</div>
        <div className='days'>30days</div>
    </div>
    <div className='I-weather'><Weather/></div>
</div>
        );
    }
    
    export default Input;