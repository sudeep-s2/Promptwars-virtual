import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface WikipediaModalProps {
  content: string;
  onClose: () => void;
}

export const WikipediaModal = ({ content, onClose }: WikipediaModalProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}
    onClick={onClose}
    aria-modal="true"
    role="dialog"
    aria-label="Detailed information from Wikipedia"
  >
    <motion.div 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="glass-card"
      style={{ maxWidth: '800px', width: '100%', maxHeight: '80vh', overflowY: 'auto', padding: '2rem', position: 'relative' }}
      onClick={e => e.stopPropagation()}
    >
      <button 
        onClick={onClose} 
        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}
        aria-label="Close detailed information modal"
      >
        <X size={24} aria-hidden="true" />
      </button>
      <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Detailed Information</h2>
      <div style={{ lineHeight: '1.8', color: 'var(--text-light)', whiteSpace: 'pre-wrap' }}>{content}</div>
    </motion.div>
  </motion.div>
);

export default WikipediaModal;
