'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  details?: string[];
}

const educationData: TimelineItem[] = [
  {
    period: 'Jul 2021 - Jun 2025',
    title: 'Bachelor of Engineering in Automation Engineering',
    institution: 'King Mongkut\'s University of Technology Thonburi',
    description: 'International Program | 3.30 GPA',
    details: [
      'Senior Project: Machine Learning Operation (MLOps) in Azure',
      'Designed and implemented a scalable MLOps infrastructure for manufacturing industries.',
      'Automated CI/CD workflows across the ML lifecycle, ensuring efficiency and reliability.',
      'Developed performance metrics & evaluation methodologies for MLOps systems.'
    ]
  },
  {
    period: '2018 - 2021',
    title: 'Suankularb Wittayalai Thonburi School',
    institution: 'High School',
    description: 'Science-Math English Program',
    details: [
      'Served as vice president of student council and school projects.',
      'Participated in school projects and competitions.'
    ]
  }
];

const experienceData: TimelineItem[] = [
  {
    period: 'Jun 2024 - Jun 2025',
    title: 'Software Engineer',
    institution: 'iCube Co., Ltd.',
    description: 'Software Engineer | Machine Learning Operation',
    details: [
      'Developed MLOps pipelines leveraging Azure for seamless model integration and deployment.',
      'Collaborated with AI & data teams to design, implement, and optimize end-to-end ML workflows.',
      'Conducted Proof of Concept (PoC) studies, identifying best practices for MLOps implementation in industrial settings.',
      'Developed a data transformation platform capable of ingesting data from multiple sources, including MQTT, MSSQL, and SharePoint.',
      'Improved data accessibility and consistency, streamlining data processing for enhanced decision-making efficiency.'
    ]
  },
  {
    period: 'Jun 2022 - Feb 2023',
    title: 'Teaching Assistant',
    institution: 'Ninja Coding Space',
    description: 'Robotics Programming Instructor',
    details: [
      'Conducted hands-on training sessions on robotics programming and motor control using Arduino and Microbit.',
      'Taught students how to program H-Bridge modules for remote motor control using push buttons & IR sensors.'
    ]
  }
];

const Timeline: FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
      
      {/* Timeline items */}
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`relative flex md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } items-start mb-12 md:mb-16`}
        >
          {/* Timeline dot */}
          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 ring-4 dark:ring-blue-400/20 rounded-full transform -translate-x-1/2 mt-1.5 transition-all duration-300"></div>
          
          {/* Content */}
          <div className={`w-full md:w-1/2 ${
            index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
          }`}>
            <div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:bg-gray-900/70">
              <span className="text-blue-700 dark:text-blue-400 text-sm font-medium mb-2 block transition-colors duration-300">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                {item.title}
              </h3>
              <h4 className="text-gray-600 dark:text-gray-400 font-medium mb-3 transition-colors duration-300">
                {item.institution}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-300">
                {item.description}
              </p>
              {item.details && (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-2 transition-colors duration-300">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-default">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Education: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="education" className="w-full min-h-screen bg-gray-50 dark:bg-[#111111] py-10 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300"
          >
            Education
          </motion.h2>
          <Timeline items={educationData} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300"
          >
            Professional Experience
          </motion.h2>
          <Timeline items={experienceData} />
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 