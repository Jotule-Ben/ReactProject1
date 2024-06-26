import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerGroupOne">
          <div>
            <h3>Customer Service</h3>
            <p>
              <span>
                <img src="" alt="question mark icon" />
              </span>{" "}
              Get Help
            </p>
          </div>

          <div>
            <h3>Find a Warehouse</h3>
            <div>
              {" "}
              {/* <input type="search" placeholder="City, state or zip" /> */}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <span>
                    <img src="" alt="search icon" />
                  </span>
                </Button>
              </InputGroup>
            </div>
          </div>

          <div>
            <h3>Get Email Offers</h3>
            <div>
              {/* <input type="email" placeholder="Enter your email" /> */}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Go
                </Button>
              </InputGroup>
            </div>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div className="media">
              <img src="" alt="fb logo" />
              <img src="" alt="pin interest logo" />
              <img src="" alt="instagram logo" />
            </div>
          </div>

          <div>
            <h3>Get the Costco App</h3>
            <div>
              <img src="" alt="Costco logo" />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
