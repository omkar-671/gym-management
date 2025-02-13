import React from 'react'
import './Navbar.css'
import navlogo from '../../../../client/src/Components/Assets/gym_logo.png'
import navProfile from '../../assets/nav-profile.svg' 

const Navbar = () => {
  return (
    <div className='navbar'>
        <img  style={{height:"60px", }} src={navlogo} alt="" className="nav-logo" />

        <div className='panel'>
          <p>Admin panel</p>
        </div>
    </div>
    
  )
}

export default Navbar