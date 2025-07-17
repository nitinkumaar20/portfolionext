"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

export const Home: React.FC = () => {
  const variants = {
    visible: { x: 0 },
    hidden: { x: -100 },
  };
// w-full bg-gradient-to-br from-teal-200 via-lime-200 to-green-100"
  return (
   <div className="w-full bg-gradient-to-br from-teal-200 via-lime-200 to-green-100">
  <div className="max-w-[1300px] mx-auto">
    <section
      id="section-one"
      className="relative flex flex-col-reverse md:grid md:grid-cols-2 justify-center items-center w-full px-4 md:px-16  lg:px-32 md:py-16 pt-16 pb-9 overflow-hidden"
    >
      {/* Optional gradient overlay layer */}
      <div className="absolute top-0 left-0 w-full h-[30rem] md:h-[35rem] -z-10 bg-gradient-to-br from-teal-300 via-lime-300 to-lime-200"></div>

      {/* Left Section */}
      <div
        id="leftbox"
        className="w-full flex flex-col md:items-start justify-center md:space-y-4"
      >
        <motion.h3
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:text-[1.5rem]  text-lg font-medium text-[#013220]   lg:leading-[1.9rem]  ml-1 flex justify-center "
        >
          Hi, I am
        </motion.h3>

        <motion.h1
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:text-[4rem] text-[2.5rem] lg:leading-[5rem] mt-[-.5rem]  text-white font-bold md:mt-[-1.6rem] w-full md:w-[50rem] flex justify-center md:justify-start"
        >
          NITIN KUMAR
        </motion.h1>

        <motion.p
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="lg:text-lg font-normal md:mt-[-1.6rem] text-gray-800 bg-yellow-200 mt-[-.7rem] text-xs ml-1 flex justify-center"
        >
          Web Developer and Graphic Designer
        </motion.p>

        <motion.div
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex gap-6 md:mt-[-.5rem] lg:mt-[-.3rem] justify-center items-center mt-3"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:px-3 md:py-1 md:text-xs lg:py-1 lg:px-4 text-sm py-1 px-3 rounded-full lg:text-lg font-medium text-white bg-[#238662] hover:bg-[#04563a] shadow-lg transition"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1zPmnn8iWWs65JJsfPhhZtZbPcu7DiuoU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="md:px-3 md:py-1 md:text-xs text-sm lg:py-1 lg:px-4 py-1 px-3 rounded-full lg:text-lg font-medium text-white bg-[#238662] hover:bg-[#04563a] shadow-lg transition"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        id="rightbox"
        className="w-full flex justify-center"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 1.1 }}
      >
        <Image
          src="https://drive.google.com/thumbnail?id=1m5dKHwQ4hsymrDNcel-NqtqU0fPA0f-e&sz=w1000"
          alt="Profile"
          width={624}
          height={560}
          className="rounded-full w-[20rem] h-[20rem] md:w-[8rem] md:h-[16rem] lg:w-[24rem] lg:h-[23rem] object-cover  border-4 "
        />
      </motion.div>
    </section>
  </div>
</div>

  );
};
export default Home;
