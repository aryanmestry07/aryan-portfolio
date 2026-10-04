import Navbar from "../components/Navbar";
import About from "./About";
import Skills from "./Skills";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="home-glow"></div>
      <div className="home-glow-secondary"></div>

      {/* =========================
          NAVBAR
      ========================== */}

      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}

      <main className="hero">
        <section className="hero-content">
          {/* Greeting */}
          <p className="hero-greeting">Hi! I'm</p>

          {/* Name */}
          <h1 className="hero-name">Aryan Mestry</h1>

          {/* Role */}
          <p className="hero-role">AI/ML Enthusiast & Full-Stack Developer</p>

          {/* Description */}
          <p className="hero-description">
            I build intelligent applications and practical machine learning
            solutions using Python, modern web technologies, and APIs.
          </p>

          {/* Buttons */}
        <div className="hero-actions">
  <Link to="/projects" className="primary-button">
    Explore My Work
  </Link>
  <a
    href="https://github.com/aryanmestry07"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-button"
  >
    GitHub ↗
  </a>
</div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="scroll-indicator"
            aria-label="Scroll to About Me"
          >
            <span className="scroll-text">Scroll to explore</span>

            <span className="scroll-arrow">
              <span></span>
            </span>
          </a>
        </section>
      </main>

      {/* =========================
          ABOUT SECTION
      ========================== */}

      <About embedded />
      {/* =========================
    SKILLS SECTION
========================== */}

      <Skills embedded />
    </div>
  );
}

export default Home;
