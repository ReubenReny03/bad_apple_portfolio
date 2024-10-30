import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypeWriter from './components/TypeWriter'
import RotatingTitles from './components/RotatingTitles'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import { FaGraduationCap, FaCode, FaDatabase, FaLinux, FaPlane } from 'react-icons/fa';
import { BiData } from 'react-icons/bi';
import { TbWorldSearch } from 'react-icons/tb';
import Navbar from './components/Navbar';
import BadAppleBackground from './components/BadAppleBackground';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTypeWriterClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="tech-theme">
      <BadAppleBackground isPlaying={isPlaying} />
      
      <div className="content-overlay">
        <header className="header">
          <Navbar />
        </header>

        <main>
          <section id="home" className="hero">
            <h1 className="glowing-text">Reuben Reny</h1>
            <TypeWriter 
              className="glowing-text" 
              onTextClick={handleTypeWriterClick}
            />
            <RotatingTitles />
            <div className="social-links">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="mailto:your.email@example.com">
                <MdEmail />
              </a>
            </div>
          </section>

          <section id="about" className="about">
            <div className="about-container">
              <div className="about-header">
                <h2>About Me</h2>
              </div>
              
              <div className="intro-card">
                <h3>Reuben Reny</h3>
                <p>Data Analyst & Technology Enthusiast</p>
              </div>

              <div className="journey-map">
                <div className="journey-item">
                  <div className="location">
                    <TbWorldSearch className="icon" />
                    <span>Kochi → Mumbai → Bhopal → Vizag → Coimbatore</span>
                  </div>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <FaPlane />
                    </div>
                    <div className="timeline-content">
                      <h4>Early Dreams</h4>
                      <p>Aspiring Pilot</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <FaLinux />
                    </div>
                    <div className="timeline-content">
                      <h4>Tech Foundation</h4>
                      <p>Linux & Open Source</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <FaCode />
                    </div>
                    <div className="timeline-content">
                      <h4>Development</h4>
                      <p>Software Engineering</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <BiData />
                    </div>
                    <div className="timeline-content">
                      <h4>Current Focus</h4>
                      <p>Software Devloper</p>
                    </div>
                  </div>
                </div>

                <div className="highlight-project">
                  <FaDatabase className="icon" />
                  <div className="highlight-content">
                    <h4>Notable Project</h4>
                    <p>Analysis of 7,000+ Student Records</p>
                  </div>
                </div>
                <div className="highlight-project">
                  <FaDatabase className="icon" />
                  <div className="highlight-content">
                    <h4>Proud Project</h4>
                    <p>Made a webstite for students to calculate their attendance</p>
                  </div>
                </div>
                <div className="highlight-project">
                  <FaDatabase className="icon" />
                  <div className="highlight-content">
                    <h4>BigShot Project</h4>
                    <p>Worked with the team of IITM in devlopment of autonomous wheel chair</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="projects">
            <Projects />
          </section>

          <section id="blogs" className="blogs">
            <Blogs />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
