import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/CreatePost.css'
import {Editor} from '@tinymce/tinymce-react'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token'))) // Convieret objeto string en objeto
  const navigate = useNavigate();

  const createPostAPI = (e) => {
    e.preventDefault()
    fetch('/api/post/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
      },
      body: JSON.stringify({title, body: body.toString()})
    }).then(response => response.json())
    .then(data => data === 'Correct' ? navigate('/') : console.log(data))
  }

  return (
    <section className='CreatePost-section'>
        <Navbar isInHome={false} />
        <div className='form-post-wrapper'>
          <form method='POST' className='create-form-post' onSubmit={(e) => createPostAPI(e)}>
            <div className='div-form-create form-post-title'>
              <label htmlFor='title-post-form' className='label-form-create'>Title</label>
              <input id='title-post-form' className='input-form-post' name='title-post'
              onChange={(e) => setTitle(e.target.value)} required></input>
            </div>
            <Editor 
              textareaName='post-body'
              initialValue='Write post comment'
              onEditorChange={newText => setBody(newText)}
              init={{
                height: 500,
                width: '100%',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
            <div className='published-div'>
              <div className='label-radio-btn'>Published:</div>
              <div className='published-subdiv'>
                <input type='radio' id='radio-true' className='radio' name='published' checked></input>
                <label htmlFor='radio-true' className='label-radio'>True</label>
              </div>
              <div className='published-subdiv'>
                <input type='radio' id='radio-false' className='radio' name='published'></input>
                <label htmlFor='radio-false' className='label-radio'>False</label>
              </div>
            </div>
            <button className='post-submit-form'>Submit</button>
          </form>
        </div>
        <Footer />
    </section>
  )
}

export default CreatePost