import React, { Component } from "react";
import { useHistory } from "react-router-dom";
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
import I3 from '../../images/i3.jpg';
require("dotenv").config();

const DoctorSignUp = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [private_key, setPrivate_key] = useState('');
const [contact, setContact] = useState('');

let history = useHistory();
const onSubmit = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    console.log(name);
    const obj = {
        name: name,
        email: email,
        password: password,
        private_key: private_key,
        contact_number: contact,
    }
    console.log(obj);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
  console.log("clicked", API_URL);
  
  fetch(`${API_URL}/doctor/register`, requestOptions)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if(response.ok){
        history.push("/");
      }
      else{
        alert(response.err.msg);
      }
    })
    .catch(error => console.log(error));    
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

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control onChange = {(event) => setContact(event.target.value)}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>private key</Form.Label>
              <Form.Control onChange = {(event) => setPrivate_key(event.target.value)}/>
            </Form.Group>
          </Form.Row>

          <Button variant="dark" onClick = {onSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
}

export default DoctorSignUp;
