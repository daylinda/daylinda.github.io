import React from "react";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

import skillsJson from "../data/skills.json";
import "../css/skills.css";

const allIcons = {
  ...SiIcons,
  ...BsIcons,
  ...AiIcons,
  ...BiIcons,
  ...TbIcons,
  ...GiIcons,
  ...MdIcons,
};

type Skill = { name: string; icon: string };
type SkillsJson = { skills: { [category: string]: Skill[] } };

const Skills: React.FC = () => {
  const typedSkills: SkillsJson = skillsJson;
  const categories = Object.keys(typedSkills.skills);

  // pick first category as default
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  return (
    <section id="skills" >
      <div className="container py-5 my-5 overflow-auto">
        <h2 className="fw-bold mb-4 ">My Skills</h2>
        <div className="row">
          {/* LEFT COLUMN: categories */}
          <div className="col-md-3 mb-3">
            <ul className="list-group">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`list-group-item ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: skills */}
          <div className="col-md-9">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
              {typedSkills.skills[activeCategory].map((skill) => {
                const IconComponent = (allIcons as any)[skill.icon];
                return (
                  <div className="col text-center" key={skill.name}>
                    <div className="card h-100 border-0 p-2 skill-card">
                      <div className="card-body d-flex flex-column align-items-center">
                        {IconComponent ? <IconComponent size={32} /> : null}
                        {/* Fallback if icon not found */}
                        {!IconComponent && <span> </span>}
                      
                        <h6 className="card-title mt-2">{skill.name}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
