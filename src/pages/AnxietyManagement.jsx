import { Link } from "react-router-dom";

function AnxietyManagement() {
  return (
    <main className="inner-page-padding">
      <div className="container">
        <Link to="/services" className="back-to-blog-link">
          &larr; Back to All Services
        </Link>
        <div className="service-single-layout">
          <div className="service-single-content">
            <span className="section-label">Service</span>
            <h1 className="page-title">Anxiety & Stress Management</h1>
            <p className="page-subtitle">
              Break free from chronic worry, panic attacks, and the overwhelming
              weight of daily stress.
            </p>
            <div className="service-detailed-text">
              <h2>Understanding Your Anxiety</h2>
              <p>
                Anxiety is a natural response to threat, but when it becomes
                chronic, it interferes with your health, your sleep, and your
                relationships. If you constantly experience racing thoughts,
                muscle tension, or fear of worst-case scenarios, you are not
                alone.
              </p>
              <h2>My Approach to Anxiety</h2>
              <p>
                I specialize in Cognitive Behavioral Therapy (CBT), which is
                recognized as the most effective approach for anxiety. We don't
                just talk about the problem; we focus on practical, actionable
                strategies to change negative thought cycles and calm your
                nervous system.
              </p>
              <h2>Tools You Will Learn</h2>
              <p>
                Together, we will build a personalized "toolkit" for you. You
                will learn physical regulation techniques (breathing and
                grounding skills) to handle acute anxiety attacks, alongside
                cognitive restructuring to challenge and deconstruct illogical
                fears.
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
                  <strong>Method:</strong> CBT Focused
                </li>
                <li>
                  <strong>Tools:</strong>Worksheets & Grounding
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default AnxietyManagement;
