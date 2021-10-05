import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import Seacondnavbar from "../navbarHome/navbar-Home";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  var history = useHistory();

  const login = () => {
    history.push("/login");
  };
  return (
    <>
      <Container fluid>
        <Row className="first-Navbar-Row">
          <Col
            className="first-Navbar-Col"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <div className="search-Input-Div">
              <AiOutlineSearch size={20} />
              <input
                className="search-Input"
                placeholder="Search....."
                type="search"
              />
            </div>
            <div className="login-Icon-Div">
              <FaUserCircle size={25} />
              <p onClick={login} className="login-Text">Login </p>
              <GiShoppingBag size={20} />
            </div>
          </Col>
        </Row>
      </Container>
      <Seacondnavbar/>
    </>
  );
}
