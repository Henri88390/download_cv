import { Skill } from "components";
import React, { FC, useState } from "react";
import "./Page1.scss";

interface Page1Props {}

function Page1(props: FC<Page1Props>) {
  const [skills] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Angular",
    "React",
    ".NET",
    "Python",
    "SQL",
    "Git",
  ]);

  const text1 = `I'm a French software & web developer with a Master's degree in IT, currently living in Krakow, Poland.
  
I'm open to job opportunities where I can contribute, learn and grow.  

If you have an opportunity that matches my skills and experience, don't hesitate to contact me.`;

  return (
    <div className="page1-container">
      <div className="page1__title">ABOUT ME</div>
      <div className="page1-content">
        <div className="body-left">
          <div className="about-me__title">A brief summary</div>
          <div className="about-me__description">{text1}</div>
        </div>
        <div className="body-right">
          <div className="about-me__title">My Skills</div>
          <div className="skills">
            {skills.map((skill) => (
              <Skill key={skill} title={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
