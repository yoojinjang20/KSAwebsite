import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from './navbar-logo.png';

console.log(logo);
function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    
    return(
        <>
            <nav className="NavBarItems">

                <div className="menu-icon" id="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                    
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                     </li>
                    <li className="nav-item">
                         <Link
                              to="/About Us"
                                className="nav-links"
                                onClick={closeMobileMenu}
                        >
                            About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Activities"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Activities/Clubs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Information"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Information
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Sponsorships"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Sponsorships
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Log in"
                            className="nav-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            Log in
                        </Link>
                    </li>
                </ul>
            
                    
  
            </nav>
        </>

        
        )
    }


export default NavBar;