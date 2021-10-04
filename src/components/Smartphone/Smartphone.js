import React from "react";
import "./Smartphone.css";
import { Col, Row, Container } from "react-bootstrap";
import Xanna from "../../asset/images/Xanna.jpg";
import Card from "../cards/cards";
import Ipad from "../../asset/images/ipad.png";
import PhoneOne from "../../asset/images/phoneOne.jpg";
import { propTypes } from "react-bootstrap/esm/Image";
export default function SmartPhone(props) {
  const phoneData = [
    {
      img: Xanna,
      text: "Xanna Note 4GB RAM",
      price: "&68.88",
    },
    {
      img: Ipad,
      text: "Ipad Mini 4 7 9 wifi 4G",
      price: "$569.99",
    },
    {
      img: PhoneOne,
      text: "Bosch WAT286H0GB",
      price: "$388.66",
    },
    {
      img: Xanna,
      text: "Xanna Note 4GB RAM",
      price: "&68.88",
    },
    {
      img: Ipad,
      text: "Ipad Mini 4 7 9 wifi 4G",
      price: "$569.99",
    },
    {
      img: PhoneOne,
      text: "Bosch WAT286H0GB",
      price: "$388.66",
    },
  ];
  return (
    <>
      <Container>
        {/* Smart Phone Row Open */}
        <Row className="Smart-Phone-Row">
          <Col
            className="Smart-Phone-Col"
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={3}
          >
            <p className="Smart-phone-Text">Smartphone & Accessories</p>
          </Col>
          <Col className="option-Col" xs={12} sm={12} md={12} lg={3} xl={3}>
            <a className="smart-Text" href="#">
              Smart Phone
            </a>
            <a className="smart-Text" href="#">
              Cell Phone
            </a>
          </Col>
        </Row>
        {/* Smart Phone Row Close */}
        {/* Cards Row Open */}
        <Row>
          {phoneData.map((item) => {
            return (
              <Col className="col" xs={6} sm={6} md={6} lg={2} xl={2}>
                <Card name={item.text} imageUrl={item.img} price={item.price} />
              </Col>
            );
          })}
        </Row>
        {/* Card Row Close */}
      </Container>
    </>
  );
}
