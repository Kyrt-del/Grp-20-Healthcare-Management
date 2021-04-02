import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {Clock} from 'react-bootstrap-icons'
import LiveClockDemo from '../../LiveClockDemo'
const Header = () => {
    return (
        <React.Fragment>
            <nav className="navbar sticky-top navbar-expand-sm navbar-light ">
              <a class="navbar-brand" href="/#">
                <img src="https://www.tutlane.com/images/categorylogo/bootstrap.png" width="30" height="30" /> Bootstrap</a>
              <div className="temp2">
              <ul className="navbar-nav">
              
              <li className="nav-item"> <a className="nav-link temp" href="/#">9824413747</a> </li>
                <li className="nav-item"> <a className="nav-link temp" href  ="/#">info@care.com</a> </li>
                <li className="nav-item"> <a className="nav-link temp-clock temp" href="/#"><LiveClockDemo /></a> </li>
              </ul>
              </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;