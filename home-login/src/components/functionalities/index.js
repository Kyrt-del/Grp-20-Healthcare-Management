import React from 'react';
import './style.css'
import I7 from '../../images/i7.jpg'
import CardComp from '../card';
import TypeWriterEffect from 'react-typewriter-effect';
import { TextCenter } from 'react-bootstrap-icons';

const Func = () =>{
    return (
        <React.Fragment>
        <div className="main-area">
        
                    

        <div className="row temp-row">
            <div className="row row1">
        <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#3F3D56',
                        fontWeight: 900,
                        fontSize: '30px',
                    }}
                    className="Type"
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Welcome!',
                        'Best Place to find Hospitals',
                        'We help to monitor your health daily',
                        'We ensure privacy of your data',
                        'Sign Up to experience various features',
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                    className="Type"
                    />
                </div>
                <div className="row row2">
            <div className="col"></div>
            <div className="col tc"> <CardComp color={"#3090C7"}/> </div>
            <div className="col tc"> <CardComp color={"#0041C2"}/> </div>
            <div className="col tc"> <CardComp color={"#15317E"}/></div>
            <div className="col"></div>
            </div>
        </div>
        
        </div>
        </React.Fragment>
    );
}
export default Func;