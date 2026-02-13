import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome, {user?.email}</h1>
          <p>Manage your research artifacts and verify documents on the blockchain</p>
        </div>

        <div className="dashboard-grid">
          <Link to="/upload" className="dashboard-card">
            <div className="card-icon">📤</div>
            <h3>Upload Artifact</h3>
            <p>Upload and anchor your research documents on the blockchain</p>
          </Link>

          <Link to="/verify" className="dashboard-card">
            <div className="card-icon">✓</div>
            <h3>Verify Document</h3>
            <p>Verify the authenticity of documents using blockchain</p>
          </Link>

          <div className="dashboard-card">
            <div className="card-icon">📊</div>
            <h3>My Artifacts</h3>
            <p>View and manage all your uploaded research artifacts</p>
            <span className="coming-soon">Coming Soon</span>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">👤</div>
            <h3>Profile Settings</h3>
            <p>Update your profile and wallet information</p>
            <span className="coming-soon">Coming Soon</span>
          </div>
        </div>

        <div className="dashboard-info">
          <h2>About Blockchain Verification</h2>
          <div className="info-grid">
            <div className="info-card">
              <h4>🔒 Secure</h4>
              <p>Your documents are cryptographically hashed and stored on the blockchain</p>
            </div>
            <div className="info-card">
              <h4>⏱️ Immutable</h4>
              <p>Once registered, the verification record cannot be altered or deleted</p>
            </div>
            <div className="info-card">
              <h4>🌍 Global</h4>
              <p>Verification is accessible to anyone, anywhere in the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
