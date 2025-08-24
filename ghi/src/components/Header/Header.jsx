/* eslint-disable react/prop-types */
import './header.css'
import Menu from '../Menu'
import title from './tomGif.gif';


const Header = ({ user, setUser }) => {
    return (
        <header className="w-100 d-flex justify-content-between">
            <div className='col-6'>
                <img src={title} alt='title' className='img img-fluid' />
            </div>
            <Menu user={user} setUser={setUser} className='header-menu'/>
        </header>
    )
}

export default Header
