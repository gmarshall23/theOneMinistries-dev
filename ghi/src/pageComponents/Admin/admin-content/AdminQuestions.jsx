import { Card, Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const fetchQuestions = () => {
    axios.get('http://localhost:4040/get_questions')
      .then((response) => {
        console.log('Questions fetched successfully:', response.data);
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  };

  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  const handleUpdate = (questionToUpdate) => {
    // The question object from state is passed in, which has all the updated values.
    axios.put(`http://localhost:4040/update_question/${questionToUpdate._id}`, questionToUpdate)
        .then(response => {
          console.log('Question updated successfully:', response.data);
          setShowSuccessModal(true); // Show the success modal
          fetchQuestions(); // Refresh the questions list
        })
        .catch(error => {
          console.error('Error updating question:', error);
        });
  };
  useEffect(() => {
    console.log('AdminQuestions component mounted');
    fetchQuestions();
  }, []);

  return (
    <>
      <div><h4 className='text-center'>QUESTIONS</h4></div>
      <div className="row g-3 mt-3">
        {questions.length > 0 && questions.map((question, index) => (
          <div key={index} className="col-lg-4">
            <Card className="h-100">
              <Form>
                <Card.Body style={{ maxHeight: '20rem', overflowY: 'auto' }}>
                  <Card.Title>Subject: Subject or Tags</Card.Title>
                  <Card.Text className="text-start"><b>Question:</b> {question.question}</Card.Text>
                  <Form.Group controlId={`answer-${index}`}>
                    <Form.Label>Provide an Answer</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your answer here"
                      value={question.answer || ''}
                      onChange={(e) => {
                        const updatedQuestions = [...questions];
                        updatedQuestions[index].answer = e.target.value;
                        setQuestions(updatedQuestions);
                      }}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId={`scripture-${index}`}>
                    <Form.Label>Provide scripture</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Supported Scripture"
                      value={question.scripture || ''}
                      onChange={(e) => {
                        const updatedQuestions = [...questions];
                        updatedQuestions[index].scripture = e.target.value;
                        setQuestions(updatedQuestions);
                      }}
                      required
                    />
                  </Form.Group>

                </Card.Body>
                <Card.Footer>
                  <Form.Group controlId={`answered-${index}`} className="d-flex justify-content-start align-items-center">
                    <Form.Check
                      type="checkbox"
                      label="Answered"
                      reverse
                      checked={question.answered || false}
                      onChange={(e) => {
                        const updatedQuestions = [...questions];
                        updatedQuestions[index].answered = e.target.checked;
                        setQuestions(updatedQuestions);
                      }}
                    />
                  </Form.Group>
                  <Row className="d-flex justify-content-between">
                    <Col lg={4}>
                      <Button
                        type="button"
                        variant="warning"
                        onClick={() => handleUpdate(question)}
                      >Update</Button>
                    </Col>
                    <Col lg={4}>
                      <Button
                        variant="danger"
                        type="button"
                        onClick={() => {
                          axios.post('http://localhost:4040/delete_question', { id: question._id })
                            .then(response => {
                              console.log('Question deleted successfully:', response.data);
                              fetchQuestions(); // Refresh the questions list
                            })
                            .catch(error => {
                              console.error('Error deleting question:', error);
                            });
                        }}
                      >Delete</Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Form>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>The question has been updated successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default AdminQuestions
