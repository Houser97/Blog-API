import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CreatePost from './Routes/CreatePost'
import Login from './Routes/Login'
import Post from './Routes/Post'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />} />
            <Route path='post/:title' element = {<Post />}/>
            <Route path='/login' element = {<Login />} />
            <Route path='/create-post' element = {<CreatePost />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch