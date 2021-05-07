import React from 'react';
import './card.css'

const card = (props) =>{
    const tempColor = props.color;
    return (
        <React.Fragment>
            <div className="temp-card1" style={{backgroundColor: tempColor}}>
                <div className="temp-header">
                    Logo
                </div>
            <div className="temp-body">
                <h5 className="temp-title">Special title treatment</h5>
                <p className="temp-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        
    </div>
        </React.Fragment>
    )
}
export default card;