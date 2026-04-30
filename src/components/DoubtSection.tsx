import { indianElectionData } from '../data';
import { Flashcard } from './Flashcard';
import { SimulatedEPICVerification } from './SimulatedEPICVerification';

export const DoubtSection = () => (
  <section className="section container" aria-labelledby="doubt-section-title">
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 id="doubt-section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Doubt Section & Flashcards</h2>
      <p style={{ color: 'var(--text-muted)' }}>Click on the cards to reveal the answers to common questions.</p>
    </div>
    
    <div className="grid grid-cols-2" role="list">
      {indianElectionData.faqs.map((faq, idx) => (
        <div key={idx} role="listitem">
          <Flashcard q={faq.question} a={faq.answer} />
        </div>
      ))}
    </div>
    
    <SimulatedEPICVerification />
  </section>
);
