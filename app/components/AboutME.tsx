"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
  const variants = {
    visible: { x: 0 },
    hidden: { x: 100 },
  };

  return (
    <section
      className="overflow-hidden px-4 sm:px-10 md:px-20 lg:px-40 pb-10"
      id="section-2"
    >
      <motion.div className="flex justify-center mb-4">
        <ul className="flex flex-wrap gap-2 text-xl md:text-4xl font-bold ">
          {["A", "B", "O", "U", "T", "M", "E"].map((char, idx) => (
            <li key={idx} className="mx-2 sm:mx-4 mt-6">
              {char}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center  relative">
          <div className="   ">
            <Image
              src="https://drive.google.com/thumbnail?id=1ZbOzj2R3IVdOyg2xRxTHP9AcATYRF7bz&sz=w1000"
              alt="Nitin Kumar"
              width={448}
              height={528}
              className=" h-[22rem] w-[20rem] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex items-center">
          <motion.div
            className=""
            initial="hidden"
            variants={variants}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-xl font-semibold text-teal-500"
              variants={variants}
              transition={{ duration: 0.7 }}
            >
              LET’S
            </motion.h3>

            <motion.h1
              className="text-3xl sm:text-4xl font-semibold  "
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              INTRODUCE ABOUT
            </motion.h1>

            <motion.h3
              className="text-2xl font-bold text-teal-500 mb-3" 
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              MYSELF
            </motion.h3>

            <h6 className="leading-6 mb-5">
         Hi, I’m Nitin Kumar — a Web Developer and Graphic Designer with a Computer Science background. I craft modern, user-friendly websites and visuals that blend clean code with creative design.
            </h6>

            <h6 className="leading-6  mt-4">
             I specialize in{" "}
              <span className="text-teal-500 font-semibold">
           Next.js, Tailwind CSS, TypeScript, React.js, Node.js, MongoDB, JavaScript, HTML, CSS, Bootstrap, and Photoshop.
              </span>{" "}
             blending clean code with creative design. Whether building robust full-stack apps or eye-catching visuals, I turn concepts into standout digital products.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
