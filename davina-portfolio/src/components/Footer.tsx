import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../css/footer.css";

const navLinks = [
  { to: "about",    label: "About"    },
  { to: "skills",   label: "Skills"   },
  { to: "projects", label: "Projects" },
  { to: "timeline", label: "Journey"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container footer-inner">

        {/* Top row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-name">Davina Lydia Pinto</span>
            <span className="footer-role">Software &amp; Automations Developer</span>
          </div>

          {/* Nav links */}
          <nav className="footer-nav">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth
                offset={-80}
                duration={500}
                className="footer-link"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="footer-socials">
            <a
              href="mailto:davinapinto@gmail.com"
              className="footer-social-link"
              title="Email"
            >
              <SiGmail size={18} />
            </a>
            <a
              href="https://github.com/daylinda"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/davina-lydia-pinto-65166514b/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {year} Davina Lydia Pinto. All rights reserved.
          </span>
          <Link
            to="hero"
            smooth
            duration={600}
            className="footer-back-top"
            title="Back to top"
          >
            ↑ Back to top
          </Link>
        </div>

      </div>
    </footer>
  );
}