import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../footer/style.css";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* <Container> */}
      <Row className="footer-Firt-Row">
        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <p className="stay-Connected-Text">STAY CONNECTED</p>
          <div className="footer-Icons-Div">
            <FaFacebookF color={"white"} cursor={"pointer"} size={20} />
            <GrTwitter color={"white"} cursor={"pointer"} size={20} />
            <FaPinterestP color={"white"} cursor={"pointer"} size={20} />
            <FaInstagram color={"white"} cursor={"pointer"} size={20} />
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <p className="be-Our-Friend-Text">BE OUR FRIEND</p>
          <input
            className="footer-Email-Input"
            placeholder="Enter your email here :"
            type="email"
          />
          <div style={{ marginTop: "10px" }}>
            <button className="footer-Subcribe-Button">Subscribe Now</button>
          </div>
          <p className="footer-Smart-Factual-Text">
            © 2023 by SMART STORE. Proudly created by
            <a href="#" className="factual-Code-Text-Link">
              factualcode.com{" "}
            </a>
          </p>
        </Col>

        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <p className="need-Assistance-Text">NEED ASSISTANCE?</p>
          <p className="number-Text">123-456-7890</p>
          <lable className="number-Text">qureshiaq2003@gmail.com</lable>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default Footer;
