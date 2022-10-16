import React from 'react'
import Navbar from '../components/Navbar'
import UnpublishedList from '../components/UnpublishedList'
import '../styles/UnpublishedPosts.css'

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