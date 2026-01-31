import portfolioData from '../data';
import { useState } from 'react';
import axios from 'axios';

function HeroSection() {
    const { personalInfo } = portfolioData;
    const [messages, setMessages] = useState([
      { id: 1, text: 'Hi! Ask me anything about ' + personalInfo.name, sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const handleResumeDownload = (e) => {
    e.preventDefault();

    // prefer data-provided URL, otherwise use file in public folder
    const resumeUrl =
      personalInfo && personalInfo.resumeUrl && personalInfo.resumeUrl !== '#'
        ? personalInfo.resumeUrl
        : '/resume.pdf';

    // open in new tab
    const newTab = window.open(resumeUrl, '_blank', 'noopener,noreferrer');

    // fallback to programmatic download if popup blocked
    if (!newTab) {
      try {
        const fileName = resumeUrl.split('/').pop() || 'resume.pdf';
        const a = document.createElement('a');
        a.href = resumeUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } catch (err) {
        // final fallback: navigate to the file
        window.location.href = resumeUrl;
      }
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call backend API
      const response = await axios.post('http://127.0.0.1:8000/user_query', {
          user_query: input
        });
        console.log("RESPONSE: ", response);
        
      // Add bot response from API
      const botReply = response.data.reply || "Thanks for your question!";
      setMessages(prev => [...prev, { id: Date.now(), text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error calling API:', error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "Sorry, I couldn't process your question. Please try again.", 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateBotResponse = (userInput) => {
    const lower = userInput.toLowerCase();
    if (lower.includes('name')) return `My name is ${personalInfo.name}`;
    if (lower.includes('title') || lower.includes('job')) return `I'm a ${personalInfo.title}`;
    if (lower.includes('bio') || lower.includes('about')) return personalInfo.bio;
    if (lower.includes('github')) return `Check out my GitHub: ${personalInfo.socialMedia.github}`;
    if (lower.includes('linkedin')) return `Connect with me on LinkedIn: ${personalInfo.socialMedia.linkedin}`;
    return "That's a great question! Feel free to contact me for more details.";
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
        <div className="hero-content" style={{ flex: 1 }}>
          <h1 className="hero-title">Hi, I'm {personalInfo.name}</h1>
          <p className="subtitle">{personalInfo.title}</p>
          <p className="bio">{personalInfo.bio}</p>
          <div className="hero-buttons">
            <a
              href={ (personalInfo && personalInfo.resumeUrl && personalInfo.resumeUrl !== '#') ? personalInfo.resumeUrl : '/resume.pdf' }
              className="btn btn--primary"
              onClick={handleResumeDownload}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i> &nbsp; Download Resume
            </a>
            <a href="#contact" className="btn btn--outline" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href={personalInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={personalInfo.socialMedia.dev} target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-dev"></i>
            </a>
          </div>
        </div>

        <div className="chatbot-container" style={{ position: 'relative', left: '150px', flex: 1, display: 'flex', flexDirection: 'column', maxHeight: '400px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
          <div className="chatbot-header" style={{ padding: '1rem', backgroundColor: 'rgb(30,40,60)', color: 'white', fontWeight: 'bold' }}>
            Ask me! 🤖
          </div>
          <div className="chatbot-messages" style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <div style={{
                  display: 'inline-block',
                  maxWidth: '80%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: msg.sender === 'user' ? 'rgb(30,40,60)' : '#e9ecef',
                  color: msg.sender === 'user' ? 'white' : 'black',
                  wordWrap: 'break-word'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#e9ecef',
                  color: 'black'
                }}>
                  <span style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                    <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0s' }}>●</span>
                    <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0.2s' }}>●</span>
                    <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0.4s' }}>●</span>
                  </span>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '0.75rem', borderTop: '1px solid #ddd', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about me..."
              disabled={isLoading}
              style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', outline: 'none', opacity: isLoading ? 0.6 : 1 }}
            />
            <button type="submit" disabled={isLoading} style={{ padding: '0.5rem 1rem', backgroundColor: 'rgb(30,40,60)', color: 'white', border: 'none', borderRadius: '4px', cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.6 : 1 }}>
              {isLoading ? '...' : 'Send'}
            </button>
          </form>
          <style>{`
            @keyframes bounce {
              0%, 60%, 100% { transform: translateY(0); }
              30% { transform: translateY(-10px); }
            }
          `}</style>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;
