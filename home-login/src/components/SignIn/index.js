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
import "./SignIn.css";
import I3 from '../../images/i3.jpg'
import { useState } from "react";


const Signin = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onLogin = () => {
    const API_URL = "https://healthcaremanagement.herokuapp.com";
    console.log();
    const obj = {
        email: email,
        password: password,
    }
    console.log(obj);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
  console.log("clicked");
  fetch(`${API_URL}/patient/login`, requestOptions)
      .then(response => {
        console.log(response);
        if(response.ok && response.status == 200){
          history.push("/");
        }
        else{
          alert(response.err.msg);
        }
      })
      
} 

  return (
    <>
      <img className="image" src={I3} alt={I3} width="60" height="30" />
      <h1 className="text">Sign in to continue</h1>
      <Form className="form">
          
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

          <Button variant="dark" onClick = {onLogin}>
            Login
          </Button>
        </Form>
    </>
  );
}

export default Signin;
