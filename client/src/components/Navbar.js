import React, { useState } from 'react'
import '../styles/navbar.css'

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('')

    return (
    <nav className='navbar'>
        <div className='navbar-item logo'>My Blog-API</div>
        <div className='navbar-item a-links'>
            <a className={`link-navbar first-navbar-link 
            ${activeLink === 'Home' ? 'activeLink' : ''}`} 
            onClick={() => setActiveLink('Home')}>Home</a>

            <a className={`link-navbar ${activeLink === 'Posts' ? 'activeLink' : ''}`} 
            onClick={() => setActiveLink('Posts')}>Posts</a>
        </div>
    </nav>
    )
}

export default Navbar