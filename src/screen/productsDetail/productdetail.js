import React from "react";
import "./productdetail.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";

export default function ProductDetail() {
  return (
    <>
      <Navbar />
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ border: "solid red", height: "500px", width: "30%" }}>
              <img
                style={{ border: "solid red", height: "500px", width: "90%" }}
                src={
                  (URL =
                    "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png")
                }
              />
            </div>
            <div>
              <p>MIDI PLEATED SKIRT</p>
              <p>SKU: 0004</p>
              <p>$59.00Price</p>
              <p>Color: Green</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
