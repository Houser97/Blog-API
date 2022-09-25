import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Post from './Routes/Post'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />} />
            <Route path='post/:title' element = {<Post />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch