import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="inner-page-padding">
      <div className="container">
        <div className="services-hub-header">
          <span className="section-label">Get in Touch</span>
          <h1 className="page-title">Contact Dr. S</h1>
          <p className="page-subtitle">
            Have a question or want to inquire about therapy sessions? Fill out
            the form or reach out directly.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h2>Send a Message</h2>
            {submitted ? (
              <div className="form-success-card">
                <h3>Thank You</h3>
                <p>
                  Your message has been sent successfully. We will get back to
                  you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    placeholder="Full Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>How can we help you?</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    placeholder="Type your message here..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-large btn-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="service-single-sidebar contact-sidebar">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.809385921061!2d23.75148467716884!3d37.98157750021828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd454032081f%3A0x4b84cfd5b926a2bb!2sI.%20Gennadiou%206%2C%20Athina%20115%2021!5e0!3m2!1sen!2sgr!4v1780276490040!5m2!1sen!2sgr"
                className="contact-map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
            <div className="sidebar-card">
              <h3>Office Information</h3>
              <ul className="sidebar-info-list">
                <li>
                  <strong>Address:</strong>

                  <span>Athens, Greece</span>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <span>4344224234</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>s@example.com</span>
                </li>
              </ul>

              <h3 className="sidebar-heading-spacing">Working Hours </h3>
              <ul className="sidebar-info-list hours-list">
                <li>Monday - Friday: 09:00 - 20:00</li>
                <li>Saturday: 10:00 - 14:00 (Online Only)</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
