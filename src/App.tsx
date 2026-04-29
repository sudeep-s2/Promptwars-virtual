import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, HelpCircle, CheckCircle2, RotateCcw, Building2, Users, Search, MessageSquare, X, Send, Sun, Moon } from 'lucide-react';
import { indianElectionData } from './data';
import './index.css';

// Components
const HeroSection = ({ onStart }: { onStart: () => void }) => (
  <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container"
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="Ashoka Chakra" style={{ width: '100px', height: '100px', animation: 'spin 20s linear infinite', willChange: 'transform' }} />
      </div>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        Demystifying <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #FF9933, #ffffff, #138808)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Indian Elections</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        An interactive guide to understanding the world's largest democratic exercise. Learn about the process, types of elections, and your role as a voter.
      </p>
      <button className="btn btn-primary floating" onClick={onStart}>
        Start Exploring <ChevronRight size={20} />
      </button>
    </motion.div>
  </section>
);

const ElectionTypes = () => (
  <section className="section container">
    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Types of Elections</h2>
    <div className="grid grid-cols-2">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{ borderTop: '4px solid var(--primary)' }}
      >
        <Building2 size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{indianElectionData.generalElection.title}</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>{indianElectionData.generalElection.description}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" /> <strong>Frequency:</strong> {indianElectionData.generalElection.frequency}</li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" /> <strong>Voters:</strong> {indianElectionData.generalElection.whoVotes}</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" /> <strong>Result:</strong> {indianElectionData.generalElection.result}</li>
        </ul>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        style={{ borderTop: '4px solid var(--secondary)' }}
      >
        <Users size={40} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{indianElectionData.stateElection.title}</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>{indianElectionData.stateElection.description}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" /> <strong>Frequency:</strong> {indianElectionData.stateElection.frequency}</li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" /> <strong>Voters:</strong> {indianElectionData.stateElection.whoVotes}</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="var(--accent)" /> <strong>Result:</strong> {indianElectionData.stateElection.result}</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section container">
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>The Election Process</h2>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Navigation Sidebar */}
        <div style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {indianElectionData.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              style={{
                padding: '1rem',
                textAlign: 'left',
                borderRadius: '0.5rem',
                background: activeStep === index ? 'rgba(79, 70, 229, 0.2)' : 'transparent',
                borderLeft: `4px solid ${activeStep === index ? 'var(--primary)' : 'transparent'}`,
                transition: 'all 0.2s',
                color: activeStep === index ? 'var(--text-light)' : 'var(--text-muted)',
                fontWeight: activeStep === index ? '600' : '400'
              }}
            >
              Step {step.id}: {step.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ flex: '2', minWidth: '300px' }}>
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
                <div style={{ 
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
                >
                  <ChevronLeft size={18} /> Previous
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setActiveStep(Math.min(indianElectionData.steps.length - 1, activeStep + 1))}
                  disabled={activeStep === indianElectionData.steps.length - 1}
                  style={{ opacity: activeStep === indianElectionData.steps.length - 1 ? 0.5 : 1 }}
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

const Flashcard = ({ q, a }: { q: string, a: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ perspective: '1000px', height: '250px' }} onClick={() => setIsFlipped(!isFlipped)}>
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
          <HelpCircle size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
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
          <RotateCcw size={24} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
          <p style={{ fontSize: '1.1rem' }}>{a}</p>
        </div>
      </motion.div>
    </div>
  );
};

