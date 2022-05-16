import React from "react";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Work_Experience from "./work_experience";
import MaintenanceAlert from '../../Maintence_Alert';


export default function About_Me() {
    return (

        <div>
            <header>
                <div class="container container_solid resume container_image">
                    <div class="title_wrapper">
                        <div className="links">
                            <a href="https://www.linkedin.com/in/mchugh-brandon/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/brandmch" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="/">Home</a>
                        </div>
                        <h1>Brandon Lloyd McHugh</h1>
                    </div>
                </div>
            </header>

            <div className='section'>
                <Skills />
                <Projects />
                <Work_Experience />
                <Education />
            </div>

            {/* <div className="text-align">
                <div className="footer">
                    <a href="https://www.linkedin.com/in/mchugh-brandon/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/brandmch" target="_blank">GitHub</a>
                    <a href="/">Home</a>
                </div>
            </div> */}
        </div>
    )
}