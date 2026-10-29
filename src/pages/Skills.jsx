import Navbar from "../components/Navbar";

function Skills({ embedded = false }) {
  const skillCategories = [
    {
      number: "01",
      title: "Programming & Databases",
      tags: ["Python", "SQL", "JavaScript", "MySQL"]
    },
    {
      number: "02",
      title: "AI & Machine Learning",
      tags: [
        "Scikit-learn",
        "Supervised Learning",
        "Classification & Regression",
        "Feature Engineering",
        "Model Evaluation",
        "Hyperparameter Tuning"
      ]
    },
    {
      number: "03",
      title: "Deep Learning & Generative AI",
      tags: [
        "PyTorch",
        "Artificial Neural Networks (ANN/FNN)",
        "Neural Network Fundamentals",
        "Retrieval-Augmented Generation (RAG)"
      ]
    },
    {
      number: "04",
      title: "Data Science & Development Tools",
      tags: [
        "Pandas, NumPy, Matplotlib",
        "Data Preprocessing & Cleaning",
        "Exploratory Data Analysis (EDA)",
        "Django, FastAPI, REST APIs",
        "HTML, CSS, Bootstrap",
        "Git, GitHub, Jupyter Notebook, Google Colab, VS Code"
      ]
    }
  ];

  return (
    <section id={embedded ? "skills" : undefined} className="skills-section">
      {!embedded && <Navbar />}

      <main className="skills-container">
        <div className="skills-header">
          <p className="skills-eyebrow">SKILLS</p>

          <h1 className="skills-title">
            What I <span>work with.</span>
          </h1>

          <p className="skills-intro">
            Technologies, machine learning pipelines, and frameworks I use to build scalable systems and intelligent applications.
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