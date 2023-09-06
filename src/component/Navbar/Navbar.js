import React, { useState, useEffect } from "react";
import Typed from 'typed.js';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import {Link} from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    useEffect(() => {
        // Your Typed.js configuration goes here
        const options = {
            strings: ['Welcome to the Mental Health Tracker where you can get information about the different mental health disorders.'],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        };

        const typed = new Typed('.typed', options);

        // Clean up the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div class="main">
                <nav className="navbar">
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            Government of India
                            <i className="fas fa-code"></i>
                        </NavLink>

                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink exact to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact to="/blog"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contact"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contact"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Donate
                                </NavLink>
                            </li>
                            
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>
                </nav>
                <div class="abc">
                    <div class="content">
                        <span className="typed"></span>
                        <br />
                        <br />
                        <Link to="/Auth" className="typed" href="/Auth">JOIN US</Link>
                    </div>
                    <div>
                        <img src="depretion.png"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
