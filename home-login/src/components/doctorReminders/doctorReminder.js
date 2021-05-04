import React from 'react'
import './doctorReminder.css'

const doctorReminders = (props) =>{

    
    return (
        <>
        <ul class="reminder-list">
            <li>Dr. {props.name}</li>
            <li>At: {props.Time}</li>
        </ul>
        </>

)}

export default doctorReminders;