import React from "react";
import { Chrono } from "react-chrono";

export default function CareerTimeline() {
  const items = [
    {
      title: "2016 – 2020",
      cardTitle: "Bachelor of Computer Engineering",
      cardSubtitle: "Mumbai University",
      media: { type: "icon", source: "🎓" },
    },
    {
      title: "2020 – 2023",
      cardTitle: "Software Developer",
      cardSubtitle: "BNP Paribas",
      media: { type: "icon", source: "💼" },
    },
    {
      title: "2023 – 2025",
      cardTitle: "Masters of Computing",
      cardSubtitle: "ANU Canberra",
      media: { type: "icon", source: "🎓" },
    },
    {
      title: "2024 – Present",
      cardTitle: "Software Developer",
      cardSubtitle: "Tailored Accounts",
      media: { type: "icon", source: "💻" },
    },
    {
      title: "2024 – Present",
      cardTitle: "Academic Tutor",
      cardSubtitle: "ANU CECC",
      media: { type: "icon", source: "👩‍🏫" },
    },
  ];

  return (
    <div style={{width: "100%"}}  >
     <Chrono
  items={[
    { title: "2016 – 2020", cardTitle: "Bachelor of Computer Engineering 🎓" },
    { title: "2020 – 2023", cardTitle: "Software Developer 💼 (BNP Paribas)" },
    { title: "2023 – 2025", cardTitle: "Masters of Computing 🎓 (ANU)" },
    { title: "2024 – Present", cardTitle: "Software Developer 💻 (Tailored Accounts)" },
    { title: "2024 – Present", cardTitle: "Academic Tutor 👩‍🏫 (ANU CECC)" }
  ]}
  mode="HORIZONTAL"
  
  disableToolbar
  theme={{
    primary: "#4f46e5",
    secondary: "#818cf8",
    titleColor: "#e5e7eb"
  }}
/>

    </div>
  );
}
