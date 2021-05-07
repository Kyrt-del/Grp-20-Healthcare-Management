import React from 'react'
import Review from '../Reviews'
import './style.css'
import Carousel from 'react-bootstrap/Carousel' 
import I3 from '../../images/i3.jpg'


const Testimonials = () => {
    return (
        <React.Fragment>
            <h1 className="h1-temp"> Testimonials </h1>
            <hr className="style13" />
            <br/>
            <div className="carouse-container">
            <Carousel className="cau-temp">

                <Carousel.Item interval={2000} className="items">
                    <div
                    className="d-block w-100 c1"
                    alt="First slide"
                    >
                        <Review />
                    </div>
                
                </Carousel.Item>
                
                <Carousel.Item interval={2000}>
                    <div
                    className="d-block w-100 c1"
                    alt="First slide"
                    >
                        <Review />
                    </div>
                
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <div
                    className="d-block w-100 c1"
                    alt="First slide"
                    >
                        <Review />
                    </div>
                
                </Carousel.Item>
                </Carousel>
            </div>
            
            <hr className="style2 temp-border"/>
        </React.Fragment>
    )
}

export default Testimonials;