const SimulatedEPICVerification = () => {
  const [epicNumber, setEpicNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = () => {
    const epicRegex = /^[A-Z]{3}[0-9]{7}$/;
    if (epicRegex.test(epicNumber)) {
      setMessage("Format Valid. Please verify live at voters.eci.gov.in.");
    } else {
      setMessage("Invalid Format. A standard EPIC is 3 letters followed by 7 digits (e.g., ABC1234567).");
    }
  };

  return (
    <div className="glass-card" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center', borderTop: '4px solid #138808' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Simulated EPIC Verification</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Enter a sample EPIC number to verify its format.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="e.g., ABC1234567" 
          value={epicNumber}
          onChange={(e) => setEpicNumber(e.target.value.toUpperCase())}
          style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', minWidth: '250px' }}
        />
        <button className="btn btn-primary" onClick={handleVerify} style={{ background: 'linear-gradient(135deg, #FF9933, #138808)' }}>
          Check Format
        </button>
      </div>
      {message && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={{ marginTop: '1rem', color: message.includes("Valid") ? '#138808' : '#ef4444', fontWeight: 'bold' }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

const DoubtSection = () => (
  <section className="section container">
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Doubt Section & Flashcards</h2>
      <p style={{ color: 'var(--text-muted)' }}>Click on the cards to reveal the answers to common questions.</p>
    </div>
    
    <div className="grid grid-cols-2">
      {indianElectionData.faqs.map((faq, idx) => (
        <Flashcard key={idx} q={faq.question} a={faq.answer} />
      ))}
    </div>
    
    <SimulatedEPICVerification />
  </section>
);

const ElectionDatesInfo = () => {
  const [electionType, setElectionType] = useState('pm'); // 'pm' or 'state'
  const [stateName, setStateName] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchElectionDetails = async () => {
    setLoading(true);
    setInfo('');
    let query = electionType === 'pm' ? '2024 Indian general election' : `${stateName} Legislative Assembly election`;
    
    if (electionType === 'state') {
      const validStates = [
        "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh", "goa", "gujarat", "haryana", 
        "himachal pradesh", "jharkhand", "karnataka", "kerala", "madhya pradesh", "maharashtra", "manipur", 
        "meghalaya", "mizoram", "nagaland", "odisha", "punjab", "rajasthan", "sikkim", "tamil nadu", "telangana", 
        "tripura", "uttar pradesh", "uttarakhand", "west bengal", "delhi", "jammu and kashmir", "puducherry"
      ];
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
    <section className="section container">
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Check Election Dates & Details</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <button 
            className={`btn ${electionType === 'pm' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setElectionType('pm')}
          >
            PM (General)
          </button>
          <button 
            className={`btn ${electionType === 'state' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setElectionType('state')}
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
            style={{ padding: '0.75rem', width: '80%', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }}
          />
        )}
        
        <button className="btn btn-primary" onClick={fetchElectionDetails} disabled={loading} style={{ width: '80%', marginBottom: '1.5rem' }}>
          {loading ? 'Fetching...' : 'Get Details from Wikipedia'}
        </button>

        {info && (
          <div style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '0.5rem', textAlign: 'left', lineHeight: '1.6', color: 'var(--text-light)', border: '1px solid var(--glass-border)', whiteSpace: 'pre-wrap' }}>
            {info}
          </div>
        )}
      </div>
    </section>
  );
};

const CandidateKYCSearch = () => {
  const [filter, setFilter] = useState('');
  const filteredCandidates = indianElectionData.candidates.filter(c => c.constituency.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="section container">
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Candidate KYC Search</h2>
      <div className="glass-card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
        <Search size={20} style={{ color: 'var(--text-muted)', marginRight: '1rem' }} />
        <input 
          type="text" 
          placeholder="Filter by Constituency..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '1.1rem' }}
        />
      </div>
      <div className="grid grid-cols-3">
        {filteredCandidates.map(c => (
          <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card" style={{ borderTop: '4px solid var(--secondary)' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{c.name}</h4>
            <p style={{ color: 'var(--text-muted)' }}><strong>Party:</strong> {c.party}</p>
            <p style={{ color: 'var(--text-muted)' }}><strong>Constituency:</strong> {c.constituency}</p>
            <p style={{ color: 'var(--text-muted)' }}><strong>Criminal Cases:</strong> <span style={{ color: c.criminalCases === 'None' ? '#10b981' : '#ef4444' }}>{c.criminalCases}</span></p>
          </motion.div>
        ))}
        {filteredCandidates.length === 0 && <p style={{ color: 'var(--text-muted)', gridColumn: 'span 3', textAlign: 'center' }}>No candidates found.</p>}
      </div>
    </section>
  );
};

const VoterRegistrationForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = parseInt(e.target.age.value);
    
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
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>Register to Vote (Form 6)</button>
       </div>
    );
  }

  return (
    <section className="section container">
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>New Voter Registration (Form 6)</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', color: '#10b981', padding: '2rem' }}>
            <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} />
            <h3>Registration Submitted Successfully!</h3>
            <p>Your details have been recorded for verification.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {error && <p style={{ color: '#ef4444', fontWeight: 'bold' }}>{error}</p>}
            <input name="name" required type="text" placeholder="Full Name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            <input name="age" required type="number" placeholder="Age" min="1" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            <input required type="text" placeholder="Nationality" defaultValue="Indian" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            <textarea required placeholder="Full Residential Address" rows={3} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none', resize: 'none' }} />
            <select required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--bg-dark)', color: 'var(--text-light)', outline: 'none' }}>
              <option value="">Select ID Proof</option>
              <option value="aadhaar">Aadhaar Card</option>
              <option value="pan">PAN Card</option>
              <option value="passport">Passport</option>
              <option value="driving">Driving License</option>
            </select>
            <input required type="text" placeholder="ID Number" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Submit Registration</button>
          </form>
        )}
      </div>
    </section>
  );
};

const QueryForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
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
          <button className="btn btn-outline" onClick={() => setShowForm(true)}>Submit a Query</button>
       </div>
    );
  }

  return (
    <section className="section container">
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Contact & Queries</h2>
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', borderTop: '4px solid var(--secondary)' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', color: '#10b981', padding: '2rem' }}>
            <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} />
            <h3>Query Sent!</h3>
            <p>Our team will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {error && <p style={{ color: '#ef4444', fontWeight: 'bold' }}>{error}</p>}
            <input name="name" required type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            <input required type="email" placeholder="Email Address" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none' }} />
            <textarea required placeholder="Describe your query..." rows={4} style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', outline: 'none', resize: 'none' }} />
            <button type="submit" className="btn btn-outline" style={{ marginTop: '1rem' }}>Send Query</button>
          </form>
        )}
      </div>
    </section>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ text: "Hi! I'm your election assistant. Ask me about EVM, VVPAT, NOTA, or ECI.", sender: 'bot', fullText: '' }]);
  const [modalContent, setModalContent] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { text: input, sender: 'user', fullText: '' };
    setMessages(prev => [...prev, newMsg]);
    
    setTimeout(() => {
      let reply = "For more complex queries, please visit the official ECI website at voters.eci.gov.in or contact an election agent manually.";
      const lower = input.toLowerCase();
      if (lower.includes('evm')) reply = "EVM stands for Electronic Voting Machine used for casting votes.";
      else if (lower.includes('vvpat')) reply = "VVPAT is a system that allows voters to verify that their vote was cast correctly via a paper slip.";
      else if (lower.includes('nota')) reply = "NOTA means 'None of the Above', an option to reject all candidates.";
      else if (lower.includes('eci')) reply = "ECI is the Election Commission of India, responsible for administering elections.";
      else {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(input + " election India")}&utf8=&format=json&origin=*`)
          .then(res => res.json())
          .then(async data => {
            if (data.query && data.query.search && data.query.search.length > 0) {
              const title = data.query.search[0].title;
              const detailRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&titles=${encodeURIComponent(title)}&format=json&origin=*`);
              const detailData = await detailRes.json();
              const pages = detailData.query.pages as Record<string, any>;
              const extract = Object.values(pages)[0].extract as string;
              if (extract) {
                 const shortText = extract.substring(0, 80) + '...';
                 setMessages(prev => [...prev, { text: shortText, sender: 'bot', fullText: extract }]);
              } else {
                 setMessages(prev => [...prev, { text: reply, sender: 'bot', fullText: '' }]);
              }
            } else {
              setMessages(prev => [...prev, { text: reply, sender: 'bot', fullText: '' }]);
            }
          })
          .catch(() => setMessages(prev => [...prev, { text: reply, sender: 'bot', fullText: '' }]));
        return;
      }
      
      setMessages(prev => [...prev, { text: reply, sender: 'bot', fullText: '' }]);
    }, 500);
    setInput('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-primary floating"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', borderRadius: '50%', width: '60px', height: '60px', padding: 0, zIndex: 50, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
      >
        <MessageSquare size={24} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-card"
            style={{ position: 'fixed', bottom: '6rem', right: '2rem', width: '350px', height: '450px', zIndex: 50, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
          >
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="Logo" style={{ width: '20px', height: '20px' }} />
                Assistant
              </h3>
              <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text-muted)' }}><X size={20} /></button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', background: m.sender === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '1rem', borderBottomRightRadius: m.sender === 'user' ? '0' : '1rem', borderBottomLeftRadius: m.sender === 'bot' ? '0' : '1rem', maxWidth: '85%', lineHeight: '1.4' }}>
                  {m.text}
                  {m.fullText && (
                    <button onClick={() => setModalContent(m.fullText)} style={{ display: 'block', marginTop: '0.5rem', color: '#60a5fa', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline', padding: 0 }}>More details</button>
                  )}
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.2)' }}>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                style={{ flex: 1, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.75rem', borderRadius: '2rem', outline: 'none' }}
              />
              <button onClick={handleSend} className="btn btn-primary" style={{ padding: '0.75rem', borderRadius: '50%' }}><Send size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}
            onClick={() => setModalContent('')}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="glass-card"
              style={{ maxWidth: '800px', width: '100%', maxHeight: '80vh', overflowY: 'auto', padding: '2rem', position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setModalContent('')} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}><X size={24} /></button>
              <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Detailed Information</h2>
              <div style={{ lineHeight: '1.8', color: 'var(--text-light)', whiteSpace: 'pre-wrap' }}>{modalContent}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  const [showContent, setShowContent] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <>
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
      
      {!showContent ? (
        <HeroSection onStart={() => setShowContent(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <header style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-card)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 10 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="Logo" style={{ width: '24px', height: '24px' }} />
                India Votes
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={toggleTheme} style={{ color: 'var(--text-muted)' }} title="Toggle Theme">
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setShowContent(false)} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Back to Home</button>
              </div>
            </div>
          </header>

          <main>
            <ElectionTypes />
            <ElectionDatesInfo />
            <ProcessTimeline />
            <DoubtSection />
            <CandidateKYCSearch />
            <VoterRegistrationForm />
            <QueryForm />
          </main>
          
          <Chatbot />

          <footer style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
            <p>© {new Date().getFullYear()} India Votes Assistant. For educational purposes.</p>
          </footer>
        </motion.div>
      )}
    </>
  );
}

export default App;
