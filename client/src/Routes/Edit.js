import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Editor} from '@tinymce/tinymce-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Edit.css'

const Edit = () => {

    const [post, setPost] = useState(null)
    /*const [bodyFormatted, setBodyFormatted] = useState('')*/
    const {title} = useParams()

    useEffect(() => {
        fetch(`/api/post/edit/${title}`)
        .then(response => response.json())
        .then(data => setPost(() => data[0]))
    }, [])

    /*
    useEffect(() => {
        if(post !== null){
            const regex = /(<([^>]+)>)/ig;
            const text = String(post.body)
            const result = text.replace(regex, "");
            setBodyFormatted(result)
        }
    },[post])*/


  return (
    <div className='Edit-page'>
        <Navbar isInHome={false} isInLogIn = {false} />
        {post === null ? (
            <div className='no-post-edit'>This post does not exist</div>
        ):(
            post.length===0 ? (
                <div className='no-post-edit'>This post does not exist</div>
            ):(
                <div className='div-container-form-edit'>
                    <form method='POST' className='post-edit'>
                        <div className='form-div-edit'>
                            <label htmlFor='title-edit'>Title:</label>
                            <input className='input-edit' id='title-edit' value={post.title}></input>
                        </div>
                        <label className='label-edit'>Body:</label>
                        <Editor 
                        textareaName='edit-body'
                        initialValue={post.body}
                        /*onEditorChange={newText => setBody(newText)}*/
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
                </div>
            )
        )}
        <Footer />
    </div>
  )
}

export default Edit