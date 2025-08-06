/* eslint-disable react/prop-types */
// filepath: /path/to/your/project/src/components/Login/Login.jsx
import { useState,useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import axios from 'axios';

const Login = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const usernameRef = useRef(null); // Create a ref for the username input field
  const passwordRef = useRef(null); // Create a ref for the username input field
  const navigate = useNavigate(); // Initialize the useNavigate hook


  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = async () => {
    try {
      console.log('Attempting login for:', username);
      const response = await axios.post('http://localhost:4040/login', { username, password }, { withCredentials: true });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data || error.message || 'Unknown error';
      setMessage('Login failed: ' + errorMessage);
    }
  };

  return (
    <div className='login1'>
      <h2 className='text-white'>Login</h2>
      <div>
      <input type="text"
      className='m-2'
      ref={usernameRef} // Set the ref attribute to the username
      placeholder="email"
      value={username}
      onChange={(e) => setUsername(e.target.value)} />
      </div>

      <input type="password"
      className='m-2'
      ref={passwordRef} // Set the ref attribute to the username
      placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='w-50 text-center'onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  )
}

export default Login;
