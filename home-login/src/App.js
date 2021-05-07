import React from 'react'
import './App.css';
import Header from './components/main-header'
import Navbar from './components/navbar';
import About from './components/About-us';
import Func from './components/functionalities';
import Precautions from './components/Precautions';
import Testimonials from './components/Testimonials';
import Contact from './components/contact Us';
import Footer from './components/footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import DoctorSignUp from './components/doctorSignUp';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom";
import Main from './components/Main/main';
import Dashboard from './components/patientDashboard/Dashboard';
import DocDashboard from './components/doctorDashboard/DocDashboard';

function App() {
    return ( 
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/patient-signup" component={SignUp} />
      <Route exact path="/doctor-signup" component={DoctorSignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/patient-dashboard" component={Dashboard} />
      <Route exact path="/doctor-dashboard" component={DocDashboard} />
    </Switch>
    </Router> 
    </>
    );
}

export default App;