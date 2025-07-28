import React from "react";
import { motion } from "framer-motion";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`${
        isDark ? "bg-gray-950 text-white" : "bg-gray-900 text-white"
      } py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">&lt;Blitz.Dev/&gt;</h3>
            <p className="text-gray-400">
              Learning, building, and growing every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sounak Maity. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
