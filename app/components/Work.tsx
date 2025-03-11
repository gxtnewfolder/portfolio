'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'MLOps Azure Pipeline',
    description: 'Developed an end-to-end MLOps pipeline using Azure services for manufacturing industries. Implemented automated model training, validation, and deployment workflows.',
    image: '/assets/mlopswork.png',
    technologies: ['Azure MLOps', 'Python', 'Azure DevOps', 'Azure Pipelines'],
    github: 'https://github.com/gxtnewfolder/mlops-project'
  }
];

const Work: FC = () => {
  return (
    <section id="work" className="w-full bg-[#111111] py-12 sm:py-16 md:py-20">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 