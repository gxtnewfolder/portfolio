'use client';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBook, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[200]"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-[95vw] h-[85vh] max-w-[1200px] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-[210] bg-black/50 backdrop-blur-md rounded-full border border-white/10"
          onClick={onClose}
        >
          <FaTimes className="w-5 h-5" />
        </Button>
        
        {project.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-[210] bg-black/50 backdrop-blur-md rounded-full border border-white/10 w-12 h-12"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('prev');
              }}
            >
              <FaChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-[210] bg-black/50 backdrop-blur-md rounded-full border border-white/10 w-12 h-12"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('next');
              }}
            >
              <FaChevronRight className="w-8 h-8" />
            </Button>
          </>
        )}
        
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-300"
            style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))" }}
          />
        </div>
        
        {project.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-[210] bg-black/30 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10">
            {project.images.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  // For simplicity, we just use the onNavigate logic or similar
                  if (idx > currentIndex) onNavigate('next');
                  else if (idx < currentIndex) onNavigate('prev');
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-blue-400 w-8' 
                    : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectCard: FC<{ project: Project; index: number; onImageClick: () => void }> = ({ project, index, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Card 
        className="h-full overflow-hidden group border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="relative h-56 w-full overflow-hidden cursor-pointer"
          onClick={onImageClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              // Fallback if image fails to load
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Project+Image';
            }}
          />
          {/* Overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 0.7 : 0.4 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
              View Project Details
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-md text-xs backdrop-blur-md border border-white/10 font-mono">
              {project.images.length} IMAGES
            </div>
          )}
        </motion.div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05 }}
              >
                <Badge variant="default" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          
          <div className="flex gap-3">
            {project.github && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="hidden sm:inline">Code</span>
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span className="hidden sm:inline">Demo</span>
                </a>
              </Button>
            )}
            {project.docs && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaBook className="w-4 h-4" />
                  <span className="hidden sm:inline">Docs</span>
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    title: 'MLOps Azure Pipeline',
    description: 'Developed an end-to-end MLOps pipeline using Azure services for manufacturing industries. Implemented automated model training, validation, and deployment workflows.',
    images: ['/assets/mlopswork.png'],
    technologies: ['Azure MLOps', 'Python', 'Azure DevOps', 'Azure Pipelines'],
    github: 'https://github.com/gxtnewfolder/mlops-train'
  },
  {
    title: 'Pokemon Search App',
    description: 'Developed a Pokemon Search application using Next.js, GraphQL with Apollo Client and Tailwind CSS.',
    images: ['/assets/pokemon1.png', '/assets/pokemon2.png'],
    technologies: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Pokemon API'],
    github: 'https://github.com/gxtnewfolder/search-pokemon',
    demo: 'https://search-pokemon-flame-three.vercel.app/'
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
  {
    title: 'Street Vender Detection in IRAIC2023',
    description: 'Developed a Street Vender Detection system using YOLOv5. The system detects street vendors in real-time and provides an alert in web dashboard when a vendor is detected.',
    images: ['/assets/sim1.png', '/assets/sim2.png'],
    technologies: ['Next.js','YOLOv5', 'MongoDB', 'MQTT','Tailwind CSS'],
    github: 'https://github.com/gxtnewfolder/sim_iraic-project'
  },
  {
    title: 'Node Red + Proteus',
    description: 'Created a Node Red Dashboard for monitoring and controlling a Sensor.',
    images: ['/assets/works/1_1.png', '/assets/works/1_2.png', '/assets/works/1_3.png', '/assets/works/1_4.png'],
    technologies: ['Node Red', 'Proteus', 'Dashboard'],
    github: 'https://github.com/gxtnewfolder/G9_INC272'
  }
];

const Work: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageNavigation = (project: Project, direction: 'prev' | 'next') => {
    const currentIndex = selectedImageIndex;
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + project.images.length) % project.images.length
      : (currentIndex + 1) % project.images.length;
    
    setSelectedImageIndex(newIndex);
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
    <section id="work" className="w-full bg-gray-50 dark:bg-[#111111] py-16 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project} 
              index={index}
              onImageClick={() => {
                setSelectedProject(project);
                setSelectedImageIndex(0);
              }}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ImageModal
            project={selectedProject}
            currentIndex={selectedImageIndex}
            onClose={() => {
              setSelectedProject(null);
              setSelectedImageIndex(0);
            }}
            onNavigate={(direction) => handleImageNavigation(selectedProject, direction)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;