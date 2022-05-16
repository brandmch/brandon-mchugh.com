import React from 'react';
import Project_Container from './projects_container';
import data from '../../data.js/project_data'


const projects = data.map(x => {
    return <Project_Container
        key={x.id}
        {...x} />
})

export default function Projects() {

    return (
        <div className='projects'>
            <h1 className='sections_h1'>Projects</h1>

            {projects}

        </div>
    )
}