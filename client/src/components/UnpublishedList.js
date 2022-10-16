import React, { useEffect, useState } from 'react'
import '../styles/UnpublishedList.css'
import PostCard from './PostCard'

const UnpublishedList = () => {

    const [UnpublishedPosts, setUnpublishedPosts] = useState(null)
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        fetch('/api/unpublished-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.token}`
            }
        })
        .then(response => response.json())
        .then(data => setUnpublishedPosts(data))
    }, [])
    
  return (
    <div className='unpublished-list-container'>
        {UnpublishedPosts !== null ? (
            UnpublishedPosts.length > 0 ? (
                <div className='unpublished-list'>
                    {UnpublishedPosts.map((post, index) => {
                        return(
                            <PostCard key={`unpublished-${index}`} {...post}/>
                        )
                    })}
                </div>
            ):(
                <div className='error'>There was an error</div>    
            )
        ):(
            <div className='loading-posts'>Loading ...</div>
        )}
    </div>
  )
}

export default UnpublishedList