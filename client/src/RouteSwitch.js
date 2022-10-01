import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Post from './Routes/Post'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />} />
            <Route path='post/:title' element = {<Post />}/>
            <Route path='/login' element = {<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch