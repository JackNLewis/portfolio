import "../styles/navBar.css"
import React, { useState } from 'react';
import Hamburger from "./Hamburger"
import { Link, animateScroll } from 'react-scroll'

function NavBar(){
    
    const [isMenuOpen, setMenuOpen] = useState(true);

    function openMenu(){
        setMenuOpen(!isMenuOpen);
    }


    return(
        <div className={isMenuOpen ? "nav-container opened" : "nav-container"}>
            <div className="nav-heading">
                <Hamburger menuFunc={openMenu} open={isMenuOpen} />
                <h1 style={{cursor: "pointer"}} onClick={() => setMenuOpen(true)}><span onClick={animateScroll.scrollToTop}>Jack Lewis</span></h1>
            </div>
            <ul>
                <li>
                    <Link activeClass="selected" spy={true} smooth={true} to="hero-container" duration={500} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <h2>Home</h2>
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" spy={true} smooth={true} to="about-container" duration={500} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <h2>About</h2>
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" spy={true} smooth={true} to="skills-container" duration={500} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <h2>Skills</h2>
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" spy={true} smooth={true} to="portfolio-container" duration={500} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <h2>Portfolio</h2>
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" spy={true} smooth={true} to="contact-container" duration={500} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <h2>Contact</h2>
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default NavBar;