import React from "react";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Work_Experience from "./work_experience";
import MaintenanceAlert from '../../Maintence_Alert';



// "../../Images/arches.JPG"


export default function About_Me() {

    const urll = "Images/pic1.JPG"

    const bgimg = {
        backgroundImage: `URL(${urll})`

    }
    // document.getElementById(bgimg).style.backgroundImage

    return (

        <div>
            <header>
                <div style={bgimg} className="container container_solid resume container_image" id="bg_img">
                    <div className="title_wrapper">
                        <div className="links">
                            <a href="https://www.linkedin.com/in/mchugh-brandon/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/brandmch" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="/home">Home</a>
                        </div>
                        <h1 id="h1">Brandon Lloyd McHugh</h1>
                        <button type="button">HEY</button>
                    </div>
                </div>
            </header>

            <div className='section'>
                <Skills />
                <Projects />
                <Work_Experience />
                <Education />
            </div>

        </div>
    )
}