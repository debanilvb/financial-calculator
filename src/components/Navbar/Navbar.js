/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Redirect } from "react-router";
import { Button } from "./Button";


function Navbar() {
  const [click, setClick] = useState(false);
  
  

  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [dropdown, setDropdown] = useState(false);

  const [showList, setShowList] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  
   

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 47) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/misc/logo.svg" />

          {/* <div className="logo-img"></div> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <img src={click ? "./images/icons/close.png" : "./images/icons/menu.png"} />
        </div>

  
            
              
          
        <button className="nav-links-mobile">
         Login
        </button>
        

        

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/mutual_funds" className="nav-links" onClick={closeMobileMenu}>
              Mutual Funds
            </Link>
          </li>


          <li className="nav-item">
            <Link to="/insurance" className="nav-links" onClick={closeMobileMenu}>
              Insurance
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/loans" className="nav-links" onClick={closeMobileMenu}>
              Loans 
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/education" className="nav-links" onClick={closeMobileMenu}>
              Education
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
              Media
            </Link>
          </li>

          

          <li className="nav-item">
            <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
        </ul>

        <div className="button-div">
         
            
           
            
            <button className="login-btn-main"  >
              Login
              <img src="/images/icons/login.png" />{" "}
            </button>

            
            
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
