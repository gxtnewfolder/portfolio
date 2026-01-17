'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Technologies Used' },
  { value: 100, suffix: '%', label: 'Dedication' },
];

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

const Counter: FC<CounterProps> = ({ target, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepDuration = (duration * 1000) / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

const StatsSection: FC = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#111111] py-16 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1024px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
