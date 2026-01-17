'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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

const Timeline: FC<{ items: TimelineItem[]; reverse?: boolean }> = ({ items, reverse = false }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
      
      {/* Timeline items */}
      {items.map((item, index) => {
        const isLeft = reverse ? index % 2 !== 0 : index % 2 === 0;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: isLeft ? 50 : -50 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`relative flex md:flex-row ${
              isLeft ? 'md:flex-row-reverse' : ''
            } items-start mb-12 md:mb-16`}
          >
            {/* Timeline dot with pulse animation */}
            <motion.div 
              className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-6 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
            >
              <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></span>
            </motion.div>
            
            {/* Content */}
            <div className={`w-full md:w-1/2 ${
              isLeft ? 'md:pl-12' : 'md:pr-12'
            } pl-8 md:pl-0`}>
              <Card className="tilt-card">
                <CardHeader>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2 block">
                    {item.period}
                  </span>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="font-medium">
                    {item.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>
                  {item.details && (
                    <ul className="list-none space-y-2">
                      {item.details.map((detail, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2 group"
                        >
                          <span className="text-blue-500 mt-1.5 group-hover:text-blue-400 transition-colors">•</span>
                          <span className="group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors cursor-default">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const Education: FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="education" className="w-full min-h-screen bg-gray-50 dark:bg-[#111111] py-16 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-8">
        {/* Professional Experience - First */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Professional Experience
          </motion.h2>
          <Timeline items={experienceData} />
        </motion.div>

        {/* Education - Second */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={titleVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Education
          </motion.h2>
          <Timeline items={educationData} reverse />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;