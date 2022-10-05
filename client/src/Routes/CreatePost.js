import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/CreatePost.css'
import {Editor} from '@tinymce/tinymce-react'

const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <section className='CreatePost-section'>
        <Navbar isInHome={false} />
        <div className='form-post-wrapper'>
          <form method='POST' className='create-form-post'>
            <div className='div-form-create form-post-title'>
              <label htmlFor='title-post-form' className='label-form-create'>Title</label>
              <input id='title-post-form' className='input-form-post' name='title-post'></input>
            </div>
            <Editor 
              textareaName='post-body'
              initialValue='Write post comment'
              onEditorChange={newText => setBody(newText)}
              init={{
                height: 500,
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
          </form>
        </div>
        <Footer />
    </section>
  )
}

export default CreatePost