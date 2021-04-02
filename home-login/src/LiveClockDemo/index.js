import React, { Component } from 'react'  
import './style.css';  
import Clock from 'react-live-clock';  
 
export class ClockLiveDemo extends Component {  
        render() {  
                return (  
                        <div>  
                                        <div className="clk">  
                                                <Clock format={'HH:mm:ss'} ticking={true} />   
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default ClockLiveDemo 