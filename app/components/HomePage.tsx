"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Home: React.FC = () => {
  const variants = {
    visible: { x: 0 },
    hidden: { x: -100 },
  };

  return (
    <section
      id="section-one"
      className="relative  flex flex-col-reverse md:grid md:grid-cols-2 justify-center items-center w-full px-4 md:px-40 py-16 bg-gradient-to-br from-teal-200 via-lime-200 to-green-100 overflow-hidden"
    >
      {/* Background Gradient Layer (formerly ::before) */}
      <div className=" absolute top-0 left-0 w-full h-[35rem] -z-10 bg-gradient-to-br from-teal-300 via-lime-300 to-lime-200"></div>

      {/* Left Section */}
      <div
        id="leftbox"
        className="w-full  flex flex-col items-start justify-center space-y-4"
      >
        <motion.h3
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:text-[1.7rem] text-lg font-medium text-[#013220] md:leading-[2.5rem] mt-10 ml-1"
        >
          Hi, I am
        </motion.h3>

        <motion.h1
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:text-[4.5rem] text-[2.4rem] mt-[-1.7rem]  lg:leading-[2.9rem] text-white font-bold w-full md:w-[50rem]"
        >
          NITIN KUMAR
        </motion.h1>

        <motion.p
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="md:text-base font-normal text-gray-800 bg-yellow-200 mt-[-1.6rem] text-xs ml-1"
        >
          Web Developer and Graphic Designer
        </motion.p>

        <motion.div
          initial="hidden"
          variants={variants}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex gap-6 md:mt-4 mt-[-.2rem]"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:px-6 md:py-2 text-sm py-1 px-3 rounded-full md:text-lg font-medium text-white bg-[#013220] hover:bg-[#04563a] shadow-lg transition"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1zPmnn8iWWs65JJsfPhhZtZbPcu7DiuoU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="md:px-6 md:py-2 text-sm py-1 px-3 rounded-full md:text-lg font-medium text-white bg-[#013220] hover:bg-[#04563a] shadow-lg transition"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        id="rightbox"
        className="w-full   flex justify-center "
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 1.1 }}
      >
        <Image
          src="https://drive.google.com/thumbnail?id=1m5dKHwQ4hsymrDNcel-NqtqU0fPA0f-e&sz=w1000"
          alt="Profile"
          width={624} // 39rem
          height={560} // 35rem
          className="rounded-full w-[10rem] h-[20rem] object-cover shadow-lg border-4 border-white"
        />
      </motion.div>
    </section>
  );
};
export default Home;
