import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { fadeIn } from '../utils/motion'

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto' id='heroSection'>
            <motion.div
                variants={fadeIn('top', 'spring', 0.1, 1)}
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
            >
                <div className='flex flex-col items-center justify-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hello. I'm{' '}
                        <span className='text-[#915eff]'>Jun Ki</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am a Full Stack Developer,{' '}
                        <br className='sm:block hidden' />
                        and a Game Developer.
                    </p>
                    {/* === Animated CV Download Button === */}
                    <motion.a
                        href="/JunKiCV2025.pdf"
                        download
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #915eff" }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 inline-block px-6 py-3 bg-[#915eff] text-white font-semibold rounded-xl shadow-lg cursor-pointer"
                    >
                        Download CV
                    </motion.a>
                </div>
            </motion.div>
            <ComputersCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center' id="transitionDot">
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
