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
                        <a href = '/' className='link-navbar first-navbar-link'>Home</a>
                        <a href = '/unpublished-posts' className='link-navbar first-navbar-link'>Unpublished</a>
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
        <div className='svg-responsive-nav'>
            <svg className='svg-burger svg-responsive' viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
            <svg className='svg-close svg-responsive' viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </div>
    </nav>
    )
}

export default Navbar