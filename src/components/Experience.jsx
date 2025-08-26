import React from "react";
import { SectionWrapper } from "../hoc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ experience, index }) => {
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "dark" ? "#1d1836" : "#ffffff",
        color: theme === "dark" ? "#fff" : "#333",
        boxShadow:
          theme === "dark"
            ? "0px 4px 15px rgba(139,92,246,0.4)"
            : "0px 4px 15px rgba(99,102,241,0.2)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "dark"
            ? "7px solid #232631"
            : "7px solid rgba(99,102,241,0.5)",
      }}
      date={experience.date}
      iconStyle={{
        background: "linear-gradient(135deg, #8b5cf6, #ec4899, #4f46e5)",
        color: "#fff",
        boxShadow:
          theme === "dark"
            ? "0px 0px 15px rgba(139,92,246,0.7)"
            : "0px 0px 10px rgba(99,102,241,0.4)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <motion.img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1,
              transition: { duration: 0.6 },
            }}
          />
        </div>
      }
    >
      <div>
        <h3
          className={`text-[24px] font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {experience.title}
        </h3>
        <p
          className={`text-[16px] font-semibold ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();

  return (
    <>
      <motion.div variants={textVariant()}>
        <motion.p
          className={`${styles.sectionSubText} ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          What I have done so far
        </motion.p>
        <motion.h2
          className={`text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r bg-clip-text text-transparent 
              ${
                theme === "dark"
                  ? "from-violet-400 via-fuchsia-500 to-indigo-400"
                  : "from-purple-600 via-pink-500 to-indigo-600"
              } animate-gradient`}
        >
          Work Experience.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline layout="2-columns">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

const WrappedExperience = SectionWrapper(Experience, "Experience");
export default WrappedExperience;
