// import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
// import {
//   Button,
//   Navbar,
//   Nav,
//   Form,
//   Col,
//   FormControl,
//   NavDropdown,
//   Modal,
// } from "react-bootstrap";
// import "./SignUp.css";
// import { useState } from "react";
// import I3 from '../../images/i3.jpg';
// require("dotenv").config();

// const DoctorSignUp = () => {
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [private_key, setPrivate_key] = useState('');
// const [contact, setContact] = useState('');

// let history = useHistory();
// const onSubmit = () => {
//     const API_URL = process.env.REACT_APP_API_URL;
//     console.log(name);
//     const obj = {
//         name: name,
//         email: email,
//         password: password,
//         private_key: private_key,
//         contact_number: contact,
//     }
//     console.log(obj);
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(obj)
//     };
//   console.log("clicked", API_URL);
  
//   fetch(`${API_URL}/doctor/register`, requestOptions)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       if(response.ok){
//         history.push("/");
//       }
//       else{
//         alert(response.err.msg);
//       }
//     })
//     .catch(error => console.log(error));    
// } 
//   return (
//       <>
//         <img className="image" src={I3} alt={I3} width="60" height="30" />
//         <h1 className="text">Sign up for a better life</h1>
//         <Form className="form">
//           <Form.Row>
//             <Col>
//               <Form.Label>Name</Form.Label>
//               <Form.Control placeholder="Name"
//                onChange = {(event) => setName(event.target.value)}/>
//             </Col>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" 
//               onChange = {(event) => setEmail(event.target.value)}/>
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" 
//               onChange = {(event) => setPassword(event.target.value)}/>
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridZip">
//               <Form.Label>Contact Number</Form.Label>
//               <Form.Control onChange = {(event) => setContact(event.target.value)}/>
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridZip">
//               <Form.Label>private key</Form.Label>
//               <Form.Control onChange = {(event) => setPrivate_key(event.target.value)}/>
//             </Form.Group>
//           </Form.Row>

//           <Button variant="dark" onClick = {onSubmit}>
//             Submit
//           </Button>
//         </Form>
//       </>
//     );
// }

// export default DoctorSignUp;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from "react";
import { useHistory } from "react-router-dom";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function DoctorSignUp() {
  const classes = useStyles();
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange = {(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange = {(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange = {(event) => setPassword(event.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="private_key"
                label="Private Key"
                id="private_key"
                onChange = {(event) => setPrivate_key(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="contact"
                label="Contact Number"
                type="contact"
                id="contact"
                onChange = {(event) => setContact(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {onSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}