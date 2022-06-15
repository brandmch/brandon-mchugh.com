import React from "react";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Work_Experience from "./work_experience";
import MaintenanceAlert from "../../Maintence_Alert";
import pics from "../../Images/images";

export default function About_Me() {
  let [backgroundPic, setBackgroundPic] = React.useState([
    "Images/pic",
    1,
    ".JPG",
  ]);

  const bgimg = {
    backgroundImage: `URL(${backgroundPic.join("")})`,
  };

  function nextPicNum() {
    if (backgroundPic[1] === 15) {
      setBackgroundPic(["Images/pic", 1, ".JPG"]);
    } else {
      setBackgroundPic((currentBackgroundPic) => [
        "Images/pic",
        currentBackgroundPic[1] + 1,
        ".JPG",
      ]);
    }
  }

  return (
    <div>
      <header>
        <div
          style={bgimg}
          className="container container_solid resume container_image"
          id="bg_img"
        >
          <div className="title_wrapper">
            <div className="links">
              <button
                type="button"
                className="title_button"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/mchugh-brandon/",
                    "_blank"
                  );
                }}
              >
                LinkedIn
              </button>
              <button
                type="button"
                className="title_button"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/brandmch", "_blank");
                }}
              >
                GitHub
              </button>
              <button
                className="title_button"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/meme_generator", "_blank");
                }}
              >
                Meme Generator
              </button>
              <button
                className="title_button"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/home", "_blank");
                }}
              >
                Home
              </button>
            </div>
            <h1 id="h1">Brandon Lloyd McHugh</h1>
            <div className="button_arrow">
              <button
                className="title_button"
                type="button"
                onClick={nextPicNum}
              >
                Change Picture
              </button>
              {/* <img src={pics.downArrow} /> */}
            </div>
          </div>
        </div>
      </header>

      <div className="section">
        <Skills />
        <Projects />
        <Work_Experience />
        <Education />
      </div>
    </div>
  );
}
