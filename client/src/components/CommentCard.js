import React from 'react'
import '../styles/CommentCard.css'
import moment from 'moment'

const CommentCard = ({data}) => {
    const {username, comment, timestamp} = data
    const formattedTime = moment(timestamp).format('MMMM Do yyyy HH:mm');

  return (
    <div className='comment-card'>
        <div className='username-comment-div'>{username}</div>
        <div className='time-comment-divs'>
            <div className='comment-comment-div comment-div'>{comment}</div>
            <div className='timestamp-comment-div comment-div'>{formattedTime}</div>
        </div>
    </div>
  )
}

export default CommentCard