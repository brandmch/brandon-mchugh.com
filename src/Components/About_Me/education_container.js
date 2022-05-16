import React from 'react';

// PROPS organization, degree, discipline
export default function Education_Container(props) {
    return (
        <div className='education_container'>
            <h1>{props.organization}-</h1>
            <h2>{props.degree}:</h2>
            <h2>{props.discipline}</h2>
        </div>
    )
}