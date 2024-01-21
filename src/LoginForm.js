import './login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

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
        console.log('Response Data:', response.data);

        if (response.status === 200) {
          const { role, id, student_name, father_name, URN, CRN, department } = response.data;
          console.log('Role:', role);

          // Store user data in local storage
          localStorage.setItem('userId', id);
          localStorage.setItem('userRole', role);
          localStorage.setItem('student_name', student_name);
          localStorage.setItem('father_name', father_name);
          localStorage.setItem('department', department);
          localStorage.setItem('URN', URN);
          localStorage.setItem('CRN', CRN);

          // Use the navigate function to redirect to different routes based on the role
          if (role === 'advisor') {
            navigate('/advisor-dashboard');
          } else if (role === 'student') {
            navigate('/student-dashboard');
          }  else if (role === 'HOD') {
            navigate('/hod-dashboard');
          } else if (role === 'staff') {
              navigate('/library-dashboard');
          }  else if (role === 'hostel') {
            navigate('/hostel-dashboard');
          }else if (role === 'mess') {
            navigate('/mess-dashboard');
          }else if (role === 'tnp') {
            navigate('/tnp-dashboard');
          }else if (role === 'accountsbranch') {
            navigate('/accb-dashboard');
          }
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
    <div className="login-container">
    {/* Add the image container here */}
    <div className="image-container">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
    <div className="login-form">
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
    </div>
    </div>
  );
}

export default LoginForm;