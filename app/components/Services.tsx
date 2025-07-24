"use client";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="section-3" className="py-12 ">
      {/* Section Heading */}
      <div className="flex justify-center mb-6">
        <ul className="flex gap-3 text-3xl lg:text-4xl font-bold  tracking-widest">
          {["S", "E", "R", "V", "I", "C", "E", "S"].map((letter, idx) => (
            <li key={idx}>{letter}</li>
          ))}
        </ul>
      </div>

      {/* Subheading */}
      <div className="text-center mb-12 px-4">
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-gray-500"
        >
          We do awesome services for our clients.
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 max-w-6xl mx-auto">
        {/* Web Development */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-lime-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1t9D5fqHashvYVTIycVnp9u84Y2LmOcqJ&sz=w1000"
            alt="Web Development"
            className="w-40 h-42 mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2 text-black">Web Development</h2>
          <p className="text-gray-600 text-sm">
            Crafting modern web experiences with React, Node.js, Express, MongoDB, and Bootstrap – fast, scalable, and beautifully designed
          </p>
        </motion.div>

        {/* Photoshop Editing */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="photoshop"
          className="bg-lime-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1vtNs2y-ZnSToZh_FPt0Be1dpKoFGkqlK&sz=w1000 "
            alt="Photoshop Editing"
            className="w-40 h-42 mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2 text-black">Photoshop Editing</h2>
          <p className="text-gray-600 text-sm ">
           High-quality Photoshop editing and retouching for eCommerce and personal photos.
          </p>
        </motion.div>

        {/* Graphic Design */}
        <motion.div
          id="graphic"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-lime-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=13Ci3ScBkCwTttbtwryur_zAgw0uNck6C&sz=w1000"
            alt="Graphic Design"
            className="w-40 h-42 mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2 text-black">Graphic Design</h2>
          <p className="text-gray-600 text-sm">
         I design eye-catching graphics for branding, Amazon banners, eCommerce stores, logos, and everything in between
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
