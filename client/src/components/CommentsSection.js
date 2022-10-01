import React from 'react'
import '../styles/commentsSection.css'

const CommentsSection = () => {
  return (
    <div className='comments-section'>
        <form className='create-comment-form'>
            <textarea className='textarea' placeholder='Write a comment'></textarea>
            <button className='submit-comment'>Submit</button>
        </form>
    </div>
  )
}

export default CommentsSection