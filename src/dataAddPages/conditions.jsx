import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  Col,
  FormControl,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import "./adder.css";
import logo from ".././logo.svg";

class Cond extends Component {
  render() {
    return (
      <>
        <img className="image" src={logo} alt={logo} width="60" height="30" />
        <h1 className="text">
          Please enter information about your Medical Conditions
        </h1>
        <Form className="form">
          <Form.Label className="temp2">
            Since when have you known about this condition
          </Form.Label>
          <Form.Row className="row">
            <Col>
              <Form.Label>Day</Form.Label>
              <Form.Control placeholder="DD" />
            </Col>
            <Col>
              <Form.Label> Month </Form.Label>
              <Form.Control placeholder="MM" />
            </Col>
            <Col>
              <Form.Label>Year</Form.Label>
              <Form.Control placeholder="YYYY" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Medical Conditions</Form.Label>
              <Form.Control placeholder="Enter here..." />
            </Col>
          </Form.Row>

          <Button className="bot" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default Cond;
