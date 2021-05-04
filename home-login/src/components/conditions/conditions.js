import React, {Component} from 'react'
import Condcard from '../condcard/condcard'
class medicines extends Component{

    constructor(){
        super()

        this.state ={
            devyani: []
        };


    }

    componentDidMount(){
        fetch('http://localhost:3001/conditions')
        .then(res => res.json())
        .then(devyani => this.setState({devyani}));
        console.log(this.devyani);
    }
    render(){
        return(
            <>
            <div class="d-flex">
                
                {this.state.devyani.map(user => 
                    <Condcard key={user.id} name={user.name} degree={user.degree}/>)
                }
        
                </div>
            </>
        )
    }
}

export default medicines;