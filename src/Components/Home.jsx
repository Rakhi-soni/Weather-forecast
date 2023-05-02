import React from 'react';
import Time from './Time.jsx';
import './Home.css';
import Input from './Input.jsx';



function Home() {
  return (
    <>
      <div className='main'>
        <div className='l-part'>
          <div className='datentime'>
            <span>1 May 2023</span>
            <span>|</span>
            <span>21:00</span>
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