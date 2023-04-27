import React from "react";
import { motion } from "framer-motion";
import Team from "../components/Team";
import image from "../components/assets/8h.jpg";

function About() {
  return (
    <div>
      <div className="bg-blue-600  mb-2 ">
        <div className="pt-5 md:pt-10 text-center mb-6">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold justify text-white">
            About Us
          </h1>
          <div
            data-aos="zoom-in-up"
            className="text-xl pb-7 md:text-xl font-light text-white flex gap-x-0.5 text-center justify-center"
          >
            <a
              href="/home"
              className="hover:underline decoration-white hover:text-gray-100"
            >
              Home
            </a>
            <p>/</p>
            <a
              href="/about"
              className="hover:underline decoration-white hover:text-gray-100"
            >
              Aboutus
            </a>
          </div>
        </div>
      </div>
      <div className="px-7">
        <div className="mx-auto container mb-4 md:mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <motion.div className="">
            <img
              src={image}
              className="h-72 w-full rounded-3xl "
              alt=""
              fluid
            />
          </motion.div>

          <motion.div className="mx-auto rounde-xl border-1 border-gray-500 ">
            <motion.h4 className="text-xl mt-2 md:text-2xl font-bold text-blue-600">
              e-Nyasa Academia
            </motion.h4>
            <motion.p className="mt-6 text-lg leading-loose	 md:text-xl text-start font-semibold text-gray-700  ">
              Enyasa Academia's Resource Sharing section enables collaborative
              learning and research by providing{" "}
              <br className="invisible md:visible" />a platform for sharing
              educational resources.
              <br className="invisible md:visible" />
              Its e-learning platform offers a flexible and
              <br className="invisible md:visible" />
              engaging learning experience for learners.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <Team/>
    </div>
  );
}

export default About;
