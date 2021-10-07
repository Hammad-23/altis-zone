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
      <Navbar
        style={{ backgroundColor: " rgb(63, 63, 63)" }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand id="nav-Bar-Text" href="/">
            Smart Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-Bar-Row">
              <Nav.Link className="navBar-Home-Etc-Text" href="/">
                Home
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="/shop"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="/shoppingcard"
              >
                Sale
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="/customerCare"
              >
                Customer Sale
              </Nav.Link>
              <Nav.Link
                className="navBar-Home-Etc-Text"
                eventKey={2}
                href="/stockSkits"
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
