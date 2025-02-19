/* eslint-disable react/prop-types */
import './Header.css'
import Menu from '../Menu'
import title from './tomGif.gif'; // Import the image using ES6 import
import { useEffect } from 'react';


const Header = ({ user }) => {
    useEffect(() => {
        console.log('Header user:', user)
    }, [user]);
    return (
        <header className="w-100 d-flex justify-content-between">
            <div className='col-6'>
                <img src={title} alt='title' className='img img-fluid' />
            </div>
            <Menu user={user} className='header-menu'/>
        </header>
    )
}

export default Header
