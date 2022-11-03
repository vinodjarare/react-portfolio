import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import {GrMail} from "react-icons/gr"
const Contact = () => {
  return (
    <section className="pb-10 w-full">
      <div className="flex flex-wrap md:px-4">
        <div className="p-8 md:mx-4 w-full bg-white rounded-md shadow-md">
          <div className="m-3">
            <h3 className="text-2xl text-gray-800 font-bold mb-6">
              Get in Touch
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-2/3">
              <a href="https://github.com/vinodjarare/" className="m-3 flex flex-wrap items-center text-purple-800 justify-center py-4 bg-purple-100 hover:text-white hover:bg-purple-600 rounded">
                <span> <FaGithub className="mx-2" /></span> <p>Github</p>
              </a>
            </div>
            <div className="w-full md:w-2/3">
              <a href="https://www.linkedin.com/in/vinod-jarare-06b95a224" className="m-3 flex flex-wrap items-center text-purple-800 justify-center py-4 bg-purple-100 hover:text-white hover:bg-purple-600 rounded">
                <span> <FaLinkedinIn className="mx-2" /></span> <p>LinkedIn</p>
              </a>
            </div>
            <div className="w-full md:w-2/3">
              <div className="m-3 flex flex-wrap items-center text-purple-800 justify-center py-4 bg-purple-100 hover:text-white hover:bg-purple-600 rounded">
                <span> <GrMail className="mx-2" /></span> <p>vsjarare@gmail.com</p>
              </div>
            </div>
           
           
          </div>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
