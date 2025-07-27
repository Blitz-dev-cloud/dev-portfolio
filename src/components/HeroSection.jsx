import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const HeroSection = ({ isDark }) => {
  const roles = [
    "Computer Science Student",
    "Frontend Developer",
    "Blockchain Enthusiast",
    "React Developer",
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative inline-block">
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-[3px] blur-sm animate-pulse opacity-70"
                aria-hidden="true"
              ></div>
              <img
                src="/pfp4.png"
                alt="Sounak Maity"
                className="relative w-full max-w-sm object-contain mx-auto rounded-xl bg-white"
              />
            </div>
          </motion.div>

          <motion.h1
            className={`text-5xl md:text-7xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-6`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sounak Maity
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-medium mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypingAnimation texts={roles} />
          </motion.div>

          <motion.p
            className={`text-lg md:text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } mb-12 max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Hola!
            <br /> Passionate Computer Science student, Fullstack developer,
            Blockchain Engineer and an aspiring DeFi Developer crafting digital
            experiences with modern technologies. Always learning, always
            building, always pushing boundaries.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 ${
                isDark
                  ? "border-purple-400 text-purple-400 hover:bg-purple-400"
                  : "border-purple-500 text-purple-500 hover:bg-purple-500"
              } rounded-full font-medium hover:text-white transition-colors flex items-center gap-2 justify-center`}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
