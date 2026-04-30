import { motion } from 'framer-motion';
import { Building2, Users, CheckCircle2 } from 'lucide-react';
import { indianElectionData } from '../data';

export const ElectionTypes = () => (
  <section className="section container" aria-labelledby="election-types-title">
    <h2 id="election-types-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Types of Elections</h2>
    <div className="grid grid-cols-2">
      <motion.article 
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{ borderTop: '4px solid var(--primary)' }}
        aria-label="General Election Information"
      >
        <Building2 size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} aria-hidden="true" />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{indianElectionData.generalElection.title}</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>{indianElectionData.generalElection.description}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" /> <strong>Frequency:</strong> {indianElectionData.generalElection.frequency}</li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" /> <strong>Voters:</strong> {indianElectionData.generalElection.whoVotes}</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" /> <strong>Result:</strong> {indianElectionData.generalElection.result}</li>
        </ul>
      </motion.article>

      <motion.article 
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{ borderTop: '4px solid var(--secondary)' }}
        aria-label="State Election Information"
      >
        <Users size={40} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} aria-hidden="true" />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{indianElectionData.stateElection.title}</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>{indianElectionData.stateElection.description}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" /> <strong>Frequency:</strong> {indianElectionData.stateElection.frequency}</li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" /> <strong>Voters:</strong> {indianElectionData.stateElection.whoVotes}</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" aria-hidden="true" /> <strong>Result:</strong> {indianElectionData.stateElection.result}</li>
        </ul>
      </motion.article>
    </div>
  </section>
);
