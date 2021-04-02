import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  Col,
  FormControl,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import "./SignUp.css";

import I3 from '../../images/i3.jpg'

class Login extends Component {
  render() {
    return (
      <>
        <img className="image" src={I3} alt={I3} width="60" height="30" />
        <h1 className="text">Sign up for a better life</h1>
        <Form className="form">
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Gujarat</option>
                <option>Maharastra</option>
                <option>Rajasthan</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Login;