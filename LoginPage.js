import './login.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios to make API calls

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3001/login', { username, password })
      .then((response) => {
        if (response.status === 200) {
          // Successful login, redirect to the new page
          // Replace '/success' with the path to your new page
          window.location.href = 'https://gndec.ac.in/';
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('Unsuccessful login');
        } else {
          alert('An error occurred');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to,</h1>
      <h2>College no dues portal</h2>

      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        value={username}
        onChange={handleUsernameChange}
        required 
      />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        value={password}
        onChange={handlePasswordChange}
        required 
      />

      <div className="form-footer">
        <div className="checkbox">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <a href="https://academics.gndec.ac.in/forgotpassword/" className="forgot-password">Forgot Password?</a>
      </div>

      <input type="submit" value="Login" />
    </form>
  );
}

export default LoginForm;
