import React, { FC } from "react";
import "./Skill.scss";

interface SkillProps {
  title: string;
}

const Skill: FC<SkillProps> = (props) => (
  <div className="__skill"> {props.title}</div>
);

export default Skill;
