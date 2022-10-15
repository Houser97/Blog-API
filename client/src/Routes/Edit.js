import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Editor} from '@tinymce/tinymce-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Edit = () => {

    const [post, setPost] = useState(null)
    const {title} = useParams()

    useEffect(() => {
        fetch(`/api/post/${title}`)
        .then(response => response.json())
        .then(data => setPost(() => data.post[0]))
        .then(() => console.log(post.post[0]))
    }, [])


  return (
    <div className='Edit-page'>
        <Navbar isInHome={false} isInLogIn = {false} />
        {post === null ? (
            <div className='no-post-edit'>This post does not exist</div>
        ):(
            post.length===0 ? (
                <div className='no-post-edit'>This post does not exist</div>
            ):(
                <form method='POST'>
                    <div className='form-div-edit'>
                        <label htmlFor='title-edit'>Title:</label>
                        <input className='input-edit' id='title-edit' value={post.title}></input>
                    </div>
                    <Editor 
                    textareaName='edit-body'
                    /*initialValue='Write post comment'
                    onEditorChange={newText => setBody(newText)}*/
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
                    <button className='post-submit-form'>Submit</button>
                </form>
            )
        )}
        <Footer />
    </div>
  )
}

export default Edit