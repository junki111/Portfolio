import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import { styles } from "../styles";
import PropTypes from "prop-types";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  const { theme } = useTheme();

  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.05}
      transitionSpeed={450}
      glareEnable={true}
      glareMaxOpacity={0.25}
      className="xs:w-[250px] w-full bg-transparent"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`w-full rounded-[20px] p-[1px] shadow-card 
          ${
            theme === "dark"
              ? "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
              : "bg-gradient-to-b from-gray-200 via-indigo-200 to-purple-300"
          }`}
        whileHover={{
          scale: 1.08,
          boxShadow:
            theme === "dark"
              ? "0px 0px 20px rgba(139,92,246,0.7)"
              : "0px 0px 20px rgba(99,102,241,0.5)",
        }}
      >
        <div
          className={`rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col
            ${theme === "dark" ? "bg-tertiary" : "bg-white shadow-md"}
          `}
        >
          <motion.img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
            whileHover={{
              rotate: [0, -15, 15, 0],
              transition: { duration: 0.8 },
            }}
          />

          <h3
            className={`text-[20px] font-bold text-center ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  // Parallax scroll values
  const y = useTransform(scrollY, [0, 100], [0, -30]); // bigger movement
  const x = useTransform(scrollY, [0, 100], [0, 40]);   // horizontal shift

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* === Animated Subtitle === */}
        <motion.p
          style={{ y, x }}
          className={`${styles.sectionSubText} ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Introduction
        </motion.p>

        {/* === Animated Gradient Heading === */}
        <motion.h2
          style={{ y, x }}
          className={`text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r bg-clip-text text-transparent 
            ${
              theme === "dark"
                ? "from-violet-400 via-fuchsia-500 to-indigo-400"
                : "from-purple-600 via-pink-500 to-indigo-600"
            } animate-gradient`}
        >
          Overview.
        </motion.h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 max-w-3xl leading-[30px] text-[17px] ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        I’m a passionate{" "}
        <span className="font-semibold text-indigo-500">
          full-stack software engineer
        </span>{" "}
        with hands-on experience across{" "}
        <span className="font-medium">
          Java, Python, JavaScript (React, Node, Electron), C#, PHP/Laravel, and
          React Native
        </span>
        . My strength lies in transforming ideas into{" "}
        <span className="font-semibold text-emerald-500">
          scalable, intuitive, and high-impact solutions
        </span>
        . Recruiters and teams value my ability to quickly learn, adapt, and
        collaborate seamlessly, ensuring that every product I touch is both{" "}
        <span className="font-semibold text-rose-500">user-friendly</span> and{" "}
        <span className="font-semibold text-amber-500">business-driven</span>.
        Let’s partner to bring bold ideas to life and make technology work
        beautifully for people.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout
