/* eslint-disable react/prop-types */
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginRequiredModal = ({ show, onHide, message = "You must log in to access this feature." }) => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    onHide();
    navigate('/login'); // Adjust this path to match your login route
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleGoToLogin}>
          Go to Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginRequiredModal;
