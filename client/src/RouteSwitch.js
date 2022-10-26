import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CreatePost from './Routes/CreatePost'
import Edit from './Routes/Edit'
import Login from './Routes/Login'
import Post from './Routes/Post'
import UnpublishedPosts from './Routes/UnpublishedPosts'

export const isTokenContext = createContext();

const RouteSwitch = () => {

  const token = JSON.parse(localStorage.getItem('token')) || false
  const [isToken, setIsToken] = useState(false)

  useEffect(() => {
    if(token){
      fetch('/api/check-token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`,
        },
      }).then(response => response.json()).then(data => setIsToken(data))
    } 
  }, [])

  const ProviderValue = {
    isToken,
    setIsToken,
  }

  return (
    <BrowserRouter basename = 'Blog-API'>
      <isTokenContext.Provider value={[isToken, setIsToken]}>
          <Routes>
              <Route path='/' element = {<App />} />
              <Route path='/post/:title' element = {<Post />}/>
              <Route path='/unpublished-posts' element = {<UnpublishedPosts />} />
              <Route path='/post/edit/:title' element = {<Edit />}/>
              <Route path='/login' element = {<Login />} />
              <Route path='/create-post' element = {<CreatePost />} />
          </Routes>
        </isTokenContext.Provider>
    </BrowserRouter>
  )
}

export default RouteSwitch