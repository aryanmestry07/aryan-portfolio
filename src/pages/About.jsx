import Navbar from "../components/Navbar";

function About({ embedded = false }) {
  return (
    <section id={embedded ? "about" : undefined} className="about-section">
      {!embedded && <Navbar />}

      <main className="about-container">
        {/* HEADER */}
        <div className="about-header">
          <p className="about-eyebrow">ABOUT ME</p>

          <h1 className="about-title">
            Building with
            <span>curiosity & code.</span>
          </h1>

          <p className="about-intro">
            I'm Aryan, a BCA graduate focused on Python, AI/ML, and full-stack development. I enjoy taking an idea, understanding the problem behind it, and turning it into something practical and usable.
          </p>
        </div>

        {/* QUICK DETAILS GRID */}
        <div className="about-details">
          <div className="about-detail">
            <span>EDUCATION</span>
            <p><strong>BCA</strong></p>
            <small>Tilak Maharashtra Vidyapeeth (2023 — 2026)</small>
          </div>

          <div className="about-detail">
            <span>ACADEMIC SCORE</span>
            <p><strong>80.81%</strong></p>
            <small>Aggregate Grade</small>
          </div>

          <div className="about-detail">
            <span>CURRENT FOCUS</span>
            <p><strong>AI / ML & Full Stack</strong></p>
            <small>Python · Data · Intelligent Applications</small>
          </div>
        </div>

        {/* STORY / FOCUS */}
        <div className="about-story-section">
          <div className="about-story-label">
            <span>01</span>
            WHAT I DO
          </div>

          <div className="about-story-content">
            <p className="about-large-text">
              From idea to working product across AI models and modern web stack.
            </p>
            <p>
              I work across machine learning and software development — from exploring data and training models to building REST APIs and full-stack applications.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;