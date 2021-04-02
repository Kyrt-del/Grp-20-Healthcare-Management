import React from 'react';
import './card.css'

const card = (props) =>{
    const tempColor = props.color;
    return (
        <React.Fragment>
            <div class="temp-card1" style={{backgroundColor: tempColor}}>
                <div class="temp-header">
                    Logo
                </div>
            <div class="temp-body">
                <h5 class="temp-title">Special title treatment</h5>
                <p class="temp-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        
    </div>
        </React.Fragment>
    )
}
export default card;