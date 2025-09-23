import GradientText from "./animations/GradientText";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { motion } from "framer-motion";
import "../css/timeline.css";

import steps from "../data/steps.json";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  side: "left" | "right"; // determines slide-in direction
};

export default function Journey() {
  return (
    <section id="timeline" className="container py-5">
      <div className="text-center mb-5 py-3">
        <h2 className="mb-3 text-4xl font-bold">
          <GradientText
            colors={[
              "#8f7db6",
              "#4079ff",
              "#843bf3ff",
              "#8f7db6",
              "#4079ff",
              "#8f7db6",
            ]}
            animationSpeed={300}
          >
            Every step of the journey has shaped me more than the destination
            ever could.
          </GradientText>
        </h2>
        <h4 className="text-gray-600 dark:text-gray-300">
          From classrooms to careers: my journey in motion!{" "}
          <MdOutlineEmojiEmotions className="inline text-2xl mb-1" />
        </h4>
      </div>
      <div className="container align-items-center">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`timeline-step mb-3 ${step.side}`}
            initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
            exit={step.side}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: step.id * 0.01 }}
            viewport={{ once: false, amount: 0.2 }}
            data-aos={step.side === "left" ? "fade-right" : "fade-left"}
          >
            <div className="timeline-content shadow-sm p-2 rounded">
              <div>
                <div className="row">
                  <div className="col align-items-center">
                    <div className="card center">
                      <div className="card-header text-center fw-bold bg-white">
                        {step.title}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{step.subtitle}</h5>
                        <p className="card-text">{step.period}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="description text-justify p-3">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
