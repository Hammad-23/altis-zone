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
          <div className="home-TextDiv">
            <p style={{ textAlign: "left" }}>Home / MIDI PLEATED SKIRT</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="product-Imag-Div">
              <img
                className="product-Imag"
                src={
                  (URL =
                    "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png")
                }
              />
              <div>
                <p className="im-A-Product-Text">
                  I'm a product description. I’m a great place to include more
                  information about your product. Buyers like to know what
                  they’re getting before they purchase.
                </p>
              </div>
            </div>
            <div className="midi-Pleated-Text-Div">
              <p className="midi-Pleated-Text">MIDI PLEATED SKIRT</p>
              {/* <span>SKU: 0004</span> */}
              <div>
                <p className="number-Text">$59.00Price</p>
              </div>
              <div>
                <p className="color-Text">
                  Color: Green
                  <input type="radio" name="gender" />
                </p>
              </div>
              <div>
                <p
                  style={{ fontSize: "18px", color: "gray", textAlign: "left" }}
                >
                  Size
                </p>
                <select className="select-Input">
                  <option className="option-Input">Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
