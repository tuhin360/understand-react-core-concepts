import React from 'react';
import Knob from '../Knob/Knob';
const Dial = (props) => {
    return (
        <div style={{border:'2px solid black', margin:'10px', backgroundColor:'Green', padding:'10px', borderRadius:'10px'}}>

            <h3>This is dial component</h3>
            <p>Your Steps count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;