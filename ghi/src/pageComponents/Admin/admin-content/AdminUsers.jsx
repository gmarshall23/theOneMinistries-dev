import { useEffect, useState } from "react";
import { Form, Row, Col, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";


const Users = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    role: '',
    password: '',
    studyStartDate:""
  });
  const [users, setUsers] = useState([]);



  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4040/get_users');
      setUsers(response.data.users);
      console.log("returned users", response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleSelectUser = (user) => {
    setUser(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // /update_user/:username
    const token = localStorage.getItem('token');
    // Handle form submission logic here
    axios.put(`http://localhost:4040/update_user/${user.username}`, user, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => {
      console.log("User updated successfully:", response.data);
      fetchUsers();
    })
    .catch(error => {
      console.error("Error updating user:", error);
    })

  };
  const handleAddUser = (event) => {
    event.preventDefault();
    // Corrected endpoint from '/add_user' to '/create_user'
    axios.post('http://localhost:4040/create_user', user)
    .then(response => {
      console.log("User added successfully", response.data);
      fetchUsers();
    })
    .catch(error => {
      console.error("Error adding user:", error);
    })

  };

  useEffect(() => {
     console.log("Users component mounted");
    // Fetch user data or perform any necessary side effects
    fetchUsers();
  }, []);

  return (
    <>
        <div><h4 className='text-center'>USERS</h4></div>
      <Form className="row m-0 p-0 g-3 border">
        <div className="col-lg-6 border">
          <Form.Group as={Row} controlId="formFirstName">
            <Form.Label column sm="5">
              First Name:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Enter first name"
              value = {user.firstName}
              onChange={(e) => setUser({...user, firstName: e.target.value})} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLastName">
            <Form.Label column sm="5">
              Last Name:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Enter last name"
              value = {user.lastName}
              onChange={(e) => setUser({...user, lastName: e.target.value})}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column sm="5">
              Email address:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="email" placeholder="Enter email"
              value = {user.email}
              onChange={(e) => setUser({...user, email: e.target.value})} />
            </Col>
          </Form.Group>
        </div>
        <div className="col-lg-6 border">
          <Form.Group as={Row} controlId="formUsername">
            <Form.Label column sm="5">
              Username:
            </Form.Label>
            <Col sm="7">
              <Form.Control type="text" placeholder="Enter username"
              value = {user.username}
              onChange={(e) => setUser({...user, username: e.target.value})} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formRole">
            <Form.Label column sm="5">
              Role:
            </Form.Label>
            <Col sm="7">
              <Form.Select aria-label="Default select example"
              value = {user.role}
              onChange={(e) => setUser({...user, role: e.target.value})}>
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
              <Form.Control type="password" placeholder="Password"
              value = {user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
               />
            </Col>
          </Form.Group>
        </div>
        <div>
<Button variant="primary" type="button" onClick={handleSubmit} className="w-25">
          Submit
        </Button>
        <Button variant="primary" type="button" onClick={handleAddUser} className="w-25">
          Add User
        </Button>
        </div>

      </Form>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((item) => (

            <tr key={item.id}  className="table-user" onClick={() => handleSelectUser(item)}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.role}  </td>
            </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Users;
