import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

const AddClient = () => {
  return (
    <Container>
      <Form className="col-4 display">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter full name"></Form.Control>
        <Form.Label>Age</Form.Label>
        <Form.Control placeholder="Age"></Form.Control>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email"></Form.Control>
        <Form.Label>Date of birth</Form.Label>
        <Form.Control placeholder="dob"></Form.Control>
        <Form.Label>Destination</Form.Label>
        <Form.Control placeholder="Enter destination"></Form.Control>
        <Form.Label>Phone</Form.Label>
        <Form.Control placeholder="(233) xx-xxxxxxx"></Form.Control>
        <Button className="btn btn-success mt-2" type="submit">ADD</Button>
      </Form>
    </Container>
  );
};

export default AddClient;
