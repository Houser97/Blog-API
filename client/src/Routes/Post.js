import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PostComponent from '../components/PostComponent'
import '../styles/Post.css'

const Post = () => {

  const [backendPost, setBackendTitle] = useState('')
  const [isPost, setIsPost] = useState(false)

  let {title} = useParams();

  useEffect(() => {
    fetch(`https://blog-api-k3qd.onrender.com/api/post/${title}`).
      then(response => response.json()).
      then(data => {
        setBackendTitle(data)
        setIsPost(true)
        window.scrollTo(0,0)
      }).catch(() => setBackendTitle('error'))
  }, [])

  /*
  useEffect(() => {
    console.log(backendPost)
  }, [backendPost])
 */

  return (
    <div className='Post-website'>
        <Navbar isInHome = {false} isInLogIn = {false}/>
        {!isPost ? <div className='loading-post'>Loading...</div> : <PostComponent post = {backendPost.post} comments = {backendPost.comments}/>}
        <Footer />
    </div>
  )
}

export default Post