import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Zap, Award, Users } from "lucide-react";
import TimelineItem from "./TimelineItem";

const AboutSection = ({ isDark }) => {
  const timelineData = [
    {
      date: "2025 - Present",
      title: "Freelance DeFi Developer",
      company: "Independent Projects",
      description:
        "Developing dapps and DeFi Protocols for local businesses and startups.",
      skills: [
        "Blockchain",
        "DeFi",
        "Solidity",
        "Uniswap",
        "Aave",
        "Client Relations",
      ],
      icon: <Code size={16} className="text-white" />,
    },
    {
      date: "2025",
      title: "Blockchain Developer",
      company: "DAO Community, VIT Chennai",
      description:
        "Joined the DAO Community as a blockchain Developer, contributed to building robust dapps and production ready blockchain applications while expanding my skills and knowledge in DeFi",
      skills: ["Blockchain", "Solidity", "Anchor"],
      icon: <Zap size={16} className="text-white" />,
    },
    {
      date: "2024",
      title: "Member of Management Department",
      company: "Augmented and Virtual Reality Club, VIT Chennai",
      description:
        "Joined AVR Club as a management member to work on my social skills, leadership skills, management skills and to focus on making connections as well as to learn more about building 3D models and making immersive 3D webapps",
      skills: ["Management", "Leadership", "Blender", "Three.js"],
      icon: <Award size={16} className="text-white" />,
    },
    {
      date: "2023",
      title: "Started Computer Science Journey",
      company: "Vellore Institute of Technology, Chennai Campus",
      description:
        "Began my Computer Science degree with focus on software development. Discovered passion for web development and blockchain technology.",
      skills: ["Programming Fundamentals", "Web Basics"],
      icon: <Users size={16} className="text-white" />,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
            My Journey
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            From curious beginner to passionate developer - here's my learning
            and growth story in the world of technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>

          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
