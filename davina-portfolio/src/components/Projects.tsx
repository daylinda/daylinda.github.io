import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import excludeData from "../data/exclude.json";
import "../css/projects.css";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language?: string;
  fork: boolean;
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const excludeList: string[] = excludeData.exclude;

  useEffect(() => {
    fetch(
      "https://api.github.com/users/daylinda/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: Repo) => {
          const isExcluded = excludeList.includes(repo.name);
          console.log(repo.name, "excluded?", isExcluded);
          return !isExcluded && !repo.fork;
        });
        setRepos(filtered);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, [excludeList]);

  // ✅ Build slides where each one is offset by 1
  const buildSlides = (arr: Repo[], size: number) => {
    const slides: Repo[][] = [];
    for (let i = 0; i < arr.length; i++) {
      slides.push(arr.slice(i, i + size));
    }
    return slides;
  };

  const slides = buildSlides(repos, 3); // show 3 at a time

  return (
    <section
      id="projects"
      className="container-fluid py-5 overflow-auto"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        
      <h2 className="fw-bold mb-4">Some of My Projects! 😎</h2>

      {repos.length > 0 && (
        <Carousel
          indicators
          controls
          interval={4000}
          pause="hover"
          className="shadow-sm"
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center">
                {slide.map((repo) => (
                  <div className="col-12 col-md-6 col-lg-4 mb-3" key={repo.id}>
                    <div className="card h-100 shadow-sm">
                      <div className="card-body d-flex flex-column text-center">
                        <h5 className="card-title">{repo.name}</h5>
                        <p className="card-text">
                          {repo.description || "No description provided."}
                        </p>
                        <p className="text-muted">{repo.language}</p>
                        <div className="mt-auto">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-dark me-2"
                          >
                            View Code
                          </a>
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-primary"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

        </div>

        <div id="skills">
   
        <div className="container text-center my-5">
          <h2 className="fw-bold mb-4">My Skills</h2>
          <div className="row g-3 justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-csharp-plain colored skill-icon"></i>
                <h5 className="mt-2">C#</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-dot-net-plain colored skill-icon"></i>
                <h5 className="mt-2">.NET</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-javascript-plain colored skill-icon"></i>
                <h5 className="mt-2">JavaScript</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-react-original colored skill-icon"></i>
                <h5 className="mt-2">React</h5>
              </div>
            </div>
                
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-uipath-plain colored skill-icon"></i>
                <h5 className="mt-2">UiPath</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-html5-plain colored skill-icon"></i>
                <h5 className="mt-2">HTML5</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-css3-plain colored skill-icon"></i>
                <h5 className="mt-2">CSS3</h5>
              </div>
            </div>
                
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-microsoftsqlserver-plain colored skill-icon"></i>
                <h5 className="mt-2">SQL Server</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="skill-card p-3 shadow-sm rounded">
                <i className="devicon-git-plain colored skill-icon"></i>
                <h5 className="mt-2">Git</h5>
              </div>
            </div>

      </div>
</div>
      </div>




    </section>
  );
};

export default Projects;
