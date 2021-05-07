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
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Cookies, useCookies } from "react-cookie";
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

export default function Medical({props}) {
  const [cookie, setCookie] = useCookies();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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

  return (
    
    <Card className={classes.root} variant="elevated" key = {props._id}>
      <CardContent>
        <Typography variant="h5" component="h2" color='primary'>
          {props.medicine}
        </Typography>
        <Typography className={classes.pos} color='secondary'>
          Dr. {props.doctorName}
        </Typography>
        <Typography className={classes.pos} color='textPrimary'>
          Prescribed Till: {getDate(props.date)}
        </Typography>
        <Typography className={classes.pos} color='textPrimary'>
            Morning : {props.time.morning ? <DoneIcon /> : <ClearIcon />}
        </Typography>
        <Typography className={classes.pos} color='textPrimary'>
            Afternoon : {props.time.afteroon ? <DoneIcon /> : <ClearIcon />}
        </Typography>
        <Typography className={classes.pos} color='textPrimary'>
            Night : {props.time.night ? <DoneIcon /> : <ClearIcon />}
        </Typography>
        
      </CardContent>
    </Card>
  );
}