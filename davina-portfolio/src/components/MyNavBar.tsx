import { Link } from "react-scroll";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import MyAvatar from "../assets/Avatar_Davina.png";
import "../css/navbar.css";


const MyNavBar = () => (
  
  <Navbar bg="dark" className="container-fluid py-3" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="#hero">
        <Container id="navbarBrand">
          <Image src={MyAvatar} width="40" alt="My Avatar" roundedCircle /> Day
        </Container>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto justify-content-end">
          <Link
            to="about"
            
            className="nav-link"
            smooth
            offset={-80}      // adjust for sticky header height
            duration={500}
            spy
            isDynamic          // recalc positions on resize/content changes
            activeClass="active-link"
          >
            About
          </Link>
           {/* <Link
            to="skills"
            className="nav-link"
            smooth
            offset={-80}
            duration={500}
            spy
            isDynamic
            activeClass="active-link"
          >
            Skills
          </Link> */}
          <Link
            to="timeline"
            className="nav-link"
            smooth
            offset={-80}
            duration={500}
            spy
            isDynamic
            activeClass="active-link"
          >
            Journey
          </Link>
          {/* <Link
            to="projects"
            className="nav-link"
            smooth
            offset={-80}
            duration={500}
            spy
            isDynamic
            activeClass="active-link"
          >
            Projects
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);

export default MyNavBar;
