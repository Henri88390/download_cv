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
    "Git",
    "Docker",
    "AWS Amplify",
    "NodeJS",
    "SQL",
    "Python Django",
  ]);

  const text1 = `I'm a French software & web developer with a Master's degree in IT.

I have almost 2 years of experience as a software developer. During this time, I've had the occasion to work on both frontend and backend, using different technologies.

My main backend languages are: .NET, Python Django.
My main frontend frameworks are: Angular, React.`;

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
