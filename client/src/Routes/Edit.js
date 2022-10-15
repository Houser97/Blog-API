import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Edit = () => {
  return (
    <div className='Edit-page'>
        <Navbar isInHome={false} isInLogIn = {false} />
        <Footer />
    </div>
  )
}

export default Edit