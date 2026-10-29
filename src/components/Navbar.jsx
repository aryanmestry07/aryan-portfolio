import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // Handles smooth scrolling if already home, or navigates home first
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
       <Link to="/" className="nav-logo">
  Ciao<span>.</span>
</Link>
        <div className="nav-links">
          {/* Scrolls to top of Home */}
          <Link to="/" className="nav-link">Home</Link>

          {/* Smooth scrolls to About section */}
          <a 
            href="#about" 
            onClick={(e) => handleScrollTo(e, "about")} 
            className="nav-link"
          >
            About
          </a>

        
          {/* Smooth scrolls to Skills section */}
          <a 
            href="#skills" 
            onClick={(e) => handleScrollTo(e, "skills")} 
            className="nav-link"
          >
            Skills
          </a>
        

        
        {/* Dedicated standalone page for Projects */}
          <Link to="/projects" className="nav-link">Projects</Link> 
          </div>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;