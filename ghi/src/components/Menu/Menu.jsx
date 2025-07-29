/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

const Menu = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);
  user ? console.log('user logged in: ', user.email) : console.log('user not logged in: ')
  return (
    <Navbar expand="lg" className='nav1' expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {location.pathname !== '/' &&
            <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>}
          {user?.role === 'admin' && <Nav.Link as={Link} to="/admin" onClick={handleLinkClick}>Admin</Nav.Link>}
          <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>About</Nav.Link>
          <Nav.Link as={Link} to="/one-way/meet-god" onClick={handleLinkClick}>One Way</Nav.Link>
          <Nav.Link as={Link} to="/news-stories" onClick={handleLinkClick}>News Stories</Nav.Link>
          <Nav.Link as={Link} to="/subscribe" onClick={handleLinkClick}>Support Us</Nav.Link>
          {user ? <Nav.Link as={Link} to="/logout" onClick={handleLinkClick}>Log Out</Nav.Link> : <Nav.Link as={Link} to="/login" onClick={handleLinkClick}>Log In</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
