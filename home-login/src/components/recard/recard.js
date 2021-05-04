import React from 'react'
import './recard.css'

const recard = (props) =>{

    
    return (
        <>
        <ul class="reminder-list">
            <li>About: {props.feild}</li>
            <li>Dr. {props.name}</li>
            <li>At: {props.Time}</li>
        </ul>
        </>

)}

export default recard;