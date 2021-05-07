import React, { Component } from 'react'
// import './style.css';  
import Clock from 'react-live-clock';

export class ClockLiveDemo extends Component {
    render() {
        return (
            <div >  
							<Clock format={'HH:mm:ss'} ticking={true} />   
						</div>
        )
    }
}

export default ClockLiveDemo;