import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import ResumeViewer from "./ResumeViewer";

const RESUME_URL = new URL("../assets/Davina_Resume.pdf", import.meta.url).href;



export default function Hero(){
   const [open, setOpen] = useState(false);
  return (


  <section id="hero" className="text-center py-5 container">
    <h1 className="display-4 fw-bold">Davina Lydia Pinto</h1>
    <p className="lead">
      Software Developer · C# | .NET | UI Path Automation
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
      <a href="https://github.com/daylinda" target="_blank" rel="noopener noreferrer" style={{ margin: "0 15px" }}>
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
    <ResumeViewer open={open} onClose={() => setOpen(false)} file={RESUME_URL} />
  </section>
)
};

