import React, {useState} from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

// BEM -> Block Element Modifier

const Navbar = () => {
 const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wskillup">What is Skillup?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
 )
 const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="skillup__navbar">
      <div className="skillup__navbarlinks">
        <div className="skillup__navbarlinks_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="skillup__navbarlinks_container">
          <Menu />
        </div>
      </div>
      <div className="skillup__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="skillup__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <div className="skillup__navbar-menu_container scale-up-center">
          <div className="skillup_navbar-menu_container-links">
            <Menu />
            <div className="skillup__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
