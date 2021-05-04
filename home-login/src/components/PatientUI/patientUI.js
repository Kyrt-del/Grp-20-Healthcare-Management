import React, { useState } from "react"
import './patientUI.css'
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import MultiColors from "react-multi-date-picker/plugins/multi_colors"
import I3 from '../../images/p1.JPG'
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import Medicines from '../medicines/medicines'
import M from '../Month/Month'
import {Form} from "react-bootstrap";
import Clock from 'react-live-clock';  
import Modal from "react-bootstrap/Modal";
import { Button} from 'react-bootstrap';
import Conditions from '../conditions/conditions'
import R from '../reminders/reminders'
import I16 from '../../images/i16.jpg'
import I14 from '../../images/i14.jpg'
import I13 from '../../images/i13.jpg'

const PatientUI = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
             

            <div class="row no-gutters pr">
            
                <div class="col-md-2 sidebar">
                        
                    <div class="pro-1 patient-sidebar-items">
                        <img class="pro-image patient-sidebar-image" alt="" src={I3} herf="#"/>
                            <div class="pro-body">
                                <div class="pro-text">
                                    Tony Stark
                                    <br/>
                                    Gender: Male
                                </div>
                            </div>
                    </div>

                    <div className="sideitems">
                        <div class="pro-1 pro-body patient-sidebar-items">
                            <div class="pro-text" ><a href="https://towhidkashem.github.io/react-calendar/#/2021/04 s-i">Doctor</a></div>
                        </div>
                        <div class="pro-1 pro-body  patient-sidebar-items">
                            <div class="pro-text" ><a href="https://towhidkashem.github.io/react-calendar/#/2021/04 s-i">Daily Journal</a></div>
                        </div>
                        <div class="pro-1 pro-body  patient-sidebar-items">
                            <div class="pro-text" ><a href="https://towhidkashem.github.io/react-calendar/#/2021/04 s-i">Payments</a></div>
                        </div>
                        <div class="pro-1 pro-body  patient-sidebar-items">
                            <div class="pro-text" ><a href="https://towhidkashem.github.io/react-calendar/#/2021/04 s-i">History</a></div>
                        </div>
                    </div>
                    
                </div>
                
                <div class=" col-md-10 patientUI-col-2">
                        <nav className="navbar navbar-expand-sm patient-navbar">
                                <a class="navbar-brand" href="/#">
                                    <img src="https://www.tutlane.com/images/categorylogo/bootstrap.png" width="30" height="30" /> 
                                    Bootstrap
                                </a>
                                <div>Health+</div>
                                <ul className="navbar-nav">
                                    <li className="nav-item"> <a className="nav-link temp-clock temp" href="/#">
                                        <div class="patient-clock"><Clock format={'HH:mm:ss'} ticking={true} /> </div></a> </li>
                                </ul>
                    </nav>
                    <div class="row no-gutters patient-row-1">

                        <div class="col-md-8 patient-col-month">
                            <div class="month-title-text">Your Schedule</div>
                                <div class="row">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-10"><M/></div>
                                    <div class="col-md-1"></div>
                                </div> 
                        </div>

                        <div class="col-md-3 patient-col-reminder">
                            <div class="reminders-title-text">Upcoming Appoinments</div>
                            <img src={I16} class = "img-responsive reminder-image" width = "100%" alt="" />
                                <R/>
                        </div>

                    </div>
                </div>

                <div class="row patient-temp-row"/>
                
                <div class="row no-gutters margin-row">
                    <div class="col-md-2">
                        <img src={I14} class = "img-responsive conditions-image" width = "100%" alt="" />
                    </div>
                    <div class="col-md-10 conditions-right-column">
                            <div class="condition-title-text">Exsisting Medical Conditions</div>
                            <Conditions />
                    </div>
                </div>
                
                <div class="row patient-temp-row"/>

                <div class="row margin-row">
                    <div class="col-md-2">
                        <img src={I13} class = "img-responsive medicines-image" width = "100%" alt="" />
                        <div class="d-flex justify-content-center medicine-title-button"><Button variant="dark"  onClick={handleShow}>Log Medicine</Button></div>
                    </div>
                    <div class="col-md-10 conditions-right-column">
                            <div class="medicine-title-text">Suggested Medicines</div>
                           
                               <Medicines/>
                          
                    </div>
                </div>

                <div class="row patient-temp-row"/>

                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Log Medicine</Modal.Title>
                                    </Modal.Header>
                                        <Modal.Body>
                                        <Form>

                                            <div class="mb-4">
                                                <Form.Label>Medicine Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Medicine Name" />
                                                        <Form.Text className="text-muted">
                                                            Make sure you have all the information about the consumption of medicine.
                                                        </Form.Text>
                                            </div>
                                                <Form.Label>Select Days</Form.Label>
                                                {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-4">
                                                    <Form.Check inline label="Monday" type={type} id={`inline-${type}-1`} />
                                                    <Form.Check inline label="Tuesday" type={type} id={`inline-${type}-2`} />
                                                    <Form.Check inline label="Wednesday" type={type} id={`inline-${type}-3`} />
                                                    <Form.Check inline label="Thursday" type={type} id={`inline-${type}-4`} />
                                                    <br/>
                                                    <Form.Check inline label="Friday" type={type} id={`inline-${type}-5`} />
                                                    <Form.Check inline label="Saturday" type={type} id={`inline-${type}-6`} />
                                                    <Form.Check inline label="Sunday" type={type} id={`inline-${type}-7`} />
                                                </div>))}

                                                <Form.Label>Enter Timing</Form.Label>
                                                    <Form.Control as="select" defaultValue="Choose...">
                                                        <option>8 AM</option>
                                                        <option>10 AM</option>
                                                        <option>12 PM</option>
                                                        <option>2 PM</option>
                                                        <option>4 PM</option>
                                                        <option>6 PM</option>
                                                        <option>8 PM</option>
                                                        <option>10 PM</option>
                                                        <option>12 AM</option>
                                                    </Form.Control>
                                            </Form>
                                        </Modal.Body>
                                    <div class="mb-4">
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="dark" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                    </div>
                        </Modal>

            </div>
        </>
    )
}
export default PatientUI;