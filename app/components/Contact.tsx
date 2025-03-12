'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const contactInfo = [
  {
    icon: <FaGithub size={24} />,
    label: 'GitHub',
    value: 'github.com/gxtnewfolder',
    link: 'https://github.com/gxtnewfolder'
  },
  {
    icon: <FaLinkedin size={24} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arnatngaw',
    link: 'https://linkedin.com/in/arnatngaw'
  },
  {
    icon: <HiMail size={24} />,
    label: 'Email',
    value: 'arnat.ngaw@gmail.com',
    link: 'mailto:arnat.ngaw@gmail.com'
  },
  {
    icon: <HiPhone size={24} />,
    label: 'Phone',
    value: '+66 99 352 8844',
    link: 'tel:+66993528844'
  },
  {
    icon: <HiLocationMarker size={24} />,
    label: 'Location',
    value: 'Bangkok, Thailand 10150',
    link: null
  }
];

const Contact: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="contact" className="w-full bg-gray-50 dark:bg-[#111111] py-12 sm:py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 transition-colors duration-300"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 bg-white dark:bg-gray-900/50 p-4 rounded-lg shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:bg-gray-900/70"
              >
                <div className="text-blue-700 dark:text-blue-400 w-8 sm:w-10 flex-shrink-0 transition-colors duration-300">
                  {info.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-0.5 transition-colors duration-300">
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white text-sm sm:text-base truncate transition-colors duration-300">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300"
          >
            <h3 className="text-gray-900 dark:text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 transition-colors duration-300">
              Send a Message
            </h3>
            <form action="https://getform.io/f/9bde9680-c60e-4a04-a021-c98c3ee8928a" method='POST' className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm block mb-1 sm:mb-2 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base
                           border border-gray-200 dark:border-gray-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/30 focus:border-blue-500
                           hover:border-blue-500/50 dark:hover:border-blue-400/50
                           transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm block mb-1 sm:mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base
                           border border-gray-200 dark:border-gray-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/30 focus:border-blue-500
                           hover:border-blue-500/50 dark:hover:border-blue-400/50
                           transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm block mb-1 sm:mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base
                           border border-gray-200 dark:border-gray-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/30 focus:border-blue-500
                           hover:border-blue-500/50 dark:hover:border-blue-400/50
                           transition-all duration-300 resize-y min-h-[100px]"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 sm:py-3 px-4 rounded-md text-sm sm:text-base font-medium
                         hover:bg-blue-600 dark:hover:bg-blue-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                         focus:ring-offset-white dark:focus:ring-offset-gray-900
                         transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 