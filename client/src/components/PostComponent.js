import React, { useEffect, useState } from 'react'
import '../styles/PostComponent.css'
import moment from 'moment'

const PostComponent = ({title, body, timestamp}) => {

  const [formattedTime, setFormattedTime] = useState(timestamp)

  useEffect(() => {
    setFormattedTime(moment(timestamp).format('MMMM Do yyyy'))
  }, [])
  

  return (
    <div className='post-component'>
        <h2 className='post-component-title'>{title}</h2>
        <div className='post-component-body'>{body}</div>
        <div className='post-component-timestamp'>{formattedTime}</div>
    </div>
  )
}

export default PostComponent