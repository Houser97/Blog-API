import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PostComponent from '../components/PostComponent'

const Post = () => {

  const [backendPost, setBackendTitle] = useState('')

  let {title} = useParams();

  useEffect(() => {
    fetch(`/api/post/${title}`).
      then(response => response.json()).
      then(data => setBackendTitle(data)).then(console.log(backendPost.post)).catch(() => setBackendTitle('error'))
  }, [])

  return (
    <div className='Post-website'>
        <Navbar />
        {backendPost === '' ? '' : <PostComponent {...backendPost.post[0]} />}
        <Footer />
    </div>
  )
}

export default Post