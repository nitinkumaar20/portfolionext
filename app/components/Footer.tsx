"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const variants = {
    visible: { x: 5 },
    hidden: { x: 0 },
  };

  return (
    <section className="bg-gradient-to-br  from-blue-200 via-lime-200 to-green-100 py-12 px-6 md:px-40" id="footer">
      <footer className="flex flex-col md:flex-row justify-between flex-wrap gap-12">
        {/* Contact and Social Links */}
        <motion.div className="flex-1 min-w-[280px]">
          <h4 className="font-semibold text-xl mb-2 text-black">Get in Touch Social Links</h4>
          <h6 className="text-sm text-gray-600 mb-4">
            You can contact me in different social links given below.
          </h6>
          <div className="flex gap-4 items-center">
            {/* Instagram */}
            <a href="https://www.instagram.com/nitinkumaar20/" target="_blank" rel="noopener noreferrer">
              <motion.img
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                whileHover={{ y: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1 }}
                className="w-10 h-10 object-contain"
                src="https://drive.google.com/thumbnail?id=11frbUW4tMzluvv-Oov9CeDlM6ucBRTRP&sz=w1000"
                alt="Instagram"
              />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <motion.img
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                whileHover={{ y: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1 }}
                className="w-10 h-10 object-contain"
                src="https://drive.google.com/thumbnail?id=1a4VQwKu67oZOJz3L3MNXV-TLVkjv_kIp&sz=w1000"
                alt="WhatsApp"
              />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/nitink4800/" target="_blank" rel="noopener noreferrer">
              <motion.img
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                whileHover={{ y: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1 }}
                className="w-10 h-10 object-contain"
                src="https://drive.google.com/thumbnail?id=1yliVlKIY9U5xLCLgf-XfECBV-q1ByAMk&sz=w1000"
                alt="LinkedIn"
              />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="flex-1 min-w-[200px]">
          <h4 className="text-black font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-base text-gray-700">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((link, idx) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-").replace("home", "section-one").replace("about", "section-2").replace("services", "section-3")}`}
                variants={variants}
                initial="hidden"
                whileHover="visible"
                className=""
              >
                {link}
              </motion.a>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className="flex-1 min-w-[200px]"
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-black font-semibold text-lg mb-4">Our Services</h4>
          <ul className="flex flex-col gap-3 text-base text-gray-700">
            {["Web Designing & Development", "Photoshop Editing", "Graphic Designing"].map((service, idx) => (
              <motion.a
                key={service}
                href="#contact"
                variants={variants}
                initial="hidden"
                whileHover="visible"
                className=""
              >
                {service}
              </motion.a>
            ))}
          </ul>
        </motion.div>
      </footer>
    </section>
  );
};

export default Footer;
