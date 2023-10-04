import React, { useState } from 'react'
import './Login.css'


function Login({guest}) {
    
  return (
    
     <div className='login-container'>
       <div className='top-text'>
       Book Now for Your Weddings
        <p>Fill details below to proceed</p>
       </div>
      <div className='login-body'>
        
            <div className='inputContainer'>
                <input type="text" placeholder='Banglore, Goa,Puda'/>
                <p className='inputp'>Locations preferred</p>
                <input type="text" placeholder='Wedding'/>
                <p className='inputp'>Occasion</p>
                <input className='button' type='date' placeholder='Pick Your Dates' />
                <p className='inputp'>When are you planning</p>
                <input className='inputp' placeholder='Number of guests' type='number' />
            </div>

         <div className='login-right-container'>
            <div className='request-box'>
                <h4>Any specific request</h4>
                <div>
                     <input type="text" placeholder='Enter here'/>
                     <p>Example:<br/>
                      Add Cadbury celeberations chocolate box</p>
                 </div>
            </div>
            <div className='login-request'>Request for your Wedding arrangement</div>
        </div>
        
      </div>
     </div>
  )
}

export default Login;