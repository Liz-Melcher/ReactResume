// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Liz M Portfolio
        </NavLink>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link" activeclassname="active">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link" activeclassname="active">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeclassname="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
