import React, { useContext } from 'react'
import '../styles/PostComponent.css'
import moment from 'moment'
import CommentsSection from './CommentsSection'
import HTMLReactParser from 'html-react-parser'
import { isTokenContext } from '../RouteSwitch'

const PostComponent = ({post, comments}) => {

  const {title, body, timestamp} = post[0]

  const formattedTime = moment(timestamp).format('MMMM Do yyyy HH:ss')
  const formattedTitle= title.replace(/\s/g,'-');
  //const [bodyParsed, setBodyParsed] = useState(new DOMParser().parseFromString(body, 'text/xml'))
  const [isToken] = useContext(isTokenContext)

  return (
    <div className='post-component'>
      <div className='delete-msg-prevention-container'>
        <div className='delete-msg-prevention-2'>
          Are you sure you want to delete this post?
          <div className='buttons-msg-prevention-2'>
            <button className='yes-btn-2'>Yes</button>
            <div className='btn-form-sure no-btn' /*onClick={() => handleDeleteMsg()}*/>No</div>
            {/* La clase de los botones está definida en POST CARD CSS */}
          </div>
        </div>
      </div>
      <div className='post-component-article'>
        {isToken ? (
          <div className='container-edit-delete-post'>
            <svg className='svg-edit-delete' viewBox="0 0 24 24" /*onClick={() => handleDeleteMsg()}*/>
              <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
            </svg>
            <a href={`edit/${formattedTitle}`} className = 'a-svg-edit-delete'>
                <svg className='svg-edit-delete svg-edit' viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z" />
                </svg>
            </a>
          </div>
        ) : (
          <div className='container-edit-delete-No-Token'></div>
        )}
        <h2 className='post-component-title'>{title}</h2>
        <div className='post-component-body'>{HTMLReactParser(body)}</div>
        <div className='post-component-timestamp'>{formattedTime}</div>
      </div>

      <CommentsSection title = {title} commentInfo = {comments}/>
    </div>
  )
}

export default PostComponent