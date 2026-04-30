import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const QueryForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError("Name must contain only letters and spaces.");
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 3000);
  };

  if (!showForm) {
    return (
       <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button 
            className="btn btn-outline" 
            onClick={() => setShowForm(true)}
            aria-label="Open query submission form"
          >
            Submit a Query
          </button>
       </div>
    );
  }

  return (
    <section className="section container" aria-labelledby="query-form-title">
      <h2 id="query-form-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Contact & Queries</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', borderTop: '4px solid var(--secondary)' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', color: '#10b981', padding: '2rem' }} role="status">
            <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} aria-hidden="true" />
            <h3>Query Sent!</h3>
            <p>Our team will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-label="Customer query form">
            {error && <p style={{ color: '#ef4444', fontWeight: 'bold' }} role="alert">{error}</p>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="query-name" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
              <input id="query-name" name="name" required type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="query-email" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
              <input id="query-email" name="email" required type="email" placeholder="Email Address" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="query-msg" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Query Description</label>
              <textarea id="query-msg" name="message" required placeholder="Describe your query..." rows={4} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none', resize: 'none' }} />
            </div>
            <button 
              type="submit" 
              className="btn btn-outline" 
              style={{ marginTop: '1rem' }}
              aria-label="Send query to support"
            >
              Send Query
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
