import React from 'react'
import { Button} from 'react-bootstrap';

import './style.css'

const Navbar = () =>{
    return (
        <React.Fragment>
            <nav className="navbar fixed navbar-expand-lg navbar-dark bg-primary temp">
                    <ul className="navbar-nav temp1">
                        <li className="nav-item temp3">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item temp3">
                            <a className="nav-link" href="/About-us">About Us</a>
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
                    </ul>
    
                    
                    
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Button type="button" variant="info" className="btn btn-secondary">Sigh Up</Button>{' '}
                        <Button type="button" variant="info" className="btn btn-secondary">Sign In
                        
                        </Button>{' '}
                
                    </div>
                

            
            </nav>

        </React.Fragment>
    );
}

export default Navbar;