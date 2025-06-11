import { useEffect, useState } from "react"
import axios from "axios"
import {Form} from "react-bootstrap"

const Prayers = () => {
    const [event, setEvent] = useState({
        name: "",
        subject: "",
        prayer: "",
        createdBy: "",
    });
  return (
    <>
    <div>Prayers</div>
    <Form>
      <Form.Group controlId="prayerName">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type="text"
        value = {event.name}
        placeholder="Enter name" />
      </Form.Group>
      <Form.Group controlId="prayerSubject">
        <Form.Label>Subject/Topic</Form.Label>
        <Form.Control
        type="text"
        value = {event.subject}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter subject or Topic" />
      </Form.Group>
      <Form.Group controlId="prayerRequest">
            <Form.Label>Your Request</Form.Label>
            <Form.Control as="textarea"
              rows={3}
              placeholder="What do you need prayer for?"
              value={event.prayer}
              onChange={(e)=>setEvent({...event,description:e.target.value})}
            />
          </Form.Group>
      <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    <h4>As God answers your prayers, Please add your prayers to <span>One Less Events</span>Please also visit our <span>Encourage page</span> to receive some helpful words regarding your prayer request</h4>

    </>
  )
}

export default Prayers
