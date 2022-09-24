import React, { useEffect, useState } from 'react'
import '../styles/postCard.css'
import moment from 'moment'

const PostCard = ({title, timestamp}) => {

    const [formattedDate, setFormattedDate] = useState(timestamp);

    useEffect(() => {
        setFormattedDate(moment(timestamp).format('MMM Do yyyy'))
    }, [])
    
    return (
    <div className='postCard'>
        <div className='title-post-card item-card'>{title}</div>
        <div className='timestamp-post-card item-card'>{formattedDate}</div>
    </div>
    )
}

export default PostCard