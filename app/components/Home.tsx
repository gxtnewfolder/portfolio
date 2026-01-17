'use client';
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

const roles = [
  "Software Engineer",
  "MLOps Specialist",
  "Full Stack Developer",
  "Problem Solver"
];

const Home: FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const socialLinks = [
    { href: "https://github.com/gxtnewfolder", icon: FaGithub, label: "GitHub" },
    { href: "https://linkedin.com/in/arnatngaw", icon: FaLinkedin, label: "LinkedIn" },
    { href: "mailto:arnat.ngaw@gmail.com", icon: HiMail, label: "Email" },
    { href: "tel:+66993528844", icon: HiPhone, label: "Phone" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      id="home" 
      className="w-full min-h-screen bg-gray-50 dark:bg-[#111111] text-gray-900 dark:text-white pt-20 pb-10 transition-colors duration-300 flex items-center"
      aria-label="Home section"
    >
      <div className="max-w-[1024px] mx-auto px-8 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Name with gradient animation */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="inline-block">I&apos;m </span>
            <span className="gradient-text animate-gradient inline-block">
              Arnat N.
            </span>
          </motion.h1>

          {/* Typewriter effect for role */}
          <motion.div 
            variants={itemVariants}
            className="h-12 md:h-14"
          >
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              {displayText}
              <span className="animate-typewriter-cursor text-blue-500 dark:text-blue-400 ml-0.5">|</span>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-[600px]"
          >
            Analytical problem-solver skilled at troubleshooting ML deployment & optimizing workflows.
            Fast self-learner adapting quickly to new technologies & programming paradigms.
            Thrives in fast-paced, evolving technical landscapes with expertise in machine learning operations and data transformation.
          </motion.p>

          {/* Social links with floating animation */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300"
                >
                  <a 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-4 flex-wrap mt-4"
          >
            <Button 
              size="lg"
              className="animate-pulse-glow"
              asChild
            >
              <a href="#work">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;