import { Link } from "react-router-dom";

function IndividualTherapy() {
  return (
    <main className="inner-page-padding">
      <div className="container">
        <Link to="/services" className="back-to-blog-link">
          &larr; Back to All Services
        </Link>
        <div className="service-single-layout">
          <div className="service-single-content">
            <span className="section-label">Service</span>
            <h1 className="page-title">Individual Psychotherapy for Adults</h1>
            <p className="page-subtitle">
              A dedicated, confidential space tailored entirely to your personal
              healing and self-discovery.
            </p>
            <div className="service-detailed-text">
              <h2>What is Individual Therapy?</h2>
              <p>
                Individual psychotherapy is a collaborative process between you
                and a trained therapist. It provides a safe, non-judgmental, and
                strictly confidential environment where you can explore your
                feelings, beliefs, and behaviors.
              </p>
              <h2>How It Helps</h2>
              <p>
                Through our one-on-one sessions, we work together to identify
                deep-rooted patterns that may be holding you back. Whether you
                are dealing with unresolved past experiences, relationship
                issues, or a general feeling of being "stuck," individual
                therapy helps you gain perspective and foster genuine
                self-growth.
              </p>

              <h2>What to Expect</h2>
              <p>
                Our initial session will focus on understanding your current
                situation and history. From there, we establish realistic,
                personalized goals. We will meet weekly or bi-weekly, depending
                on your needs, using evidence-based methods tailored to your
                unique rhythm.
              </p>
            </div>
          </div>

          <aside className="service-single-sidebar">
            <div className="sidebar-card">
              <h3>Session Details</h3>
              <ul className="sidebar-info-list">
                <li>
                  <strong>Duration:</strong> 50 minutes
                </li>
                <li>
                  <strong>Format:</strong> In-person or Online
                </li>
                <li>
                  <strong>Frequency:</strong> Typically weekly
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default IndividualTherapy;
