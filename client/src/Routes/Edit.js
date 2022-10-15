import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Edit = () => {

    const [post, setPost] = useState(null)
    const {title} = useParams()

    useEffect(() => {
        fetch(`/api/post/${title}`)
        .then(response => response.json())
        .then(data => setPost(() => data))
        .catch(() => setPost(null))
    }, [])


  return (
    <div className='Edit-page'>
        <Navbar isInHome={false} isInLogIn = {false} />
        <Footer />
    </div>
  )
}

export default Edit