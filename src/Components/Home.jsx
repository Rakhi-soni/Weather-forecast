import React from 'react';
import Time from './Time.jsx';
import './Home.css';
import Input from './Input.jsx';



function Home() {
  let currentDate = new Date();
  let date= currentDate.getDate() + "-" + (currentDate.getMonth() +1)+ "-" +currentDate.getFullYear()
  console.log( currentDate.getDate() + "-" + (currentDate.getMonth() +1)+ "-" +currentDate.getFullYear() );

  
  let currentTime = new Date();
 let time = currentTime.getHours() + ":" + currentTime.getMinutes();
 console.log(time);
  
//   function time(){
//   var d = new Date();
  
//   var m = d.getMinutes();
//   var h = d.getHours();
//   var c= h + ":" + m;
//   document.getElementById('').innerHTML(c);
// }
// setInterval(time,1000);

  return (
    <>
      <div className='main'>
        <div className='l-part'>
          <div className='datentime'>
            <span>{date}</span>
            <span>|</span>
            <span>{time}</span>
          </div>
          <div className='text'>Heavy Rain</div><br />
          <div className='divider'></div>
         <div> <Time/></div>
        </div>
        <div className='r-part'><Input/></div>
      </div>
    </>
  );
}

export default Home;