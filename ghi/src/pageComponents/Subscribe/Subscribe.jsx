import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './subscribe.css';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    studyStartDate: ''
  });

  useEffect(() => {
    console.log('Subscribe component mounted');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClick = (field) => {
    console.log(`${field} field clicked`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission securely
    console.log('Form submitted', formData);
    axios.post('http://localhost:4040/subscribe', formData)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.error('error', error);
      });

  };

  return (
    <main className="subscribe mt-5">
      <h2 className="text-center">Subscribe</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onClick={() => handleClick('First Name')}
                placeholder="Enter your first name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onClick={() => handleClick('Last Name')}
                placeholder="Enter your last name"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formStudyStartDate">
          <Form.Label>Date to Start Study</Form.Label>
          <Form.Control
            type="date"
            name="studyStartDate"
            value={formData.studyStartDate}
            onChange={handleChange}
            onClick={() => handleClick('studyStartDate')}
            placeholder="start study date"
            required
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username (Email)</Form.Label>
          <Form.Control
            type="email"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onClick={() => handleClick('Username')}
            placeholder="Enter your username (email)"
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onClick={() => handleClick('Password')}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-25 mt-3">
          Subscribe
        </Button>
      </Form>
    </main>
  );
};

export default Subscribe;
