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

  const text1 = `I'm a software & web
  developer with a Master's degree in IT.
  I'm French, currently living in Poland.
  I'm open to job opportunities where I can contribute, learn
  and grow.  
   If you have an opportunity that matches my skills and
  experience, don't hesitate to contact me.  Feel free to connect to me
  on `;

  const text2 = `You can also check my `;

  return (
    <div className="page1-container">
      <div className="page1__title">ABOUT ME</div>
      <div className="page1-content">
        <div className="body-left">
          <div className="body-left__title">My programmer journey</div>
          <div className="body-right__description">
            {" "}
            {text1}
            <a
              className="__link"
              target="__blank"
              href="https://www.linkedin.com/in/henri-lambert-15a525252/"
            >
              Linkedin
            </a>
            .{text2}
            <a
              className="__link"
              target="__blank"
              href="https://github.com/Henri88390"
            >
              GitHub
            </a>
            .
          </div>
        </div>
        <div className="body-right">
          <div className="body-right__title">My Skills</div>
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
