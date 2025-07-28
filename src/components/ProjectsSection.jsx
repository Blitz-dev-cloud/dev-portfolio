import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = ({ isDark }) => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Pixel-Vault",
      description:
        "A decentralized application for showcasing achievements in the form of digitall collectible tokens or NFTs using ERC721 Tokens",
      image: "/pixel-vault.png",
      tech: ["React", "Sepolia-Ethereum", "Solidity", "IPFS", "Three.js"],
      category: "blockchain",
      github: "https://github.com/Blitz-dev-cloud/pixel-vault.git",
      live: "https://pixel-vault-sigma.vercel.app/",
    },
    {
      id: 2,
      title: "StreamShpere",
      description:
        "A twitch-styled intelligent Gen-AI powered streaming platform where subscriptions and plans are automated via smart contracts",
      image: "/stream-sphere.png",
      tech: ["React", "JavaScript", "Solidity", "Gemini API"],
      category: "fullstack",
      github: "https://github.com/SeeThearc/StreamReact.git",
      live: "https://stream-react-flame.vercel.app/",
    },
    {
      id: 3,
      title: "DAO",
      description:
        "Blockchain-based weighted-voting application implementing ERC-20 Tokens ensuring transparency and security. Final project for blockchain bootcamp.",
      image: "/dao.png",
      tech: ["Solidity", "React", "Ethers.js", "Sepolia-Ethereum", "Hardhat"],
      category: "blockchain",
      github: "https://github.com/Blitz-dev-cloud/DAO.git",
      live: "https://dao-sigma-two.vercel.app/",
    },
    {
      id: 4,
      title: "Doc-Hive",
      description:
        "Responsive web-application with an aim to make communication between doctor and patient smooth with a robust backend and essential modern-day features",
      image: "/doc-hive.png",
      tech: ["React", "Tailwind CSS", "Firebase", "Leaflet"],
      category: "fullstack",
      github: "https://github.com/Rajnish-y/Web-Project.git",
      live: "https://web-project-six-umber.vercel.app/",
    },
    {
      id: 5,
      title: "Doc-Chain",
      description:
        "A decentralized Electronic Health Records (EHR) System for secure storage of patient health records, full control on the document access and custom audits in order to promote patient-privacy",
      image: "/doc-chain.png",
      tech: ["React", "Ethers.js", "IPFS", "Three.js"],
      category: "blockchain",
      github: "https://github.com/Blitz-dev-cloud/DocChain.git",
      live: "https://doc-chain-beryl.vercel.app/",
    },
  ];

  const categories = ["all", "frontend", "fullstack", "blockchain"];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
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
            My Projects
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto mb-8`}
          >
            A collection of projects I've built during my learning journey -
            from university assignments to personal experiments
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                    : isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  boxShadow: isDark
                    ? "0 25px 50px rgba(147, 51, 234, 0.3)"
                    : "0 25px 50px rgba(147, 51, 234, 0.2)",
                }}
                className={`${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } rounded-xl shadow-lg overflow-hidden border group transform-gpu`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-3`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-600"
                    } mb-4 line-clamp-3`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 ${
                          isDark
                            ? "bg-purple-900/30 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        } rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
