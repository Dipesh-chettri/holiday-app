import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const NavLink = (props) => {
  console.log("props",props)
  return (<div className='nav-containr'>
    <ul style={{paddingbutton:"20px"}}>{props.navListData.map(item => {
        return(
           
            <Link to={item.path} className='underline'><li key={item.id} >{item.name} </li></Link>
        )
        })}</ul></div>
  )
}

export default NavLink