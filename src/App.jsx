import './App.css'
import { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempted with:', formData)
    alert('Login functionality would work here!')
  }

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-box">
          <div className="logo">
            <h1>Instagram</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              name="username"
              placeholder="Phone number, username, or email"
              value={formData.username}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          
          <div className="divider">
            <span>OR</span>
          </div>
          
          <div className="facebook-login">
            <button className="facebook-button">
              Log in with Facebook
            </button>
          </div>
          
          <div className="forgot-password">
            <a href="#" className="forgot-link">Forgotten your password?</a>
          </div>
        </div>
        
        <div className="signup-box">
          <p>
            Don't have an account? <a href="#" className="signup-link">Sign up</a>
          </p>
        </div>
        
        <div className="app-download">
          <p>Get the app.</p>
          <div className="download-buttons">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Download on the App Store" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Get it on Google Play" />
          </div>
        </div>
      </div>
    </div>
  )
}
