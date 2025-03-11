'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface SkillTag {
  name: string;
  category: 'programming' | 'web' | 'data' | 'cloud' | 'soft';
}

const skills: SkillTag[] = [
  // Programming & Scripting
  { name: 'Python', category: 'programming' },
  { name: 'C', category: 'programming' },
  // { name: 'C++', category: 'programming' },
  { name: 'C#', category: 'programming' },
  { name: 'TypeScript', category: 'programming' },
  { name: 'SQL', category: 'programming' },
  
  // Web & Application Development
  { name: 'Angular', category: 'web' },
  { name: '.NET', category: 'web' },
  { name: 'React', category: 'web' },
  // { name: 'Vite', category: 'web' },
  { name: 'Next.js', category: 'web' },
  { name: 'Node.js', category: 'web' },
  
  // Data & ML
  { name: 'MongoDB', category: 'data' },
  { name: 'MSSQL', category: 'data' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MLFlow', category: 'data' },
  { name: 'Pandas', category: 'data' },
  { name: 'scikit-learn', category: 'data' },
  { name: 'seaborn', category: 'data' },
  { name: 'matplotlib', category: 'data' },
  { name: 'Power BI', category: 'data' },
  { name: 'ML Deployment', category: 'data' },
  
  // Cloud & DevOps
  { name: 'Azure MLOps', category: 'cloud' },
  { name: 'Azure DevOps', category: 'cloud' },
  { name: 'Azure Pipelines', category: 'cloud' },
  { name: 'Azure Functions', category: 'cloud' },
  { name: 'Git', category: 'cloud' },
  { name: 'Docker', category: 'cloud' },
  
  // Soft Skills
  // { name: 'ML Deployment', category: 'soft' },
  // { name: 'Workflow Optimization', category: 'soft' },
  { name: 'Fast Learning', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' }
];

const Skill: FC = () => {
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
    <section id="skills" className="w-full bg-white dark:bg-[#111111] pb-10 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300"
        >
          Skills & Proficiencies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${skill.category === 'programming' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : ''}
                ${skill.category === 'web' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : ''}
                ${skill.category === 'data' ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400' : ''}
                ${skill.category === 'cloud' ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400' : ''}
                ${skill.category === 'soft' ? 'bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-400' : ''}
                hover:scale-105 transition-transform cursor-default
              `}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill; 