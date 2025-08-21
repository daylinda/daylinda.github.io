
import './App.css'

import { useEffect, useRef } from 'react'
import './styles.css'

const PROFILE = {
  name: 'Davina Lydia Pinto',
  role: 'Software Developer : C# | .Net | UI Path Automation',
  blurb:
    'Full‑stack developer focused on .NET, automation (UiPath), and data‑driven apps. I build reliable interfaces and robust back‑ends.',
  email: 'davinapinto@gmail.com',
  phone: '0430 015 890',
  location: 'Canberra, Australia',
  github: 'https://github.com/daylinda',
  linkedin: 'https://www.linkedin.com/in/davina-lydia-pinto-65166514b/',
  resumeUrl: 'assets/Davina_Resume.pdf', // put cv.pdf in /public
}

type Project = {
  title: string
  summary: string
  tags: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Automation Bot for Individual Tax Returns',
    summary:
      'UiPath‑driven workflow to collect documents, validate inputs, and pre‑fill lodgement forms; added audit logging and error handling.',
    tags: ['UiPath', '.NET', 'SQL'],
    link: '#',
  },
  {
    title: 'WPF Modernisation',
    summary:
      'Refactored legacy WPF application, improved responsiveness, migrated API layer, and reduced memory usage by 30%.',
    tags: ['WPF', 'C#', 'REST API'],
    link: '#',
  },
  {
    title: 'Biodiversity Data Platform (Concept)',
    summary:
      'ELT prototype with analytics notebooks to surface biodiversity KPIs for supply‑chain reporting.',
    tags: ['Python', 'Jupyter', 'Data'],
    link: '#',
  },
]

const SKILLS = [
  '.NET', 'C#', 'WPF', 'REST APIs', 'SQL', 'Automation (UiPath)', 'Python', 'JavaScript', 'React', 'AWS / GCP (basics)', 'Agile / Scrum'
]

type Experience = {
  org: string
  role: string
  period: string
  bullets: string[]
}

const EXPERIENCE: Experience[] = [
  {
    org: 'Tailored Accounts',
    role: 'Software Developer',
    period: 'Nov 2024 – Present',
    bullets: [
      'Built automation workflows and internal tools; added monitoring and logging.',
      'Delivered features end‑to‑end across API, database, and UI.',
    ],
  },
  {
    org: 'BNP Paribas',
    role: ' Software Engineer',
    period: 'August 2020 - June 2023',
    bullets: [
      'Developed WPF apps and REST integrations for financial operations.',
      'Optimised SQL queries and improved reliability of batch jobs.',
    ],
  },
]

export default function App() {
  const sectionsRef = useRef<HTMLElement[]>([])
  const navLinksRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    const onScroll = () => {
      const idx = sectionsRef.current.findIndex(sec => sec && sec.getBoundingClientRect().top > 120)
      const activeIndex = (idx === -1) ? sectionsRef.current.length - 1 : Math.max(idx - 1, 0)
      navLinksRef.current.forEach(a => a.classList.remove('active'))
      navLinksRef.current[activeIndex]?.classList.add('active')
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const year = document.getElementById('year')
    if (year) year.textContent = String(new Date().getFullYear())
  }, [])

  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    const nav = document.getElementById('nav')
    if (nav?.classList.contains('open')) nav.classList.remove('open')
  }

  const toggleNav = () => {
    const nav = document.getElementById('nav')
    const btn = document.getElementById('nav-toggle')
    if (nav && btn) {
      const open = nav.classList.toggle('open')
      btn.setAttribute('aria-expanded', String(open))
    }
  }

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="brand">{PROFILE.name}</div>
          <button id="nav-toggle" className="nav-toggle" aria-expanded="false" aria-controls="nav" onClick={toggleNav}>
            <span className="sr-only">Toggle navigation</span> ☰
          </button>
          <nav id="nav" className="nav" aria-label="Primary">
            <ul>
              {['#projects', '#skills', '#experience', '#contact'].map((href, i) => (
                <li key={href}>
                  <a href={href} ref={el => { if (el) navLinksRef.current[i] = el }} onClick={scrollToId(href)}>
                    {href.replace('#','')}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero container">
        <h1 className="headline">{PROFILE.role}</h1>
        <p className="tagline">{PROFILE.blurb}</p>
        <div className="cta">
          <a className="btn primary" href="#projects" onClick={scrollToId('#projects')}>View Projects</a>
          <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-alt" ref={el => { if (el) sectionsRef.current[0] = el }}>
        <div className="container">
          <h2>Projects</h2>
          <div className="grid">
            {PROJECTS.map(p => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
                {p.link && <a className="card-link" href={p.link} target="_blank" rel="noreferrer">View repo/demo →</a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section" ref={el => { if (el) sectionsRef.current[1] = el }}>
        <div className="container">
          <h2>Skills</h2>
          <ul className="pills">{SKILLS.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-alt" ref={el => { if (el) sectionsRef.current[2] = el }}>
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map(e => (
              <div className="item" key={e.org}>
                <h3>{e.role} · {e.org}</h3>
                <div className="meta">{e.period}</div>
                <ul>
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" ref={el => { if (el) sectionsRef.current[3] = el }}>
        <div className="container">
          <h2>Contact</h2>
          <p>Based in {PROFILE.location}. I’m open to roles in .NET development, automation, or full‑stack engineering.</p>
          <div className="contacts">
            <a className="contact" href={`mailto:${PROFILE.email}`}>📧 {PROFILE.email}</a>
            <span className="contact">📱 {PROFILE.phone}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">© <span id="year"></span> {PROFILE.name}. All rights reserved.</div>
      </footer>
    </div>
  )
}

