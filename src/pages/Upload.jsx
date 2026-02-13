import { useState } from 'react';
import { artifactsAPI } from '../services/api';
import './Upload.css';

const Upload = () => {
  const [formData, setFormData] = useState({
    title: '',
    file: null,
  });
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!formData.file) {
      setError('Please select a file');
      return;
    }

    if (!formData.title.trim()) {
      setError('Please enter a title');
      return;
    }

    setUploading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('file', formData.file);

      const response = await artifactsAPI.upload(data);
      
      setResult(response.data);
      setFormData({ title: '', file: null });
      // Reset file input
      document.getElementById('file').value = '';
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <h1 className="page-title">Upload Research Artifact</h1>
        <p className="page-description">
          Upload your research document to the blockchain-secured platform. 
          Your document will be hashed and anchored on the blockchain for permanent verification.
        </p>

        <form onSubmit={handleSubmit} className="upload-form">
          {error && <div className="error-message">{error}</div>}
          
          {result && (
            <div className="success-message">
              <h3>✅ Upload Successful!</h3>
              <div className="result-details">
                <p><strong>Artifact ID:</strong> {result.artifactId}</p>
                <p><strong>File Hash:</strong> {result.hash}</p>
                <p><strong>Blockchain TX:</strong> {result.blockchainTx}</p>
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="title">Document Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter document title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Select File</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              required
            />
            {formData.file && (
              <p className="file-info">
                Selected: {formData.file.name} ({(formData.file.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled={uploading}>
            {uploading ? 'Uploading & Anchoring...' : 'Upload to Blockchain'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
