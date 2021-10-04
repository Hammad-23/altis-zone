import React from "react";
import { Col, Row } from "react-bootstrap";
import "./subscribe-container.css";
export default function Subscribe() {
  return (
    <>
      <Row className="subscribe-Row">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <p className="join-Heading">Join Our Newsletter Now</p>
          <input
            className="search-In-Put"
            placeholder="Enter your email :"
            type="email"
          />
          <button className="subscribe-Button">Subscribe</button>
          <p className="privacy-Text">
            Will be used in accordance with our <b className="text-Bold"> <i>Privacy Policy</i> </b>
          </p>
        </Col>
      </Row>
    </>
  );
}
