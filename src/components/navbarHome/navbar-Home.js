import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Row, Col } from "react-bootstrap";
import "./navbar-Home.css";

// import { useHistory } from "react-router-dom";

export default function NavbarHome() {
  // var history = useHistory();
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas> */}

      <Navbar bg="white" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#home" className="nav-Bar-Text">
            Smart-e-store
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-Navbar">
                HOME
              </Nav.Link>
              <Nav.Link href="/shop" className="text-Navbar">
                SHOP
              </Nav.Link>
              <NavDropdown
                className="text-Navbar"
                title="PAGE"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="text-Navbar" href="#action/3.2">
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item className="text-Navbar" href="#action/3.3">
                  Spop by brand
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item className="text-Navbar" href="#action/3.4">
                  Faq
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-Navbar" href="#shop">
                BLOG
              </Nav.Link>
              <Nav.Link className="text-Navbar" href="#shop">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
