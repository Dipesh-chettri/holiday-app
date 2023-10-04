import React, { useState } from 'react'
import Banner from './Banner'
import './exprance.css'
import Login from './Login'
import { NavLink } from 'react-router-dom'



function Experience(props) {
 
  return (
   <div className='exprance'>
    <Banner navListData={props.navListData}/>
    
    <Login />
   </div>
 
  )
}

export default Experience