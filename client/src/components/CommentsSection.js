import React, { useEffect, useState } from 'react'
import '../styles/commentsSection.css'
import CommentCard from './CommentCard'

const CommentsSection = ({title, commentInfo}) => {

  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('') // Estado que guarda comentario creado por el formulario.
  const [commentData, setCommentData] = useState(null) // Estado que guarda arreglo con los comentarios de este Post.

  useEffect(() => {
    if(commentInfo !== null && commentInfo.length > 0) setCommentData([...commentInfo])

    return () => {
      setCommentData(() => null)
    }
  }, [])

  const createCommentAPI = (e) => {
    if(!username || !comment) return false;
    fetch('https://blog-api-k3qd.onrender.com/api/post/create-comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, comment, title})
    })
    .then(response => response.json())
    .then(response => console.log(response))
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
          ):(<div className='no-comments'>
            There are no comments for this Post.
          </div>)}
        </div>
    </div>
  )
}

export default CommentsSection