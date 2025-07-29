/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';


const Logout = ({setUser}) => {
    const navigate = useNavigate();
    useEffect(() => {
       console.log('Logging out')
    }
    , []);
    const handleLogout = async () => {

        console.log('Logging out')
        // const response = await axios.post('http://localhost:4040/logout', {}, { withCredentials: true })
        // console.log(response.data)
        // // return to the landing page
        // navigate('/')
         try {
            await axios.post('http://localhost:4040/logout', {}, { withCredentials: true });
            // Clear the user state in the App component
            setUser(null);
            // Remove user data and token from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // Navigate to the landing page
            navigate('/');
        } catch (error) {
            console.error("Logout failed:", error);
            // Even if server logout fails, force a client-side logout
            setUser(null);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        }
    }

  return (
    <div>
        <h1>This will be the Logout confirmation Screen</h1>
        <h4>Are you sure you want to logout</h4>
        <button onClick={handleLogout}>Yes: Logout</button>
        <Link to='/'>No</Link>
    </div>
  )
}

export default Logout
