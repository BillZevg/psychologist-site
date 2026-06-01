function AboutPage() {
  return (
    <main className="inner-page-padding">
      <div className="container">
        <div className="about-hero">
          <span className="section-label">About Me</span>
          <h1 className="page-title">Dr. S -Clinical Psychologist</h1>
          <p className="page-subtitle">
            Dedicated to helping you navigate life's challenges with resilience
            and clarity.
          </p>
        </div>

        <div className="about-grid has-image">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
              alt="Dr. S - Clinical Psychologist"
              className="about-profile-img"
            />
          </div>
          <div className="about-bio">
            <h2>My Approach</h2>
            <p>
              Welcome. I am a licensed clinical psychologist with over a decade
              of exprerience in helping individuals overcome anxiety,
              deep-rooted stress, and major life transitions. My therapeutic
              practice is grounded in empathy, strict confidentiality, and
              evidence-based methods
            </p>
            <p>
              I believe that therapy is a collaborative journey. Together, we
              will create a tailored framework using Cognitive Behavorial
              Therapy (CBT) and humanistic approaches to help you understand
              your patterns, develop healthy coping mechanisms, and foster
              genuine self-growth.
            </p>
          </div>

          <div className="about-credentials">
            <h3>Education & Credentials</h3>
            <ul className="credentials-list">
              <li>
                <strong>Ph.D. in Clinical Psychology</strong>- University of
                Athens
              </li>
              <li>
                <strong>M.Sc. in Cognitive Behavorial Therapy</strong>-
                Specialized Training
              </li>
              <li>
                <strong>Licensed Psychologist</strong>- Official State
                Registration (Reg No. 123456)
              </li>
              <li>
                <strong>Member</strong>- Hellenic Psycological Association
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
