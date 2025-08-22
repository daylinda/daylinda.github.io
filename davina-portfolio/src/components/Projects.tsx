type Project = {
  title: string
  summary: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Automation Bot for Tax Returns',
    summary: 'UiPath workflow + Node.js system to integrate with Xero and the ATO. Reduced manual work by 30%.',
    tags: ['UiPath', 'Node.js', 'Xero']
  },
  {
    title: 'StudySearch Chat App',
    summary: 'Android chat app with OTP login, file sharing, and group chats.',
    tags: ['Firebase', 'Android Studio']
  },
  {
    title: 'Journey Through Food',
    summary: 'Showcases world cuisines. Uses Google Sheets API for dynamic updates.',
    tags: ['HTML', 'JS', 'Google Sheets']
  }
]

const Projects = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row">
      {projects.map((p, idx) => (
        <div key={idx} className="col-12 col-sm-6 col-lg-4">
          <div className="card bg-secondary text-light h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">{p.summary}</p>
              <div>
                {p.tags.map(tag => (
                  <span key={tag} className="badge bg-light text-dark me-1">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Projects
