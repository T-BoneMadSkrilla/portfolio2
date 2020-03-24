import React,{Component} from 'react';
import './Resume.css';

class Resume extends Component{
    render(){
        return(
            <div className="centerResume">
                <img className="containResume" src={require('../../pictures/resume2020.png')}></img>
            </div>
        )
    }
}

export default Resume;