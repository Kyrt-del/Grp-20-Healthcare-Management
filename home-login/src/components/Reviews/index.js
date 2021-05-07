import React from 'react'
import './style.css'
import I3 from '../../images/i3.jpg'


const Review = () => {
    return (
        <React.Fragment>
            <div className="row review-container">
                <div className="col" />
                <div className="col" />

                <div className="col review-col" >
                    <h1 className="h1-review"> Thank you for your help!</h1>
                    <p className="review-para">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
            
                <div className="row review-row">
                    <div className="col">
                        <img src={I3} alt="" className="circle" />
                    </div>

                    <div className="col col-left">
                        <h2 className="review-h2">Name</h2>
                        <h4 className="font-weight-light review-h4">designation</h4>
                    </div>
                </div>
            </div>

                <div className="col" />
                <div className="col" />
            
            </div>
        </React.Fragment>
    )
}

export default Review;