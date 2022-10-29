import React, { useContext, useState } from 'react'
import '../styles/Login.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { isTokenContext } from '../RouteSwitch'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [ ,setIsToken] = useContext(isTokenContext)

  const navigate = useNavigate();

  const LoginApi = (e) => {
    e.preventDefault()
    if(!username || !password){return false}
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(response => response.json()).then(data => {
      if(data){
        setIsToken(data)
        localStorage.setItem('token', JSON.stringify(data))
        navigate('/')
      } else {
        setIsToken(data)
        setError(true)
      }
    })
  }
  
  return (
    <div className='login-section'>
      <Navbar isInLogIn={true} />
      <div className='form-login-wrapper'>
        <form method='POST' className='form-login' onSubmit={(e) => LoginApi(e)}>
          <div className='login-title'>
            Are you the owner? Then login to edit your posts!
          </div>
            <div className='username-section form-login-div'>
                <label htmlFor='username' className='username-label label-login'>Username:</label>
                <input className='input-username input-login' name='username' id='username'
                onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className='pwd-section form-login-div'>
                <label htmlFor='pwd' className='username-label label-login'>Password:</label>
                <input type='password' className='input-username input-login' name='password' id='pwd'
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className={`error-login ${error ? 'hide-error' : ''}`}>
                Oops, it seems that there was an error.
            </div>
            <button className='login-button'>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login