"use client";

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="px-4 md:px-20 py-10 overflow-hidden flex flex-col items-center"
    >
      {/* Heading */}
      <div className="flex justify-center mb-6">
        <ul className="flex gap-2 text-4xl font-bold text-blue-600 tracking-widest">
          {["P", "O", "R", "T", "F", "O", "L", "I", "O"].map((letter, idx) => (
            <li key={idx}>{letter}</li>
          ))}
        </ul>
      </div>

      {/* Subheading */}
      <div className="text-center mb-12 px-4">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-semibold text-gray-800"
        >
          here&apos;s my past projects
        </motion.h1>
      </div>

      {/* Web Projects */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10 flex-wrap">
        {/* Quiz App */}
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1CxsngU4qWCbr_BdMoVDrChUO4YM7sNNa&sz=w1000"
            alt="Quiz App"
            className="w-[27rem] h-[14rem] object-cover rounded shadow"
          />
          <a
            href="https://nitinkumaar20.github.io/Quiz.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            <p className="text-lg font-semibold text-red-500">Quiz App</p> Preview
          </a>
        </motion.div>

        {/* Student Registration Portal */}
        <div className="flex flex-col items-center">
          <img
            src="https://drive.google.com/thumbnail?id=1HAa4HUeI_OD_ujk9nO-94_YharlrVsqq&sz=w1000"
            alt="Student Registration"
            className="w-[27rem] h-[14rem] object-cover rounded shadow"
          />
          <a
            href="https://github.com/nitinkumaar20/Student-Registration-Portal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-red-600 font-semibold hover:underline"
          >
            <p className="text-lg font-semibold text-red-500">Student Registration Portal</p> Preview
          </a>
        </div>

        {/* Text Editor */}
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1TzOshuawxN_ZAs95c-_Es0V3F_PS6uiA&sz=w1000"
            alt="Text Editor"
            className="w-[27rem] h-[14rem] object-cover rounded shadow"
          />
          <a
            href="https://nitinkumaar20.github.io/text_editor/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            <p className="text-lg font-semibold text-red-500">Text Editor</p> Preview
          </a>
        </motion.div>
      </div>

      {/* Graphic Design Projects */}
      <motion.div
        id="graphic-portion"
        className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap"
      >
        {/* Graphic 1 */}
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1740pj7IKCb8oQoBK_VCy5zqZZ49VoY_y&sz=w1000"
            alt="Graphic Design"
            className="w-[27rem] h-[14rem] object-cover rounded shadow"
          />
          <a
            href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            <p className="text-lg font-semibold text-red-500">Graphic Design Work</p> Preview
          </a>
        </motion.div>

        {/* Graphic 2 */}
        <div className="flex flex-col items-center">
          <img
            src="https://drive.google.com/thumbnail?id=10mxGGY9y-VAJx2SA_WcPGubZYpu_A9UD&sz=w1000"
            alt="Graphic Design"
            className="w-[27rem] h-[14rem] object-cover rounded shadow"
          />
          <a
            href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            <p className="text-lg font-semibold text-red-500">Graphic Design Work</p> Preview
          </a>
        </div>

        {/* Graphic 3 */}
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1hLCkErZvMcsEBsNA7iPxH0yLsXTR4iBo&sz=w1000"
            alt="Graphic Design"
            className="w-[27rem] h-[14rem] object-cover rounded shadow"
          />
          <a
            href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            <p className="text-lg font-semibold text-red-500">Graphic Design Work</p> Preview
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
