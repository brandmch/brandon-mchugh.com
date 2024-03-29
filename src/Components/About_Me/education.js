import React from "react";
import Education_Container from "./education_container.js";
import data from "../../data/education_data";

const education = data.map((x) => {
  return <Education_Container key={x.id} {...x} />;
});

export default function Education() {
  return (
    <div className="education infoBox">
      <h1 className="sections_h1">Education</h1>
      {education}
    </div>
  );
}
