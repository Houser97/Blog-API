import React, { useEffect, useState } from 'react'
import '../styles/commentsSection.css'

const CommentsSection = ({idPost}) => {

  const [comment, setComment] = useState('')

  useEffect(() =>{
    console.log(idPost)
  })

  const createCommentAPI = (e) => {
    e.preventDefault()
    fetch('/api/post/create-comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({comment})
    })
  }

  return (
    <div className='comments-section'>
        <form className='create-comment-form' onSubmit={(e) => createCommentAPI(e)}>
            <div className='comment-form-div'>
              <label htmlFor='username-comment' className='username-comment-label comment-item'>Username:</label>
              <input id='username-comment' className='input-comment comment-item'></input>
            </div>
            <textarea className='textarea' placeholder='Write a comment'
            onChange={(e) => setComment(e.target.value)}></textarea>
            <input type='hidden' value={idPost} name = 'idPost'></input>
            <button className='submit-comment'>Submit</button>
        </form>

        <div className='comments-area'>
          Here goes comments
        </div>
    </div>
  )
}

export default CommentsSection