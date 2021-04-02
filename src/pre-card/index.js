import React from 'react'
import './pre.css'
import Card from "react-bootstrap/Card";
import { Button} from 'react-bootstrap';
import I3 from '../../images/i3.jpg'


const PreCard = (props) => {
    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" alt="" src={props.image} />
                <Card.Body>
            
                <Card.Text>
                    {props.iptext}
                </Card.Text>
                <Button variant="info" href={props.link}>Read More</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default PreCard;