import React, { useContext, useEffect, useState } from 'react'
import '../styles/postCard.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { isTokenContext } from '../RouteSwitch';


const PostCard = ({title, timestamp}) => {

    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTitle, setFormattedTitle] = useState('');
    const [isToken] = useContext(isTokenContext)

    useEffect(() => {
        setFormattedDate(moment(timestamp).format('MMM Do yyyy'))
        setFormattedTitle(title.replace(/\s/g, '-'))
    }, [])
    
    return (
    <div className='postCard'>
        {isToken ? (
            <div className='container-edit-delete'>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                </svg>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z" />
                </svg>
            </div>
        ):(
            <div className='container-edit-delete'></div>
        )}
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