import React, {Component} from 'react'
import Medcard from '../medcard/medcard'
class medicines extends Component{

    constructor(){
        super()

        this.state ={
            devyani: []
        };

        
    }

    componentDidMount(){
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(devyani => this.setState({devyani}));
        console.log(this.devyani);
    }
    render(){
        return(
            <>
                <div class="d-flex">
                
                {this.state.devyani.map(user => 
                    <Medcard key={user.id} medicineName={user.medicineName} Time={user.Time} Days={user.Days} />)
                }
        
                </div>
            </>
        )
    }
}

export default medicines;