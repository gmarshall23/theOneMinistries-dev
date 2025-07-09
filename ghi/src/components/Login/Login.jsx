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
    console.log('Login component mounted');
    usernameRef.current.focus(); // Set focus to the username input field when the component mounts
  }, []);

  const handleLogin = async () => {
    console.log('attempting login');
    console.log('username:', username);
    axios.post('http://localhost:4040/login', { username, password }, { withCredentials: true })
    .then(response=> {
      console.log('Login response, users stored to localStorage:', response.data.user);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user information in local storage
      setUser(response.data.user);
      // setMessage(`Login successful. Welcome Mr. ${response.data.user.lastName}`);
      navigate('/'); // Redirect to the landing page after successful login
    })
    .catch(error => {
      setMessage('Login failed: ' + error.response.data);
    });
    // try {
    //   const response = await axios.post('http://localhost:4040/login', { username, password }, { withCredentials: true });
    //   console.log('Login response, users stored to localStorage:', response.data.user);
    //   localStorage.setItem('accessToken', response.data.accessToken);
    //   localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user information in local storage
    //   setUser(response.data.user);
    //   // setMessage(`Login successful. Welcome Mr. ${response.data.user.lastName}`);
    //   navigate('/'); // Redirect to the landing page after successful login
    // } catch (error) {
    //   setMessage('Login failed: ' + error.response.data);
    // }
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
