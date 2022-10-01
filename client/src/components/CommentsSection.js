import React from 'react'
import '../styles/commentsSection.css'

const CommentsSection = ({title}) => {
  return (
    <div className='comments-section'>
        <form className='create-comment-form'>
            <textarea className='textarea' placeholder='Write a comment'></textarea>
            <input type='hidden' value={title} name = 'post-title'></input>
            <button className='submit-comment'>Submit</button>
        </form>

        <div className='comments-area'>
          Here goes comments
        </div>
    </div>
  )
}

export default CommentsSection