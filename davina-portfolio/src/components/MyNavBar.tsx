import { Navbar, Nav, Container, Image } from "react-bootstrap";
import MyAvatar from "../assets/Avatar_Davina.png";
import Avatar from "react-avatar";
import "../css/navbar.css";



const MyNavBar = () => (

  
    <Navbar bg="dark" className="container-sm py-2 " variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand  href="#hero">
          
          <Container id="navbarBrand" >
            
            <Image
              
              src={MyAvatar}
              width="40"
              alt="My Avatar"
              roundedCircle
            /> {" "}
            Day
      

          </Container>
         
             
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
          <Nav className="ms-auto justify-content-end" >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



)

export default MyNavBar




