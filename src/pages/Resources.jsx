import './Resources.css';

const Resources = () => {
  const publications = [
    {
      title: 'Economic Development Strategies for Afghanistan',
      type: 'Research Paper',
      year: '2025',
      authors: 'Dr. Sarah Johnson, Prof. Ahmad Karimi',
      description: 'Comprehensive analysis of sustainable economic development pathways',
      category: 'Economics'
    },
    {
      title: 'Gender Equality in Afghan Education',
      type: 'Policy Brief',
      year: '2025',
      authors: 'Dr. Fatima Hassan, Dr. Zahra Ahmadi',
      description: 'Examining barriers and opportunities for gender-inclusive education',
      category: 'Education'
    },
    {
      title: 'Governance Reform and Institution Building',
      type: 'Report',
      year: '2024',
      authors: 'Prof. Ahmad Karimi, Dr. James Wilson',
      description: 'Strategic frameworks for strengthening governance structures',
      category: 'Governance'
    },
    {
      title: 'Data-Driven Policy Making in Developing Regions',
      type: 'Research Paper',
      year: '2024',
      authors: 'Dr. Michael Chen',
      description: 'Methodologies for evidence-based policy formulation',
      category: 'Methodology'
    },
    {
      title: 'Peacebuilding and Conflict Resolution',
      type: 'Working Paper',
      year: '2024',
      authors: 'Dr. James Wilson',
      description: 'Innovative approaches to sustainable peace initiatives',
      category: 'Peace Studies'
    },
    {
      title: 'Social Development and Community Engagement',
      type: 'Case Study',
      year: '2024',
      authors: 'Dr. Fatima Hassan',
      description: 'Best practices in participatory development programs',
      category: 'Social Development'
    }
  ];

  const datasets = [
    {
      name: 'Afghan Economic Indicators Dataset',
      description: 'Comprehensive economic data spanning 2010-2025',
      format: 'CSV, JSON',
      size: '15 MB'
    },
    {
      name: 'Education Statistics Collection',
      description: 'Enrollment, literacy, and infrastructure data',
      format: 'XLSX, CSV',
      size: '8 MB'
    },
    {
      name: 'Governance and Policy Survey Results',
      description: 'Survey data from governance research initiatives',
      format: 'SPSS, CSV',
      size: '12 MB'
    }
  ];

  const tools = [
    {
      name: 'Research Methodology Toolkit',
      description: 'Templates and guides for conducting rigorous research',
      icon: '📊'
    },
    {
      name: 'Policy Analysis Framework',
      description: 'Structured approach to policy evaluation and design',
      icon: '📋'
    },
    {
      name: 'Data Visualization Tools',
      description: 'Resources for effective data presentation',
      icon: '📈'
    },
    {
      name: 'Collaboration Platform Guide',
      description: 'Best practices for international research collaboration',
      icon: '🌐'
    }
  ];

  return (
    <div className="resources-page">
      <div className="resources-hero">
        <div className="resources-hero-content">
          <h1>Resources & Publications</h1>
          <p>Access our research outputs, datasets, and analytical tools</p>
        </div>
      </div>

      <div className="resources-container">
        <section className="resources-intro">
          <h2>Knowledge Repository</h2>
          <p>
            The Strategic Research Nexus maintains a comprehensive repository of research outputs, 
            datasets, and analytical tools to support evidence-based policy making and academic 
            collaboration. All resources are developed through rigorous research methodologies 
            and peer review processes.
          </p>
        </section>

        <section className="publications-section">
          <h2>📚 Recent Publications</h2>
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                <div className="pub-header">
                  <span className="pub-type">{pub.type}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
                <h3>{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-description">{pub.description}</p>
                <div className="pub-footer">
                  <span className="pub-category">{pub.category}</span>
                  <button className="btn-link">Download PDF</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="datasets-section">
          <h2>💾 Open Datasets</h2>
          <p className="section-intro">
            Access our curated datasets to support your research and analysis. All datasets 
            are anonymized and comply with ethical research standards.
          </p>
          <div className="datasets-grid">
            {datasets.map((dataset, index) => (
              <div key={index} className="dataset-card">
                <div className="dataset-icon">📊</div>
                <h3>{dataset.name}</h3>
                <p>{dataset.description}</p>
                <div className="dataset-meta">
                  <span><strong>Format:</strong> {dataset.format}</span>
                  <span><strong>Size:</strong> {dataset.size}</span>
                </div>
                <button className="btn btn-secondary">Request Access</button>
              </div>
            ))}
          </div>
        </section>

        <section className="tools-section">
          <h2>🛠️ Research Tools & Guides</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <button className="btn-link">Learn More →</button>
              </div>
            ))}
          </div>
        </section>

        <section className="access-section">
          <div className="access-card">
            <h2>Request Access to Resources</h2>
            <p>
              Some resources require registration or formal request for access. 
              If you're a researcher, policymaker, or organization interested in our materials, 
              please get in touch.
            </p>
            <div className="access-actions">
              <a href="/register" className="btn btn-primary">Create Account</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
