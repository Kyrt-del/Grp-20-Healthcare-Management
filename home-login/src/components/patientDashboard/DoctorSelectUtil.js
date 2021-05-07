import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Key } from 'react-bootstrap-icons';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Cookies, useCookies } from "react-cookie";
import { ColorizeOutlined } from '@material-ui/icons';
import { SnackbarProvider, useSnackbar } from 'notistack';
require("dotenv").config();
const API_URL = process.env.REACT_APP_API_URL;

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

export default function DoctorSelectUtil({name,email,id}) {
  const [cookie, setCookie] = useCookies();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const setDefault = async() => {
    const newcookie = {
        _id: cookie.userCookie._id,
        name: cookie.userCookie.name,
        email: cookie.userCookie.email,
        doctor_email: email,
      };
      setCookie("userCookie", newcookie);
      console.log("cookie");
      console.log(cookie);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            doctor_email: email,
            _id: cookie.userCookie._id
        })
      };
      console.log(id);
      console.log(requestOptions);
      enqueueSnackbar('Default Doctor Changed');
      const ac = new AbortController();
      await fetch(`${API_URL}/patient/setdoctor`, requestOptions)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch(error => console.log(error));
  }

  return (
    <Card className={classes.root} variant="elevated" key = {id}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
            variant="contained"
            color="Primary"
            onClick = {setDefault}
        >
            Select as Default
        </Button>
      </CardActions>
    </Card>
  );
}