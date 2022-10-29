import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Editor} from '@tinymce/tinymce-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Edit.css'

const Edit = () => {

    const [post, setPost] = useState(null)
    const [titleEdited, setTitleEdited] = useState(null)
    const [published, setPublished] = useState(true)
    const [timestamp, setTimeStamp] = useState(null)
    const [ID, setID] = useState(null)
    const [bodyEdited, setBodyEdited] = useState(null)
    /*const [bodyFormatted, setBodyFormatted] = useState('')*/
    const {title} = useParams()
    const token = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/api/post/edit/${title}`)
        .then(response => response.json())
        .then(data => {
            setPost(() => data[0]);
            setTimeStamp(() => data[0].timestamp);
            setID(() => data[0]._id);
            setTitleEdited(() => data[0].title);
            setBodyEdited(() => data[0].body)
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
                'Authorization': `Bearer ${token.token}` 
            },
            body: JSON.stringify({titleEdited, bodyEdited, timestamp, ID, published})
        }).then(response => response.json())
        .then(data => {
            if(data === 'Updated') navigate('/')
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
                        <div className='published-div'>
                            <div className='label-radio-btn'>Published:</div>
                            <div className='published-subdiv'>
                                <input type='radio' id='radio-true' className='radio' name='published' defaultChecked
                                onChange={(e) => {if(e.target.checked) setPublished(true)}}></input>
                                <label htmlFor='radio-true' className='label-radio'>True</label>
                            </div>
                            <div className='published-subdiv'>
                                <input type='radio' id='radio-false' className='radio' name='published'
                                onChange={(e) => {if(e.target.checked) setPublished(false)}}></input>
                                <label htmlFor='radio-false' className='label-radio'>False</label>
                            </div>
                        </div>
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