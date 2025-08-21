
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
    <div className="container py-4">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="fw-bold">{PROFILE.name}</h1>
        <p className="text-muted">{PROFILE.role}</p>
        <nav className="d-flex justify-content-center gap-3">
          <a href="#projects" className="text-decoration-none">Projects</a>
          <a href="#skills" className="text-decoration-none">Skills</a>
          <a href="#experience" className="text-decoration-none">Experience</a>
          <a href="#contact" className="text-decoration-none">Contact</a>
        </nav>
      </header>


      {/* Hero */}
      <section className="text-center mb-5">
        <h2>About Me</h2>
        <p className="lead">{PROFILE.blurb}</p>
        <div className="d-flex justify-content-center gap-3">
          <a className="btn btn-outline-primary" href={PROFILE.github} target="_blank">GitHub</a>
          <a className="btn btn-outline-info" href={PROFILE.linkedin} target="_blank">LinkedIn</a>
          <a className="btn btn-primary" href={PROFILE.resumeUrl} target="_blank">Download CV</a>
        </div>
      </section>


      {/* Add Projects, Skills, Experience, Contact sections here with Bootstrap cards, grids, and lists */}
    </div>
  )
}

