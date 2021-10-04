import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import SearchInput from "../searchinput/search";
import NavbarHome from "../navbarHome/navbar-Home";
export default function Navbar() {
  return (
    <>
      <Container fluid>
        <Row className="nav-Bar-Row">
          <Col className="nav-Bar-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <label className="smart-e-Story-Heading">Smart-e-store</label>
            <SearchInput />
            <FaRegHeart className="icon-Heart" size={30} />
            <HiShoppingBag className="icon-Shopping" size={30} />
            <FiUser className="user-Icon" size={30} />
          </Col>
        </Row>
      </Container>
      <NavbarHome />
    </>
  );
}
