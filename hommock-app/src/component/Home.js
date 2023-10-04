import React, { useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import {HiBars3} from 'react-icons/hi2'
import NavLink from './navLink'
import App from '../App'
import Search from './Search'
import Dropdown from './Dropdown'
import "./Home.css"
import HomeImage from '../HomeImage'
import Footer from '../Footer'

let data=[{name:"home",title:"bfjf"}]
function Home({navListData}) {
  const[searchBar,setSearchBar]=useState(false);
  console.log("sshjhsj",searchBar)
  const input= <span> <span className='span-input'><button className='CiSearch'><CiSearch/></button>
  <input className='input1' type="text" placeholder='What is on your mind'/></span>
  <button className='btn1'>search</button>
</span>
 
 const onclickHandler=()=>{
  setSearchBar(true)
 }

  return (
    <div className='Home-container'>
        <div className='home-top-section'>
            <div className='home-top-left'><img src='https://www.hammockholidays.com/assets/images/common/logo.svg'/></div>
            <div className='home-top-middle'>26 Yrs of creating<span>Magical Experiences</span>
            <p>Holidays & Gifts . Virtual Events . Corporate Deals and a lot more</p>
            {input}
            </div>
            <div className='home-top-right'>
              
              <button className='btn-HiBars3' onClick={onclickHandler}>  
              <HiBars3 className='HiBars3'/></button>
              
             
              </div>
        </div>
        <div className='nav'>
          <NavLink navListData={navListData} />
        </div>
        <div className='home-body' style={{display:"flex"}}>
          <div className='image-card'>
            <div className='card-center'><span className='reward'>Reward</span> Your Enployers</div>
          </div>
          <div style={{margin:"20px",width:"100%", height:"450px"}}>
            <div className='row' style={{width:"800px"}}>
              <div className='col'><div className='coll-1'> <div className='deals'>Deals</div></div></div>
              <div className='col'><div className='coll-2'> <div className='deals4'><span className='Customize'>Customize</span>
              <br/> <span className='MyHoliday'>My Holiday</span></div></div></div>
              <div className='col' style={{height:"250px",width:"220px"}}><div className='coll-3'>
                 <div className='Bharat'>Bharat Dekho</div></div></div>
            </div>
            <div style={{width:"800px",backgroundColor:"white"}}>
            <div className='row' style={{width:"800px",backgroundColor:"white"}} >
              <div className='coll4'> <div className='deals4'>Fun Outdoor Activity</div></div>
            <div className='coll5'> <div className='deals2'>Visas && More</div></div>
            <div className='coll6'> <div className='deals2'>International Holiday</div></div>
              
            </div>
            </div>
          </div>
        </div>
        <div>
          <div>
           <h3 className='h3'>Experience <span style={{color:"black"}}>something new</span></h3>
          </div>
          <HomeImage />
          </div>
          <Footer navListData={navListData}/>
    </div>
  )
}

export default Home;