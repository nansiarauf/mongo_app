import { useState, useContext } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import { UsersContext } from "../contexts/UsersContext";
// import { useHistory, useLocation } from "react-router-dom";
const RegisterUserScreen = () => {
  // const location = useLocation();
  // const history = useHistory();

  const { registerUser } = useContext(UsersContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const redirect =location.search ? location.search.split("=")[1]

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    registerUser(newUser);
  }
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={6} lg={3}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="enter username"
                value={username}
                onChange={(text) => setUsername(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="enter email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="enter password"
                value={password}
                type="password"
                onChange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterUserScreen;
