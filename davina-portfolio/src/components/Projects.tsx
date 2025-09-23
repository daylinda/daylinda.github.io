import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import includeData from "../data/include.json";
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
  const includeList: string[] = includeData.include;

  useEffect(() => {
    fetch(
      "https://api.github.com/users/daylinda/repos?sort=updated&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: Repo) => {
          const isIncluded = includeList.includes(repo.name);
          console.log(repo.name, "included?", isIncluded);
          return isIncluded && !repo.fork;
        });
        setRepos(filtered);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, [includeList]);

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
    <section id="projects" className="container-fluid py-5 my-5 overflow-auto">
      <div className="container" style={{height: '100vh'}}>
        <div className="row">
          <div className="col">
            <h2 className="section-title text-center mb-4">Projects</h2>
          </div>
          <div className="col text-center mb-4">
            Coming soon...
          </div>

          {/* <div className="col">
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
                    <div
                      className="col-12 col-md-6 col-lg-4 mb-3"
                      key={repo.id}
                    >
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
            
          </div> */}
        </div>

        
        
      </div>
    </section>
  );
};

export default Projects;
