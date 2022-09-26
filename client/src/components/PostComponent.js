import React from 'react'
import '../styles/PostComponent.css'

const PostComponent = ({title, body, timestamp}) => {
  return (
    <div className='post-component'>
        <h2 className='post-component-title'>{title}</h2>
        <div className='post-component-body'>{body}</div>
        <div className='post-component-timestamp'>{timestamp}</div>
    </div>
  )
}

export default PostComponent