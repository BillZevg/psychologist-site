import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <main className="inner-page-padding">
      <div className="container">
        <div className="services-hub-header">
          <span className="section-label">Our Services</span>
          <h1 className="page-title">Psychological Support & Therapy</h1>
          <p className="page-subtitle">
            Professional, evidence-based therapeutic services tailored to your
            emotional well-being and personal growth.
          </p>
        </div>

        <div className="services-hub-grid">
          <Link to="/services/individual-therapy" className="service-hub-card">
            <div className="service-hub-icon">🧠</div>
            <div className="service-hub-info">
              <h3>Individual Psychotherapy</h3>
              <p>
                One-on-one sessions dedicated entirely to your personal goals,
                self-discovery, and emotional healing. Ideal for working through
                deep personal struggles in a completely safe, structured
                environment
              </p>
              <span className="service-hub-link">Learn More &rarr;</span>
            </div>
          </Link>

          <Link to="/services/anxiety-management" className="service-hub-card">
            <div className="service-hub-icon">🌿</div>
            <div className="service-hub-info">
              <h3>Anxiety & Stress Management</h3>
              <p>
                Learn strategic, cognitive-behavorial tools to regain control
                over chronic worry, panic attacks, and daily stress. We focus on
                psysical regulation and changing negative thought patterns.
              </p>
              <span className="service-hub-link">Learn More &rarr;</span>
            </div>
          </Link>

          <Link to="/services/life-transitions" className="service-hub-card">
            <div className="service-hub-icon">🌱</div>
            <div className="service-hub-info">
              <h3>Life Transitions & Career Counseling</h3>
              <p>
                Support during times of heavy change-such as a career shift,
                relocation, divorce, or grief. We work on processing the
                emotional weight and planning your next steps with confidence.
              </p>
              <span className="service-hub-link">Learn More &rarr;</span>
            </div>
          </Link>

          <Link to="/services/online-therapy" className="service-hub-card">
            <div className="service-hub-icon">💻</div>
            <div className="service-hub-info">
              <h3>Secure Online Therapy</h3>
              <p>
                Professional and completely confidential psychological support
                from the comfort and convenience of your own space.
              </p>
              <span className="service-hub-link">Learn More &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ServicesPage;
