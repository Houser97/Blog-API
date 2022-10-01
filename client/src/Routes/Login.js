import React from 'react'
import '../styles/Login.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div className='login-section'>
      <Navbar />
      <form className='form-login'>
          <div className='username-section form-login-div'>
              <label htmlFor='username' className='username-label label-login'>Username:</label>
              <input className='input-username input-login' name='username' id='username'></input>
          </div>
          <div className='pwd-section form-login-div'>
              <label htmlFor='pwd' className='username-label label-login'>Username:</label>
              <input type='password' className='input-username input-login' name='password' id='pwd'></input>
          </div>
          <button className='login-button'>Submit</button>
      </form>
      <Footer />
    </div>
  )
}

export default Login