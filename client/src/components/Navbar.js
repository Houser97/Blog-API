import React, { useContext, useState } from 'react'
import '../styles/navbar.css'
import { isTokenContext } from '../RouteSwitch'

const Navbar = ({isInHome, isInLogIn}) => {

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

                {isToken ? ( 
                    <div className='token-home'>
                        <a href = '/unpublished-posts' className='unpublished-link'>Unpublished</a>
                        <a href='/create-post' className='create-link'>Create</a>
                    </div>
                ):(
                    <a href='/login' className='sign-in'>Log in</a>
                )}
            </div>
        ) : (
            isInLogIn ? (
                <div className='navbar-item a-links'>
                    <a href = '/' className={`link-navbar first-navbar-link`}>Home</a>
                </div>
            ):(
                isToken ? ( 
                    <div className='navbar-item a-links'>
                        <a href = '/' className={`link-navbar first-navbar-link`}>Home</a>
                        <a href = '/unpublished-posts' className={`link-navbar first-navbar-link`}>Unpublished</a>
                        <a href='/create-post' className='create-link'>Create</a>
                    </div>
                    ):(
                    <div className='navbar-item a-links'>
                        <a href = '/' className={`link-navbar first-navbar-link`}>Home</a>
                        <a href='/login' className='sign-in'>Log in</a>
                    </div>
                )
            )
        )}
    </nav>
    )
}

export default Navbar