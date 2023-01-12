import React from 'react'
import './navbar.css';
// import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

// BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className="skillup__navbar">
      <div className="skillup__navbarlinks">
        <div className="skillup__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
