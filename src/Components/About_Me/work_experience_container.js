import React from "react";

// PROPS: job_title, company, dates, description
export default function Work_Experience_Container(props) {
    return (
        <div className="work_experience_container">
            <div className="top">
                <h1>{props.job_title}</h1>
                <h3>at</h3>
                <h2>{props.company}</h2>
            </div>
            <h4>{props.dates}</h4>
            <p className="description">{props.description}</p>
        </div>
    )
}