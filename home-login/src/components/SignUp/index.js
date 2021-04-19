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
import { useState } from "react";

import I3 from '../../images/i3.jpg'

const Login = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [contact, setContact] = useState('');
console.log(contact);
const onSubmit = () => {
    const API_URL = "https://healthcaremanagement.herokuapp.com";
    console.log(name);
    const obj = {
        name: name,
        email: email,
        password: password,
        address: address,
        city: city,
        contact_number: contact,
    }
    console.log(obj);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
  console.log("clicked");
  fetch(`${API_URL}/patient/register`, requestOptions)
      .then(response => console.log(response))
} 
  return (
      <>
        <img className="image" src={I3} alt={I3} width="60" height="30" />
        <h1 className="text">Sign up for a better life</h1>
        <Form className="form">
          <Form.Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Name"
               onChange = {(event) => setName(event.target.value)}/>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" 
              onChange = {(event) => setEmail(event.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              onChange = {(event) => setPassword(event.target.value)}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" 
            onChange = {(event) => setAddress(event.target.value)}/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange = {(event) => setCity(event.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control onChange = {(event) => setContact(event.target.value)}/>
            </Form.Group>
          </Form.Row>

          <Button variant="dark" onClick = {onSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
}


export default Login;
