import React from "react";
import { SkillsData } from "../../../data/skills";
import Separator from "../../common/separator";
import "./skills.css";
import SkillCard from "./skill-card";

function Skills() {
  const data = SkillsData;
  return (
    <div>
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
