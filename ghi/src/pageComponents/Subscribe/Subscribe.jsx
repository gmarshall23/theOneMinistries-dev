/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './subscribe.css';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: 'user', // Default role
    studyStartDate: '',
    giftType: '',
    giftAmount: 0,
    charities: [],

  });

  // State to control the modal popup
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  // State to manage checkbox selections
  const [checked, setChecked] = useState(false);
  const [charityChecked, setCharityChecked] = useState({});
  const [charityAmount, setCharityAmount] = useState({});
  // Initialize navigate hook from react-router-dom
  const navigate = useNavigate();
  const [charities, setCharities] = useState([]);
  const getCharities = async () => {
    try {
      const response = await axios.get('http://localhost:4040/get-charities');
      setCharities(response.data);
      // configure charities checkbox states
      const charityChecks = {};
      for (const charity of response.data) {
        charityChecks[charity.title] = false;

      };
      console.log('charityChecks', charityChecks);
      console.log('charities', response.data);
    } catch (error) {
      console.error('error', error);
    }
  };
  const handleGiftType = (type) => {
    console.log('Gift type selected:', type);
    setFormData({
      ...formData,
      giftType: type
    });
  }
  const handleCharityChange = async (e) => {
    const { name, checked } = e.target;
    setChecked(prev => ({ ...prev, [name]: checked }));
    setCharityChecked(prev => ({ ...prev, [name]: checked }));
    checked && setCharityAmount(prev => ({ ...prev, [name + 'Amount']: '' }));
    console.log('name, checked', name, checked);
    console.log('charityChecked', charityChecked);

  }
  const handleCharityAmountChange = (e) => {
    const { name, value } = e.target;

    setCharityAmount({ ...charityAmount, [name]: value });
    console.log('charityAmount', charityAmount);
  }

  useEffect(() => {
    console.log('Subscribe component mounted');
    getCharities();
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
    // add charity data to charity collection
    console.log('charityChecked', charityChecked);
    console.log('charityAmount', charityAmount);
    for (const char in charityChecked) {
      if (charityChecked[char]) {
        formData.charities.push({ [char]: charityAmount[char + 'Amount'] });
      }
    }
    // add contribution data to contribution collection ** Maybe **
    // assign username to email and role to user
    console.log('Form data before submission:', formData);
    const data = { ...formData }
    data.email = formData.username.toLowerCase();
    data.role = 'user'; // Ensure role is set to user
    console.log('Subscribe Form ready to submit', data);
    axios.post('http://localhost:4040/create_user', data)
      .then((response) => {
        console.log('response', response);
        setModalContent(JSON.stringify(response.data, null, 2));
        setShowModal(true);
      })
      .catch((error) => {
        console.error('error', error);
        setModalContent(JSON.stringify(error.response ? error.response.data : error.message, null, 2));
        setShowModal(true);
      });
  };

  // When closing the modal, navigate to the Landing page.
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <main className="subscribe mt-5">
      <h2 className="text-center bg-warning p-4">Support THE ONE Ministries</h2>
      <h4 className="text-center">WE GO ONLY BECAUSE YOU GIVE</h4>
      <h4 className="text-center">WE DO ONLY BECAUSE YOU DO</h4>
      <h4 className="text-center">WE CAN ONLY BECAUSE YOU CARE</h4>
      <blockquote className="blockquote px-4">
        <p className='text-start px-4'>Become a Partner by completing the form below and choosig a support plan for "The One" Ministries. You will have full access to the website and its features which will hopefully bless you during your on-line experience. Add to the end of the first paragraph: You get to choose which program  your gift will support and the amount you pay per month prayerfully beyond the minimum gift of $4.99. We are asking you to consider your gift amount as if you are having a meal with your charity.
          <span><ul>
            <h5>Average Meal Costs</h5>
            <li>Breakfast - $10-$15</li>
            <li>Lunch - $15-$20</li>
            <li>Dinner - $20-$30</li>
          </ul></span>
          Please consider treating yourself to a meal with your faith and put your support behind it. You will be helping to change lives. Thank you for your support. You will receive a contribution statement at the end of each calendar year for tax purposes. You may also change the program you support at any time.
        </p>
        <p className='text-start px-4'>We are a non-profit ministry where, after expenses, 100% of our revenue goes in support of the program and people you designate. Please sow into one or more of the organizations listed below as the Holy Spirit Guides you.
        </p>
        <h5 className="text-start px-4">God Bless</h5>
      </blockquote>
      <Form onSubmit={handleSubmit} className="w-75 p-2 mx-auto">
        <Row className='border border-warning p-0 m-0'>
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
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
          </Col>
          <Col md={6}>
            <h5 className='text-start'>Choose a Gift Type</h5>

            <Form.Check
              className="border-primary text-start"
              type="radio"
              label="Monthly Usage."
              name="giftType"
              id="monthlyGift"
              onClick={() => handleGiftType("Monthly-gift")}

            />
            <Form.Check
              className='border-primary text-start'
              type="radio"
              label="One Time Gift Offering."
              name="giftType"
              id="yearlyGift"
              onClick={() => handleGiftType('Yearly Gift')}

            />

            <Form.Group controlId="giftAmount" className="d-flex align-items-center ">

              <Form.Label className='border-primary text-start'>Gift Amount: ?</Form.Label>
              <Form.Control
                className='border-primary w-25'
                type="number"
                name='giftAmount'
                value={formData.giftAmount}
                placeholder="Enter your gift amount"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='border border-warning p-0 m-0'>
          <Col md={8} className='border border-primary p-2 m-0'><h4>How would you like us to use your gift?</h4>
            {charities.map((charity) => (
              <Row key={charity.title} className='px-2 m-0 align-items-center border'>
                <Form.Check
                  className='border-primary text-start col-4'
                  type="checkbox"
                  label={charity.title}
                  name={charity.title}
                  id={charity._id}
                  onChange={handleCharityChange}
                  checked={checked[charity.title] || false}
                />
                <Form.Group controlId={charity._id + 'Amount'} className='col-6 d-flex flex-row align-items-center p-0 m-0'>
                  <Form.Label className='border-primary text-start p-0 m-2'>Amount:</Form.Label>
                  <Form.Control
                    className='border-primary m-2'
                    type="text"
                    label="Amount:"
                    name={charity.title + 'Amount'}
                    value={charityAmount.name}
                    disabled={!checked[charity.title]}
                    onChange={handleCharityAmountChange}

                  />
                  <Button className='border-primary m-2'>Details</Button>
                </Form.Group>
              </Row>
            ))}

          </Col>
          <Col md={4} className='border p-2'><h3>How It works</h3>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="w-25 mt-3">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Subscription Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>{modalContent}</pre>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Subscribe;
