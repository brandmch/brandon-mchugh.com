import React from 'react';
import data from '../../data/skills_data'
import { v1 as uuidv1 } from 'uuid';

const skills = data.map(x => {
    return <div
        class="grid-item"
        key={uuidv1()}
    >{x}</div>
})

export default function Skills() {
    return (
        <div className='skills'>
            <h1 className='sections_h1'>Skills</h1>
            <div className="grid-container">

                {skills}

            </div>
        </div>
    )
}