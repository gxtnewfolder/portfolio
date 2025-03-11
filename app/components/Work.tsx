'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBook } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  docs?: string;
}

interface ImageModalProps {
  project: Project;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal: FC<ImageModalProps> = ({ project, currentIndex, onClose, onNavigate }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative w-[90vw] h-[90vh] max-w-[1200px]"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl z-10 cursor-pointer hover:text-gray-400"
          onClick={onClose}
        >
          ×
        </button>
        
        {project.images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 cursor-pointer hover:text-gray-400"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('prev');
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 cursor-pointer hover:text-gray-400"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('next');
              }}
            >
              ›
            </button>
          </>
        )}
        
        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="w-full h-full object-contain"
        />
        
        {project.images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
            {currentIndex + 1}/{project.images.length}
          </div>
        )}
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    title: 'MLOps Azure Pipeline',
    description: 'Developed an end-to-end MLOps pipeline using Azure services for manufacturing industries. Implemented automated model training, validation, and deployment workflows.',
    images: ['/assets/mlopswork.png'],
    technologies: ['Azure MLOps', 'Python', 'Azure DevOps', 'Azure Pipelines'],
    github: 'https://github.com/gxtnewfolder/mlops-project'
  },
  {
    title: 'Oil Distribution TAS System',
    description: 'Designed and implemented a Terminal Automation System (TAS) for auditing gas filling operations. Features include PI system integration for plant information management, Azure-based infrastructure, and financial KPI analysis.',
    images: [
      '/assets/oil1.png',
      '/assets/oil2.png',
      '/assets/oil3.png'
    ],
    technologies: ['Next.js', 'Azure', 'PI System', 'TAS', 'PIMS', 'Financial Analysis'],
    github: 'https://github.com/gxtnewfolder/my-oil-distribution-app',
    demo: 'https://my-oil-distribution-app.vercel.app/',
    docs: '/docs/oil.pdf'
  },
];

const Work: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleImageNavigation = (project: Project, direction: 'prev' | 'next') => {
    const currentIndex = currentImageIndex[project.title] || 0;
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + project.images.length) % project.images.length
      : (currentIndex + 1) % project.images.length;
    
    setCurrentImageIndex(prev => ({ ...prev, [project.title]: newIndex }));
  };

  return (
    <section id="work" className="w-full bg-white dark:bg-[#111111] py-12 sm:py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12"
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
              className="bg-gray-100 dark:bg-gray-900/50 rounded-lg overflow-hidden flex flex-col h-full transition-colors duration-300"
            >
              <motion.div 
                className="relative h-40 sm:h-48 w-full group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.images[currentImageIndex[project.title] || 0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {(currentImageIndex[project.title] || 0) + 1}/{project.images.length}
                  </div>
                )}
              </motion.div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 rounded-full transition-colors duration-300"
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
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                        title="View Source Code"
                      >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt className="w-5 h-5 sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.docs && (
                      <a
                        href={project.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                        title="View Documentation"
                      >
                        <FaBook className="w-5 h-5 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ImageModal
          project={selectedProject}
          currentIndex={currentImageIndex[selectedProject.title] || 0}
          onClose={() => setSelectedProject(null)}
          onNavigate={(direction) => handleImageNavigation(selectedProject, direction)}
        />
      )}
    </section>
  );
};

export default Work; 