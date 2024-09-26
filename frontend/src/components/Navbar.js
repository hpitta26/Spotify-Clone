import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import HomeIcon from './icons/HomeIcon'

function Navbar() {
  
    return (
      <nav className='nb-whole'>
            {/* Navbar */}
            <div class="nb1">Logo</div>
            <div class="nb2">
              <HomeIcon /> Search Bar
            </div>
            <div class="nb3">Profile</div>
      </nav>    
    )
  }
  
  export default Navbar