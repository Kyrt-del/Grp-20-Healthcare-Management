import React from 'react'
import './style.css'
import PC from '../pre-card'
import I3 from '../../images/i8.JPG'
import I1 from '../../images/i9.JPG'
import I2 from '../../images/i10.JPG'
import I0 from '../../images/i11.JPG'




const Precautions = () => {
    return (
        <React.Fragment>
            <h1 className="h1-temp"> Precautions </h1>
            <hr class="style13" />
            <br/>
            <div class="row pre-row">
                <div class="col"></div>
            <div class="col pre-col"> 
                <PC image={I3} iptext={'COVID 19: How to Treat Coronavirus at Home'} link={'https://patient.info/news-and-features/covid-19-how-to-treat-coronavirus-at-home'}/>
            </div>
            <div class="col pre-col"> 
                <PC image={I1} iptext={'How well do face masks protect against coronavirus?'} link={'https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-mask/art-20485449'}/>
            </div>
            <div class="col pre-col"> 
                <PC image={I2} iptext={'Possible Side Effects of getting COVID 19 Vaccine'} link={'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect/after.html'}/>
            </div>
            <div class="col pre-col"> 
                <PC image={I0} iptext={'The Importance of Hand Sanitizer Placement in the Workplace'} link={'https://info.debgroup.com/blog/the-importance-of-hand-sanitizer-placement-in-the-workplace#:~:text=Using%20hand%20sanitizer%20reduces%20microbial,the%20health%20of%20its%20employees.'}/>
            </div>
            <div class="col"></div>
            </div>
            <hr class="style2 temp-border"/>
        </React.Fragment>
    )
}

export default Precautions;