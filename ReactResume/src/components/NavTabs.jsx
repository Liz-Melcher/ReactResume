// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted

import { Navbar, Nav, Container } from "react-bootstrap"; // use React Bootstrap so the menu works as a drop down on mobile
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function NavTabs() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Liz M Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" activeclassname="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume" activeclassname="active">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" activeclassname="active">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeclassname="active">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
