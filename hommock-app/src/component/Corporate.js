import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import HomeImage from '../HomeImage'
import NavLink from './navLink'
import "./Croporate.css";
import Search from './Search'
import Banner from './Banner'

function Corporate(props) {
  return (
    <div className='corparate'><Banner navListData={props.navListData}/>
        {/* <div><Search /></div> */}
        <div className='coporateNav'>
         <NavLink  navListData={props.navListData} />

    </div>
       
        <HomeImage />
        <div><Footer navListData={props.navListData} /></div>
        
    </div>
  )
}

export default Corporate