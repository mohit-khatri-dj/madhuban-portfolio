import React from 'react'
import portfolioData from '../data'; // Assuming data.js exports the portfolio data

function Footer() {
   return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 {portfolioData.personalInfo.name}. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  );
}

export default Footer
