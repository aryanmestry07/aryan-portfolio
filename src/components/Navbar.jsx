import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo">
          Aryan<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
        </div>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;