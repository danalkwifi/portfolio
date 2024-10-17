import profilePic from "../assets/danalkwifiProfile.jpg"
import { HERO_CONTENT } from "../constants"
import './customStyles.css'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden:{opacity: 0, x: -100},
    visible:{
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.5, 
            staggerChildren: 0.5,
        }
    }
}

const childVariations = {
    hidden: { opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: { duration: 0.5 }} 
}

const Hero = () => {
  return (
    <div className="area pb-4 lg:mb-36">
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img src={profilePic} alt="Dana Al-Kwifi" className="border order-stone-900 rounded-3xl" width={650}  height={650}
                        initial={{x:100, opacity:0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay: 1.5}} /> 
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center lg:items-start">
                    <motion.h2
                        variants={childVariations} 
                        className="pt-6 pb-3 text-5xl tracking-tighter lg:text-8xl text-purple-900">Dana Al-Kwifi</motion.h2>
                    <motion.span 
                        variants={childVariations}
                        className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">
                        Web Developer
                    </motion.span>
                    <motion.p 
                        variants={childVariations}
                        className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-stone-500">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-4 text-sm text-white mb-10 relative z-20"
                        variants={childVariations}>Download Resume</motion.a>
                </motion.div>
            </div>
            </div>
        
    </div>
  )
}

export default Hero