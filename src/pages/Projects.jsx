import Navbar from "../components/Navbar";

function Projects() {
  const projects = [
    {
      id: "finance-manager",
      title: "Finance Management System",
      category: "Full Stack Development",
      description:
        "A personal finance tracker to manage income, expenses, and categories with user authentication and a dashboard for tracking financial activity.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Django", "SQLite", "Bootstrap"],
      liveUrl: "",
      githubUrl: "https://github.com/aryanmestry07/Finance-Management-Project",
    },
    {
      id: "calculator",
      title: "Basic Calculator",
      category: "Frontend Development",
      description:
        "A responsive calculator with real-time calculations, animated buttons, and interactive light and dark themes.",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1200&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://calculatorbyaryan.netlify.app/",
      githubUrl: "https://github.com/aryanmestry07/Calculator-Project",
    },
    {
      id: "name-organizer",
      title: "Name Organizer",
      category: "Frontend Development",
      description:
        "An interactive name organizer to categorize, prioritize, edit, and manage names with persistent local storage.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      liveUrl: "https://nameorganizerbyaryan.netlify.app/",
      githubUrl: "https://github.com/aryanmestry07/-Name-Organizer-Project",
    },
    {
      id: "todo-list",
      title: "Smart To-Do List",
      category: "Frontend Development",
      description:
        "A responsive task manager with add, edit, complete, and delete features, using local storage to preserve tasks across sessions.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      liveUrl: "https://todolistbyaryan.netlify.app/",
      githubUrl: "https://github.com/aryanmestry07/To-Do-List-Project",
    },
  ];

  return (
    <section className="projects-page">
      <div className="skills-glow"></div>

      <Navbar />

      <main className="projects-container">
        {/* HEADER */}
        <div className="projects-header">
          <p className="projects-eyebrow">PORTFOLIO</p>

          <h1 className="projects-title">
            Featured <span>projects.</span>
          </h1>

          <p className="projects-intro">
            A selection of web applications, software solutions, and machine
            learning projects I've built.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              {/* Image Container */}
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />

                <div className="project-category-badge">{project.category}</div>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* External Action Links */}
                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}

export default Projects;
