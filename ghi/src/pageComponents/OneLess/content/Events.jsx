/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'

const Events = ({user}) => {
    const getCurrentDate = () => {
        const date = new Date();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }
    const [event, setEvent] = useState({
        name: user?.firstName || 'Guest',
        date: getCurrentDate(),
        description: ''
    });
    // function to return the current date in MM/DD/YYYY format

  return (
    <div>
        <div>
        <h2>Enter Event</h2>
        <p>Welcome {user?.firstName || 'Guest'}! Today's date is {getCurrentDate()}.</p>
        </div>
        <div className="event-form w-50 mx-auto">
        <Form>
          <Form.Group controlId="eventName">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="eventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
            type="date"
            value={getCurrentDate()}
            onChange={(e) => console.log('Selected date:', e.target.value)}
             />
          </Form.Group>

          <Form.Group controlId="eventDescription">
            <Form.Label>Your Story</Form.Label>
            <Form.Control as="textarea"
            rows={3}
            placeholder="Describe the event"
             />
          </Form.Group>

          <button type="submit" className="btn btn-primary">Submit Event</button>
        </Form>
        </div>
        <hr />
        <h3>Current Events</h3>
        </div>
  )
}

export default Events
