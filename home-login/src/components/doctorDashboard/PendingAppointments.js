import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useEffect, useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { getDate } from 'date-fns';
import { render } from '@testing-library/react';
import { SnackbarProvider, useSnackbar } from 'notistack';
const API_URL = process.env.REACT_APP_API_URL;

export default function PendingAppointments({ id, email }) {

  const [list, setList] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  let data = [];
  useEffect(async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
      })
    };
    const ac = new AbortController();
    await fetch(`${API_URL}/doctor/pending-appointment`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        data = response.data;
      })
      .catch(error => console.log(error));
    setList(data);
    console.log(data);
    return () => ac.abort();
  }, []);

  const getDate = (date) => {
    var dateObj = new Date(date);
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();

    var newdate = day + "/" + month + "/" + year;
    return(
      newdate
    )
  }

  const getTime = (date) => {
    var dateObj = new Date(date);
    var hours = dateObj.getHours(); //months from 1-12
    var minutes = dateObj.getMinutes();

    var newtime = hours + ":" + minutes;
    return(
      newtime
    )
  }

  const disapprove = async(props) => {
    console.log(props);
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        appoint_id: props,
      })
    };
    const ac = new AbortController();
    enqueueSnackbar('Appointment Request Cancelled');
    await fetch(`${API_URL}/doctor/delete-appoint`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
      render();
  }

  const approve = async(props) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        appoint_id: props,
      })
    };
    const ac = new AbortController();
    enqueueSnackbar('Appointment Request Accepted');
    await fetch(`${API_URL}/doctor/approv`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        data = response.data;
      })
      .catch(error => console.log(error));
      render();
  }

  return (
    <React.Fragment>
      <Title>Pending Appointments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Accept</TableCell>
            <TableCell>Reject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.patientName}</TableCell>
              <TableCell>{getDate(row.date)}</TableCell>
              <TableCell>{getTime(row.date)}</TableCell>
              <TableCell>
                <IconButton color = "primary" onClick = {() => approve(row._id)}>
                  <DoneIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton color="secondary" onClick = {() => disapprove(row._id)}>
                  <ClearIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}