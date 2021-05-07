import React from 'react'
import './style.css'
import I3 from '../../images/i3.jpg'

  const About = () =>{
    return (
      <React.Fragment>
        <div className="main-text">
          <h1> About Us </h1>
          <hr className="style13" />
          <br/>
          <div className="container">
          <div className="row tr">
          <div className="col">
          <h5>What we do</h5>
          <h2 className="font-weight-bold">Services/Aim</h2>
          <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.
          <br/>
          <br/>

Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <br />
          <button type="button" className="btn btn-info temp-button">Learn More</button>
          </div>
          <div className="col" id="ID">
          <img src={I3} className = "img-responsive" width = "100%" alt="" />
          </div>
          </div>
          </div>
          </div>
          <hr className="style2"/>
        </React.Fragment>
    )
}
export default About;