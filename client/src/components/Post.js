import React from 'react'
import '../styles/PostComponent.css'

const PostComponent = ({title, body, timestamp}) => {
  return (
    <div className='post-component'>
        <div className='post-component-title'>{title}</div>
        <div className='post-component-body'>{body}</div>
        <div className='post-component-timestamp'>{timestamp}</div>
    </div>
  )
}

export default PostComponent