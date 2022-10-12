import React, { useEffect, useState } from 'react'
import '../styles/PostComponent.css'
import moment from 'moment'
import CommentsSection from './CommentsSection'
import HTMLReactParser from 'html-react-parser'

const PostComponent = ({PostAndComments}) => {

  const {title, body, timestamp} = PostAndComments.post[0]
  const [comments, setComments] = useState(null)

  const [formattedTime, setFormattedTime] = useState(timestamp)
  //const [bodyParsed, setBodyParsed] = useState(new DOMParser().parseFromString(body, 'text/xml'))

  useEffect(() => {
    setFormattedTime(moment(timestamp).format('MMMM Do yyyy HH:ss'))
    if(PostAndComments.comments.length){
      if(PostAndComments.comments.length > 0) setComments(() => [...PostAndComments.comments])
    } 
  }, [])

  return (
    <div className='post-component'>
      <div className='post-component-article'>
        <h2 className='post-component-title'>{title}</h2>
        <div className='post-component-body'>{HTMLReactParser(body)}</div>
        <div className='post-component-timestamp'>{formattedTime}</div>
      </div>

      <CommentsSection title = {title} commentInfo = {comments}/>
    </div>
  )
}

export default PostComponent