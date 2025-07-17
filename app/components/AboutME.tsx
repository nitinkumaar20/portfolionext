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
      <motion.div className="flex justify-center mb-8">
        <ul className="flex flex-wrap gap-2 text-xl md:text-4xl font-bold text-gray-800">
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
              className=" h-[36rem] w-[25rem] object-cover "
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
              className="text-3xl sm:text-4xl font-semibold  text-gray-900"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              INTRODUCE ABOUT
            </motion.h1>

            <motion.h3
              className="text-2xl font-bold text-teal-500"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              MYSELF
            </motion.h3>

            <h6 className="leading-6 text-gray-700">
              Hi, I’m Nitin Kumar — a passionate Web Developer and Graphic
              Designer with a strong foundation in Computer Science Engineering.
              I specialize in building modern, user-friendly websites and
              digital experiences that blend clean code with creative design.
            </h6>

            <h6 className="leading-6 text-gray-700 mt-4">
              I have experience in{" "}
              <span className="text-teal-500 font-semibold">
                Next.js, Tailwind CSS, TypeScript, React.js, Node.js, MongoDB,
                JavaScript, HTML, CSS, Bootstrap, and Photoshop.
              </span>{" "}
              I bring both functionality and aesthetics to every project.
              Whether it's developing full-stack applications or crafting
              compelling visuals, I love transforming ideas into impactful
              digital solutions. I'm dedicated to guiding my clients through the
              complete process — from concept to design, development, and launch
              — ensuring quality, clarity, and performance at every stage.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
