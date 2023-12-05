'use client'

import React from 'react'

// Styles
import './Login.css'

const Login = () => {
  return (
<>
  <div className="box">
    <form>
      <h2>Login</h2>
      <div className="inputBox">
        <input type="text" />
        <span>Username</span>
        <i></i>
      </div>

      <div className="inputBox">
        <input type="password" />
        <span>Password</span>
        <i></i>
      </div>

      <div className="links">
        <a href="#">Remember Me</a>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</>
  )
}

export default Login