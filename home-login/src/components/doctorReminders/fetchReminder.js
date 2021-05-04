import React, {Component} from 'react'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DocCard from './doctorReminder'
class DR extends Component{

    constructor(){
        super()

        this.state ={
            devyani: []
        };

        
    }

    componentDidMount(){
        fetch('http://localhost:3001/doctorReminders')
        .then(res => res.json())
        .then(devyani => this.setState({devyani}));
        console.log(this.devyani);
    }
    render(){
        return(
            <>
                <div class="col center-block">
                
                {this.state.devyani.map(user => 
                    <DocCard key={user.id} name={user.name} Time={user.Time} />)
                }
        
                </div>
            </>
        )
    }
}

export default DR;