import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavBar = () => (

  <section id="navbar" className="container py-5">
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Davina Lydia Pinto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </section>

)

export default MyNavBar




