import GradientText from "./animations/GradientText";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { motion } from "framer-motion";
import "../css/timeline.css";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  side: "left" | "right"; // determines slide-in direction
};

const steps: Step[] = [
  {
    id: 1,
    title: "Bachelor of Computer Engineering",
    subtitle: "Mumbai University",
    period: "2016–2020",
    side: "left",
  },
  {
    id: 2,
    title: "Software Developer",
    subtitle: "BNP Paribas",
    period: "2020–2023",
    side: "right",
  },
  {
    id: 3,
    title: "Masters of Computing",
    subtitle: "Australian National University",
    period: "2023–2025",
    side: "left",
  },
  {
    id: 4,
    title: "Retail Assistant",
    subtitle: "ShaverShop",
    period: "2023–Present",
    side: "right",
    description:
      "Crafting bespoke websites and applications for diverse clients, transforming ideas into digital realities.",
  },
  {
    id: 5,
    title: "tutoring",
    subtitle: "Australian National University",
    period: "2023–Present",
    side: "left",
  },

  {
    id: 6,
    title: "Software Developer",
    subtitle: "Tailored Accounts",
    period: "2024–Present",
    side: "right",
  },
];

export default function Journey() {
  return (
    <section id="timeline" className="container py-5 my-5">
      <div className="text-center mb-5">
        <h2 className="mb-3 text-4xl font-bold">
          <GradientText animationSpeed={3000}>
            Every step of the journey has shaped me more than the destination
            ever could.
          </GradientText>
        </h2>
        <h4 className="text-gray-600 dark:text-gray-300">
          From classrooms to careers: my journey in motion!{" "}
          <MdOutlineEmojiEmotions className="inline text-2xl mb-1" />
        </h4>
      </div>
      <div className="container mb-5">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`timeline-step mb-3 ${step.side}`}
            initial={{ opacity: 0, x: step.side === "left" ? -100 : 100 }}
            exit={step.side}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: step.id * 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            data-aos={step.side === "left" ? "fade-right" : "fade-left"}
          >
            <div className="timeline-content shadow-sm p-2 rounded">
              <div>
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-header text-center fw-bold bg-white">
                        {step.title}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{step.subtitle}</h5>
                        <p className="card-text">{step.period}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="description mt-3 text-center ver">
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
