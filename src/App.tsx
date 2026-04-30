import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { LoadingSpinner } from './components/LoadingSpinner';
import './index.css';

// Components - Dynamically Imported for Performance
const HeroSection = lazy(() => import('./components/HeroSection').then(m => ({ default: m.HeroSection })));
const ElectionTypes = lazy(() => import('./components/ElectionTypes').then(m => ({ default: m.ElectionTypes })));
const ProcessTimeline = lazy(() => import('./components/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })));
const DoubtSection = lazy(() => import('./components/DoubtSection').then(m => ({ default: m.DoubtSection })));
const ElectionDatesInfo = lazy(() => import('./components/ElectionDatesInfo').then(m => ({ default: m.ElectionDatesInfo })));
const CandidateKYCSearch = lazy(() => import('./components/CandidateKYCSearch').then(m => ({ default: m.CandidateKYCSearch })));
const VoterRegistrationForm = lazy(() => import('./components/VoterRegistrationForm').then(m => ({ default: m.VoterRegistrationForm })));
const QueryForm = lazy(() => import('./components/QueryForm').then(m => ({ default: m.QueryForm })));
const Chatbot = lazy(() => import('./components/Chatbot').then(m => ({ default: m.Chatbot })));

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <Suspense fallback={<LoadingSpinner />}>
            <HeroSection key="hero" onStart={() => setShowContent(true)} />
          </Suspense>
        ) : (
          <main key="content" className="fade-in">
            {/* Navigation Header */}
            <header style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-card)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 10 }}>
              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="India Votes - Ashoka Chakra Logo" style={{ width: '24px', height: '24px' }} />
                  India Votes
                </div>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button onClick={toggleTheme} style={{ color: 'var(--text-muted)' }} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <button 
                    onClick={() => setShowContent(false)} 
                    style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}
                    aria-label="Go back to welcome screen"
                  >
                    Back to Home
                  </button>
                </nav>
              </div>
            </header>

            <Suspense fallback={<LoadingSpinner />}>
              <ElectionTypes />
              <ProcessTimeline />
              <ElectionDatesInfo />
              <CandidateKYCSearch />
              <DoubtSection />
              <VoterRegistrationForm />
              <QueryForm />
            </Suspense>

            <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid var(--glass-border)', marginTop: '4rem', background: 'rgba(0,0,0,0.2)', textAlign: 'center' }}>
              <div className="container">
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>&copy; 2024 India Votes - Interactive Election Assistant. All data is for educational purposes.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                  <a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }} aria-label="Official Voters Service Portal">Official VSP</a>
                  <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }} aria-label="Election Commission of India Website">ECI Official</a>
                </div>
              </div>
            </footer>

            <Suspense fallback={null}>
              <Chatbot />
            </Suspense>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
