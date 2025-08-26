// src/components/Timeline.tsx
import React from "react";
import { Timeline as PrimeTimeline } from "primereact/timeline";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export type TLItem = {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  icon?: string;   // e.g., "pi pi-briefcase"
  color?: string;  // dot color
};

type Props = {
  items?: TLItem[];                         // optional; falls back to defaultTimeline
  align?: "top" | "bottom" | "alternate";
  horizontal?: boolean;                     // toggle layout without editing file
};

/** Keep local data in the same file without clashing with props */
export const defaultTimeline: TLItem[] = [
  { id: "bsc",   title: "Bachelor of Computer Engineering", subtitle: "Mumbai University", period: "2016–2020", icon: "pi pi-book",           color: "#7C4DFF" },
  { id: "bnp",   title: "Software Engineer", subtitle: "BNP Paribas", period: "2020–2023", icon: "pi pi-briefcase",           color: "#4dffe4ff" },
  { id: "intern",title: "Automation Intern",                subtitle: "Tailored Accounts", period: "2024",       icon: "pi pi-cog",            color: "#26C6DA" },
  { id: "mcomp", title: "Master of Computing",              subtitle: "ANU",               period: "2023–2025",  icon: "pi pi-graduation-cap", color: "#66BB6A" },
  { id: "job",   title: "Software Dev (Current)",           subtitle: "Tailored Accounts", period: "2024–Now",   icon: "pi pi-briefcase",      color: "#FF7043" },
];

export default function Timeline({
  items = defaultTimeline,
  align = "alternate",
  horizontal = true,
}: Props) {
  const marker = (item: TLItem) => (
    <span
      className="custom-marker"
      style={{ background: item.color ?? "#6f42c1" }}
      aria-hidden
    >
      {item.icon && <i className={item.icon} />}
    </span>
  );

  const content = (item: TLItem) => (
    <div className="card bg-dark text-light shadow-sm tl-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h6 className="mb-0">{item.title}</h6>
          {item.period && <small className="text-secondary">{item.period}</small>}
        </div>
        {item.subtitle && <div className="text-secondary small mb-2">{item.subtitle}</div>}
        {item.description && <p className="mb-0">{item.description}</p>}
      </div>
    </div>
  );

  return (
    <>
      {/* Inline CSS tweaks so you don’t need a separate stylesheet */}
      <style>{`
        .custom-marker {
          width: 14px; height: 14px; border-radius: 999px;
          display: grid; place-items: center; color: #fff; font-size: .55rem;
          box-shadow: 0 0 0 3px #111;
        }
        .p-timeline-event-connector { background: rgba(255,255,255,.15); height: 2px; }
        .p-timeline.p-timeline-horizontal { overflow-x: auto; padding-bottom: .5rem; scroll-snap-type: x mandatory; }
        .p-timeline.p-timeline-horizontal .p-timeline-event { scroll-snap-align: start; min-width: 220px; }
        .p-timeline.p-timeline-horizontal .p-timeline-event-content { margin-top: .5rem; }
        .p-timeline.p-timeline-horizontal.p-timeline-bottom .p-timeline-event-content { margin-bottom: .5rem; }
        @media (prefers-reduced-motion: reduce) { .tl-card { transition: none !important; } }
      `}</style>

      <PrimeTimeline
        value={items}
        layout={horizontal ? "horizontal" : undefined}
        align={align}
        marker={marker}
        content={content}
      />
    </>
  );
}
