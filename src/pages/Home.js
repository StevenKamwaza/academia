import React from "react";
import Hero from "../components/Hero";
import HeroCards from "../components/HeroCards";
import { motion } from "framer-motion";
import image from "../components/assets/6h.jpg";

function Home() {
  return (
    <section>
      <Hero />
      <div className="container mb-4">
        {" "}
        <HeroCards />
      </div>
      <div className="px-7">
      <div className="container  mx-auto py-5 md:py-12">
        <div className="flex-warp rounded-bl-2xl rounded-tl-2xl  bg-gray-400  flex md:flex-row">
          <motion.div data-aos="fade-down-right" className="mx-auto rounded-bl-2xl rounded-tl-2xl  bg-blue-600 bg-opacity-20 w-full md:w-3/5 p-5 md:p-9 ">
            <motion.h2 className="text-white text-justify italic font-semibold text-lg  md:text">
              ~ GET INSTANT ACCESS{" "}
            </motion.h2>
            <motion.h1 className="text-gray-800 text-start py-3 font-extrabold text-xl md:text-3xl">
              Get Started with Online Education
            </motion.h1>
            <motion.p className="text-lg py-4 w-full text-justify ">
              Our online education program aims to help you develop a deeper
              understanding of yourself and boost your confidence, leading top
              greater success in your career. We believe that learning should be
              enjoyable and engaging, as this is essential to creating
              meaningful and lasting changes in one's life{" "}
            </motion.p>
            <div className="mt-3">
              <a
                href="/login"
                className="hover:bg-gray-600 border-b-4 border-r-2 border-blue-500 text-lg md:text-xl text-start items-start ring-1 leading-6 first-letter:text-blue-100 ring-white text-white bg-blue-600 py-2 px-3 rounded-xl"
              >
                Start Now
              </a>
            </div>
          </motion.div>
          <motion.div  className="invisible bg-gray-900 bg-opacity-10 md:visible w-2/5">
            <img src={image} alt="" className="h-full" />
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Home;
