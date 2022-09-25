import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PostComponent from '../components/Post'

const Post = () => {

  const [backendTitle, setBackendTitle] = useState('')

  let {title} = useParams();

  useEffect(() => {
    fetch(`/api/post/${title}`).
      then(response => response.json()).
      then(data => setBackendTitle(data)).catch(error => setBackendTitle(error))
  }, [])

  return (
    <div className='Post-website'>
        {backendTitle}
    </div>
  )
}

export default Post