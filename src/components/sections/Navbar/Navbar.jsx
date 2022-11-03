import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
  },

  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-4 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<About />}>
          {/* <About /> */}
        </Route>
        <Route path="/services" element={<Service />}>
          {/* <Service /> */}
        </Route>
        <Route path="/works" element={<Portfolio />}>
          {/* <Portfolio /> */}
        </Route>
        <Route path="/contact" element={<Contact />}>
          {/* <Contact /> */}
        </Route>
        {/* <Route path="/about" element={<About />}>
          <About />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        // ClassName="text-purple-600"
        className={({ isActive }) =>
          isActive
            ? "text-purple-600"
            : "text-gray-800 text-medium hover:text-purple-600 "
        }
      >
        {title}
      </NavLink>
    </li>
  );
};
