import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'
const Header = () => {
  return (
    <nav>
        <div id='img_box'><img src={logo} alt='graphics'/></div>
        <ul>
            <li><Link to={"/"}><button>Home</button></Link></li>
        </ul>
    </nav>
  )
}

export default Header
