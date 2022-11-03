import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "../../../images/person.png";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/vinodjarare/",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/vinod-jarare-06b95a224",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="profile" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Vinod Jarare</h1>
        <p className="text-sm text-gray-400 mb-3">
          Freelancer,
          <a href="#0" className="text-purple-600 pl-1">
            Web Developer
          </a>
        </p>
        <a
          href="assets/VinodResume.pdf"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Hi,
          <br /> I am Vinod Jarare . <br /> I am strong in designing and
          integration with intuitive problem-solving skills. Proficient in HTML,
          CSS, JavaScript, React, SASS, Bootstrap, nodejs. Have a strong focus
          on efficient designs. <br />
          Ability to evaluate and manupulate designs as per client expectation.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
