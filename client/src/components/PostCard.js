import React, { useEffect, useState } from 'react'
import '../styles/postCard.css'
import { DateTime } from 'luxon';

const PostCard = ({title, timestamp}) => {

    const [formattedDate, setFormattedDate] = useState(timestamp);

    useEffect(() => {
        setFormattedDate(prev => DateTime.fromJSDate(prev).toLocaleString(DateTime.DATE_MED))
    }, [])
    
    return (
    <div className='postCard'>
        <div className='title-post-card item-card'>{title}</div>
        <div className='timestamp-post-card item-card'>{formattedDate}</div>
    </div>
    )
}

export default PostCard