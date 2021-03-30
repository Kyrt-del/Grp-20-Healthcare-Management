import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          className="d-inline-block align-top"
          src={logo}
          width="60"
          height="30"
        />{" "}
        Health Care
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Add Data" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action2.1">
              Blood Pressure Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action2.2">
              Pulse Rate Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action2.3">
              Temperature Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action2.4">
              Oxygen Level Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action2.5">
              Add Medicine Prescription
            </NavDropdown.Item>
            <NavDropdown.Item href="#action2.6">
              Add Medical Condition
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="View Records" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action3.1">
              Blood Pressure Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3.2">
              Pulse Rate Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3.3">
              Temperature Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3.4">
              Oxygen Level Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3.5">
              Medicine Prescriptions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3.6">
              Medical Conditions
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Navbar.Brand>Hi, XYZ{"  "}</Navbar.Brand>
          <Button variant="danger">Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
