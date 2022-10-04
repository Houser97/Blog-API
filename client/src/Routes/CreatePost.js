import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/CreatePost.css'

const CreatePost = () => {
  return (
    <section className='CreatePost-section'>
        <Navbar isInHome={false} />
        CreatePost
        <Footer />
    </section>
  )
}

export default CreatePost