import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Clients</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Link className="nav-item" to="/clients">
              Clients
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-item" to="/addClient">
              Add Client
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-item" to="/login">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-item" to="/register">
              Register
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
