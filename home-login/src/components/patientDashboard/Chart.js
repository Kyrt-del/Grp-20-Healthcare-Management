import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { AreaChart , CartesianGrid, Tooltip, ReferenceLine, Area, Legend } from 'recharts';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const API_URL = process.env.REACT_APP_API_URL;

const drawerWidth = 240;
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

export default function Chart(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [items, setItems] = useState([]);
  let data = [];
  useEffect(async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email : props.email }),
    };
    const ac = new AbortController();
    await fetch(`${API_URL}/patient/getreports`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        data = response.report_list;
      })
      .catch(error => console.log(error));
    setItems(data);
    console.log(data);
    return () => ac.abort();
  }, []);

  return (
    <React.Fragment>
    <Container maxWidth="lg" className={classes.container}>
    <Typography component="h2" variant="h2" color="primary" gutterBottom>
      Analytics
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Blood Pressure
        </Typography>
        <AreaChart width={1000} height={250} data={items}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="date" tick = {false}/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
        <Area type="monotone" name="Systolic" dataKey="bloodPressure.systolic" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" connectNulls dot = {true}/>
        <Area type="monotone" name="Diastolic" dataKey="bloodPressure.diastolic" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" connectNulls dot = {true}/>
        </AreaChart>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Blood Sugar
        </Typography>
        <AreaChart width={1000} height={250} data={items}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="date" tick = {false}/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="bloodSugar" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" connectNulls dot = {true}/>
        </AreaChart>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Temperature
        </Typography>
        <AreaChart width={1000} height={250} data={items}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="date" tick = {false}/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="temperature" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" connectNulls dot = {true}/>
        </AreaChart>
      </Grid>
    </Grid>
    {/* <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <h6>Pulse Rate</h6>
        <LineChart width={1000} height={250} data={items}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick = {false}/>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pulseRate" stroke="#8884d8" connectNulls/>
        </LineChart>
      </Grid>
    </Grid> */}
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Pulse Rate
        </Typography>
        <AreaChart width={1000} height={250} data={items}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="date" tick = {false}/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="pulseRate" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" connectNulls dot = {true}/>
        </AreaChart>
      </Grid>
    </Grid>
    </Container>
    </React.Fragment>
  );
}