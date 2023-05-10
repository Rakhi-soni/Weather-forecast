import React, { useEffect, useState } from 'react';
import {FaCloudRain,FaCloudSun,FaCloudMoon,FaSearch} from 'react-icons/fa';
import './Input.css';
import Weather from './Weather';
import axios from 'axios';


function Input() {

const [city,setCity] = useState(null);
const [search,setSearch] = useState("bangalore");
 

useEffect(()=>{
 const weather=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=54c6df5b50d105214b8ccac0b8e8006c`)
    .then((response)=>{
        console.log(response);
        setCity(response);
    }).catch((reject)=>{
        console.log("error");
    })
 };
 weather();
},[search])

    return (
<div className='I-main'>
    <div className='input'><span><FaSearch className='search'/></span><input type='search' className='inputdata' onChange={(event)=>{
     setSearch(event.target.value)}} placeholder='Enter Your City Name'/></div>
     {!city?(
        <p>no data found</p>
     ):(
        <>
<div><h2>{search}</h2></div>
    <div className='result'>{city.data.main.temp}&deg;C</div>
    <div className='I-text'>{city.data.weather[0].main}</div>
     
    <div className='I-divider'></div>
    <div className='I-forecast'>The Next Day Forecast</div>
    <div className='I-days'>
        <div className='days'>5 days</div>
        <div className='days'>14days</div>
        <div className='days'>30days</div>
    </div>
    <div className='I-weather'><Weather/></div>
    </>
     )}
    
</div>
        );
    }
    
    export default Input;