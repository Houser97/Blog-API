import React, { useEffect } from 'react'
import '../styles/commentsSection.css'

const CommentsSection = ({idPost}) => {
  useEffect(() =>{
    console.log(idPost)
  })
  return (
    <div className='comments-section'>
        <form className='create-comment-form'>
            <textarea className='textarea' placeholder='Write a comment'></textarea>
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