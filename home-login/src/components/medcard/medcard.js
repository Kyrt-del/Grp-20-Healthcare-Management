import React from 'react'
import './medcard.css'

const medcard = (props) =>{

    
    return (
        <>
        <div class="medcard-row">
            <div class="medcard-name">{props.medicineName}</div>
            <hr class="style4"/>
            
            <div class="medcard-time">{props.Time}</div>
            
            <hr class="style4"/>
            <div class="medcard-day">{props.Days}</div>
        </div>
        </>

)}

export default medcard;