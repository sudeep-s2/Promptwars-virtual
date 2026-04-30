import { useState } from 'react';
import { motion } from 'framer-motion';

export const SimulatedEPICVerification = () => {
  const [epicNumber, setEpicNumber] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Validates the format of the entered EPIC (Voter ID) number using regex.
   * Format: 3 uppercase letters followed by 7 digits (e.g., ABC1234567).
   * @returns {void} Updates the component state with validation message.
   */
  const handleVerify = (): void => {
    const epicRegex: RegExp = /^[A-Z]{3}[0-9]{7}$/;
    if (epicRegex.test(epicNumber)) {
      setMessage("Format Valid. Please verify live at voters.eci.gov.in.");
    } else {
      setMessage("Invalid Format. A standard EPIC is 3 letters followed by 7 digits (e.g., ABC1234567).");
    }
  };

  return (
    <article className="glass-card" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center', borderTop: '4px solid #138808' }} aria-labelledby="epic-verify-title">
      <h3 id="epic-verify-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Simulated EPIC Verification</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Enter a sample EPIC number to verify its format.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="e.g., ABC1234567" 
          value={epicNumber}
          onChange={(e) => setEpicNumber(e.target.value.toUpperCase())}
          aria-label="Enter EPIC (Voter ID) number"
          style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', minWidth: '250px' }}
        />
        <button 
          className="btn btn-primary" 
          onClick={handleVerify} 
          style={{ background: 'linear-gradient(135deg, #FF9933, #138808)' }}
          aria-label="Check EPIC number format"
        >
          Check Format
        </button>
      </div>
      {message && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={{ marginTop: '1rem', color: message.includes("Valid") ? '#138808' : '#ef4444', fontWeight: 'bold' }}
          role="alert"
        >
          {message}
        </motion.p>
      )}
    </article>
  );
};
