import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-item logo'>My Blog-API</div>
        <div className='navbar-item a-links'>
            <a className='link-navbar'>Home</a>
            <a className='link-navbar'>Posts</a>
        </div>
    </nav>
  )
}

export default Navbar