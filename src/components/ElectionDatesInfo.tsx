import { useState } from 'react';
import { validStates } from '../data';
import { LoadingSpinner } from './LoadingSpinner';

export const ElectionDatesInfo = () => {
  const [electionType, setElectionType] = useState<'pm' | 'state'>('pm');
  const [stateName, setStateName] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchElectionDetails = async () => {
    setLoading(true);
    setInfo('');
    let query = electionType === 'pm' ? '2024 Indian general election' : `${stateName} Legislative Assembly election`;
    
    if (electionType === 'state') {
      if (!validStates.includes(stateName.toLowerCase().trim())) {
        setInfo("Invalid state name. Please enter a valid Indian state or Union Territory.");
        setLoading(false);
        return;
      }
    }
    
    try {
      const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`);
      const data = await res.json();
      if (data.query && data.query.search && data.query.search.length > 0) {
        const title = data.query.search[0].title;
        const detailRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&titles=${encodeURIComponent(title)}&format=json&origin=*`);
        const detailData = await detailRes.json();
        const pages = detailData.query.pages as Record<string, any>;
        const extract = Object.values(pages)[0].extract as string;
        setInfo(extract || "No recent election details found.");
      } else {
        setInfo("No recent election details found.");
      }
    } catch (error) {
      setInfo("Error fetching details. Please check your connection.");
    }
    setLoading(false);
  };

  return (
    <section className="section container" aria-labelledby="election-dates-title">
      <h2 id="election-dates-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Check Election Dates & Details</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }} role="group" aria-label="Election type selection">
          <button 
            className={`btn ${electionType === 'pm' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setElectionType('pm')}
            aria-label="Select PM (General) election type"
            aria-pressed={electionType === 'pm'}
          >
            PM (General)
          </button>
          <button 
            className={`btn ${electionType === 'state' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setElectionType('state')}
            aria-label="Select State Assembly election type"
            aria-pressed={electionType === 'state'}
          >
            State Assembly
          </button>
        </div>
        
        {electionType === 'state' && (
          <input 
            type="text" 
            placeholder="Enter State Name (e.g., Maharashtra)" 
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            aria-label="Enter Indian state name for assembly election details"
            style={{ padding: '0.75rem', width: '80%', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }}
          />
        )}
        
        <button 
          className="btn btn-primary" 
          onClick={fetchElectionDetails} 
          disabled={loading} 
          style={{ width: '80%', marginBottom: '1.5rem' }}
          aria-label="Fetch election details from Wikipedia"
        >
          {loading ? 'Fetching...' : 'Get Details from Wikipedia'}
        </button>

        {loading && <LoadingSpinner />}

        {info && !loading && (
          <div 
            style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '0.5rem', textAlign: 'left', lineHeight: '1.6', color: 'var(--text-light)', border: '1px solid var(--glass-border)', whiteSpace: 'pre-wrap' }}
            role="region"
            aria-live="polite"
            aria-label="Election information from Wikipedia"
          >
            {info}
          </div>
        )}
      </div>
    </section>
  );
};
