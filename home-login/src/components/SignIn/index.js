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
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookie, setCookie]  = useCookies('userCookie');

  const onLogin = async() => {
    let userExist = false;
    const API_URL = process.env.REACT_APP_API_URL;
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

  await fetch(`${API_URL}/patient/login`, requestOptions)
    .then((response) => response.json())
    .then(async(response) => {

      console.log(response);
      if(response.ok){
        userExist = true;
        const response_cookie = {
          _id: response.data.patient._id,
          name: response.data.patient.name,
          email: response.data.patient.email,
          doctor_email: response.data.patient.doctor_email,
          contact: response.data.patient.contact_number,
        };

        setCookie("userCookie", response_cookie);
        console.log(cookie);
        history.push("/patient-dashboard");
        return ;
      }
      else{
         await fetch(`${API_URL}/doctor/login`, requestOptions)
          .then((response) => response.json())
          .then((response) => {

            console.log(response);
            if(response.ok){
              userExist = true;
              const cookie = {
                _id: response.data.doctor._id,
                name: response.data.doctor.name,
                email: response.data.doctor.email,
              };

              console.log(cookie);
              setCookie("userCookie", cookie);
              history.push("/doctor-dashboard");
              return ;
            }
          })
          .catch(error => console.log(error)); 
          if(userExist == false){
            alert(response.err.msg);}
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {(event) => setPassword(event.target.value)}
          />
          
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {onLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/doctor-signup" variant="body2">
                {"Don't have an account? Are you a Doctor? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Link href="/patient-signup" variant="body2">
                {"Don't have an account? Are you a Patient? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
