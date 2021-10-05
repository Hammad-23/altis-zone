import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar-Home.css";

export default function NavbarHome() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand id="nav-Bar-Text" href="/">
            Smart Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {/* <NavDropdown  > */}
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              {/* </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link className="navBar-Home-Etc-Text" href="/">
                Home
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="#memes"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="#memes"
              >
                Sale
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="#memes"
              >
                Customer Sale
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="#memes"
              >
                Stockists
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
