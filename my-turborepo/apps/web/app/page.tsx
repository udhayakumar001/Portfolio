import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "AI-driven job portal",
    description:
      "A final-year project exploring retrieval-augmented generation and small language models to make job discovery more relevant and human.",
    tags: ["RAG", "SLMs", "AI", "Web platform"],
    href: "https://jobthaedal.vercel.app/",
    github: "https://github.com/udhayakumar001/Final-Year-Project",
    accent: "violet",
    image: "/projects/jobtheadal.png",
    imageAlt: "JobTheadal AI-powered job portal homepage",
  },
  {
    number: "02",
    title: "Cancer Prediction",
    description:
      "A machine learning project exploring cancer risk levels with data visualizations and Random Forest, XGBoost, and MLP classifiers.",
    tags: ["Python", "Random Forest", "XGBoost", "MLP"],
    href: "https://github.com/udhayakumar001/cancer-prediction",
    github: "https://github.com/udhayakumar001/cancer-prediction",
    accent: "lime",
    image: "/projects/lung-cancer-prediction.svg",
    imageAlt: "Illustration of a medical data dashboard and prediction chart",
  },
  {
    number: "03",
    title: "Plant species classifier",
    description:
      "A CNN-based image classification system using preprocessing, augmentation, and deep learning to identify plant species.",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN"],
    href: "https://github.com/udhayakumar001",
    github: "https://github.com/udhayakumar001",
    accent: "orange",
    image: "/projects/plant-classifier.svg",
    imageAlt: "Illustration of leaves being identified by a computer vision model",
  },
  {
    number: "04",
    title: "SentioAI",
    description:
      "A full-stack NLP platform that classifies sentiment, summarizes text with a transformer model, and tracks results in an interactive dashboard.",
    tags: ["Django REST", "React", "NLP", "Transformers"],
    href: "https://github.com/udhayakumar001/SentioAI",
    github: "https://github.com/udhayakumar001/SentioAI",
    accent: "violet",
    image: "/projects/sentio-ai.svg",
    imageAlt: "Illustration of an AI sentiment analysis and summarization dashboard",
  },
  {
    number: "05",
    title: "Local AI agent with PDF RAG",
    description:
      "A private, local-first Python assistant using Ollama for chat and tools, with cited PDF answers, a safe calculator, persistent memory, and input guardrails.",
    tags: ["Python", "Ollama", "PDF RAG", "Guardrails"],
    href: "https://github.com/udhayakumar001/my-first-agent",
    github: "https://github.com/udhayakumar001/my-first-agent",
    accent: "lime",
    image: "/projects/local-ai-agent.svg",
    imageAlt: "Illustration of a local AI assistant searching and citing a PDF",
  },
];

const skills = [
  "Python",
  "Django",
  "React",
  "REST APIs",
  "JavaScript",
  "MySQL",
  "HTML & CSS",
  "Git & GitHub",
];

