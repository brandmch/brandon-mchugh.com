import React from 'react';
import data from '../../data/skills_data'

const skills = data.map(x => {
    return <div
        class="grid-item"
    >{x}</div>
})

export default function Skills() {
    return (
        <div className='skills'>
            <h1 className='sections_h1'>Skills</h1>
            <div class="grid-container">

                {skills}

            </div>
        </div>
    )
}