import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/CreatePost.css'
import {Editor} from '@tinymce/tinymce-react'

const CreatePost = () => {
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
            />
          </form>
        </div>
        <Footer />
    </section>
  )
}

export default CreatePost