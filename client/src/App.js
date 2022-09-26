import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import Presentation from './components/Presentation'

const App = () => {
  return (
    <div className='App'>
      <Navbar isInHome = {true} />
      <Presentation />
      <PostList />
      <Footer />
    </div>
  )
}

export default App
