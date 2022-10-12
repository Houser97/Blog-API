import React, { useEffect, useState } from 'react'
import '../styles/commentsSection.css'
import CommentCard from './CommentCard'

const CommentsSection = ({title, commentInfo}) => {

  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')
  const [commentData, setCommentData] = useState(null)

  useEffect(() => {
    if(commentInfo !== null) setCommentData([...commentInfo])
  }, [])

  const createCommentAPI = (e) => {
    e.preventDefault()
    if(!username || !comment) return false;
    fetch('/api/post/create-comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, comment, title})
    })
  }

  return (
    <div className='comments-section'>
        <form className='create-comment-form' onSubmit={(e) => createCommentAPI(e)}>
            <div className='comment-form-div'>
              <label htmlFor='username-comment' className='username-comment-label comment-item'>Username:</label>
              <input id='username-comment' className='input-comment comment-item'
              onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <textarea className='textarea' placeholder='Write a comment'
            onChange={(e) => setComment(e.target.value)}></textarea>
            {/*<input type='hidden' value={idPost} name = 'idPost'></input>*/}
            <button className='submit-comment'>Submit</button>
        </form>

        <div className='comments-area'>
          {commentData !== null ? (
            commentData.map(function(comment,index){
              return(
                <CommentCard key={`comment-${index}`} data = {comment}></CommentCard>
              )
            })
          ):(<div>
            There are no comments for this Post
          </div>)}
        </div>
    </div>
  )
}

export default CommentsSection