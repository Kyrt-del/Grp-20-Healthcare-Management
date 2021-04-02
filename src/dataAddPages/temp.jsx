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

class temp extends Component {
  render() {
    return (
      <>
        <img className="image" src={logo} alt={logo} width="60" height="30" />
        <h1 className="text">
          Please input the lastest values of your Body Temperature
        </h1>
        <Form className="form">
          <Form.Label className="temp2">
            Enter the date of the last reading
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
          <Form.Label className="temp1">Enter the Reading</Form.Label>
          <Form.Row>
            <Col xs="auto">
              <Form.Label>Body Temperature</Form.Label>
              <Form.Control placeholder="in °C" />
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

export default temp;
