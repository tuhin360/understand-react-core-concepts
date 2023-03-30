import React from 'react';

const knob = (props) => {
    return (
        <div style={{border:'2px solid black', margin:'10px', backgroundColor:'Blue', padding:'10px', borderRadius:'10px'}}>
            <h5>This is Knob component</h5>
            <p>Steps count here: {props.steps}</p>
        </div>
    );
};

export default knob;