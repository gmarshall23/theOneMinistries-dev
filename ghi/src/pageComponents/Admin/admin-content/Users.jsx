import { useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Users = () => {
  useEffect(() => {
    // Fetch user data or perform any necessary side effects
    console.log("Users component mounted");
  }, []);

  return (
    <>
      <Form className="row g-3">
        <div className="col-lg-6 border">
          <Form.Group as={Row} controlId="formFirstName">
            <Form.Label column sm="5">
              First Name:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Enter first name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLastName">
            <Form.Label column sm="5">
              Last Name:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Enter last name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column sm="5">
              Email address:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
          </Form.Group>
        </div>
        <div className="col-lg-6 border">
          <Form.Group as={Row} controlId="formUsername">
            <Form.Label column sm="5">
              Username:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Enter username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formRole">
            <Form.Label column sm="5">
              Role:
            </Form.Label>
            <Col sm="7">
              <Form.Select>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Col>
          </Form.Group>



          <Form.Group as={Row} controlId="formPassword">
            <Form.Label column sm="5">
              Password
            </Form.Label>
            <Col sm="7">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" className="w-25">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Users;
