/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from "axios"
import { Form } from "react-bootstrap"

const Prayers = ({user}) => {
    const [prayer, setPrayer] = useState({
        name: "",
        subject: "",
        prayer: "",
        createdBy: user?.username || "Anonymous",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("prayer package:", prayer);
        if (!prayer.name || !prayer.subject || !prayer.prayer) {
            alert("Please fill in all fields");
            return;
        }
        axios.post("http://localhost:4040/create_prayer", prayer)
            .then(response=>{
                console.log("Prayer submitted successfully:", response.data);
                setPrayer({
                    name: "",
                    subject: "",
                    prayer: "",
                    createdBy: user?.username || "Anonymous",
                }); // Reset form fields
            })
    }
    return (
        <>
            <div>Prayers</div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="prayerName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={prayer.name}
                        onChange={(e) => setPrayer({ ...prayer, name: e.target.value })}
                        placeholder="Enter name"
                        required />
                </Form.Group>
                <Form.Group controlId="prayerSubject">
                    <Form.Label>Subject/Topic</Form.Label>
                    <Form.Control
                        type="text"
                        value={prayer.subject}
                        onChange={(e) => setPrayer({ ...prayer, subject: e.target.value })}
                        placeholder="Enter subject or Topic"
                        required />
                </Form.Group>
                <Form.Group controlId="prayerRequest">
                    <Form.Label>Your Request</Form.Label>
                    <Form.Control as="textarea"
                        rows={3}
                        value={prayer.prayer}
                        onChange={(e) => setPrayer({ ...prayer, prayer: e.target.value })}
                        placeholder="What do you need prayer for?"
                        required
                    />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
            <h4>As God answers your prayers, Please add your prayers to <span>One Less Events</span>Please also visit our <span>Encourage page</span> to receive some helpful words regarding your prayer request</h4>

        </>
    )
}

export default Prayers
