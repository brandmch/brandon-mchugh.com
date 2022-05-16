import React from "react";

export default function Project_Container(props) {
    // props: projectName, github, date, description, organization
    return (
        <div className="projectContainer">
            <h1>{props.projectName}</h1>
            <div className="info">
                <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
                <p>Organization: {props.organization}</p>
                <p>{props.date}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}