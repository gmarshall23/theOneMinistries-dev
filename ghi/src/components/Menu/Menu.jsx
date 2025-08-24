/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LoginRequiredModal from '../LoginRequiredModal';
import LogoutModal from '../LogoutModal';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';


const Menu = ({ user, setUser }) => {
  const [expanded, setExpanded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const handleOneWayClick = (e) => {
    if (!user) {
      e.preventDefault();
      setExpanded(false); // Close the menu
      setShowLoginModal(true);
    } else {
      handleLinkClick(); // Normal link behavior for logged-in users
    }
  };

  const handleCloseModal = () => setShowLoginModal(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setExpanded(false);
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = async () => {
    try {
      await axios.post('http://localhost:4040/logout', {}, { withCredentials: true });
    } catch (error) {
      // Even if server logout fails, force a client-side logout
      console.error("Logout failed:", error);
    }
    setUser && setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setShowLogoutModal(false);
    navigate('/');
  };

  return (
    <Navbar expand="lg" className='nav1' expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {location.pathname !== '/' &&
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>}
          {user?.role === 'admin' && <Nav.Link as={Link} to="/admin" onClick={handleLinkClick}>Admin</Nav.Link>}
          <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>About</Nav.Link>
          <Nav.Link as={Link} to="/one-way/meet-god" onClick={handleOneWayClick}>One Way</Nav.Link>
          <Nav.Link as={Link} to="/news-stories" onClick={handleLinkClick}>News Stories</Nav.Link>
          <Nav.Link as={Link} to="/subscribe" onClick={handleLinkClick}>Support Us</Nav.Link>
          <Nav.Link as={Link} to="/hotline" onClick={handleLinkClick}>Crisis Hotline</Nav.Link>
          {user
            ? <Nav.Link as={Link} to="#" onClick={handleLogoutClick}>Log Out</Nav.Link>
            : <Nav.Link as={Link} to="/login" onClick={handleLinkClick}>Log In</Nav.Link>}
        </Nav>
      </Navbar.Collapse>

      {/* Login Required Modal */}
      <LoginRequiredModal
        show={showLoginModal}
        onHide={handleCloseModal}
        message="You must log in to access One Way lessons."
      />
      {/* Logout Confirmation Modal */}
      <LogoutModal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </Navbar>
  );
};

export default Menu;
