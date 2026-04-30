import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { LoadingSpinner } from './LoadingSpinner';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const LazyWikipediaModal = lazy(() => import('./WikipediaModal'));

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi! I'm your election assistant. Ask me about EVM, VVPAT, NOTA, or ECI.", sender: 'bot', fullText: '' }]);
  const [modalContent, setModalContent] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: 'user' as const, fullText: '' };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      let reply = "For more complex queries, please visit the official ECI website at voters.eci.gov.in or contact an election agent manually.";
      const lower = currentInput.toLowerCase();
      
      if (lower.includes('evm')) reply = "EVM stands for Electronic Voting Machine used for casting votes.";
      else if (lower.includes('vvpat')) reply = "VVPAT is a system that allows voters to verify that their vote was cast correctly via a paper slip.";
      else if (lower.includes('nota')) reply = "NOTA means 'None of the Above', an option to reject all candidates.";
      else if (lower.includes('eci')) reply = "ECI is the Election Commission of India, responsible for administering elections.";
      else {
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(currentInput + " election India")}&utf8=&format=json&origin=*`);
        const data = await res.json();
        
        if (data.query && data.query.search && data.query.search.length > 0) {
          const title = data.query.search[0].title;
          const detailRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&titles=${encodeURIComponent(title)}&format=json&origin=*`);
          const detailData = await detailRes.json();
          const pages = detailData.query.pages as Record<string, any>;
          const extract = Object.values(pages)[0].extract as string;
          
          if (extract) {
            try {
              const prompt = `You are a helpful Indian Election Assistant. Summarize this Wikipedia text into a short, easy-to-read response for a voter: ${extract}`;
              const result = await model.generateContent(prompt);
              const summary = result.response.text();
              setMessages(prev => [...prev, { text: summary, sender: 'bot' as const, fullText: extract }]);
            } catch (geminiError) {
              const shortText = extract.substring(0, 150) + '...';
              setMessages(prev => [...prev, { text: shortText, sender: 'bot' as const, fullText: extract }]);
            }
          } else {
            setMessages(prev => [...prev, { text: reply, sender: 'bot' as const, fullText: '' }]);
          }
        } else {
          setMessages(prev => [...prev, { text: reply, sender: 'bot' as const, fullText: '' }]);
        }
        setIsTyping(false);
        return;
      }
      
      setMessages(prev => [...prev, { text: reply, sender: 'bot' as const, fullText: '' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "I'm having trouble connecting to the knowledge base. Please try again later.", sender: 'bot' as const, fullText: '' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-primary floating"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', borderRadius: '50%', width: '60px', height: '60px', padding: 0, zIndex: 50, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        aria-label="Open election assistant chatbot"
      >
        <MessageSquare size={24} aria-hidden="true" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.aside 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-card"
            style={{ position: 'fixed', bottom: '6rem', right: '2rem', width: '350px', height: '450px', zIndex: 50, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
            aria-label="Election Assistant Chatbot"
          >
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="" style={{ width: '20px', height: '20px' }} aria-hidden="true" />
                Assistant
              </h3>
              <button 
                onClick={() => setIsOpen(false)} 
                style={{ color: 'var(--text-muted)' }}
                aria-label="Close chatbot"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} role="log" aria-live="polite">
              {messages.map((m, i) => (
                <div key={i} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', background: m.sender === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '1rem', borderBottomRightRadius: m.sender === 'user' ? '0' : '1rem', borderBottomLeftRadius: m.sender === 'bot' ? '0' : '1rem', maxWidth: '85%', lineHeight: '1.4' }}>
                  {m.text}
                  {m.fullText && (
                    <button 
                      onClick={() => setModalContent(m.fullText)} 
                      style={{ display: 'block', marginTop: '0.5rem', color: '#60a5fa', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline', padding: 0 }}
                      aria-label={`View detailed Wikipedia article about the previous response`}
                    >
                      More details
                    </button>
                  )}
                </div>
              ))}
              {isTyping && <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderRadius: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Assistant is typing...</div>}
            </div>
            <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.2)' }}>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                style={{ flex: 1, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.75rem', borderRadius: '2rem', outline: 'none' }}
                aria-label="Type your election question here"
              />
              <button 
                onClick={handleSend} 
                className="btn btn-primary" 
                style={{ padding: '0.75rem', borderRadius: '50%' }}
                aria-label="Send your question"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <Suspense fallback={<LoadingSpinner />}>
        {modalContent && (
          <LazyWikipediaModal content={modalContent} onClose={() => setModalContent('')} />
        )}
      </Suspense>
    </>
  );
};
