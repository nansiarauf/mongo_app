import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { UsersContext } from "../contexts/UsersContext";

const LoginScreen = () => {
  const { LoginUser } = useContext(UsersContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //METHOD TO HANDLE SUBMIT ACTION FROM THE LOGIN FORM
  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };
    LoginUser(loginuser);
  }

  return (
    <div className="login-div">
      <Form onSubmit={handleSubmit} className="login-form">
        <h4>Log In</h4>
        <Form.Control
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "300px" }}
        />
        <Form.Control
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "300px", margin: "5px" }}
        />
        <Button type="submit">Log in</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
