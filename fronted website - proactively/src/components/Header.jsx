import React, { useState } from "react";
import './Header.css';
import { logo } from "../assets/imports";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="ProVital Logo" />
      </div>
      
      <nav className="nav desktop-nav">
        <a href="#">List your practice</a>
        <a href="#">For Employers</a>
        <a href="#">Courses</a>
        <a href="#">Books</a>
        <a href="#">Speakers</a>
        <a href="#">Doctors</a>
        <div className="dropdown">
          <a href="#" style={{ border: "none" }}>Login/Signup <i class="fa-solid fa-chevron-down"></i></a>
          <div className=" dropdown-content">
          <a href="#" >Doctor <span  style={{marginLeft:"30px"}} className="logsign">Login<span style={{margin:"50px"}}>Signup</span></span> </a>
          <a href="#"  style={{borderBottom:"none"}}>Patient<span  style={{marginLeft:"30px"}} className="logsign">Login<span style={{margin:"50px"}}>Signup</span></span></a>
          </div>
        </div>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      <nav className={`nav mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="ProVital Logo" className="mobile-logo" />
          <button className="close-menu" onClick={toggleMenu}>&times;</button>
        </div>
        <div className="auth-links">
          <a href="#">Doctor <span className="logsign">Login<span style={{margin:"50px"}}>Signup</span></span> </a>
          <a href="#"  style={{borderBottom:"none"}}>Patient<span className="logsign">Login<span style={{margin:"50px"}}>Signup</span></span></a>

        </div>
        <a href="#">Doctors <span className="arrow">&#8594;</span></a>
        <a href="#">List your practice <span className="arrow">&#8594;</span></a>
        <a href="#">For Employers <span className="arrow">&#8594;</span></a>
        <a href="#">Courses <span className="arrow">&#8594;</span></a>
        <a href="#">Books <span className="arrow">&#8594;</span></a>
        <a href="#">Speakers <span className="arrow">&#8594;</span></a>
      </nav>

      <div className={`overlay ${isMenuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
    </header>
  );
}

export default Header;
