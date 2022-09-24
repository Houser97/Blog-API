import React from 'react'
import '../styles/postCard.css'

const PostCard = ({title, timestamp}) => {
  return (
    <div className='postCard'>
        <div className='title-post-card item-card'>{title}</div>
        <div className='timestamp-post-card item-card'>{timestamp}</div>
    </div>
  )
}

export default PostCard