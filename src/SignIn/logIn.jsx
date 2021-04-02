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
import "./login.css";
import logo from "./logo.svg";

class Login extends Component {
  render() {
    return (
      <>
        <img className="image" src={logo} alt={logo} width="60" height="30" />
        <h1 className="text">Sign in to continue</h1>
        <Form className="form">
          <Form.Group controlId="formBasicEmail" className="temp">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text2">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="temp">
            <Form.Label>Password</Form.Label>
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
