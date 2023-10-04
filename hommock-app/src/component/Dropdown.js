import React from 'react'
import {BsHouseDoor} from'react-icons/bs'
import {SiCitrix} from 'react-icons/si'
import {BiUser} from 'react-icons/bi'
import "./Dropdown.css"
function Dropdown(props) {
    // console.log("dsfcgguhhsufguishuieh",props.navListData)
  
  return (
    <div className='container-Dropdown'>
        <div className='dropdown-container' style={{display:"flex"}}>
            <div className='BsHouseDoor'><BsHouseDoor className='BsHouseDoor1' /></div>
            <div className='hommock'>Hommock</div>
            <div className='BsHouseDoor'><SiCitrix className='BsHouseDoor1 '/></div>
        </div>
        <div className='guest-container'style={{display:"flex"}}><div className='span-guest'><BiUser/></div><div className='guest-text'>Guest Profile</div>
        </div>
        <div className='login-container'>
            <button className='login-btn'>Login</button>
            <button className='sing-up-btn'>Sing Up</button>
            <p style={{color:"blue"}}>Login as a corporate employee</p>
            <hr className='hr' width="300px" />
        </div>
        <ul className='ul1' >
                    {props.navListData.map((item)=>{
                        console.log("item",item)
                        return(
                            <li className='li1'> {item.name}</li>
                        )
                    })}
            
                </ul>
    
        
    </div>
  )
}

export default Dropdown