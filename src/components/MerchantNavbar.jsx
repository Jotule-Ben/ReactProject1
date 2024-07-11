import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import costcologo from "../asset/costcoLogo.png";

const MerchantNavbar = () => {
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">
              <img src={costcologo} alt="" width="20%" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">All Products</Nav.Link>
              <Nav.Link href="#features">All Categories</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default MerchantNavbar;
