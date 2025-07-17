'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Quiz App',
    img: 'https://drive.google.com/thumbnail?id=1CxsngU4qWCbr_BdMoVDrChUO4YM7sNNa&sz=w1000',
    link: 'https://nitinkumaar20.github.io/Quiz.github.io/',
  },
  {
    title: 'Student Registration Portal',
    img: 'https://drive.google.com/thumbnail?id=1HAa4HUeI_OD_ujk9nO-94_YharlrVsqq&sz=w1000',
    link: 'https://github.com/nitinkumaar20/Student-Registration-Portal',
  },
  {
    title: 'Text Editor',
    img: 'https://drive.google.com/thumbnail?id=1TzOshuawxN_ZAs95c-_Es0V3F_PS6uiA&sz=w1000',
    link: 'https://nitinkumaar20.github.io/text_editor/',
  },
];

const graphics = [
  {
    img: 'https://drive.google.com/thumbnail?id=1740pj7IKCb8oQoBK_VCy5zqZZ49VoY_y&sz=w1000',
    title: 'Graphic Design Work',
  },
  {
    img: 'https://drive.google.com/thumbnail?id=10mxGGY9y-VAJx2SA_WcPGubZYpu_A9UD&sz=w1000',
    title: 'Graphic Design Work',
  },
  {
    img: 'https://drive.google.com/thumbnail?id=1hLCkErZvMcsEBsNA7iPxH0yLsXTR4iBo&sz=w1000',
    title: 'Graphic Design Work',
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="px-5 lg:px-32 pb-10 flex flex-col items-center overflow-hidden"
    >
      <div className="section-heading">
        <ul className="flex gap-3 text-2xl lg:text-4xl font-bold tracking-widest">
          {'PORTFOLIO'.split('').map((char, i) => (
            <li key={i}>{char}</li>
          ))}
        </ul>
      </div>

      <div className="services-heading2 my-4">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-gray-500"
        >
          {"Here's"} my past projects
        </motion.h1>
      </div>

      {/* Web Projects */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-7 justify-center py-7">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ x: index === 0 ? -200 : index === 2 ? 200 : 0 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group  overflow-hidden rounded shadow-md"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="object-cover h-44 w-[23rem] 2xl:w-[30rem]  2xl:h-[17rem]  object-center border-2 border-teal-300"
            />
            <Link
              href={proj.link}
              target="_blank"
              className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-80 transition-all duration-300 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-red-400 text-lg font-bold">{proj.title}</p>
              <span className="text-sm">Preview</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Graphic Work */}
      <motion.div
        className="grid grid-cols-1  md:grid-cols-3 gap-7 justify-center"
        id="graphic-portion"
      >
        {graphics.map((g, i) => (
          <motion.div
            key={i}
            initial={{ x: i === 0 ? -200 : i === 2 ? 200 : 0 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group  overflow-hidden rounded shadow-md"
          >
            <img
              src={g.img}
              alt="graphic-design"
              className="object-contain h-44 w-[23rem] 2xl:w-[30rem]  2xl:h-[17rem]  object-center border-2 border-teal-300"
            />
            <Link
              href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
              target="_blank"
              className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-80 transition-all duration-300 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-red-400 text-lg font-bold">{g.title}</p>
              <span className="text-sm">Preview</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
