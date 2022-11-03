import React from "react";
import { FaBootstrap, FaCode, FaHtml5, FaReact } from "react-icons/fa";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Design",
    description:
      "We design your website as per your buissness requirment with several features. ",
  },
  {
    id: 2,
    icon: <FaHtml5 />,
    title: "Web Development",
    description:
      "We give web development services are used to design ,build,support web software.",
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Develop your website using React, Redux, and other frontend frameworks",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "Bootstrap Template",
    description:
      "Develope bootstrap and mobile responsive web pages using trending frontend technology. ",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
