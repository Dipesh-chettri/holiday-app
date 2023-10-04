import React, { useState } from 'react'
import {HiBars3} from 'react-icons/hi2'
import Dropdown from './Dropdown'
import Search from './Search';
function Banner(props) {
    const[searchBar,setSearchBar]=useState(false) ;
    const onclickHandler=()=>{
        setSearchBar(true)
       }
  return (
    <div>
         <div className='home-top-section'>
        <div className='home-top-left'><img src='https://www.hammockholidays.com/assets/images/common/logo.svg'/></div>
            <div className='home-top-middle'>26 Yrs of creating<span>Magical Experiences</span>
            <p>Holidays & Gifts . Virtual Events . Corporate Deals and a lot more</p>
            {props.input}
            </div>
            <div className='home-top-right'>
              {!searchBar && 
              <button className='btn-HiBars3' onClick={onclickHandler}>  
              <HiBars3 className='HiBars3'/></button>
              }
              {searchBar ? <div><Dropdown   navListData={props.navListData}/></div>:null}
              </div>
        </div>
    </div>
  )
}

export default Banner