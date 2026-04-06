import React from "react";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);

  return (
    <section id="skills" className="container-fluid py-5 my-5 overflow-auto">
      <div className="container">
        <h2 className="fw-bold mb-4">My Skills</h2>

        <div className="row">
          {/* LEFT: category list */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <ul className="list-group skills-category-list">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`list-group-item skills-category-item ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: skill cards */}
          <div className="col-12 col-md-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {typedSkills.skills[activeCategory].map((skill, i) => {
                  const IconComponent = (allIcons as any)[skill.icon];
                  return (
                    <motion.div
                      className="col"
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.18, delay: i * 0.04 }}
                    >
                      <div className="skill-card h-100 p-3 text-center">
                        <div className="skill-icon-wrap mb-2">
                          {IconComponent ? (
                            <IconComponent size={28} />
                          ) : (
                            <span className="skill-icon-fallback">·</span>
                          )}
                        </div>
                        <div className="skill-name">{skill.name}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;