import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UnpublishedList from '../components/UnpublishedList'

const UnpublishedPosts = () => {
  return (
    <div className='unpublished-container'>
        <Navbar />
        <UnpublishedList />
        <Footer />
    </div>
  )
}

export default UnpublishedPosts