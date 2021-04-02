import React from 'react'
import './App.css';
import Header from './components/main-header'
import Navbar from './components/navbar';
import About from'./components/About-us';
import Func from './components/functionalities';
import Precautions from './components/Precautions';
import Testimonials from './components/Testimonials'
import Contact from './components/contact Us'
import Footer from './components/footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom";
import Main from './components/Main/main';




function App() {
  return (
    <>

    <Router>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </Router>
  </>
  
  );
}

export default App;
