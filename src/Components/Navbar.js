import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <FaCoins className='icon' />
        <h1> Crypto <span className='purple'>Overseer</span>
        </h1>
        <div className='items'>
            <h3 className='navbar-items'>Portfolio</h3>
            <h3 className='navbar-items'>Buy</h3>
            <h3 className='navbar-items'>Settings</h3>
        </div>
        
    </div>
  )
}

export default Navbar