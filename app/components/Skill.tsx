'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SkillTag {
  name: string;
  category: 'programming' | 'web' | 'data' | 'cloud' | 'soft';
}

const skills: SkillTag[] = [
  // Programming & Scripting
  { name: 'Python', category: 'programming' },
  { name: 'C', category: 'programming' },
  { name: 'C#', category: 'programming' },
  { name: 'TypeScript', category: 'programming' },
  { name: 'SQL', category: 'programming' },
  
  // Web & Application Development
  { name: 'Angular', category: 'web' },
  { name: '.NET', category: 'web' },
  { name: 'React', category: 'web' },
  { name: 'Next.js', category: 'web' },
  { name: 'Node.js', category: 'web' },
  
  // Data & ML
  { name: 'MongoDB', category: 'data' },
  { name: 'MSSQL', category: 'data' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'MLFlow', category: 'data' },
  { name: 'Pandas', category: 'data' },
  { name: 'scikit-learn', category: 'data' },
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
  { name: 'Fast Learning', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' }
];

const categoryLabels: Record<string, string> = {
  programming: 'Programming & Scripting',
  web: 'Web & Application',
  data: 'Data & ML',
  cloud: 'Cloud & DevOps',
  soft: 'Soft Skills'
};

const Skill: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillTag[]>);

  return (
    <section id="skills" className="w-full bg-gray-50 dark:bg-[#111111] py-16 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-8">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-10 transition-colors duration-300"
        >
          Skills & Proficiencies
        </motion.h2>

        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      transition: { duration: 0.2 } 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant={skill.category}
                      className="hover:shadow-lg hover:shadow-current/20 transition-shadow duration-300"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
