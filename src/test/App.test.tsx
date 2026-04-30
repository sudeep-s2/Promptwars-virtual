import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock Framer Motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion') as any;
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
      article: ({ children, ...props }: any) => <article {...props}>{children}</article>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

// Mock Gemini
vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: class {
      getGenerativeModel() {
        return {
          generateContent: vi.fn(),
        };
      }
    },
  };
});

describe('India Votes App', () => {
  it('renders the welcome screen by default', () => {
    render(<App />);
    expect(screen.getByText(/Demystifying/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start exploring/i)).toBeInTheDocument();
  });

  it('navigates to main content when Start Exploring is clicked', async () => {
    render(<App />);
    const startBtn = screen.getByLabelText(/Start exploring/i);
    fireEvent.click(startBtn);
    
    expect(screen.getByText(/Types of Elections/i)).toBeInTheDocument();
    expect(screen.getByText(/The Election Process/i)).toBeInTheDocument();
    expect(screen.getByText(/Candidate KYC Search/i)).toBeInTheDocument();
  });

  it('toggles dark/light mode', async () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText(/Start exploring/i));
    
    const themeBtn = screen.getByLabelText(/Switch to light mode/i);
    fireEvent.click(themeBtn);
    
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    
    fireEvent.click(screen.getByLabelText(/Switch to dark mode/i));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
