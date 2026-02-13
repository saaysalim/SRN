import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Director of Research',
      image: '👤',
      bio: 'Leading researcher in Afghan socio-economic development with 15+ years of experience',
      expertise: ['Policy Analysis', 'Economic Development', 'Research Methodology']
    },
    {
      name: 'Prof. Ahmad Karimi',
      role: 'Senior Research Fellow',
      image: '👤',
      bio: 'Expert in governance and political economy, focusing on institutional development',
      expertise: ['Governance', 'Political Economy', 'Institutional Reform']
    },
    {
      name: 'Dr. Fatima Hassan',
      role: 'Research Coordinator',
      image: '👤',
      bio: 'Specializes in gender studies and inclusive development practices',
      expertise: ['Gender Studies', 'Social Development', 'Community Engagement']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Data Science Lead',
      image: '👤',
      bio: 'Expert in quantitative analysis and data-driven policy research',
      expertise: ['Data Analysis', 'Statistical Modeling', 'Research Methods']
    },
    {
      name: 'Dr. Zahra Ahmadi',
      role: 'Education Specialist',
      image: '👤',
      bio: 'Focused on education policy and capacity building for emerging researchers',
      expertise: ['Education Policy', 'Capacity Building', 'Curriculum Development']
    },
    {
      name: 'Dr. James Wilson',
      role: 'Peacebuilding Researcher',
      image: '👤',
      bio: 'Specialist in conflict resolution and sustainable peace initiatives',
      expertise: ['Conflict Resolution', 'Peacebuilding', 'Human Rights']
    }
  ];

  const advisoryBoard = [
    { name: 'Prof. Elizabeth Martinez', affiliation: 'University of Oxford' },
    { name: 'Dr. Hassan Nazari', affiliation: 'American University of Afghanistan' },
    { name: 'Prof. David Thompson', affiliation: 'University of Limerick' },
    { name: 'Dr. Nadia Rahman', affiliation: 'UN Development Programme' }
  ];

  return (
    <div className="team-page">
      <div className="team-hero">
        <div className="team-hero-content">
          <h1>Our Team</h1>
          <p>Meet the dedicated researchers and scholars driving our mission</p>
        </div>
      </div>

      <div className="team-container">
        <section className="team-intro">
          <h2>A Global Network of Experts</h2>
          <p>
            Our team comprises experienced researchers, academics, and practitioners from diverse 
            backgrounds and disciplines. United by a shared commitment to evidence-based research 
            and sustainable development, we work collaboratively to advance knowledge and inform 
            policy on Afghanistan and the broader region.
          </p>
        </section>

        <section className="team-members-section">
          <h2>Core Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-expertise">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="expertise-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="advisory-section">
          <h2>Advisory Board</h2>
          <p className="advisory-intro">
            Our advisory board consists of distinguished scholars and practitioners who provide 
            strategic guidance and expertise to support our research initiatives.
          </p>
          <div className="advisory-grid">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="advisory-card">
                <div className="advisory-icon">🎓</div>
                <h4>{advisor.name}</h4>
                <p>{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="join-team-section">
          <div className="join-team-card">
            <h2>Join Our Network</h2>
            <p>
              We're always looking to expand our network of researchers and collaborators. 
              If you're interested in contributing to our mission, we'd love to hear from you.
            </p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
