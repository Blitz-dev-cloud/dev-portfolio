import React from "react";
import { motion } from "framer-motion";
import { TechIcons } from "../TechIcons";

const SkillsSection = ({ isDark }) => {
  const techStack = [
    { name: "React", icon: TechIcons.React, color: "#61dafb", level: 90 },
    {
      name: "TypeScript",
      icon: TechIcons.TypeScript,
      color: "#3178c6",
      level: 85,
    },
    {
      name: "JavaScript",
      icon: TechIcons.JavaScript,
      color: "#f7df1e",
      level: 88,
    },
    { name: "Node.js", icon: TechIcons.NodeJS, color: "#339933", level: 80 },
    { name: "Python", icon: TechIcons.Python, color: "#3776ab", level: 85 },
    { name: "Solidity", icon: TechIcons.Solidity, color: "#363636", level: 75 },
    { name: "MongoDB", icon: TechIcons.MongoDB, color: "#47a248", level: 80 },
    { name: "Next.js", icon: TechIcons.NextJS, color: "#000000", level: 82 },
    {
      name: "Tailwind",
      icon: TechIcons.TailwindCSS,
      color: "#06b6d4",
      level: 88,
    },
    { name: "Git", icon: TechIcons.Git, color: "#f05032", level: 90 },
    { name: "Docker", icon: TechIcons.Docker, color: "#2496ed", level: 70 },
    { name: "AWS", icon: TechIcons.AWS, color: "#ff9900", level: 65 },
    { name: "Figma", icon: TechIcons.Figma, color: "#f24e1e", level: 75 },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${isDark ? "bg-gray-900/50" : "bg-purple-50/50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-6`}
          >
            Tech Arsenal
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Technologies I've mastered during my journey as a student developer
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                boxShadow: isDark
                  ? "0 20px 40px rgba(147, 51, 234, 0.3)"
                  : "0 20px 40px rgba(147, 51, 234, 0.2)",
              }}
              className={`${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } p-6 rounded-xl border shadow-lg transform-gpu perspective-1000`}
            >
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 text-purple-500"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <tech.icon />
                </motion.div>
                <h3
                  className={`font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tech.name}
                </h3>
                <div
                  className={`w-full ${
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  } rounded-full h-2 mb-2`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                    style={{ boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)" }}
                  />
                </div>
                <span
                  className={`text-sm ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  } font-medium`}
                >
                  {tech.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className={`${
              isDark
                ? "bg-gray-900 border-gray-700"
                : "bg-gray-50 border-gray-200"
            } p-6 rounded-xl border font-mono text-sm overflow-hidden`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span
                className={`ml-2 text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                my-skills.js
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <span className="text-purple-500">const</span>{" "}
              <span className={isDark ? "text-blue-400" : "text-blue-600"}>
                alexSkills
              </span>{" "}
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                =
              </span>{" "}
              <span className="text-yellow-500">{"{"}</span>
              <br />
              <span className="ml-4 text-green-500">frontend</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                :
              </span>{" "}
              <span className="text-purple-500">
                ["React", "TypeScript", "Next.js", "Three.js"]
              </span>
              ,
              <br />
              <span className="ml-4 text-green-500">backend</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                :
              </span>{" "}
              <span className="text-purple-500">
                ["Node.js", "Python", "MongoDB", "SQL"]
              </span>
              ,
              <br />
              <span className="ml-4 text-green-500">blockchain</span>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                :
              </span>{" "}
              <span className="text-purple-500">
                ["Solidity", "Ethers.js", "DeFi", "Hardhat"]
              </span>
              <br />
              <span className="text-yellow-500">{"}"}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
