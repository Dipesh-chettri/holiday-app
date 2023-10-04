import React from 'react'
import {CiSearch} from 'react-icons/ci'

function Search() {
  return (
    <div><span> <span className='span-input'><button className='CiSearch'><CiSearch/></button>
    <input className='input1' type="text" placeholder='What is on your mind'/></span>
    <button className='btn1'>search</button>
  </span></div>
  )
}

export default Search