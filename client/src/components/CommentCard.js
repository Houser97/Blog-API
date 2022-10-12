import React from 'react'
import '../styles/CommentCard.css'

const CommentCard = ({username, timestamp, comment}) => {
  return (
    <div className='comment-card'>
        <div className='username-comment-dov'>{username}</div>
        <div className='time-comment-divs'>
            <div className='timestamp-comment-div comment-div'>{comment}</div>
            <div className='comment-comment-div comment-div'>{timestamp}</div>
        </div>
    </div>
  )
}

export default CommentCard