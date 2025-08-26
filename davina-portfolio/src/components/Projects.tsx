import Slider from "react-slick";

type Project = {
  title: string;
  summary: string;
  tags: string[];
  github?: string;
};

const projects: Project[] = [
  {
    title: "Automation Bot for Tax Returns",
    summary:
      "UiPath workflow + Node.js system integrated with Xero and ATO. Reduced manual work by 30%.",
    tags: ["UiPath", "Node.js", "Xero"],
    
  },
  {
    title: "StudySearch Chat App",
    summary:
      "Android chat app with OTP login, private/group chats, file sharing, and user blocking.",
    tags: ["Firebase", "Android Studio"],
    github: "https://github.com/daylinda/StudySearch",
  },
  {
    title: "Journey Through Food",
    summary:
      "Responsive website showcasing global cuisines. Uses Google Sheets API for dynamic updates.",
    tags: ["HTML", "JavaScript", "Google Sheets"],
    github: "https://github.com/daylinda/JourneyThroughFood",
  },
  {
    title: "Mino – Video Game",
    summary:
      "2D puzzle-adventure game in Unity with maze navigation and riddle challenges inspired by Greek mythology.",
    tags: ["Unity", "C#"],
    github: "https://github.com/daylinda/ANU2023_Mino",
  },
  {
    title: "Sentencing Patterns in Norfolk Island",
    summary:
      "Data-driven analysis of prisoner records using clustering, correlation, and regression to identify sentencing patterns.",
    tags: ["Python", "Data Mining", "ML"],
    
  },
  {
    title: "User Feedback Management API",
    summary:
      "Spring Boot REST API with CRUD operations for feedback. Integrated Swagger UI and H2 embedded DB.",
    tags: ["Spring Boot", "Swagger UI", "H2 DB"],
    github: "https://github.com/daylinda/FeedbackAPI",
  },
];

const chunkArray = (arr: Project[], size: number) =>
  arr.reduce<Project[][]>(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 visible
    slidesToScroll: 1, // move 1 at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section  id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Slider {...settings}>
        {projects.map((p, idx) => (
          <a
            href={p.github || "#"}
            target={p.github ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <div className="card project-card bg-dark text-light">
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>{p.summary}</p>
                <div>
                  {p.tags.map((tag) => (
                    <span key={tag} className="badge bg-light text-dark me-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay only if GitHub link exists */}
              {p.github && (
                <div className="project-overlay">
                  <i className="bi bi-github display-4"></i>
                </div>
              )}
            </div>
          </a>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
