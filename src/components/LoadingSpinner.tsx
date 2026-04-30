import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }} aria-busy="true" aria-label="Loading content">
    <Loader2 className="spin" size={24} color="var(--primary)" />
    <style>{`
      .spin { animation: spin 1s linear infinite; }
      @keyframes spin { 100% { transform: rotate(360deg); } }
    `}</style>
  </div>
);
