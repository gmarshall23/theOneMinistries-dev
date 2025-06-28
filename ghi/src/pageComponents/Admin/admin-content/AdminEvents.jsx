import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = () => {
    axios.get('http://localhost:4040/get_events')
      .then(response => {
        console.log('Events fetched successfully:', response.data);
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  };
  useEffect(() => {
    console.log("AdminEvents component mounted");
    // Fetch events when the component mounts
    fetchEvents();
  }, []);

  return (
  <>
    <div>AdminEvents</div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Created At</th>
          <th>Created By</th>
          <th>City</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {/* Example row, replace with dynamic data */}
        {events.map((event,idx)=>{
          return (
            <tr key={idx}>
              <td>{event.name}</td>
              {/* <td>{event.createdAt}</td> */}
              <td>{new Date(event.createdAt).toLocaleDateString()}</td>
              <td>{event.createdBy}</td>
              <td>{event.city}</td>
              <td>{event.description}</td>
            </tr>
          )
        })}
        <tr>
          <td>Sample Event</td>
          <td>2023-10-01</td>
          <td>Online</td>
          <td>This is a sample event description.</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default AdminEvents
