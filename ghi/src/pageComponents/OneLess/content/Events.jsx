/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap'


const Events = ({ user }) => {
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState('');
  const [events, setEvents] = useState([]);
   const [event, setEvent] = useState({
    name: '',
    city: '',
    description: ''
  });
  const [updateOnSubmit, setUpdateOnSubmit] = useState(false);
  const eventsRef = useRef(events);

  // Function to fetch events from the API
  const fetchEvents = () => {
  axios.get('http://localhost:4040/get_events')
  .then((response) => {
    console.log('Events fetched successfully:', response.data);
    setEvents(response.data);
  })
  .catch((error) => {
    console.error('Error fetching events:', error);
  }
  );
  }


  const getCurrentDate = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    setCurrentDate(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }
  const handleSubmit = (e) => {
  e.preventDefault();
  if (!event.name || !event.city || !event.description) {
    alert('Please fill in all fields');
    return;
  } else {
  axios.post('http://localhost:4040/create_event', {
    name: event.name,
    city: event.city,
    description: event.description,
    createdBy: user?.username
  })
  .then((response) => {
    console.log('Event created successfully:', response.data);

    setEvent({ name: '', city: '', description: '' }); // Reset form fields
    setUpdateOnSubmit(true); // Set flag to update events list
  })
  .catch((error) => {
    console.error('Error creating event:', error);
  });
  }
}
  // function to return the current date in MM/DD/YYYY format
useEffect(() => {
  console.log('Events component mounted');
  fetchEvents();
  getCurrentDate();
}, [updateOnSubmit]);
  return (
    <div>
      <div>
        <h2>Share your One Less Success</h2>
        <p>Welcome {user?.firstName || 'Guest'}! Today's date is {currentDate}.</p>
      </div>
      <div className="event-form w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="eventName">
            <Form.Label>Your name</Form.Label>
            <Form.Control
            type="text"
            placeholder="Name"
            value= {event.name}
            onChange={(e)=>setEvent({...event,name:e.target.value})}
            />
          </Form.Group>

          <Form.Group controlId="eventDate">
            <Form.Label>Your city</Form.Label>
            <Form.Control
              type="city"
              value={event.city}
              onChange={(e)=>setEvent({...event,city:e.target.value})}
            />
          </Form.Group>

          <Form.Group controlId="eventDescription">
            <Form.Label>Your Story</Form.Label>
            <Form.Control as="textarea"
              rows={3}
              placeholder="Describe the event"
              value={event.description}
              onChange={(e)=>setEvent({...event,description:e.target.value})}
            />
          </Form.Group>

          <button type="submit" className="btn btn-primary">Submit event</button>
        </Form>
      </div>
      <hr />
      <h3>Current Events</h3>

        <div className="row event-header">
            <h4 className='text-start col-lg-3'>Name: {event.name}</h4>
            <h4 className='text-start col-lg-3'>City: {event.city}</h4>
            <h4 className='text-start col-lg-5'>Event: {event.description}</h4>
          </div>
          <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="row event-item">
            <p className='text-start col-lg-3'>{event.name}</p>
            <p className='col-lg-3'>{event.city}</p>
            <p className='col-lg-5'>{event.description}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Events
