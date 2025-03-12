'use client';
import { FC } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

const Home: FC = () => {
  return (
    <section 
      id="home" 
      className="w-full bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white pt-20 pb-10 transition-colors duration-300"
      aria-label="Home section"
    >
      <div className="max-w-[1024px] mx-auto px-8 h-full flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            I&apos;m Arnat N.
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Software Engineer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-[600px]"
          >
            Analytical problem-solver skilled at troubleshooting ML deployment & optimizing workflows.
            Fast self-learner adapting quickly to new technologies & programming paradigms.
            Thrives in fast-paced, evolving technical landscapes with expertise in machine learning operations and data transformation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 mb-8"
          >
            <a href="https://github.com/gxtnewfolder" target="_blank" rel="noopener noreferrer"
               className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/arnatngaw" target="_blank" rel="noopener noreferrer"
               className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:arnat.ngaw@gmail.com"
               className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <HiMail />
            </a>
            <a href="tel:+66993528844"
               className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <HiPhone />
            </a>
          </motion.div>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            Bangkok, Thailand 10150
          </motion.p> */}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-gray-700"
        >
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Home; 