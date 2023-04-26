import { motion } from "framer-motion";
import React from "react";
import {GrShare, GrTechnology, GrUserSettings} from 'react-icons/gr';

function HeroCards() {
  return (
    <motion.div className="container">
      <motion.div className="max-w-xl mx-auto text-center mt-24">
        <div data-aos="fade-up">
          <motion.h1 className="font-bold text-gray-600 my-3 text-2xl md:text-5xl ">
            E-learning <span className="text-blue-600">Platform.</span>
          </motion.h1>
        </div>

        <motion.p className="leading-relaxed text-lg md:text-2xl text-gray-500">
          The Future of Learning is Online. Join our e-learning platform to
          access cutting-edge courses and stay ahead of the curve in your field.
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-7 gap-14 md:gap-5 mt-20">
        <div
          data-aos="fade-up"
          className="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <GrUserSettings/>
          </div>
          <h1 className="font-bold text-xl mb-3 lg:px-14 text-gray-800">
            Learn at your own pace
          </h1>
          <p className="text-lg px-4 text-gray-600">
            Learn at your own pace on our e-learning website, offering
            flexibility and personalization for a customized learning
            experience.
          </p>
          <br />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
        <GrShare/>
          </div>
          <h1 className="font-bold text-xl mb-3 lg:px-14 text-gray-800">
            Resource sharing
          </h1>
          <p className="px-4 text-lg text-gray-600">
            Our website fosters resource sharing among students for
            collaborative learning, providing a platform to share knowledge,
            materials, and ideas.
          </p>
          <br />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white shadow-xl p-6 text-center rounded-xl"
        >
          <div className="bg-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <GrTechnology className="text-lg text-white"/>
        
          </div>
          <h1 className="font-bold text-xl mb-3 lg:px-14 text-gray-800">
            Learn from Experts
          </h1>
          <p className="px-4 text-lg text-gray-600">
            Our website promotes student-lecturer interaction, facilitating
            engagement and communication for a dynamic and interactive
            e-learning experience.{" "}
          </p>
          <br />
        </div>
      </motion.div>
      
    </motion.div>
  );
}

export default HeroCards;
