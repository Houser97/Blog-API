import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Editor} from '@tinymce/tinymce-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Edit.css'

const Edit = () => {

    const [post, setPost] = useState(null)
    const [titleEdited, setTitleEdited] = useState(null)
    const [timestamp, setTimeStamp] = useState(null)
    const [ID, setID] = useState(null)
    const [bodyEdited, setBodyEdited] = useState(null)
    /*const [bodyFormatted, setBodyFormatted] = useState('')*/
    const {title} = useParams()

    useEffect(() => {
        fetch(`/api/post/edit/${title}`)
        .then(response => response.json())
        .then(data => {
            setPost(() => data[0])
            setTimeStamp(() => data[0].timestamp);
            setID(() => data[0]._id)
        })
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

    const UpdatePostAPI = (e) => {
        e.preventDefault();
        fetch('/api/edit/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({titleEdited, bodyEdited, timestamp, ID})
        })
    }


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
                    <form method='POST' className='post-edit' onSubmit={(e) => UpdatePostAPI(e)}>
                        <div className='form-div-edit'>
                            <label htmlFor='title-edit'>Title:</label>
                            <input className='input-edit' id='title-edit' defaultValue={post.title}
                            onChange = {(e) => setTitleEdited(e.target.value)} required></input>
                        </div>
                        <label className='label-edit'>Body:</label>
                        <Editor 
                        textareaName='edit-body'
                        initialValue={post.body}
                        onEditorChange={newText => setBodyEdited(newText)}
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