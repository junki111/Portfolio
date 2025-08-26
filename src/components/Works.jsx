import { Tilt } from "react-tilt";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{
        scale: 1.05,
        boxShadow:
          theme === "dark"
            ? "0 0 25px rgba(59,130,246,0.3)"
            : "0 0 25px rgba(251,191,36,0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`rounded-2xl w-full sm:w-[360px] overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white"
          : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
      }`}
    >
      <Tilt
        options={{ max: 20, scale: 1, speed: 400 }}
        className="p-5 flex flex-col h-full"
      >
        {/* Project Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 flex justify-end items-start p-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={`
                    w-10 h-10 rounded-full flex justify-center items-center cursor-pointer 
                    transition-colors duration-300
                    ${
                      theme === "dark"
                        ? "bg-black/60 hover:bg-blue-500/80" // dark mode → hover blue
                        : "bg-black/70 hover:bg-amber-400/80" // light mode → hover amber
                    }
                `}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-5 flex flex-col flex-1">
          <h3 className="font-bold text-[22px]">{name}</h3>
          <p
            className={`mt-2 text-[14px] leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-2 py-1 text-xs rounded-full font-medium ${
                  theme === "dark"
                    ? "bg-white/10 text-gray-200"
                    : "bg-gray-200 text-gray-700"
                } ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
};

const Works = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  // Parallax scroll values
  const y = useTransform(scrollY, [0, 100], [0, -30]); // bigger movement
  const x = useTransform(scrollY, [0, 100], [0, 40]); // horizontal shift

  return (
    <>
      <motion.div variants={textVariant()}>
        <motion.p
          style={{ y, x }}
          className={`${styles.sectionSubText} ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Some of my works
        </motion.p>
        <motion.h2
          style={{ y, x }}
          className={`text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r bg-clip-text text-transparent 
              ${
                theme === "dark"
                  ? "from-violet-400 via-fuchsia-500 to-indigo-400"
                  : "from-purple-600 via-pink-500 to-indigo-600"
              } animate-gradient`}
        >
          Projects
        </motion.h2>
      </motion.div>

      {/* Section Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "", 0.1, 1)}
          className={`mt-3 text-[16px] max-w-3xl leading-[28px] ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Here’s a selection of projects that showcase my skills and experience
          across different technologies and frameworks. Each project links to
          its repository (and live version where available). They reflect my
          problem-solving ability, attention to detail, and design sense in
          building modern software solutions.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "work");
export default WrappedWorks;
