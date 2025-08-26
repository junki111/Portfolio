import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Tech = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          className="w-28 h-28 rounded-full p-[2px] flex items-center justify-center"
          whileHover={{
            scale: 1.15,
            rotate: 5,
            boxShadow:
              theme === "dark"
                ? "0 0 20px 6px rgba(59,130,246,0.25), 0 0 40px 12px rgba(59,130,246,0.15)"
                : "0 0 20px 6px rgba(251,191,36,0.25), 0 0 40px 12px rgba(251,191,36,0.15)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <BallCanvas icon={tech.icon} />
        </motion.div>
      ))}
    </div>
  );
};

const WrappedExperience = SectionWrapper(Tech, "Tech");
export default WrappedExperience;