const certifications = [
  "Basics of Python — Infosys Springboard",
  "Python Essentials 1 — Cisco Networking Academy",
  "Full Stack Development — Pantech ProEd",
  "Python Course for Beginners — Scalar",
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function GithubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="github-mark">
      <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.83.57A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Udhayakumar home">
          U<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-resume" href="/resume.pdf" download>
          Resume <ArrowUpRight />
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <h1>Building useful things<br /><em>with thoughtful code.</em></h1>
          <p className="hero-intro">
            I&apos;m <strong>Udhayakumar</strong>, a Python full-stack developer who turns
            curious ideas into clean, resilient digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
            <a className="button button-quiet" href="mailto:udhaya1635@gmail.com">Let&apos;s talk <span>→</span></a>
          </div>
          <div className="hero-meta">
            <span>Based in Tamil Nadu, India</span>
            <span className="meta-separator">/</span>
            <span>Python · Django · React</span>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">
            <Image src="/udhayakumar.png" alt="" width={320} height={412} priority />
          </div>
          <span className="orbit-label label-top">01 — build</span>
          <span className="orbit-label label-right">ideas → impact</span>
          <span className="orbit-label label-bottom">02 — learn</span>
        </div>
      </section>

      <div className="ticker" aria-label="Technologies">
        <div className="ticker-track">
          <span>PYTHON</span><i>✦</i><span>DJANGO</span><i>✦</i><span>REACT</span><i>✦</i>
          <span>REST APIS</span><i>✦</i><span>MYSQL</span><i>✦</i><span>OPEN TO WORK</span><i>✦</i>
          <span>PYTHON</span><i>✦</i><span>DJANGO</span><i>✦</i><span>REACT</span><i>✦</i>
          <span>REST APIS</span><i>✦</i><span>MYSQL</span><i>✦</i><span>OPEN TO WORK</span><i>✦</i>
        </div>
      </div>

      <section id="about" className="section shell about-section">
        <div className="section-heading">
          <p className="section-kicker">01 / A little about me</p>
          <h2>Curious by nature.<br /><span>Intentional by craft.</span></h2>
        </div>
        <div className="about-content">
          <p className="large-copy">
            I&apos;m a Computer Science engineering student and Python developer passionate
            about the space where <span>logic meets people.</span>
          </p>
          <p className="body-copy">
            From designing Django APIs to shaping responsive React interfaces, I enjoy
            owning the whole journey of a product. I&apos;m currently interning as a Python
            Full Stack Developer at Periyanatchi Hitech Solution, building, testing, and
            learning something new every day.
          </p>
          <a className="text-link" href="/resume.pdf" download>Read my full resume <ArrowUpRight /></a>
        </div>
      </section>

      <section id="work" className="section shell work-section">
        <div className="section-heading work-heading">
          <div>
            <p className="section-kicker">02 / Selected work</p>
            <h2>Things I&apos;ve <span>made.</span></h2>
          </div>
          <a className="github-link" href="https://github.com/udhayakumar001">
            <GithubMark /> View GitHub <ArrowUpRight />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-topline"><span>{project.number}</span><span>↗</span></div>
              <div className="project-graphic">
                <Image src={project.image} alt={project.imageAlt} width={640} height={360} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  {project.href ? (
                    <a href={project.href}>View project <ArrowUpRight /></a>
                  ) : (
                    <span className="project-private">Private source</span>
                  )}
                  {project.github ? (
                    <a href={project.github} aria-label={`View ${project.title} on GitHub`}><GithubMark /></a>
                  ) : (
                    <span className="project-private-mark" aria-label="Private GitHub repository">Private</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section shell journey-section">
        <div className="section-heading">
          <p className="section-kicker">03 / The journey so far</p>
          <h2>Always moving<br /><span>forward.</span></h2>
        </div>
        <div className="journey-grid">
          <div className="timeline">
            <div className="timeline-item current">
              <span className="timeline-year">2025 — now</span>
              <div><h3>Python Full Stack Developer Intern</h3><p>Periyanatchi Hitech Solution</p><small>Building full-stack products with Django, React, REST APIs, and MySQL.</small></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2024</span>
              <div><h3>Frontend Development Intern</h3><p>Pantech ProEd · 1 month</p><small>Created responsive interfaces with HTML, CSS, JavaScript, and modern layout systems.</small></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2022 — 2026</span>
              <div><h3>B.E. Computer Science & Engineering</h3><p>Fatima Michael College of Engineering & Technology · CGPA 8.0</p></div>
            </div>
          </div>
          <div className="skills-panel">
            <p className="panel-label">My toolkit</p>
            <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div className="certifications">
              <p className="panel-label">Certifications</p>
              {certifications.map((certification) => <p key={certification}><span>↳</span>{certification}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-inner">
          <p className="section-kicker">04 / Have a project in mind?</p>
          <h2>Let&apos;s make something<br /><em>worth remembering.</em></h2>
          <a className="contact-email" href="mailto:udhaya1635@gmail.com">udhaya1635@gmail.com <ArrowUpRight /></a>
          <div className="contact-footer">
            <span>© 2026 Udhayakumar</span>
            <div><a href="https://github.com/udhayakumar001">GitHub</a><a href="https://linkedin.com/in/udhaya">LinkedIn</a><a href="/resume.pdf" download>Resume</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
