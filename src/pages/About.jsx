import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Strategic Research Nexus</h1>
          <p className="tagline">Bridging Minds, Shaping Future</p>
        </div>
      </div>

      <div className="about-container">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            The Strategic Research Nexus (SRN) is an independent, non-partisan research platform committed to fostering
            scholarly collaboration and promoting evidence-based policy solutions related to
            Afghanistan. Our mission is to connect Afghan researchers worldwide, bridge
            academic and institutional gaps, and contribute to sustainable development through
            rigorous research and knowledge dissemination.
          </p>
          <p>
            The Strategic Research Nexus is founded upon the following core objectives:
          </p>
          <ul className="objectives-list">
            <li>Advancing education and research for public benefit.</li>
            <li>Fostering an inclusive, participatory, and intellectually engaged Afghan
            research community.</li>
            <li>Promoting, publishing, and disseminating high-quality research to inform policy
            and practice both within Afghanistan and in the global academic sphere.</li>
            <li>Searching for innovative pathways toward long-term sustainability and resilience
            for Afghanistan.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            As an international research collective, SRN engages in scholarly activities and
            public outreach focused on key challenges facing Afghanistan, including
            governance, economic development, education, gender equality, peacebuilding, and human
            rights. By connecting Afghan researchers across disciplines and borders,
            SRN aims to facilitate interdisciplinary research collaborations, encourage
            innovative thinking, and amplify Afghan people's voices in global academic and
            policy discussions.
          </p>
          <p>Through its initiatives, SRN seeks to:</p>
          <ul className="initiatives-list">
            <li>Enhance public and institutional understanding of Afghanistan's socio-economic,
            socio-technical and political landscape.</li>
            <li>Support evidence-based policy formulation and implementation.</li>
            <li>Encourage inclusive research practices that represent the diversity of Afghan
            society.</li>
            <li>Promote capacity-building among emerging researchers and academics.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Approach</h2>
          <p>
            Our approach emphasizes methodological rigor and ethical standards. SRN employs
            both qualitative and quantitative research methods, including data analysis,
            surveys, interviews, and participatory research practices. The findings generated
            through SRN's work are used to develop tailored policy recommendations and
            strategic interventions for governments, civil society organizations, and academic
            institutions.
          </p>
          <p>
            By fostering a vibrant, interconnected network of Afghan researchers and
            scholars, the Strategic Research Nexus aspires to contribute to positive, lasting
            change in Afghanistan and the broader region.
          </p>
        </section>

        <section className="about-section vision-section">
          <div className="vision-grid">
            <div className="vision-card">
              <div className="vision-icon">🎓</div>
              <h3>Education & Research</h3>
              <p>Advancing scholarly excellence and promoting evidence-based solutions</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🤝</div>
              <h3>Global Collaboration</h3>
              <p>Connecting researchers across borders and disciplines</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">📊</div>
              <h3>Policy Impact</h3>
              <p>Informing policy and practice through rigorous research</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🌱</div>
              <h3>Sustainable Development</h3>
              <p>Contributing to lasting positive change in the region</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
