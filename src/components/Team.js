import React from "react";
import { motion } from "framer-motion";
import { teamData } from "../utils";
function Team() {
  
  return (
    <>
      <motion.section>
        <div className="container mx-auto m-4 p-3">
          <div className="container mx-auto text-center">
            <h2 data-aots="fade-up" className="text-xl lg:md:text-4xl font-bold text-center text-blue-600">
              Meet Our <b className="text-gray-600">Team</b>
            </h2>
            <h3 className="mx-auto tracking-wide font-semibold text-gray-600 w-3/4 text-center text-lg md:text-xl lg:text-2xl mt-2 mb-3">
              Enyasa Academia's leadership team is committed to building a
              supportive community that values academic rigor, critical
              thinking, and collaboration.
            </h3>
          </div>
          
          <div className="container mx-auto ">
          <div className="mx-auto w-5/6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {teamData.map((member, index) => {
              return (
                <motion.div
                  data-aos="zoom-in-left"
                  key={index}
                  className="w-fit mb-5  bg-white shadow-sm pb-6 pr-7 pl-7 text-center rounded-xl"
                >
                  <motion.img
                    src={member.image}
                    className="bg-gray-900 bg-opacity-25 bg ring-4 ring-gray-400 h-48 w-48 rounded-full bg-cover"
                    alt=""
                  />
                  <motion.h1 className="text-xl text-center mt-2 font-bold text-gray-800 ">
                    {member.name}
                  </motion.h1>
                  <motion.h6 className="text-lg text-center tracking-wide text-gray-600 pb-2">
                    {member.post}
                  </motion.h6>
                  <motion.div className="px-3 pt-1 mx-auto justify-center items-center">
                    <a
                      className="py-2.5 px-3 rounded-lg bg-blue-600 mx-2"
                      href="#!"
                      aria-label={`${member.name} profile`}
                    >
                      <i className="fab fa-twitter text-white"></i>
                    </a>
                    <a
                      className="py-2.5 px-3 rounded-lg bg-blue-600 mx-2"
                      href="#!"
                      aria-label={`${member.name} Gmail Account`}
                    >
                      <i className="fab fa-google text-white"></i>
                    </a>
                    <a
                      className="py-2.5 px-3 rounded-lg bg-blue-600 mx-2"
                      href="#!"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Team;
