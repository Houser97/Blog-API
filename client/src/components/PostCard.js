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
    <div className='postCard'>
        <div className='title-post-card item-card'>{title}</div>
        <div className='timestamp-button'>
            <Link to={`post/${formattedTitle}`} className = 'Link-Router'>
                <button className='read'>Read</button>
            </Link>
            <div className='timestamp-post-card item-card'>{formattedDate}</div>
        </div>
    </div>
    )
}

export default PostCard