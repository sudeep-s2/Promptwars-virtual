import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const VoterRegistrationForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const age = parseInt(formData.get('age') as string);
    
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError("Name must contain only letters and spaces.");
      return;
    }
    if (age < 18 || age > 120) {
      setError("Age must be between 18 and 120.");
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
            className="btn btn-primary" 
            onClick={() => setShowForm(true)}
            aria-label="Open voter registration form (Form 6)"
          >
            Register to Vote (Form 6)
          </button>
       </div>
    );
  }

  return (
    <section className="section container" aria-labelledby="voter-reg-title">
      <h2 id="voter-reg-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>New Voter Registration (Form 6)</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', color: '#10b981', padding: '2rem' }} role="status">
            <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} aria-hidden="true" />
            <h3>Registration Submitted Successfully!</h3>
            <p>Your details have been recorded for verification.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-label="New voter registration form">
            {error && <p style={{ color: '#ef4444', fontWeight: 'bold' }} role="alert">{error}</p>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="reg-name" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name (as per ID)</label>
              <input id="reg-name" name="name" required type="text" placeholder="e.g., Jane Doe" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="reg-age" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Age (Must be 18+)</label>
              <input id="reg-age" name="age" required type="number" placeholder="e.g., 25" min="1" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="reg-nat" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Nationality</label>
              <input id="reg-nat" name="nationality" required type="text" placeholder="Nationality" defaultValue="Indian" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="reg-addr" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Residential Address</label>
              <textarea id="reg-addr" name="address" required placeholder="Full Residential Address" rows={3} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none', resize: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="reg-id-type" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>ID Proof Type</label>
              <select id="reg-id-type" name="idType" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--bg-dark)', color: 'var(--text-light)', outline: 'none' }}>
                <option value="">Select ID Proof</option>
                <option value="aadhaar">Aadhaar Card</option>
                <option value="pan">PAN Card</option>
                <option value="passport">Passport</option>
                <option value="driving">Driving License</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="reg-id-num" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>ID Document Number</label>
              <input id="reg-id-num" name="idNumber" required type="text" placeholder="ID Number" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ marginTop: '1rem' }}
              aria-label="Submit voter registration form"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
