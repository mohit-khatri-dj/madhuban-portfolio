import React, {useState} from 'react'
import portfolioData from '../data'; // Assuming data.js exports the portfolio data

function Navigation({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          {portfolioData.personalInfo.name}
        </a>
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        {/* Desktop menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-menu-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile sidebar */}
        <div className={`mobile-sidebar${isMenuOpen ? ' open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Overlay for sidebar */}
        {isMenuOpen && <div className="sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </nav>
  );
}

export default Navigation
