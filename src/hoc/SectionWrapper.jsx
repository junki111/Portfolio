import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'
import { useTheme } from "../context/ThemeContext";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        const { theme } = useTheme();
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                exit='hidden'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0
                ${theme === "dark" 
                    ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" 
                    : "bg-gradient-to-b from-gray-50 via-white to-gray-50"}`
                }
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper
