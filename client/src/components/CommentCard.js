import React, { useContext, useState } from 'react'
import '../styles/CommentCard.css'
import moment from 'moment'
import { isTokenContext } from '../RouteSwitch'

const CommentCard = ({data}) => {
    const {username, comment, timestamp, _id} = data
    const formattedTime = moment(timestamp).format('MMMM Do yyyy HH:mm');
    const token = JSON.parse(localStorage.getItem('token'));
    const [showMsg, setshowMsg] = useState(false);
    const [isToken] = useContext(isTokenContext);

    const DeleteCommentAPI = (e) => {
      fetch(`https://blog-api-k3qd.onrender.com/api/comment/delete/${_id}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.token}`
          },
          body: JSON.stringify({_id})
      })
      .then(response => response.json())
      .then(data => {
          if(data !== 'Removed') e.preventDefault();
      })
    }

    const handleDeleteMsg = () => {
        setshowMsg((prev) => !prev)
    }

  return (
    <div className='comment-card'>
        {isToken ? (
              <div className='container-delete-comment' onClick={() => handleDeleteMsg()}>
                  <svg className='svg-edit-delete-MSG' viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                  </svg>
              </div>
          ):(
              <div className='container-edit-delete-No-Token'></div>
          )}
        <form method='DELETE' className={`msg-are-u-sure-MSG ${showMsg ? 'showMsg' : ''}`}
        onSubmit={(e) => DeleteCommentAPI(e)}>
            Are you sure you want to delete this comment?
            <div className='buttons-are-u-sure-MSG'>
                <button className='btn-form-sure yes-btn msg-yes'>Yes</button>
                <div className='btn-form-sure no-btn' onClick={() => handleDeleteMsg()}>No</div>
            </div>
        </form>
        <div className='username-comment-div'>Username: {username}</div>
        <div className='time-comment-divs'>
            <div className='comment-comment-div comment-div'>{comment}</div>
            <div className='timestamp-comment-div comment-div'>{formattedTime}</div>
        </div>
    </div>
  )
}

export default CommentCard