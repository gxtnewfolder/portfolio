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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-[90vw] h-[90vh] max-w-[1200px]"
        onClick={e => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
          onClick={onClose}
        >
          <FaTimes className="w-5 h-5" />
        </Button>
        
        {project.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('prev');
              }}
            >
              <FaChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('next');
              }}
            >
              <FaChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}
        
        <div className="relative w-full h-full">
          <Image
            src={project.images[currentIndex]}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 90vw, 1200px"
            priority={currentIndex === 0}
            className="object-contain"
          />
        </div>
        
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/75'
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
        className="h-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="relative h-48 w-full overflow-hidden cursor-pointer"
          onClick={onImageClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={index === 0}
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          {project.images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
              1/{project.images.length}
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