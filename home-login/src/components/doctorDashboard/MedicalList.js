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
import Medical from './Medical';
const API_URL = process.env.REACT_APP_API_URL;

function preventDefault(event) {
  event.preventDefault();
}

export default function MedicalList({_id}) {
  const [list,setList] = React.useState([]);
  let data = [];
  useEffect(async () => {
    console.log(_id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          _id: _id,
      })
    };
    const ac = new AbortController();
    await fetch(`${API_URL}/patient/getmedicals`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        data = response.medical_list;
      })
      .catch(error => console.log(error));
    setList(data);
    console.log(data);
    return () => ac.abort();
  }, []);

  const loopfunc = () => {
    const arr = []
    for(let i = 0; i < list.length; i++){
      arr.push(<Grid container spacing = {3}><Grid item xs={12} sm={3}><Medical props = {list[i]} /></Grid></Grid>);
    }
    return arr;
  }

  return (
    <React.Fragment>
      <Container maxWidth="lg">
      
        {loopfunc()}
        
      </Container>
    </React.Fragment>
  );
}