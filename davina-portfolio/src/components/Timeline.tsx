import GradientText from "./animations/GradientText";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { motion } from "framer-motion";
import "../css/timeline.css";
import Stepper, { Step } from "./animations/Stepper";

const Timeline = () => (
  <section
    id="timeline"
    className="container py-5"
    style={{height:"100vh",  overflow: "auto" }}
  >
    {/* Section Header with Gradient Text */}
    <GradientText
      colors={[
        "#8f7db6",
        "#4079ff",
        "#843bf3ff",
        "#8f7db6",
        "#4079ff",
        "#8f7db6",
      ]}
      animationSpeed={3}
      showBorder={false}
      className="custom-class mb-4"
    >
      <h2 className="fw-bold mb-4 ">
        My Journey! It takes a while <i class="bi bi-emoji-wink"></i>{" "}
        <i class="bi bi-emoji-grimace"></i>{" "}
      </h2>
    </GradientText>

    {/*  Main journey content */}
    <div className="container">
      
    </div>
  </section>
);

export default Timeline;
