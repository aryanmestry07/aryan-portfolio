import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home">

      {/* Background glow */}
      <div className="home-glow"></div>
      <div className="home-glow-secondary"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <main className="hero">

        <section className="hero-content">

          {/* Greeting */}
          <p className="hero-greeting">
            Hi! I'm
          </p>

          {/* Name */}
          <h1 className="hero-name">
            Aryan Mestry
          </h1>

          {/* Role */}
          <p className="hero-role">
            AI/ML Enthusiast & Full-Stack Developer
          </p>

          {/* Description */}
          <p className="hero-description">
            I build intelligent applications and practical machine learning
            solutions using Python, modern web technologies, and APIs.
          </p>

          {/* Buttons */}
          <div className="hero-actions">

            <a
              href="/projects"
              className="primary-button"
            >
              View My Projects
            </a>

            <a
              href="https://github.com/aryanmestry07"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>

          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">

            <span className="scroll-text">
              Scroll to explore
            </span>

            <span className="scroll-line"></span>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;