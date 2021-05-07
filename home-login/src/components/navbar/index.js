import React from 'react'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom";
import './style.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-primary navbar-temp">
                    <ul className="navbar-nav temp1">
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="/About us">About Us</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    <li className="nav-item temp3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                    
                    <Link to={"/patient-signup"}>                                                                                                                                                                      
                        <Button type="button" variant="info" className="btn btn-secondary mr-2 btn-sm">
                            patient Sign Up
                        </Button>
                    </Link>

                    <Link to={"/doctor-signup"}>                                                                                                                                                                      
                        <Button type="button" variant="info" className="btn btn-secondary mr-2 btn-sm">
                            doctor Sign Up
                        </Button>
                    </Link>


                    <Link to={"/signin"}>                                                                                                                                                                      
                        <Button type="button" variant="info" className="btn btn-secondary mr-2 btn-sm">
                            Sign In
                        </Button>
                    </Link>

                    </div>
                    </li>
                    </ul>
                </nav>
        </>
    );
}

export default Navbar;