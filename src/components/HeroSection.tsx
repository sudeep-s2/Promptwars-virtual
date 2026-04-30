import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection = ({ onStart }: HeroSectionProps) => (
  <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container"
    >
      <header style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="Ashoka Chakra - National Emblem Symbol of India" style={{ width: '100px', height: '100px', animation: 'spin 20s linear infinite', willChange: 'transform' }} />
      </header>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        Demystifying <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #FF9933, #ffffff, #138808)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Indian Elections</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        An interactive guide to understanding the world's largest democratic exercise. Learn about the process, types of elections, and your role as a voter.
      </p>
      <button 
        className="btn btn-primary floating" 
        onClick={onStart}
        aria-label="Start exploring the interactive election guide"
      >
        Start Exploring <ChevronRight size={20} />
      </button>
    </motion.div>
  </section>
);
