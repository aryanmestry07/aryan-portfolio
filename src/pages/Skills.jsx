import Navbar from "../components/Navbar";

function Skills({ embedded = false }) {
  const skillCategories = [
    {
      number: "01",
      title: "Programming",
      tags: ["Python", "JavaScript", "SQL", "C++"]
    },
    {
      number: "02",
      title: "AI / ML",
      tags: ["Machine Learning", "Scikit-learn", "EDA", "Data Analysis"]
    },
    {
      number: "03",
      title: "Full Stack",
      tags: ["React", "Django", "FastAPI", "REST APIs", "Tailwind CSS"]
    },
    {
      number: "04",
      title: "Data & Tools",
      tags: ["Pandas", "NumPy", "MySQL", "Git", "GitHub"]
    }
  ];

  return (
    <section id={embedded ? "skills" : undefined} className="skills-page">
      <div className="skills-glow"></div>

      {!embedded && <Navbar />}

      <main className="skills-container">
        <div className="skills-header">
          <p className="skills-eyebrow">SKILLS</p>

          <h1 className="skills-title">
            What I <span>work with.</span>
          </h1>

          <p className="skills-intro">
            Technologies and frameworks I use to build scalable systems, machine learning models, and user interfaces.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(({ number, title, tags }) => (
            <div className="skill-card" key={title}>
              <span>{number}</span>

              <h2>{title}</h2>

              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-closing">
          <p>Always learning. Always building.</p>
        </div>
      </main>
    </section>
  );
}

export default Skills;