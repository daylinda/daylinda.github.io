import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import ResumeViewer from "./ResumeViewer";
import Orb from "./Orb";
import DownArrow from "./DownArrow";

const RESUME_URL = new URL("../assets/Davina_Resume.pdf", import.meta.url).href;

export default function Hero() {
  const [open, setOpen] = useState(false);
  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "100vh", overflow: "visible" }}
    >
      {/*Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0, overflow: "hidden" }}
      >
        <Orb
          hoverIntensity={1.5}
          rotateOnHover={true}
          hue={3}
          forceHoverState={true}
        />
      </div>

      {/* Foreground Content */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ zIndex: 1, background: "tranparent" }}
      >
        <h1 className="display-4 fw-bold text-white">Davina Lydia Pinto</h1>
        <p className="lead text-light">
          Software Developer · C# | .NET | UiPath Automation
        </p>
        <button
          type="button"
          className="btn btn-outline-light m-2"
          onClick={() => setOpen(true)}
        >
          View Résumé
        </button>
        <p style={{ fontSize: "2rem" }}>
          <a href="mailto:davinapinto@gmail.com" style={{ margin: "0 15px" }}>
            <SiGmail color="#EA4335" />
          </a>
          <a
            href="https://github.com/daylinda"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 15px" }}
          >
            <FaGithub color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/davina-lydia-pinto-65166514b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 15px" }}
          >
            <FaLinkedin color="#0A66C2" />
          </a>
        </p>
      </div>

      {/* Resume Modal */}
      <ResumeViewer
        open={open}
        onClose={() => setOpen(false)}
        file={RESUME_URL}
      />

      <DownArrow onClick={handleScroll} />
    </section>
  );
}
