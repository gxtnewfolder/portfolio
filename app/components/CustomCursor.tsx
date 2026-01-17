'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const mousePosition = useRef({ x: -100, y: -100 });
  const cursorPosition = useRef({ x: -100, y: -100 });
  const isFirstMove = useRef(true);

  useEffect(() => {
    // Check if it's a touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // On first move, snap cursor to position
      if (isFirstMove.current) {
        cursorPosition.current = { x: e.clientX, y: e.clientY };
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        isFirstMove.current = false;
      }
      
      // Update dot immediately
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isFirstMove.current = true;
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      // Reset position when entering
      mousePosition.current = { x: e.clientX, y: e.clientY };
      cursorPosition.current = { x: e.clientX, y: e.clientY };
      if (cursor && cursorDot) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
      }
      setIsVisible(true);
      isFirstMove.current = false;
    };

    // Smooth cursor animation
    const animateCursor = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animateCursor);
        return;
      }
      
      const dx = mousePosition.current.x - cursorPosition.current.x;
      const dy = mousePosition.current.y - cursorPosition.current.y;
      
      cursorPosition.current.x += dx * 0.15;
      cursorPosition.current.y += dy * 0.15;
      
      if (cursor) {
        cursor.style.left = `${cursorPosition.current.x}px`;
        cursor.style.top = `${cursorPosition.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Outer glow ring */}
          <motion.div
            ref={cursorRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: isPointer ? 1.5 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className={`
              fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              border-2 border-blue-500/50 dark:border-blue-400/50
              transition-transform duration-150
              ${isPointer ? 'bg-blue-500/10' : ''}
            `}
            style={{ left: -100, top: -100 }}
          />
          
          {/* Inner dot */}
          <motion.div
            ref={cursorDotRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: isPointer ? 0 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
            style={{ left: -100, top: -100 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
