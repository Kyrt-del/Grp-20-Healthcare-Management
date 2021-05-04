import React from 'react'
import I3 from '../../images/p1.JPG'
import Clock from 'react-live-clock'; 
import { Calendar } from "react-multi-date-picker"
import './doctor.css'
import DR from '../doctorReminder/fetchReminder';
const doctor = () =>{
    return (
        <>
            <div class="row no-gutters">

                <div class="col-md-2 sidebar">
                        
                        <div class="pro-1 patient-sidebar-items">
                            <img class="pro-image patient-sidebar-image" alt="" src={I3} herf="#"/>
                                <div class="pro-body">
                                    <div class="pro-text">
                                        Erik 
                                        <br/>
                                        Dentist
                                    </div>
                                </div>
                        </div>
    
                        <div className="sideitems">
                            <div class="pro-1 pro-body patient-sidebar-items">
                                <div class="pro-text" ><a href="https://towhidkashem.github.io/react-calendar/#/2021/04 s-i">Patients</a></div>
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

                <div class="col-md-10">
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

                        <div class="row no-gutters">

                            <div class="col-md-8 doctor-col-center">
                                <div >Middle col</div>
                                    <div class="row">
                                        <div class="col-md-1"></div>
                                        <div class="col-md-10">M</div>
                                        <div class="col-md-1"></div>
                                    </div> 
                            </div>

                            <div class="col-md-3 doctor-col-reminder">
                                <div class="doctor-reminder-text">Upcoming Appoinments</div> 
                                <Calendar />  
                                <DR/>                                  
                            </div>

                        </div>
                </div>
            </div>
        </>
    )
}

export default doctor;
