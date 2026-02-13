import { useState } from 'react';
import { artifactsAPI } from '../services/api';
import './Verify.css';

const Verify = () => {
  const [fileHash, setFileHash] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!fileHash.trim()) {
      setError('Please enter a file hash');
      return;
    }

    setVerifying(true);

    try {
      const response = await artifactsAPI.verify(fileHash);
      setResult(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setResult({
          status: 'Unverified ❌',
          message: 'This hash does not exist on the Smart Contract.',
        });
      } else {
        setError('Verification failed. Please try again.');
      }
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="verify-page">
      <div className="verify-container">
        <h1 className="page-title">Verify Document Authenticity</h1>
        <p className="page-description">
          Enter the document hash to verify its authenticity on the blockchain.
          This will check if the document has been registered and is legitimate.
        </p>

        <form onSubmit={handleSubmit} className="verify-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="fileHash">Document Hash</label>
            <input
              type="text"
              id="fileHash"
              value={fileHash}
              onChange={(e) => setFileHash(e.target.value)}
              required
              placeholder="Enter SHA-256 hash (e.g., a1b2c3d4...)"
              className="hash-input"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={verifying}>
            {verifying ? 'Verifying...' : 'Verify on Blockchain'}
          </button>
        </form>

        {result && (
          <div className={`result-card ${result.status.includes('✅') ? 'verified' : 'unverified'}`}>
            <h2>{result.status}</h2>
            <p className="result-message">{result.message}</p>
            
            {result.details && (
              <div className="result-details">
                <h3>Verification Details:</h3>
                <div className="detail-item">
                  <span className="detail-label">Owner Address:</span>
                  <span className="detail-value">{result.details.ownerAddress}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Registered At:</span>
                  <span className="detail-value">{new Date(result.details.registeredAt).toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Hash:</span>
                  <span className="detail-value hash-value">{result.details.hash}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
