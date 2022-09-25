import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />} />
            <Route path='post/:title' />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch