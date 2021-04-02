import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import "./SignIn.css";
import I3 from '../../images/i3.jpg'


class Login extends Component {
  render() {
    return (
      <>
        <img className="image" src={I3} alt={I3} width="60" height="30" />
        <h1 className="text">Sign in to continue</h1>
        <Form className="form">
          <Form.Group controlId="formBasicEmail" >
            <Form.Label className="signin-label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="signin-label">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="temp">
            <Form.Label className="signin-label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Login;