import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Html, Css, Scss",
    percentage: "95%",
  },
  {
    id: 2,
    title: "Bootstrap",
    percentage: "80%",
  },
  {
    id: 3,
    title: "TailwindCSS",
    percentage: "80%",
  },
  {
    id: 4,
    title: "Javascript",
    percentage: "70%",
  },
  {
    id: 5,
    title: "ReactJS",
    percentage: "80%",
  },
  {
    id: 6,
    title: "Node js",
    percentage: "70%",
  },
  {
    id: 7,
    title: "MongoDb",
    percentage: "70%",
  },
  {
    id: 8,
    title: "Git, Github",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="py-4 bg-white shadow rounded md:m-4">
      <div className="flex flex-wrap px-2">
        <div className="w-full">
          <div className="md:mx-4 ">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
