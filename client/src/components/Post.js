import React from 'react'
import TitlePost from './TitlePost'

const PostComponent = ({title, body, timestamp, comments}) => {
  return (
    <div className='post-component'>
        <TitlePost title = {title}/>
    </div>
  )
}

export default PostComponent