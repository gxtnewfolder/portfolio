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
  return (
    <section id="contact" className="w-full bg-[#111111] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="text-blue-400 w-8 sm:w-10 flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-gray-400 text-xs sm:text-sm mb-0.5">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm sm:text-base truncate">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Send a Message</h3>
            <form action="https://getform.io/f/9bde9680-c60e-4a04-a021-c98c3ee8928a" method='POST' className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="text-gray-400 text-xs sm:text-sm block mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-400 text-xs sm:text-sm block mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-400 text-xs sm:text-sm block mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-gray-800 text-white rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y min-h-[100px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 sm:py-3 px-4 rounded-md text-sm sm:text-base font-medium
                         hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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