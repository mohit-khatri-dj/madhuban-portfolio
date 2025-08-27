import { useState, useEffect } from 'react'
import './App.css'
import './style.css'
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {

  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = ['hero', 'skills', 'projects', 'experience', 'contact'];
      
      // Show/hide back to top button
      setShowBackToTop(scrollPosition > 300);

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBackToTop]);

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      
      {showBackToTop && <BackToTop />}
    </div>
  );
}

export default App
