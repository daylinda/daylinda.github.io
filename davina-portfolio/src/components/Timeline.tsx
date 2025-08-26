import React from "react";
import { MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

type Item = {
  title: string;
  place: string;
  date: string;
  description: string;
  type: "education" | "experience";
};

const timelineData: Item[] = [
  { title: "Bachelors of Computer Engineering", place: "Mumbai University", date: "2016 – 2020",
    description: "Core computer engineering, programming, and systems design.", type: "education" },
  { title: "Software Developer", place: "BNP Paribas | India", date: "2020 – 2023",
    description: "Modernised CRM apps, migrated WCF to REST APIs, and improved performance.", type: "experience" },
  { title: "Masters of Computing", place: "Australian National University", date: "2023 – 2025",
    description: "Focus on computing, software engineering, and data-driven applications.", type: "education" },
  { title: "Software Developer", place: "Tailored Accounts | Australia", date: "2024 – Present",
    description: "Designing .NET apps, UiPath automations, and leading web redesigns.", type: "experience" },
];

export default function Timeline() {
  return (
    <MDBContainer fluid className="py-5">
      <h3 className="text-center fw-bold mb-4">Education & Experience</h3>

      <div className="tl">
        {[...timelineData].reverse().map((item, i) => (
          <div className="tl-row" key={i}>
            {/* left column (education) */}
            <div className="tl-col left">
              {item.type === "education" && (
                <MDBCard className="tl-card left shadow-sm">
                  <MDBCardBody className="p-3">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <div className="text-muted small mb-1">{item.date}</div>
                    <div className="small fw-semibold mb-1">{item.place}</div>
                    <div className="small mb-0">{item.description}</div>
                  </MDBCardBody>
                </MDBCard>
              )}
            </div>

            {/* middle column (dot) */}
            <div className="tl-mid">
              <span className="tl-dot" />
            </div>

            {/* right column (experience) */}
            <div className="tl-col right">
              {item.type === "experience" && (
                <MDBCard className="tl-card right shadow-sm">
                  <MDBCardBody className="p-3">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <div className="text-muted small mb-1">{item.date}</div>
                    <div className="small fw-semibold mb-1">{item.place}</div>
                    <div className="small mb-0">{item.description}</div>
                  </MDBCardBody>
                </MDBCard>
              )}
            </div>
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}
