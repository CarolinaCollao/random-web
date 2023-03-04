import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeClass="active" to="page1" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu} >Page 1</Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeClass="active" to="page2" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu} >Page 2</Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeClass="active" to="page3" spy={true} smooth={true} offset={50} duration={500}   onClick={closeMenu} >Page 3</Link>
                    </li>
                    <li className='nav-item'>
                        <Link activeClass="active" to="fotter" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu} >Footer</Link>
                    </li>
                </ul>
            </nav >
        </div >
    )
}

export default Navbar