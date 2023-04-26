import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className=" rounded-bl-[100px]  bg-no-repeat font-sans bg-center bg-image bg-cover bg-gray-50">
      <div className="flex flex-col items-center h-screen w-full rounded-bl-[100px] bg-black bg-opacity-10">
        <center className="my-auto items-center">
          <p className="mt-6 text-xl md:text-4xl font-thin text-gray-400">
            Welcome!
          </p>
          <p className="mt-8 text-xl mb-4 md:text-8xl text-white font-extrabold">
            E-nyasa <b className="text-blue-600">Academia</b>
          </p>
          <p className="text-lg italic text-end text-gray-50 font-medium underline decoration-white">
            BE EDUCATED,FEEL EMPOWERED
          </p>
          <br />
          <div className="mb-4 w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
          <a
            href={"/login"}
            className="mx-auto text-center border-b-2 border-r-2 border-gray-400 mt-9 hover:bg-gray-600 hover:ring-1 ring-white bg-blue-600 text-lg md:text-2xl py-2 px-3 rounded-lg text-white"
          >
            Get Started
          </a>
        </center>
      </div>
    </div>
  );
}

export default Hero;
