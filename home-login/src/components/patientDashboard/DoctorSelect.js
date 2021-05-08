import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import { useEffect, useState } from "react";
import DoctorSelectUtil from './DoctorSelectUtil';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Cookies, useCookies } from "react-cookie";
const API_URL = process.env.REACT_APP_API_URL;
require("dotenv").config();

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DoctorList() {
  const [cookie, setCookie] = useCookies();
  const [list,setList] = React.useState([]);
  let data = [];
  useEffect(async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const ac = new AbortController();
    await fetch(`${API_URL}/patient/getdoctors`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        data = response.data;
      })
      .catch(error => console.log(error));
    setList(data);
    console.log(data);
    return () => ac.abort();
  }, []);

  const loopfunc = () => {
    const arr = []
    for(let i = 0; i < list.length; i++){
      arr.push(<Grid item xs={6} sm={3}>
          <SnackbarProvider maxSnack={3}>
              <DoctorSelectUtil name = {list[i].name} email = {list[i].email} id = {list[i]._id} />
            </SnackbarProvider>
        </Grid>);
    }
    return arr;
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}><CardContent>
      {cookie.userCookie.doctor_email ?
      <Typography paddingLeft = {2} component="h2" variant="h5" color="default" gutterBottom>
      Your default doctor's email id is {cookie.userCookie.doctor_email}
      </Typography> :
      <Typography paddingLeft = {2} component="h2" variant="h6" color="default" gutterBottom>
      No default doctor set yet. <br />We would suggest you to select a default doctor, so that a doctor can be notified if there is some problems with your health conditions.
      </Typography>}</CardContent></Card>
      <Container>
      <Typography component="h2" variant="h3" color="primary" gutterBottom>
      List of Doctors
      </Typography>
      <Grid container spacing={3}>
        {loopfunc()}
      </Grid>
      </Container>
    </React.Fragment>
  );
}