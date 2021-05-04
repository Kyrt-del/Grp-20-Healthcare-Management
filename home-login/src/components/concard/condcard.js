import React from 'react'
import './condcard.css'
import { ProgressBar } from 'react-bootstrap';

const medcard = (props) =>{

    
    return (
        <>
        <div class="condcard-row">
            <div class="condcard-name">{props.name}</div>
            <hr class="style4 condline"/>
            <ProgressBar animated variant="danger" now={props.degree} />
        </div>
        </>

)}

export default medcard;