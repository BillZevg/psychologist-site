import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Στήλη 1  */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Dr. S
          </Link>
          <p className="footer-desc">
            Licensed Clinical Psychologist providing a safe, confidential space
            for personal growth and healing.
          </p>
        </div>

        {/* Στήλη 2 */}
        <div className="footer-links">
          <h4 className="footer-title">Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Στήλη 3 */}
        <div className="footer-contact">
          <h4 className="footer-title">Contact info</h4>
          <p>
            <i className="fa-solid fa-location-dot"></i> Athens, Greece
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+306972213104"> +30697 221 3104</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:s@example.com"> s@example.com</a>
          </p>
          <p className="footer-hours">
            <i className="fa-regular fa-clock"></i> Mon - Fri: 09:00 - 21:00
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; {currentYear} Dr. S All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
