import React from "react";
import Work_Experience_Container from "./work_experience_container";
import data from "../../data/work_experience_data";

const work_experience = data.map((x) => {
  return <Work_Experience_Container key={x.id} {...x} />;
});

export default function Work_Experience() {
  return (
    <div className="work_experience infoBox">
      <h1 className="sections_h1">Work Experience</h1>
      {work_experience}
    </div>
  );
}
