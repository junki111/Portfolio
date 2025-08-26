import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import { fadeIn } from "../utils/motion";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-background-light dark:bg-background-dark transition-colors duration-300"
      id="heroSection"
    >
      {/* === Particle Background (behind everything but above bg) === */}
      <ParticlesBackground />

      {/* === Text + Decoration === */}
      <motion.div
        variants={fadeIn("top", "spring", 0.1, 1)}
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}
      >
        {/* Left Accent Line */}
        <div className="flex flex-col items-center justify-center mt-5">
          {/* Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-5 h-5 rounded-full bg-primary-light dark:bg-primary-dark"
          />
          {/* Vertical gradient line that fades in/out */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: [0.2, 1, 0.2], height: "100%" }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary-light via-accent-light to-transparent dark:from-primary-dark dark:via-accent-dark"
          />
        </div>

        {/* Right Text Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-text-light dark:text-text-dark`}>
            Hello. I am{" "}
            <span className="text-primary-light dark:text-primary-dark">Jun Ki</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-secondary-dark dark:text-secondary-light`}>
            <span>I am a </span>
            <motion.span
              animate={{
                color: ["#1d4ed8", "#22d3ee", "#f43f5e", "#10b981"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <ReactTyped
                strings={["Full Stack Developer", "Game Developer"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
                className="font-semibold"
              />
            </motion.span>
          </p>

          {/* === Animated CV Download Button === */}
          <motion.a
            href={`${import.meta.env.BASE_URL}/JunKICV2025.pdf`}
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(29,78,216,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-xl shadow-lg cursor-pointer transition-colors"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* === 3D Canvas (still interactable) ===
      <ComputersCanvas /> */}

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" id="transitionDot">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary-dark dark:border-secondary-light flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary-dark dark:bg-secondary-light mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
