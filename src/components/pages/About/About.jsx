import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  const edu = [
    {
      id: 1,
      year: "2018-21",
      institute: "Deogiri College, Aurangabad",
      percentage: 79.9,
      desc: "Bachelor of science in Information Technology",
    },
  ];
  const certificate = [
    {
      id: 1,
      title: "Responsive Web Design by freecodecamp",
      link: "//freecodecamp.org/certification/fccc31301b4-0746-4c3d-b244-a728b0bdea43/responsive-web-design",
    },
    {
      id: 2,
      title: "Front End Development Libraries by freecodecamp",
      link: "https://freecodecamp.org/certification/fccc31301b4-0746-4c3d-b244-a728b0bdea43/front-end-development-libraries",
    },
  ];
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4 bg-white shadow rounded my-2 p-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Education</h3>
            {edu.map((e) => (
              <div className="my-4" key={e.id}>
                <p className="text-purple-400">{e.year}</p>
                <h6 className="text-gray-500">{e.institute}</h6>
                <p className="text-gray-400">{e.percentage}%</p>
                <p className="text-gray-400 font-light">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:mx-4 bg-white shadow rounded my-2 p-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              Certificates
            </h3>
            {certificate.map((c) => (
              <div className="my-4" key={c.id}>
                <h6 className="text-gray-600">{c.title}</h6>
                <a href={c.link} className="text-purple-400">
                  View Certificate
                </a>
              </div>
            ))}
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
