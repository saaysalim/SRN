import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Strategic Research Nexus</h1>
          <p className="hero-subtitle">
            The Strategic Research Nexus is established with the objective of fostering a dynamic and collaborative
            platform that connects Afghan researchers across the globe. By bridging geographical
            divides, the Nexus seeks to facilitate the exchange of knowledge, promote
            interdisciplinary research collaborations, and contribute to the advancement of
            scholarly discourse on issues pertinent to Afghanistan's development and global
            engagement.
          </p>
          <p className="hero-description">
            Through this network, researchers are empowered to share insights, engage
            in joint initiatives, and collectively address the pressing academic and
            socio-economic challenges facing the country.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/verify" className="btn btn-secondary">Verify Document</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Blockchain-Secured Document Verification</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Upload</h3>
              <p>Upload your research artifacts securely with blockchain-based verification</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Instant Verification</h3>
              <p>Verify document authenticity instantly using blockchain technology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Global Collaboration</h3>
              <p>Connect with Afghan researchers worldwide through our secure platform</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Track Your Work</h3>
              <p>Manage and track all your research artifacts from one dashboard</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-info">
            <p>Copyright © 2026 SRN</p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
