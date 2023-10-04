import React from 'react'
import { Link, } from 'react-router-dom'
import Footer from '../Footer'
import Banner from './Banner'
import NavLink from './navLink'
import HomeImage from '../HomeImage'
import './Holiday.css';
function Holiday(props) {
  return (
    <>
    <div className='holiday-container'>
     <Banner navListData={props.navListData}/>
     <NavLink navListData={props.navListData} />
     <HomeImage />
     
    
    </div>
    <div>
    <Footer navListData={props.navListData}/>
    </div></>
  )
}

export default Holiday