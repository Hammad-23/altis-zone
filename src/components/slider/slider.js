import React from "react";
import One from "../../asset/images/one.jpeg";
import Two from "../../asset/images/two.jpeg";
import Three from "../../asset/images/three.jpeg";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import "./slider.css";
import Drawer from "../drawer/drawer";
export default function Slider() {
  return (
    <>
      <Row className="slider-Row">
        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <Drawer />
        </Col>
        <Col xs={12} sm={12} md={12} lg={9} xl={9}>
          <Container>
            <Carousel fade className="slider-Carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={One}
                  alt="First slide"
                />
                {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={Two}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-Image"
                  src={Three}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Container>
        </Col>
      </Row>
    </>
  );
}
