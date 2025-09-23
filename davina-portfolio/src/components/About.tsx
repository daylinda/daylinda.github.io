import { motion } from "framer-motion";

import { GridHelper } from "ogl";
import ProfilePic from "../assets/Avatar_1.png";
import TextType from "./animations/TextType";
import LightRays from "./animations/LightRays";
import "../css/about.css";


export default function About() {
  return (
    <section
      id="about"
      className=" container-fluid py-5 overflow-auto overflow-x-hidden"
    >
      <div className="container">
        <div className="row flex-column flex-md-row align-items-center">
          {/* Profile Picture */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <motion.div
              className="rounded-circle mx-auto shadow-lg"
              style={{ width: "clamp(100px, 400px, 450px)"  , height: "clamp(100px, 400px, 450px)" , overflow: "hidden" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.img
                src={ProfilePic}
                alt="Davina Lydia Pinto"
                className="img-fluid rounded-circle"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "5px solid white",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(106,17,203,0.5)",
                    "0 0 40px rgba(37,117,252,0.7)",
                    "0 0 20px rgba(106,17,203,0.5)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </motion.div>
          </div>

          

          {/* About Content */}
          <div className="col-12 col-md-6" id="about-text">
            <h2 className="fw-bold mb-4">About Me</h2>
            <p className="lead">
              Hey, my name is <span className="fw-semibold">Davina</span>.{" "}
              
              <br></br>
              <TextType
                text={[
                  "Welcome to my portfolio!",
                  "I build solutions that matter.",
                  "Let's create something amazing together!",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-primary fw-semibold cursive fs-4 mb-3 d-inline-block "
              />
              <br></br>
              I’m a <em>software developer</em>—engineer, problem-solver, and
              builder of ideas. At the heart of it, what I really do is turn{" "}
              <strong>concepts into tangible solutions</strong>.
            </p>
            <p>
              I take what you want, figure out what you actually need, and
              deliver products that match your vision. With 4+ years of
              experience spanning enterprise-grade{" "}
              <strong>.NET applications</strong>,
              <strong> automation workflows</strong>, and
              <strong> user-focused web platforms</strong>, I’ve learnt that
              stakeholders don’t always know the exact words—or even the right
              problem. That’s where I step in: bridging the gap between ideas
              and execution.
            </p>
            <p>
              My toolkit spans{" "}
              <strong>C#, .NET, UiPath, React, cloud services,</strong> and{" "}
              <strong>data platforms</strong>. Beyond writing clean code, I
              focus on listening, understanding, and building solutions that
              make lives easier.
            </p>
            <p>
              Outside of tech, I pursue my passions in{" "}
              <strong>culinary arts</strong> and{" "}
              <strong>Indian Classical dance</strong>. Both fuel my creativity,
              discipline, and storytelling—qualities I bring to my professional
              work too.
            </p>
            <p>
              Right now, I’m focused on growing as a{" "}
              <strong>full-stack developer</strong>, sharpening my automation
              skills, and building projects that merge functionality with
              creativity. Got an idea?{" "}
              <span className="fw-semibold">Let’s bring it to life.</span>
            </p>
          </div>
        </div>
      </div>

      
    </section>
    
  );
}
