import React from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chart from './Chart';
import DoctorList from './DoctorList';
import Orders from './Orders';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReportForm from '../reportForm/reportForm';
import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import BookIcon from '@material-ui/icons/Book';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import { Cookies, useCookies } from "react-cookie";
import PendingAppointments from './PendingAppointments';
import ApprovedAppointments from './ApprovedAppointments';
require("dotenv").config();

const drawerWidth = 240;
const API_URL = process.env.REACT_APP_API_URL;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [cookie, setCookie] = useCookies();

  const [isDashboard, setDashboard] = React.useState(true);
  const [isViewData, setViewData] = React.useState(false);
  const [isAddData, setAddData] = React.useState(false);
  const [isDailyJournal, setDailyJournal] = React.useState(false);
  const [isAppointment, setAppointment] = React.useState(false);

  const clickDashboard = () => {
    setDashboard(true);
    setViewData(false);
    setAddData(false);
    setDailyJournal(false);
    setAppointment(false);

  }

  const clickViewData = () => {
    setDashboard(false);
    setViewData(true);
    setAddData(false);
    setDailyJournal(false);
    setAppointment(false);
  }

  const clickAddData = () => {
    setDashboard(false);
    setViewData(false);
    setAddData(true);
    setDailyJournal(false);
    setAppointment(false);
  }

  const clickAppointment = () => {
    setDashboard(false);
    setViewData(false);
    setAddData(false);
    setDailyJournal(false);
    setAppointment(true);
  }

  const clickDailyJournal = () => {
    setDashboard(false);
    setViewData(false);
    setAddData(false);
    setDailyJournal(true);
    setAppointment(false);
  }

  const getChart = async () => {
    // return (
    //   <h1> SMIT </h1>
    //   );
    //  const requestOptions = {
    //    method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ _id: cookie.userCookie._id }),
    // };
    // console.log("Hello3");
    // console.log(requestOptions);
    // await fetch(`${API_URL}/patient/report/pulseRate`, requestOptions)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     data = response;
    //     console.log(data);
    //   })
    //   .catch(error => console.log(error));
    //   console.log("here");
      // return (
      // <Paper className={fixedHeightPaper}>
      //   <Chart data = {data[0]}/>
      // </Paper>
      // );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Patient Dashboard
          </Typography>
          <Typography component="h3" variant="h6" color="inherit" noWrap className={classes.title}>
            Hi, {cookie.userCookie.name}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            type="logout"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{
          <div>
            <ListItem button onClick={clickDashboard}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={clickDailyJournal}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Daily Journal" />
            </ListItem>
            <ListItem button onClick={clickAddData}>
              <ListItemIcon><AddIcon /></ListItemIcon>
              <ListItemText primary="Add Data" />
            </ListItem>
            <ListItem button onClick={clickViewData}>
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              <ListItemText primary="View Data" />
            </ListItem>
            <ListItem button onClick={clickAppointment}>
              <ListItemIcon><AddAlarmIcon /></ListItemIcon>
              <ListItemText primary="Book Appointment" />
            </ListItem>
          </div>
        }</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          { isViewData && 
              <Chart email = {cookie.userCookie.email}/>
          }
          <Grid container spacing={3}>
            {(isAppointment) && 
                <DoctorList />
            }
            {(isDashboard) &&
                <Grid item xs={6}>
                <Paper className={classes.paper}> 
                <PendingAppointments id = {cookie.userCookie._id}/>
                </Paper>
                </Grid>
            }
            {(isDashboard) &&
                <Grid item xs={6}>
                <Paper className={classes.paper}> 
                <ApprovedAppointments id = {cookie.userCookie._id}/>
                </Paper>
                </Grid>
            }
            {(isAddData) && 
              <Grid item xs={12}>
              <ReportForm />
              </Grid> 
            }
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;