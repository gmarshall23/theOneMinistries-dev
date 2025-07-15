/* eslint-disable react/prop-types */
import {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import { Form, Card, Modal, Button } from 'react-bootstrap'


const Questions = ({user}) => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        if (!newQuestion) {
            alert('Please enter a question');
            return;
        }
        const questionData = {
            question: newQuestion,
            createdBy: user?.username // You can replace this with actual user data if available
        };
        axios.post('http://localhost:4040/create_question', questionData)
            .then((response) => {
                console.log('Question submitted successfully:', response.data);
                setShowModal(true);
                setNewQuestion(''); // Reset the input field
                setQuestions([...questions, response.data]); // Update the questions list
            })
            .catch((error) => {
                console.error('Error submitting question:', error);
            });
    }
    useEffect(() => {
        const fetchQuestions = async () => {
            axios.get('http://localhost:4040/get_questions')
            .then((response) => {
                console.log('Questions fetched successfully:', response.data);
                setQuestions(response.data);
            }
            )
            .catch((error) => {
                console.error('Error fetching questions:', error);
            }
            );
        };
        fetchQuestions();
    }
    , []);
    return (
        <>
            <div>
                <h3>Questions</h3>
                <p>I love this website and I think it has many useful tools to enhance your Christian walk on a daily basis. However, nothing is perfect so we provide this opportunity for you to ask questions with which you want faith based answers or responses. I promise that I will endeavor to access every resourse available to provide timely, complete and Christ centered answers and also to provide the scriptural references to support the answer. So ask away... Let's see what God says</p>
            </div>
            <Form className="form-group" onSubmit={handleSubmitQuestion}>
                <Form.Group controlId="questionInput">
                    <Form.Label>Enter New Question</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your question here"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        required
                    />
                </Form.Group>
                <button
  type="submit"
  className="btn btn-warning m-4"
  style={{
    width: '25%',            // adjust width as desired
    whiteSpace: 'normal',    // allow text to wrap
    overflow: 'hidden'       // hide any overflow that might occur
  }}
>
  Submit Question
</button>
            </Form>
            <div className="row g-3 mt-3">
                {questions.length > 0 && (questions.filter((question) => question.answered === true)).map((question, index) => (
                    <div key={index} className="col-4">
                        <Card className="h-100">
                            <Card.Body style={{ maxHeight: '15rem', overflowY: 'auto' }}>
                                <Card.Title><p>
                                    </p></Card.Title>
                                <Card.Text className="border-bottom border-dark pb-2"><em>Question:</em> {question.question}</Card.Text>
                                <Card.Text className="border-bottom border-dark pb-2">Answer: {question.answer}</Card.Text>
                                <Card.Text>Scripture: {question.scripture}</Card.Text>
                            </Card.Body>
                            <Card.Footer>Submitted: {new Date(question.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Submission Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your question. Your question has been successfully submitted and will be reviewed and the answer will post within 48 hours”. Please check back here later for your answer
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Questions
