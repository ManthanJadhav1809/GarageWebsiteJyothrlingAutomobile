import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Component/Style.css'; // Ensure your stylesheet is imported
import carImage from '../images/2.png';

function NavBarComponent() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="d-flex align-items-center justify-content-between w-100">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt=""
              src={carImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            JYOTHRLING AUTOMOBILE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home">Our Services</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBarComponent;
