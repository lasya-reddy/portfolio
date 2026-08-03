import { useEffect, useRef, useState } from 'react'
import './App.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const heroWords = ['Designing', 'intelligent', 'systems', 'for', 'a', 'new', 'luxury', 'future']

const stats = [
  { value: '8+', label: 'Milestones delivered' },
  { value: '70+', label: 'AI experiments' },
  { value: '6+', label: 'Leadership roles' },
  { value: '4', label: 'Startup launches' },
]

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'C++'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Three.js'],
  },
  {
    title: 'AI & Systems',
    skills: ['Machine Learning', 'NLP', 'Optimization', 'Cloud'],
  },
  {
    title: 'Product',
    skills: ['Design thinking', 'Roadmap', 'Team leadership'],
  },
]

const projects = [
  {
    title: 'Intelligent Scheduling',
    description:
      'A premium analytics platform that optimizes railway throughput and brings automation to complex scheduling.',
    stack: ['AI', 'Optimization', 'Python'],
    link: 'https://github.com',
  },
  {
    title: 'Review Intelligence',
    description:
      'A polished AI system that detects fake reviews and surfaces the most meaningful customer signals.',
    stack: ['NLP', 'Scikit-learn', 'Data'],
    link: 'https://github.com',
  },
  {
    title: 'Assistive Wearables',
    description:
      'A future-forward wearable prototype built to make navigation safer and more intuitive for users with visual needs.',
    stack: ['Embedded', 'C', 'Hardware'],
    link: 'https://github.com',
  },
]

const experience = [
  {
    year: '2025 – 2026',
    title: 'Senior Project Lead',
    details: 'Led a strategic AI initiative around scheduling optimization, product execution, and launch readiness.',
  },
  {
    year: '2024 – 2025',
    title: 'AI Research Contributor',
    details: 'Delivered research-backed models and prototypes for intelligent user-facing systems.',
  },
  {
    year: '2022 – 2023',
    title: 'Community Leader',
    details: 'Built communities, led workshops, and shaped technical learning experiences for peers.',
  },
]

const certifications = ['NPTEL Cloud Computing (Elite)', 'Java Programming, Great Learning', 'ServiceNow CAD', 'Scaler DBMS & OS']
const achievements = ['5★ Java on HackerRank', '3★ SQL on HackerRank', '70+ coding problems solved', 'Multiple hackathon awards']

function App() {
  const headerRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      headerRef.current?.classList.toggle('scrolled', offset > 24)
    }

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app-shell">
      <header ref={headerRef} className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">LR</span>
          <span>Lasya Reddy</span>
        </a>
        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen((state) => !state)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={activeSection === link.id ? 'active' : ''}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">Founder • AI Builder • Systems Designer</span>
            <h1 className="hero-title">
              {heroWords.map((word, index) => (
                <span key={`${word}-${index}`} style={{ '--word-order': index }}>
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-copytext">
              I design premium technology experiences that feel elegant, intentional, and built for a future-minded audience.
            </p>

            <div className="hero-actions">
              <a className="button primary hero-action" href="#projects">
                Explore the edit
              </a>
              <a className="button secondary hero-action" href="/Lasya_Reddy_Resume.txt" download>
                Resume
              </a>
            </div>

            <div className="hero-meta">
              {stats.map((stat) => (
                <div className="hero-metric" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual interactive">
            <div className="hero-visual-glow" />
              <div className="hero-visual-frame">
                <div className="hero-visual-shine" />
                <img className="hero-portrait" src="/images/hero.png" alt="Lasya Reddy" />
              </div>
            <div className="hero-particles">
              {[...Array(6)].map((_, index) => (
                <span key={index} className={`particle particle-${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <span className="eyebrow">About</span>
            <h2>Elegance, intelligence, and systems thinking in every product.</h2>
          </div>

          <div className="about-grid">
            <article className="glass-panel about-profile interactive">
              <div className="profile-visual">
                <div className="profile-glow" />
                <img className="profile-sillhouette" src="/images/photo2.png" alt="Lasya Reddy" />
              </div>
              <div className="profile-copy">
                <p>
                  I am a technology founder and engineer who crafts AI-enabled products with premium design, strategic impact, and operational rigor.
                </p>
                <div className="badge-row">
                  <span>Elegant systems</span>
                  <span>Startup leadership</span>
                  <span>Community builder</span>
                </div>
              </div>
            </article>

            <article className="glass-panel about-details">
              <div className="data-panel">
                <div className="panel-figure">
                  <strong>4</strong>
                  <span>Years of refined product experience</span>
                </div>
                <div className="panel-figure">
                  <strong>70+</strong>
                  <span>Deep AI experiments</span>
                </div>
              </div>

              <div className="timeline-list">
                {experience.map((item) => (
                  <article key={item.title} className="timeline-card">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>Floating expertise, not bars or progress percentages.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article key={group.title} className="skill-card interactive">
                <div className="skill-ring" />
                <h3>{group.title}</h3>
                <div className="skill-bubbles">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-bubble">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Showcase pieces with shape, motion, and premium impact.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-showcase ${index % 2 === 1 ? 'reverse' : ''} interactive`}>
                <div className="project-preview">
                  <div className="preview-frame" />
                  <div className="preview-glow" />
                  <div className="preview-content">
                    <span>Video preview</span>
                    <h3>{project.title}</h3>
                  </div>
                  <a className="project-button" href={project.link} target="_blank" rel="noreferrer">
                    View project
                  </a>
                </div>
                <div className="project-copy">
                  <span className="eyebrow">Featured work</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="pill-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a className="button tertiary" href={project.link} target="_blank" rel="noreferrer">
                    Explore ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>A glass card invitation for premium conversations.</h2>
          </div>

          <article className="glass-panel contact-panel interactive">
            <div className="contact-copy">
              <p>
                I’m available for bold startup roles, AI product partnerships, and founder-led collaboration in technology.
              </p>
              <div className="contact-grid">
                <div className="contact-item">
                  <span>Email</span>
                  <strong>lasya3624@gmail.com</strong>
                </div>
                <div className="contact-item">
                  <span>Location</span>
                  <strong>Hyderabad, India</strong>
                </div>
                <div className="availability-badge">Available for strategic roles</div>
              </div>
            </div>

            <div className="contact-links">
              <a className="icon-link" href="mailto:lasya3624@gmail.com">
                Email
              </a>
              <a className="icon-link" href="https://github.com/lasya-reddy" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="icon-link" href="www.linkedin.com/in/lasyareddy9392" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-signature">Privately curated by Lasya Reddy</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#home">Top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
