import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, RotateCcw } from 'lucide-react';

interface FlashcardProps {
  q: string;
  a: string;
}

export const Flashcard = ({ q, a }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      style={{ perspective: '1000px', height: '250px' }} 
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-label={`Question: ${q}. Click to reveal answer.`}
    >
      <motion.div
        style={{
          width: '100%', height: '100%', position: 'relative',
          transition: 'transform 0.6s', transformStyle: 'preserve-3d',
          cursor: 'pointer'
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="glass-card" style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem'
        }}>
          <HelpCircle size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} aria-hidden="true" />
          <h4 style={{ fontSize: '1.2rem' }}>{q}</h4>
          <span style={{ position: 'absolute', bottom: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Click to reveal answer</span>
        </div>

        {/* Back */}
        <div className="glass-card" style={{
          position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem', transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(236, 72, 153, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.3)'
        }}>
          <RotateCcw size={24} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} aria-hidden="true" />
          <p style={{ fontSize: '1.1rem' }}>{a}</p>
        </div>
      </motion.div>
    </div>
  );
};
