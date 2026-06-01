import { useState } from "react";
import Counter from "../components/Counter";
import FaqItem from "../components/FaqItem";
import BookingModal from "../components/BookingModal";
import { Link } from "react-router-dom";

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
      <section className="hero">
        <div className="container">
          <span className="hero-tag">Psychologist · Athens, Greece</span>
          <h1 className="hero-title">
            A safe space to understand yourself better
          </h1>
          <p className="hero-sub">
            Individual therapy for adults navigating anxiety, stress and life
            transitions.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-large"
              onClick={() => setModalOpen(true)}
            >
              Book A Session
            </button>
            <Link to="/about" className="btn-outline btn-large">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2 className="section-title">How I Can Help</h2>
            <p className="section-sub">
              Sessions available in person and online.
            </p>
          </div>
          <div className="services-grid">
            <Link to="/services/individual-therapy" className="service-card">
              <div className="service-icon">🧠</div>
              <h3 className="service-name">Individual Therapy</h3>
              <p className="service-desc">
                One-on-one session focuses on your personal goals.
              </p>
            </Link>
            <Link to="/services/anxiety-management" className="service-card">
              <div className="service-icon">💭</div>
              <h3 className="service-name"> Anxiety & Stress Management</h3>
              <p className="service-desc">
                Tools and strategies to manage and reduce daily stress.{" "}
              </p>
            </Link>
            <Link to="/services/life-transitions" className="service-card">
              <div className="service-icon">🌿</div>
              <h3 className="service-name">Life Transitions</h3>
              <p className="service-desc">
                Support during major changes like career moves or
                relocation.{" "}
              </p>
            </Link>
            <Link to="/services/online-therapy" className="service-card">
              <div className="service-icon">🌱</div>
              <h3 className="service-name"> Online Therapy</h3>
              <p className="service-desc">
                Professional psychological support from the comfort of your
                space.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="about-preview">
        <div className="custom-shape-divider-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="about-preview-inner">
            <div className="about-preview-avatar">Dr. S</div>
            <div className="about-preview-content">
              <span className="section-label">About</span>
              <h3 className="about-preview-title">Hi I'm Dr. S</h3>
              <p className="about-preview-text">
                I'm a licensed clinical psychologist with over 10 years of
                experience helping adults navigate life's challenges. My
                approach is warm, non-judgmental and grounded in evidence-based
                practice.
              </p>
              <Link to="/about" className="btn-outline">
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
        {/* {κάτω κύμα} */}
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill-bottom"
            ></path>
          </svg>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-sub">Getting started is simple</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3 className="step-title">Book A Free Call</h3>
              <p className="step-desc">
                Schedule a free 15-minute consultation to see if we're a good
                fit.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3 className="step-title">First session</h3>
              <p className="step-desc">
                We discuss your goals and create a personalized plan together.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3 className="step-title">Begin Your Journey</h3>
              <p className="step-desc">
                Regular sessions at your own pace, in person or only online
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="stat-inner">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">
                <Counter target={10} suffix="+" />
              </div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <Counter target={200} suffix="+" />
              </div>
              <div className="stat-label">Clients Helped</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <Counter target={2} />
              </div>
              <div className="stat-label">
                Session formats — online & in person
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                <Counter target="Free" />
              </div>
              <div className="stat-label">First Consultation</div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="faq-list">
            <FaqItem
              question="How long is each session"
              answer="Sessions are 50 minutes long"
            />
            <FaqItem
              question="Do you offer online sessions"
              answer="Yes - sessions are available both in person in Athens and online via video call"
            />
            <FaqItem
              question="How much does a session cost"
              answer="Please get in touch for current pricing. The first consultation is always free."
            />
            <FaqItem
              question="How many sessions will I need?"
              answer="This varies for each person. We'll discuss this together in your first session"
            />
          </div>
        </div>
      </section>
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">Ready to take the first step?</h2>
            <p className="cta-sub">
              Book a free 15-minute consultation. We will talk about what brings
              you to therapy and how we can work together.
            </p>
            <button className="btn" onClick={() => setModalOpen(true)}>
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
