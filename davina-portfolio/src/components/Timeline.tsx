import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stepsRaw from "../data/steps.json";
import "../css/timeline.css";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  side: "left" | "right";
};

const steps = stepsRaw as Step[];

type Meta = {
  tag: string;
  tagColor: string;
  stats: { num: string; label: string }[];
  skills: string[];
};

const STEP_META: Record<number, Meta> = {
  1: {
    tag: "Education",
    tagColor: "#4079ff",
    stats: [
      { num: "4", label: "years" },
      { num: "8+", label: "subjects" },
      { num: "1", label: "passion found" },
    ],
    skills: ["C", "Java", "Data Structures", "OOP", "Computer Architecture", "Networks"],
  },
  2: {
    tag: "Industry",
    tagColor: "#8f7db6",
    stats: [
      { num: "3", label: "years" },
      { num: "40%", label: "speed gain" },
      { num: "WCF→REST", label: "migration" },
    ],
    skills: ["C#", ".NET 6", "WPF", "MVVM", "REST APIs", "SQL", "Jenkins", "Git"],
  },
  3: {
    tag: "Education",
    tagColor: "#4079ff",
    stats: [
      { num: "2", label: "years" },
      { num: "3+", label: "major projects" },
      { num: "ANU", label: "Canberra" },
    ],
    skills: ["Data Mining", "HCI", "AI/ML", "Python", "Research", "System Design"],
  },
  4: {
    tag: "Part-time",
    tagColor: "#10b981",
    stats: [
      { num: "2+", label: "years" },
      { num: "Customer", label: "facing" },
      { num: "AU", label: "workplace" },
    ],
    skills: ["Customer Service", "Sales", "Teamwork", "Adaptability", "Time Management"],
  },
  5: {
    tag: "Teaching",
    tagColor: "#f59e0b",
    stats: [
      { num: "2+", label: "years" },
      { num: "100+", label: "students est." },
      { num: "Java, Software engineering & Techlauncher", label: "subject" },
    ],
    skills: ["Teaching", "Mentoring", "Communication", "Programming", "Problem Solving"],
  },
  6: {
    tag: "Industry",
    tagColor: "#8f7db6",
    stats: [
      { num: "70+", label: "clients served" },
      { num: "30%", label: "less manual work" },
      { num: "3", label: "envs shipped" },
    ],
    skills: ["C#", ".NET 8", "ASP.NET Core", "UiPath", "Google Gemini", "Docker", "Cloud Run", "GitHub Actions", "OAuth 2.0", "JWT"],
  },
};

export default function Journey() {
  const [activeId, setActiveId] = useState(steps[steps.length - 1].id);
  const active = steps.find((s) => s.id === activeId)!;
  const meta = STEP_META[activeId];

  return (
    <section id="timeline" className="container-fluid py-5 my-5 overflow-auto overflow-x-hidden">
      <div className="container">
        <h2 className="fw-bold mb-4">My Journey</h2>

        <div className="journey-shell">
          {/* ── LEFT SPINE ── */}
          <nav className="journey-spine">
            {steps.map((step) => {
              const m = STEP_META[step.id];
              const isActive = step.id === activeId;
              return (
                <button
                  key={step.id}
                  className={`spine-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveId(step.id)}
                  style={isActive ? { borderLeftColor: m?.tagColor ?? "#8f7db6" } : {}}
                >
                  <span className="spine-year">{step.period}</span>
                  <span className="spine-title">{step.title}</span>
                  <span className="spine-org">{step.subtitle}</span>
                  {m && (
                    <span
                      className="spine-tag"
                      style={{
                        background: m.tagColor + "22",
                        color: m.tagColor,
                      }}
                    >
                      {m.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* ── RIGHT DETAIL ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              className="journey-detail"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              {/* Header */}
              <div className="detail-head">
                <span className="detail-period">{active.period}</span>
                <h3 className="detail-title">{active.title}</h3>
                <p className="detail-org">{active.subtitle}</p>
              </div>

              {/* Stats */}
              {meta && (
                <div className="detail-stats">
                  {meta.stats.map((st) => (
                    <div key={st.label} className="detail-stat">
                      <span className="stat-num">{st.num}</span>
                      <span className="stat-label">{st.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {active.description && (
                <p className="detail-desc">{active.description}</p>
              )}

              {/* Skills */}
              {meta && (
                <div className="detail-skills">
                  {meta.skills.map((sk) => (
                    <span key={sk} className="skill-pill">{sk}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}