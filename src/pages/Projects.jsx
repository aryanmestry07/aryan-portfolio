import Navbar from "../components/Navbar";

function Projects() {
  const projects = [
    {
      id: "ice-institute",
      title: "ICE Institute Management System",
      category: "Full Stack Development",
      description:
        "Comprehensive institute management platform featuring student enrollment, course allocation, attendance tracking, and administrative analytics dashboards.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Django", "Bootstrap", "SQLite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aryanmestry07",
    },
    {
      id: "cabgo",
      title: "CabGo — Cab Booking Web Application",
      category: "Frontend & API Integration",
      description:
        "Modern ride-hailing interface featuring real-time interactive driver dashboards, booking confirmations, and responsive layout designs.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "REST API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aryanmestry07",
    },
    {
      id: "tattoo-studio",
      title: "Ink & Art Tattoo Studio Platform",
      category: "Web Application",
      description:
        "Client booking and gallery web app featuring online appointment scheduling, custom client review modules, and automated email confirmations.",
      image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Django", "HTML5/CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/aryanmestry07",
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
            A selection of recent applications, software solutions, and machine learning projects I've built.
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
                <div className="project-category-badge">
                  {project.category}
                </div>
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    Live Demo ↗
                  </a>
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