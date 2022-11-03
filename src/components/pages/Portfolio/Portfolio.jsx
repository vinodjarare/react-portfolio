import React from "react";
import image1 from "../../../images/portfolio/fake-store.png";
import image2 from "../../../images/portfolio/react-chat.png";
import image3 from "../../../images/portfolio/poultry.png";
import image4 from "../../../images/portfolio/ecommerce.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "React Cart",
    link: "https://github.com/vinodjarare/",
    description:
      "This is the ecommerce cart in which user can add item to shopping cart . This project made by using  React, Bootstrap, Redux",
  },
  {
    id: 2,
    image: image2,
    title: "Chat App",
    link: "https://github.com/vinodjarare/",
    description:
      "This is the messaging website in which  user can interact with other user. This project made by using react,css,firebase",
  },
  {
    id: 3,
    image: image3,
    title: "Poultry Farming",
    link: "https://github.com/vinodjarare/",
    description:
      "This is poultry site which helps user to improve knowledge about poultry industry. This project made by using HTML, CSS, JavaScript, Express js, Mongodb, Bootstrap",
  },
  {
    id: 4,
    image: image4,
    title: "Ecommerce",
    link: "https://github.com/vinodjarare/",
    description:
      "This is the ecommerce website in which user can bay items from wensite . This project made by using  React, Redux, Material UI, Express, Mongodb,Stripe Payment method",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
