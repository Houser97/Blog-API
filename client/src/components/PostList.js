import React, { useEffect, useState } from 'react'
import '../styles/postList.css'
import PostCard from './PostCard';

const PostList = () => {

  const[backendPosts, setBackendPosts] = useState('');

  useEffect(() => {
    fetch('/api/posts').
        then(response => response.json()).
        then(data => setBackendPosts(data)).
        catch(() => setBackendPosts('There was an error.'))
  }, [])

  return (
    <section className='posts'>
        {backendPosts === '' || backendPosts === 'There was an error' ? 
        'There was an error' : 
        backendPosts.map((post, index) => {
          return(
            <PostCard key={`post-key-${index}`} {...post}/>
          )
        })}
    </section>
  )
}

export default PostList