import portfolioData from '../data';


function HeroSection() {
    const { personalInfo } = portfolioData;

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

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
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
      </div>
    </section>
  );
}



export default HeroSection
