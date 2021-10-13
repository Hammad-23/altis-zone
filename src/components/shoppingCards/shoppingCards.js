import React from "react";
import "../shoppingCards/shoppingCard.css";
import Navbar from "../navbar/navbar";
import { Col, Row, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import Watch from "../../asset/images/watch.png";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Footer from "../footer/footer";

const ShoppingCards = () => {
  const shoppingData = [
    {
      image:
        "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png",
      name: "MIDI PLEATED SKIRT",
      price: "$7656.565",
      color: "green",
      size: "large",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp",
      name: "MIDI PLEATED SKIRT",
      price: "$8765.765",
      color: "blue",
      size: "medium",
    },
    ,
    {
      image:
        "https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp",
      name: "MIDI PLEATED SKIRT",
      price: "$96723.7568",
      color: "green",
      size: "small",
    },
    ,
    {
      image:
        "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png",
      name: "MIDI PLEATED SKIRT",
      price: "$8677",
      color: "green",
      size: "regular",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png",
      name: "MIDI PLEATED SKIRT",
      price: "$7656.565",
      color: "green",
      size: "large",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp",
      name: "MIDI PLEATED SKIRT",
      price: "$8765.765",
      color: "blue",
      size: "medium",
    },
    ,
    {
      image:
        "https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp",
      name: "MIDI PLEATED SKIRT",
      price: "$96723.7568",
      color: "green",
      size: "small",
    },
    ,
    {
      image:
        "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png",
      name: "MIDI PLEATED SKIRT",
      price: "$8677",
      color: "green",
      size: "regular",
    },
  ];
  // const img='https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png'
  return (
    <>
      <Navbar />
      <Container>
        <Row
          style={{
            paddingTop: "13%",
            fontFamily: "sans-serif",
            paddingBottom: "5%",
          }}
        >
          <Col
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
            style={{ border: "solid none" }}
          >
            <Row>
              <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
              <Col>
                <div className="my-cart">
                  <p>My Cart</p>
                </div>
                <div
                  style={{
                    borderBottom: "1px solid lightgray",
                    marginTop: "2.5%",
                  }}
                ></div>
              </Col>
            </Row>

            {shoppingData.map((item) => {
              return (
                <Row style={{ paddingTop: "5%", border: "solid none" }}>
                  <Col xl={1} lg={1} md={1}></Col>
                  <Col
                    xl={2}
                    lg={3}
                    md={3}
                    sm={5}
                    xs={5}
                    style={{ border: "solid none" }}
                  >
                    <div className="image">
                      <img src={item.image} width={"100px"} />
                    </div>
                  </Col>
                  <Col
                    xl={3}
                    lg={3}
                    md={3}
                    sm={7}
                    xs={7}
                    style={{ border: "solid none" }}
                  >
                    <div className="text-heading">
                      <span>{item.name}</span>
                    </div>
                    <div className="text-prize">
                      <span>{item.price}</span>
                    </div>
                    <div className="text-color">
                      <span>{item.color}</span>
                    </div>
                    <div className="text-size">
                      <span>{item.size}</span>
                    </div>
                  </Col>
                  <Col
                    xl={2}
                    lg={4}
                    md={4}
                    sm={5}
                    xs={5}
                    style={{ border: "solid none" }}
                  >
                    <div className="counter">
                      <div className="counter-minus">
                        {" "}
                        <AiOutlineMinus />
                      </div>
                      <div className="counter-number">
                        <span>123</span>
                      </div>
                      <div className="counter-plus">
                        {" "}
                        <AiOutlinePlus />
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl={2}
                    lg={5}
                    md={5}
                    sm={4}
                    xs={4}
                    style={{ border: "solid none" }}
                  >
                    <div style={{ color: "gray" }} className="price-card">
                      <p>$177.00</p>
                    </div>
                  </Col>

                  <Col xl={1} lg={5} xs={3} style={{ border: "solid none" }}>
                    <div className="close-icon">
                      {" "}
                      <IoCloseOutline style={{ width: "25", height: "25" }} />
                    </div>
                  </Col>
                  <Row>
                    <Col xl={1}></Col>
                    <Col
                      style={{
                        borderBottom: "1px solid lightgray",
                        paddingTop: "5%",
                        marginLeft: "1%",
                      }}
                    ></Col>
                  </Row>
                </Row>
              );
            })}
          </Col>
          <Col
            xl={3}
            lg={4}
            md={12}
            sm={12}
            xs={12}
            style={{ border: "solid none" }}
          >
            <div className="card-parent">
              <div className="card-head">
                <Row>
                  <Col>
                    <p style={{ fontSize: "25px" }}>Order Summary</p>
                    <div style={{ borderBottom: "1px solid lightgray" }}></div>
                  </Col>
                </Row>
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="subtotal">
                        <p>Subtotal</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="subtotal-prize">
                        <p>$118.00</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="shipping">
                        <p>Shipping</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="free">
                        <p>FREE</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="location">
                        <a href="#">sindh, pakistan</a>
                      </div>
                    </Col>
                    <div style={{ borderBottom: "1px solid lightgray" }}></div>
                  </Row>
                </div>
                <div className="card-foot">
                  <Row>
                    <Col>
                      <div className="total">
                        <p>Total</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="price">
                        <p>$118.00</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        style={{
                          border: "solid none",
                          paddingLeft: "35%",
                          paddingRight: "35%",
                          paddingTop: "3%",
                          paddingBottom: "3%",
                          backgroundColor: " #303132",
                          color: "white",
                          textTransform: "capitalize",
                          marginLeft: "5%",
                          marginTop: "2%",
                        }}
                      >
                        <FaShoppingBag
                          style={{
                            marginRight: "10%",
                            width: "20",
                            height: "20",
                          }}
                        />{" "}
                        chekout
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCards;
