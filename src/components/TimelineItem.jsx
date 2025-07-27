import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TimelineItem = ({ item, index, isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center mb-12 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="flex-1 px-6">
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className={`${
            isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          } p-6 rounded-xl shadow-lg border`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <span
              className={`text-sm font-medium ${
                isDark ? "text-purple-400" : "text-purple-600"
              }`}
            >
              {item.date}
            </span>
          </div>
          <h3
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-2`}
          >
            {item.title}
          </h3>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-3`}>
            {item.company}
          </p>
          <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
            {item.description}
          </p>
          {item.skills && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 ${
                    isDark
                      ? "bg-purple-900/30 text-purple-300"
                      : "bg-purple-100 text-purple-700"
                  } rounded-full text-sm`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>

      <div className="flex-1 px-6"></div>
    </motion.div>
  );
};

export default TimelineItem;
