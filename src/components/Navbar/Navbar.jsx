import React from 'react';
import { useState } from 'react';
import Styles from "./NavbarStyle.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
        <nav className={Styles.navbar}>
            <a className={Styles.title} href="/">TimelessElegance</a>
            <div className={Styles.menu}>
                <FontAwesomeIcon
                    icon={menuOpen ? faTimes : faBars}
                    size="2x"
                    className={Styles.menuBtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${Styles.menuItems} ${menuOpen ? Styles.menuOpen : ''}`}>

                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Collection">Collection</a></li>
                    <li><a href="#shop">shop</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    
                </ul>
            </div>
        </nav>
    );
}