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
    period: 'July 2021 - Present',
    title: 'Bachelor of Engineering in Automation Engineering',
    institution: 'King Mongkut\'s University of Technology Thonburi',
    description: 'International Program | 3.29 GPA (7 semesters)',
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
    description: 'Served as vice president of student council and school projects.'
  }
];

const experienceData: TimelineItem[] = [
  {
    period: 'Jun 2024 - Present',
    title: 'Software Engineer',
    institution: 'iCube Co., Ltd.',
    description: 'Machine Learning Operation (MLOps)',
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
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
      
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
          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-1.5"></div>
          
          {/* Content */}
          <div className={`w-full md:w-1/2 ${
            index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
          }`}>
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <span className="text-blue-400 text-sm font-medium mb-2 block">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <h4 className="text-gray-400 font-medium mb-3">
                {item.institution}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                {item.description}
              </p>
              {item.details && (
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
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
  return (
    <section id="education" className="w-full min-h-screen bg-[#111111] py-10">
      <div className="max-w-[1024px] mx-auto px-8">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-12"
          >
            Education
          </motion.h2>
          <Timeline items={educationData} />
        </div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-12"
          >
            Professional Experience
          </motion.h2>
          <Timeline items={experienceData} />
        </div>
      </div>
    </section>
  );
};

export default Education; 