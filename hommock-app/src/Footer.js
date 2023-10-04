import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {MdAddIcCall} from 'react-icons/md'
import NavLink from './component/navLink';
import {AiOutlineMail} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import "./Footer.css"

function Footer(props) {
  return (
    <div className='footer-container'>
        <footer>
            <div className='footer-left-side'>
                <img src='https://www.hammockholidays.com/assets/images/common/logo.svg' className='footer-top-left'/>
                <p>Hammock group companies are headquartered in Bengaluru, Karnataka, India. Over the past 26 years we have diversified into Travel & Hospitality, Destination.</p>
                <div style={{marginLeft:"-10px"}}><span ><FaFacebookSquare /></span><span><BsInstagram /></span></div>
            </div>
            
            <div className='footer-nav-link'>
                <p className='pagrap'>Survices</p>
                < NavLink  navListData={props.navListData} />
                </div>
            <div className='footer-right'><ul>
                <li><h5>Careers</h5></li>
                <li>About Us</li>
                <li>Contact</li>
                <li><MdAddIcCall /> +918001442970</li>
                <li><AiOutlineMail /> dipesh8158095677@gmail.com</li>
                <li> <IoLocationOutline/>3291,1st Floor, 12th Main, HAL II
                    Stage, Inderanagar,Bengaluru,Karnataka 560008</li></ul></div>
        </footer>
    </div>
  )
}

export default Footer;