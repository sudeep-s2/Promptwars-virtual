import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { indianElectionData } from '../data';

export const CandidateKYCSearch = () => {
  const [filter, setFilter] = useState('');
  const filteredCandidates = indianElectionData.candidates.filter(c => c.constituency.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="section container" aria-labelledby="kyc-search-title">
      <h2 id="kyc-search-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Candidate KYC Search</h2>
      <div className="glass-card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
        <Search size={20} style={{ color: 'var(--text-muted)', marginRight: '1rem' }} aria-hidden="true" />
        <input 
          type="text" 
          placeholder="Filter by Constituency..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter candidates by constituency name"
          style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '1.1rem' }}
        />
      </div>
      <div className="grid grid-cols-3" role="list">
        {filteredCandidates.map(c => (
          <motion.article 
            key={c.id} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="glass-card" 
            style={{ borderTop: '4px solid var(--secondary)' }}
            role="listitem"
            aria-label={`Candidate: ${c.name}, Party: ${c.party}`}
          >
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{c.name}</h4>
            <p style={{ color: 'var(--text-muted)' }}><strong>Party:</strong> {c.party}</p>
            <p style={{ color: 'var(--text-muted)' }}><strong>Constituency:</strong> {c.constituency}</p>
            <p style={{ color: 'var(--text-muted)' }}><strong>Criminal Cases:</strong> <span style={{ color: c.criminalCases === 'None' ? '#10b981' : '#ef4444' }}>{c.criminalCases}</span></p>
          </motion.article>
        ))}
        {filteredCandidates.length === 0 && <p style={{ color: 'var(--text-muted)', gridColumn: 'span 3', textAlign: 'center' }}>No candidates found for this constituency.</p>}
      </div>
    </section>
  );
};
