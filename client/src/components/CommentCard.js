import React, { useEffect } from 'react'
import '../styles/CommentCard.css'

const CommentCard = ({data}) => {
    const {username, comment, timestamp} = data
    useEffect(() => {
        console.log('Im here')
        console.log(data)
    }) 
  return (
    <div className='comment-card'>
        <div className='username-comment-div'>{username}</div>
        <div className='time-comment-divs'>
            <div className='timestamp-comment-div comment-div'>{comment}</div>
            <div className='comment-comment-div comment-div'>{timestamp}</div>
        </div>
    </div>
  )
}

export default CommentCard