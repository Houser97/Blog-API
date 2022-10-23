import React, { useEffect, useState } from 'react'
import '../styles/postList.css'
import PostCard from './PostCard';

const PostList = () => {

  const[backendPosts, setBackendPosts] = useState('');
  const [postClass, setPostClass] = useState(false)

  useEffect(() => {
    fetch('/api/posts').
        then(response => response.json()).
        then(data => {
          setBackendPosts(data)
          setPostClass(true)
        }).
        catch(() => setBackendPosts('There was an error.'))
  }, [])

  return (
    <section id='posts' className={`${postClass ? 'posts':'no-posts'}`}>
        {backendPosts === '' || backendPosts === 'There was an error' ? 
        <div className='error-posts'>
          Loading...
        </div> : 
        backendPosts.map((post, index) => {
          return(
            <PostCard key={`post-key-${index}`} {...post}/>
          )
        })}
    </section>
  )
}

export default PostList