import { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Διαχείριση click (κυρίως για mobile)
  const handleServicesClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    } else {
      setMenuOpen(false);
    }
  };

  // Hover λογική για desktop

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(false);
    }
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" onClick={closeAllMenus}>
            Dr. S
          </Link>

          <button
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDropdownOpen(false);
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-right ${menuOpen ? "nav-open" : ""} `}>
            <Link to="/" className="nav-link" onClick={closeAllMenus}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeAllMenus}>
              About
            </Link>

            {/* Dropdown για υπηρεσίες με προσθήκη hover events για desktop */}
            <div
              className={`nav-item-dropdown ${dropdownOpen ? "dropdown-active" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className="nav-link dropdown-trigger"
                onClick={handleServicesClick}
              >
                Services <span className="arrow">▼</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/services/individual-therapy"
                    onClick={closeAllMenus}
                  >
                    Individual Psychotherapy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/anxiety-management"
                    onClick={closeAllMenus}
                  >
                    Anxiety & Stress Management
                  </Link>
                </li>
                <li>
                  <Link to="/services/life-transitions" onClick={closeAllMenus}>
                    Life Transitions
                  </Link>
                </li>
                <li>
                  <Link to="/services/online-therapy" onClick={closeAllMenus}>
                    Online Therapy
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/blog" className="nav-link" onClick={closeAllMenus}>
              Blog
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeAllMenus}>
              Contact
            </Link>
            <button
              className="btn"
              onClick={() => {
                setModalOpen(true);
                closeAllMenus();
              }}
            >
              Book A Session
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
