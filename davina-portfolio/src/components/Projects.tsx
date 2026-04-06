import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import includeData from "../data/include.json";
import "../css/projects.css";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  fork: boolean;
};

// Curated descriptions from resume — overrides brief GitHub descriptions
const CURATED: Record<string, { desc: string; tags: string[] }> = {
  BudgetTracker: {
    desc: "A personal finance tracker for managing income, expenses, and budgets with clear visual summaries.",
    tags: ["React", "TypeScript"],
  },
  DataMining_PrisonerData: {
    desc: "Historical data mining project analysing prisoner datasets to surface patterns and insights using statistical techniques.",
    tags: ["Python", "Data Mining"],
  },
  ANU2023_Mino_Game: {
    desc: "3D Unity game built as an ANU academic project with custom mechanics, level design, and C# scripting for player interaction and game state.",
    tags: ["C#", "Unity", "Game Dev"],
  },
  StudySearch: {
    desc: "Secure Android chat app with private/group messaging, OTP-based login, user blocking, profile editing, and multi-format file sharing via Firebase.",
    tags: ["Java", "Android", "Firebase"],
  },
  JourneyThroughFood: {
    desc: "Website showcasing global cuisines with real-time data via Google Sheets API. Focused on async data retrieval and an interactive browsing experience.",
    tags: ["HTML", "CSS", "JavaScript", "Google Cloud"],
  },
  soundOfMusic: {
    desc: "An interactive music-themed web experience exploring sound and UI animation.",
    tags: ["JavaScript", "CSS"],
  },
  "GroceryPrice-Comparer": {
    desc: "Scrapes and compares grocery prices across major Australian supermarkets, surfacing the cheapest option for a given item in real time.",
    tags: ["Web Scraping", "Automation"],
  },
  "RPA-ApplicationProcess": {
    desc: "UiPath RPA bot that automates the job application process — navigating portals, filling forms, and logging outcomes with minimal human input.",
    tags: ["UiPath", "C#", "RPA"],
  },
};

const LANG_COLOR: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  "C#": "#178600",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const includeList: string[] = includeData.include;

  useEffect(() => {
    fetch("https://api.github.com/users/daylinda/repos?sort=updated&per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub fetch failed");
        return res.json();
      })
      .then((data: Repo[]) => {
        const map = new Map(data.map((r) => [r.name, r]));
        const ordered = includeList
          .map((name) => map.get(name))
          .filter((r): r is Repo => !!r && !r.fork);
        setRepos(ordered);
        setLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="container-fluid py-5 my-5 overflow-auto">
      <div className="container">
        <h2 className="fw-bold mb-4">Projects</h2>

        {loading && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div className="col" key={n}>
                <div className="project-skeleton" />
              </div>
            ))}
          </div>
        )}

        {fetchError && (
          <div className="text-center py-5">
            <p className="text-secondary">⚠ Couldn't reach GitHub — try refreshing.</p>
          </div>
        )}

        {!loading && !fetchError && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {repos.map((repo, i) => {
              const curated = CURATED[repo.name];
              const desc = curated?.desc ?? repo.description ?? "No description provided.";
              const tags = curated?.tags ?? [];

              return (
                <motion.div
                  className="col"
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <div className="project-card h-100 p-3 d-flex flex-column">
                    {/* Top row */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="project-folder-icon">⬡</span>
                      <div className="d-flex gap-3">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                            title="Live demo"
                          >
                            <i className="bi bi-box-arrow-up-right" />
                          </a>
                        )}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github" />
                        </a>
                      </div>
                    </div>

                    {/* Name + description */}
                    <h5 className="project-name text-capitalize">
                      {repo.name.replace(/[-_]/g, " ")}
                    </h5>
                    <p className="project-desc flex-grow-1">{desc}</p>

                    {/* Footer: language + tags */}
                    <div className="project-footer d-flex flex-wrap align-items-center gap-2 mt-2 pt-2">
                      {repo.language && (
                        <span className="project-lang d-flex align-items-center gap-1">
                          <span
                            className="project-lang-dot"
                            style={{ background: LANG_COLOR[repo.language] ?? "#8f7db6" }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;