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
      then(data => setBackendTitle(data)).catch(() => setBackendTitle('error'))
  }, [])

  useEffect(() => {
    console.log(backendPost)
  }, [backendPost])

  return (
    <div className='Post-website'>
        <Navbar isInHome = {false} />
        {backendPost === '' ? '' : <PostComponent PostAndComments = {backendPost} />}
        <Footer />
    </div>
  )
}

export default Post