"use client";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="section-3" className="py-16 bg-white">
      {/* Section Heading */}
      <div className="flex justify-center mb-6">
        <ul className="flex gap-2 text-3xl font-bold text-blue-600 tracking-widest">
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
          className="text-2xl md:text-3xl font-semibold text-gray-800"
        >
          We do awesome services for our clients.
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {/* Web Development */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1t9D5fqHashvYVTIycVnp9u84Y2LmOcqJ&sz=w1000"
            alt="Web Development"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-600 text-sm">
            I provide web development services with trendy technologies like
            React, Node, Express, MongoDB, and Bootstrap.
          </p>
        </motion.div>

        {/* Photoshop Editing */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="photoshop"
          className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=1vtNs2y-ZnSToZh_FPt0Be1dpKoFGkqlK&sz=w1000"
            alt="Photoshop Editing"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">Photoshop Editing</h2>
          <p className="text-gray-600 text-sm">
            I provide Photoshop editing and retouching services for Ecommerce and
            personal use.
          </p>
        </motion.div>

        {/* Graphic Design */}
        <motion.div
          id="graphic"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
        >
          <img
            src="https://drive.google.com/thumbnail?id=13Ci3ScBkCwTttbtwryur_zAgw0uNck6C&sz=w1000"
            alt="Graphic Design"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">Graphic Design</h2>
          <p className="text-gray-600 text-sm">
            I offer graphic design services for branding, Ecommerce graphics, Amazon banners, logos, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
