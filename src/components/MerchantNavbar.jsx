import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import costcologo from "../asset/costcoLogo.png";
import { useContext } from "react";
import { Context } from "../context/Context";

const MerchantNavbar = () => {
  const { firstLetterOfMerchantName, merchantName } = useContext(Context);

  const nameOfMerchant = () => {
    if (merchantName !== "" || merchantName !== undefined) {
      return firstLetterOfMerchantName;
    }
  };
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">
              <img src={costcologo} alt="" width="20%" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/allProducts">All Products</Nav.Link>
              <Nav.Link href="/allCategories">All Categories</Nav.Link>
            </Nav>
            <div
              style={{
                padding: "5px",
                textAlign: "center",
                marginBottom: "0px",
                backgroundColor: "palevioletred",
                borderRadius: "50%",
                height: "25px",
                width: "25px",
              }}
            >
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  marginTop: "-4px",
                  color: "white",
                }}
              >
                {nameOfMerchant()}
              </p>
            </div>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default MerchantNavbar;
