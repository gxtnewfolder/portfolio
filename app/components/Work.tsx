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
              <motion.div 
                className="relative h-40 sm:h-48 w-full group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // Create modal element
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50';
                  
                  // Create image container with animation
                  const imgContainer = document.createElement('div');
                  imgContainer.className = 'relative w-[90vw] h-[90vh] max-w-[1200px] opacity-0 scale-95';
                  
                  // Create close button with animation
                  const closeBtn = document.createElement('button');
                  closeBtn.className = 'absolute top-4 right-4 text-white text-2xl z-10 opacity-0 transform translate-y-2';
                  closeBtn.innerHTML = '×';
                  closeBtn.onclick = () => {
                    modal.style.transition = 'background-color 0.3s ease';
                    modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                    imgContainer.style.transition = 'all 0.3s ease';
                    imgContainer.style.opacity = '0';
                    imgContainer.style.transform = 'scale(0.95)';
                    setTimeout(() => modal.remove(), 300);
                  };
                  
                  // Create image element
                  const img = document.createElement('img');
                  img.src = project.image;
                  img.className = 'w-full h-full object-contain';
                  
                  // Assemble modal
                  imgContainer.appendChild(closeBtn);
                  imgContainer.appendChild(img);
                  modal.appendChild(imgContainer);
                  document.body.appendChild(modal);
                  
                  // Animate in
                  requestAnimationFrame(() => {
                    modal.style.transition = 'background-color 0.3s ease';
                    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
                    imgContainer.style.transition = 'all 0.3s ease';
                    imgContainer.style.opacity = '1';
                    imgContainer.style.transform = 'scale(1)';
                    closeBtn.style.transition = 'all 0.3s ease 0.1s';
                    closeBtn.style.opacity = '1';
                    closeBtn.style.transform = 'translateY(0)';
                  });
                  
                  // Close on background click with animation
                  modal.onclick = (e) => {
                    if (e.target === modal) {
                      modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                      imgContainer.style.opacity = '0';
                      imgContainer.style.transform = 'scale(0.95)';
                      setTimeout(() => modal.remove(), 300);
                    }
                  };
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
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