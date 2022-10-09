import React, { useContext, useState } from 'react'
import '../styles/navbar.css'
import { isTokenContext } from '../RouteSwitch'

const Navbar = ({isInHome}) => {

    const [activeLink, setActiveLink] = useState('')
    const [isToken] = useContext(isTokenContext)

    return (
    <nav className='navbar'>
        <div className='navbar-item logo'>My Blog-API</div>
        {isInHome ? (
            <div className='navbar-item a-links'>
                <a href = '#home' className={`link-navbar first-navbar-link 
                ${activeLink === 'Home' ? 'activeLink' : ''}`} 
                onClick={() => setActiveLink('Home')}>Home</a>

                <a href = '#posts' className={`link-navbar ${activeLink === 'Posts' ? 'activeLink' : ''}`} 
                onClick={() => setActiveLink('Posts')}>Posts</a>

                {isToken ? ( <a href='/create-post' className='create-link'>Create</a>):(
                    <a href='/login' className='sign-in'>Log in</a>
                )}
            </div>
        ) : (
            <div className='navbar-item a-links'>
                <a href = '/' className={`link-navbar first-navbar-link`}>Home</a>
            </div>
        )}
    </nav>
    )
}

export default Navbar