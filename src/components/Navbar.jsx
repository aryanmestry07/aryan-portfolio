function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-inner">

        {/* Logo */}
        <a href="/" className="nav-logo">
          Aryan<span>.</span>
        </a>

        {/* Navigation */}
        <div className="nav-links">

          <a href="/" className="nav-link">
            Home
          </a>

          <a href="/about" className="nav-link">
            About
          </a>

          <a href="/projects" className="nav-link">
            Projects
          </a>

          <a href="/skills" className="nav-link">
            Skills
          </a>

          <a href="/contact" className="nav-link">
            Contact
          </a>

        </div>

        {/* Resume */}
        <a href="#" className="resume-button">
          Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;