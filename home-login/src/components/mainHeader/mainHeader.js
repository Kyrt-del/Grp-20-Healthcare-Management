import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import LiveClockDemo from '../../LiveClockDemo';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <div><LiveClockDemo/></div>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Link to={"/patient-signup"}>
        <Box m={1}>
          <Button size="small" variant="outlined" color="primary">Patient Sign Up</Button>
        </Box>
        </Link>
        <Link to={"/doctor-signup"}>
        <Box m={1}> 
          <Button size="small" variant="outlined" color="primary">Doctor Sign Up</Button>
        </Box>
        </Link>
        <Link to={"/signin"}>
        <Box m={1}>
          <Button size="small" variant="outlined" color="primary">Sign In</Button>
        </Box>
        </Link>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            <Typography
              component="h4"
              variant="h6"
              color="inherit"
              align="center"
              noWrap
            >
            {section.title}
            </Typography>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};