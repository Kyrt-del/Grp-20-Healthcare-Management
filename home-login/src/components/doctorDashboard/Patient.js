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
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Box from '@material-ui/core/Box';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Cookies, useCookies } from "react-cookie";
import Chart from './Chart';
import MedicalList from './MedicalList';
import MedicineForm from './MedicineForm';
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

export default function Doctor({props}) {
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

  const PopoverChart = (props) => {
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button variant="contained" color="primary" style={{ background: '#15317E' }} {...bindTrigger(popupState)}>
              Show Past Reports
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2}>
                <Chart name = {props.name} email = {props.email}/>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }

  const PopoverViewMedicine = (props) => {
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button variant="contained" color="primary" style={{ background: '#15317E' }} {...bindTrigger(popupState)}>
            View Medicine Prescription
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box width={330} height={300}>
                <MedicalList _id = {props._id}/>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }

  const PopoverAddMedicine = (props) => {
    return (
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button variant="contained" color="primary" style={{ background: '#15317E' }} {...bindTrigger(popupState)}>
              Add Medicine Prescription
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box p={2}>
              <Grid item xs={12}>
              <SnackbarProvider maxSnack={3}>
              <MedicineForm args = {props._id}/>
              </SnackbarProvider>
              </Grid>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    );
  }

  return (
    <Card style={{ background: '#bbc9f0' }} className={classes.root} variant="elevated" key = {props._id}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Name: {props.name}
        </Typography>
        <Typography className={classes.pos} color="default">
          Email: {props.email}<br />Contact: {props.contact_number}<br />Address: {props.address}<br />City: {props.city}
        </Typography>
      </CardContent>
      <CardActions>
        {PopoverChart(props)}
        {PopoverViewMedicine(props)}
        {PopoverAddMedicine(props)}
      </CardActions>
    </Card>
  );
}