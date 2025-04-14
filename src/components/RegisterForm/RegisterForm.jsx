import React from 'react'
import './RegisterForm.css'
import { FaUser, FaLock } from 'react-icons/fa'


const RegisterForm = () => {
  return (
    <div className="login-container">
      <div className='wrapper'>
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required/>
            {/* <FaUser className='icon'/> */}
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            {/* <FaLock className='icon'/> */}
          </div>  

          <div className="input-box">
            <input type="email" placeholder='Email Address' required/>
            {/* <FaLock className='icon'/> */}
          </div>

          <div className="remember-forgot">
            {/* <label><input type="checkbox"/>Remember me</label> */}
            {/* <a href="#">Forgot password?</a> */}
          </div>

          <button type="submit"> Register</button>
          <div className="register-link">
            {/* <p> Don't have an ac  count? <a href='/register'>Register</a></p> */}
          </div>
          
        </form>
        <a href='/'>Return to homepage</a>
        
      </div>
    </div>
  )
}

export default RegisterForm
