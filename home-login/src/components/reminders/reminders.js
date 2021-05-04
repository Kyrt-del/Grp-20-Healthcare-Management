import React, {Component} from 'react'
import Recard from '../recard/recard'
class reminders extends Component{

    constructor(){
        super()

        this.state ={
            devyani: []
        };

        
    }

    componentDidMount(){
        fetch('http://localhost:3001/reminders')
        .then(res => res.json())
        .then(devyani => this.setState({devyani}));
        console.log(this.devyani);
    }
    render(){
        return(
            <>
                <div class="col center-block">
                
                {this.state.devyani.map(user => 
                    <Recard key={user.id} feild={user.feild} name={user.name} Time={user.Time} />)
                }
        
                </div>
            </>
        )
    }
}

export default reminders;