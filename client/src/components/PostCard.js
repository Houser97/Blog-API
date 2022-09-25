import React, { useEffect, useState } from 'react'
import '../styles/postCard.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

const PostCard = ({title, timestamp}) => {

    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTitle, setFormattedTitle] = useState('');

    useEffect(() => {
        setFormattedDate(moment(timestamp).format('MMM Do yyyy'))
        setFormattedTitle(title.replace(/\s/g, '-'))
    }, [])
    
    return (
    <Link to={`post/${formattedTitle}`} className = 'Link-Router'>
        <div className='postCard'>
            <div className='title-post-card item-card'>{title}</div>
            <div className='timestamp-post-card item-card'>{formattedDate}</div>
        </div>
    </Link>
    )
}

export default PostCard