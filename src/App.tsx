import { useEffect, useState } from 'react'

const projects = [
  { n: '01', name: 'Ledgerly', type: 'Expense tracker', stack: 'React · Vite · Tailwind · Express · Prisma · PostgreSQL', desc: 'An expense-tracking application shaped around a structure and feature set I defined. I made the architecture decisions, directed AI-assisted implementation, reviewed changes and tested the expense-tracking workflows.', tags: ['Architecture decisions', 'Product thinking', 'AI-assisted'], link: 'https://github.com/rch-21/Ledgerly', featured: true },
  { n: '02', name: 'Atlas', type: 'Personal AI desktop companion', stack: 'Ollama · LM Studio · MCP · TypeScript', desc: 'A desktop companion for working with local AI models and tools. I originated the idea, defined requirements, guided development through repeated feedback, and evaluated and tested changes. Most implementation was AI-generated.', tags: ['Local AI', 'MCP', 'Iterative development'], link: 'https://github.com/rch-21/Atlas', featured: true },
  { n: '03', name: 'Personal RDC', type: 'Local MCP server', stack: 'TypeScript · Node.js · MCP', desc: 'A locally hosted MCP server that gives connected AI clients controlled access to Windows filesystem and process operations. Built with substantial AI assistance, with a focus on local tooling and controlled automation.', tags: ['Local tooling', 'MCP', 'Automation'], link: 'https://github.com/rch-21/personal-rdc' },
  { n: '04', name: 'Workout', type: 'Offline desktop app', stack: 'React · TypeScript · Tauri 2 · Rust · SQLite', desc: 'An offline desktop workout checklist with independent daily routines, persistent completion state, progress counters and reset behaviour. The application stores checklist state locally, without accounts or a backend.', tags: ['Desktop', 'Offline-first', 'SQLite'], link: '' },
  { n: '05', name: 'Library Management System', type: 'Java academic project', stack: 'Java · Object-oriented programming', desc: 'An academic project applying object-oriented programming concepts through a practical library management workflow.', tags: ['Java', 'OOP'], link: 'https://github.com/rch-21/Java-' },
  { n: '06', name: 'Civic Issue Reporting', type: 'SIH 2026 · Team project', stack: 'Six-member team', desc: 'An internal college-level first-round team project. I contributed to problem identification, solution proposals, feature planning, research, documentation and pitching. Implementation was done using AI.', tags: ['Teamwork', 'Research', 'SIH 2026'], link: 'https://github.com/rch-21/crowdsourced-civic-issue-reporting' },
]
const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) { nodes.forEach(node => node.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const featured = projects.filter(project => project.featured)
  const selected = projects.filter(project => !project.featured)

  return <>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu}>RC<span>.</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button>
      <nav className={menuOpen ? 'navigation open' : 'navigation'}>
        {[['About', '#about'], ['Work', '#projects'], ['Foundations', '#foundations'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-resume" href="/Rahul_Chinta_Resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a>
      </nav>
    </header>
    <main id="home">
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE · AI &amp; ML</div>
          <h1>Curious by nature.<br /><span className="headline-accent">Builder</span> by practice<span className="lime">.</span></h1>
          <p className="hero-intro">I'm <strong>Rahul Chinta</strong>, a Computer Science undergraduate at GITAM. I explore the space between software, systems and artificial intelligence — turning questions into things I can build, test and understand.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="mailto:rahulchinta21@gmail.com">Let's connect <Arrow /></a></div>
          <div className="hero-foot"><span>VISAKHAPATNAM, INDIA</span><span>OPEN TO LEARNING &amp; COLLABORATION</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract geometric illustration"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" /><div className="art-core"><span>R</span><i>CHINTA</i></div><div className="orbit-label label-top">IDEAS → SYSTEMS</div><div className="orbit-label label-bottom">LEARN / BUILD / REFINE</div><div className="art-cross cross-one" /><div className="art-cross cross-two" /></div>
        <div className="hero-index"><span>01 / 05</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-strip section-shell reveal" id="about">
        <div className="section-kicker"><span>01</span> / A LITTLE ABOUT ME</div>
        <div className="intro-content"><h2>Learning the fundamentals.<br /><em>Exploring what comes next.</em></h2><div className="intro-detail"><p>I'm pursuing a B.Tech in Computer Science and Engineering (AI &amp; ML) at GITAM. My interests span programming, data structures, software development and practical AI tooling.</p><p>I value understanding how things work. Across my projects, I focus on defining the problem, making considered decisions, directing implementation and checking that the result behaves as intended.</p><div className="facts"><div><strong>9.13</strong><span>CGPA · AFTER SEM 2</span></div><div><strong>2029</strong><span>GRADUATION</span></div><div><strong>GITAM</strong><span>VISAKHAPATNAM</span></div></div></div></div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading reveal"><div><div className="section-kicker"><span>02</span> / FEATURED WORK</div><h2>Built through <em>curiosity.</em></h2></div><p>Selected projects where I explored ideas, made decisions and learned through iteration.</p></div>
        <div className="featured-grid">{featured.map(project => <article className="featured-card reveal" key={project.n}><div className="featured-top"><span>{project.n} / FEATURED</span><span>↗</span></div><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.desc}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="featured-bottom"><span>{project.stack}</span><a href={project.link} target="_blank" rel="noreferrer">Explore project <Arrow /></a></div></article>)}</div>
        <div className="section-heading selected-heading reveal"><div><div className="section-kicker"><span>03</span> / MORE PROJECTS</div><h2>Other things I've <em>explored.</em></h2></div><p>Experiments, practical tools and academic work.</p></div>
        <div className="project-list">{selected.map(project => <article className="project-row reveal" key={project.n}><div className="project-number">{project.n}</div><div className="project-main"><div className="project-meta">{project.type}</div><h3>{project.name}</h3><p>{project.desc}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-aside"><span className="project-stack">{project.stack}</span>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View source <Arrow /></a>}</div></article>)}</div>
      </section>

      <section className="toolkit-section section-shell" id="foundations">
        <div className="section-kicker"><span>04</span> / COMPUTER SCIENCE FOUNDATIONS</div>
        <div className="toolkit-layout reveal"><h2>Understand the logic.<br /><em>Then build on it.</em></h2><div className="foundations-content"><p className="foundation-lead">I have independently implemented fundamental data structures in C as part of building a stronger understanding of how they work.</p><div className="foundation-block"><span>DATA STRUCTURES IMPLEMENTED</span><p>Arrays · Linked lists · Stacks · Queues · Trees · Binary search trees · Hashing · Heaps</p></div><div className="foundation-block"><span>ALGORITHMS &amp; COURSEWORK EXPOSURE</span><p>Searching and sorting · Tree traversals · Breadth-first search (BFS) · Depth-first search (DFS)</p><small>Coursework exposure and implementation practice; not presented as advanced proficiency.</small></div><div className="foundation-block"><span>RELEVANT COURSEWORK</span><p>Programming in C and Python · Data Structures in C · Object-Oriented Programming in Java · Computer Organisation and Architecture</p></div></div></div>
        <div className="toolkit-divider" id="toolkit"><div className="section-kicker"><span>05</span> / TECHNICAL TOOLKIT</div><div className="toolkit-grid"><div className="tool-item"><span>01 / LANGUAGES</span><strong>C · Java · Python</strong><p>Python — basic familiarity</p></div><div className="tool-item"><span>02 / CORE CONCEPTS</span><strong>Data Structures · OOP</strong><p>Independent implementation and coursework</p></div><div className="tool-item"><span>03 / TOOLS</span><strong>Git · GitHub · Ollama · LM Studio</strong><p>Version control and local AI tooling</p></div><div className="tool-item"><span>04 / PROJECT EXPOSURE</span><strong>React · TypeScript · Node · SQL · Rust</strong><p>Applied in AI-assisted project work</p></div></div></div>
        <div className="education-note reveal"><div><span className="section-kicker">EDUCATION</span><h3>GITAM — Gandhi Institute of Technology and Management</h3><p>B.Tech, Computer Science and Engineering (AI &amp; ML) · Expected 2029</p></div><span className="scholarship">40% MERIT SCHOLARSHIP</span></div>
        <div className="recognition reveal"><span className="section-kicker">RECOGNITION</span><p><strong>Smart India Hackathon 2026</strong><span>Internal college-level first-round participation · Six-member team</span></p></div>
      </section>

      <section className="beyond-section section-shell reveal" id="beyond"><div className="section-kicker"><span>06</span> / BEYOND THE CODE</div><div className="beyond-layout"><h2>Ideas are better<br />when they're <em>shared.</em></h2><div><p>I enjoy public speaking and presenting ideas, especially when it means making technical concepts easier to understand. I value clear communication as part of solving problems and working with others.</p><div className="interest-tags"><span>Software development</span><span>Artificial intelligence &amp; ML</span><span>AI research</span><span>Understanding systems</span></div></div></div></section>

      <section className="contact-section section-shell" id="contact"><div className="section-kicker"><span>07</span> / GET IN TOUCH</div><div className="contact-layout"><h2>Good ideas start<br />with a <em>conversation.</em></h2><div className="contact-right"><p>Interested in software, AI, thoughtful problem-solving or building something useful? I'd be glad to connect.</p><a className="contact-email" href="mailto:rahulchinta21@gmail.com">rahulchinta21@gmail.com <Arrow /></a><div className="social-links"><a href="https://github.com/rch-21" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/rahul-c-219716376/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="/Rahul_Chinta_Resume.pdf" target="_blank" rel="noreferrer">Download resume <Arrow /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#home">RC<span>.</span></a><span>Designed &amp; built with intention.</span><span>© {new Date().getFullYear()} RAHUL CHINTA</span></footer>
  </>
}
export default App
