import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { indianElectionData } from '../data';

export const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section container" aria-labelledby="timeline-title">
      <h2 id="timeline-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>The Election Process</h2>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Navigation Sidebar */}
        <nav style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} aria-label="Election process steps">
          {indianElectionData.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              aria-pressed={activeStep === index}
              aria-label={`Go to step ${step.id}: ${step.title}`}
              style={{
                padding: '1rem',
                textAlign: 'left',
                borderRadius: '0.5rem',
                background: activeStep === index ? 'rgba(79, 70, 229, 0.2)' : 'transparent',
                borderLeft: `4px solid ${activeStep === index ? 'var(--primary)' : 'transparent'}`,
                transition: 'all 0.2s',
                color: activeStep === index ? 'var(--text-light)' : 'var(--text-muted)',
                fontWeight: activeStep === index ? '600' : '400',
                width: '100%'
              }}
            >
              Step {step.id}: {step.title}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div style={{ flex: '2', minWidth: '300px' }} role="region" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div aria-hidden="true" style={{ 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                  width: '40px', height: '40px', borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontWeight: 'bold', fontSize: '1.2rem' 
                }}>
                  {indianElectionData.steps[activeStep].id}
                </div>
                <h3 style={{ fontSize: '1.8rem' }}>{indianElectionData.steps[activeStep].title}</h3>
              </div>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                {indianElectionData.steps[activeStep].description}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  style={{ opacity: activeStep === 0 ? 0.5 : 1 }}
                  aria-label="Go to previous step"
                >
                  <ChevronLeft size={18} /> Previous
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setActiveStep(Math.min(indianElectionData.steps.length - 1, activeStep + 1))}
                  disabled={activeStep === indianElectionData.steps.length - 1}
                  style={{ opacity: activeStep === indianElectionData.steps.length - 1 ? 0.5 : 1 }}
                  aria-label="Go to next step"
                >
                  Next <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
