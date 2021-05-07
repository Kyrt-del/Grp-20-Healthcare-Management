import React from 'react'
import './style.css'
import I3 from '../../images/i3.jpg'
import { Facebook, Google, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

const footer = () =>{
    return (
        <React.Fragment>
        <nav className="navbar fixed navbar-expand-lg navbar-dark bg-primary temp-footer">
        <Instagram className="icon" />
        <Facebook   className="icon"/>
        <Twitter   className="icon"/>
        <Google  className="icon"/>
        <Youtube  className="icon"/>
        </nav>
        </React.Fragment>
    )
}
export default footer;