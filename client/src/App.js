import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import Presentation from './components/Presentation'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Presentation />
      <PostList />
    </div>
  )
}

export default App
