'use client';

import { FC, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200/20 dark:bg-gray-800/20"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
      />
    </motion.div>
  );
};

export default ScrollProgress;
