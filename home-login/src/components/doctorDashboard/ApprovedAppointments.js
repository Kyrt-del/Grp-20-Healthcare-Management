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
import { getDate } from 'date-fns';
const API_URL = process.env.REACT_APP_API_URL;

export default function ApprovedAppointments({ id, email }) {

  const [list, setList] = React.useState([]);
  let data = [];
  useEffect(async () => {
    console.log(id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
      })
    };
    const ac = new AbortController();
    await fetch(`${API_URL}/doctor/approved-appointment`, requestOptions)
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
  return (
    <React.Fragment>
      <Title>Approved Appointments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.patientName}</TableCell>
              <TableCell>{getDate(row.date)}</TableCell>
              <TableCell>{getTime(row.date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}