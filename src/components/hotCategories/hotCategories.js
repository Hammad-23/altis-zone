import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./hotCategories.css";
import Images from "../button/button";
import Laptop from "../../asset/images/laptop.png";
import Shoes from "../../asset/images/shoes.png";
import Watch from "../../asset/images/watch.png";
import Handbag from "../../asset/images/handbag.png";
import Card from "../cards/cards";
import Ipad from "../../asset/images/ipad.png";
import Stainless from "../../asset/images/stainless.png";
import LubySlice from "../../asset/images/lubySlice.png";
import Electric from "../../asset/images/electric.png";
import MiWasher from "../../asset/images/miWasher.png";
import { useHistory } from "react-router-dom";

export default function HotCategories(props) {
  var history = useHistory();

  const data = [
    {
      img: Watch,
      text: "Smart Watch Apllo 68GB",
      price: "$369.99",
    },
    {
      img: Ipad,
      text: "Ipad Mini 4 7 9 wifi 4G",
      price: "$569.99",
    },
    {
      img: Stainless,
      text: "Stainless Steel FS3",
      price: "$268.88",
    },
    {
      img: LubySlice,
      text: "Luby Slice Convection 9",
      price: "$290.00",
    },
    {
      img: Electric,
      text: "Electric Kettlet 1.5L",
      price: "$278.99",
    },
    {
      img: MiWasher,
      text: "Mi Washer Dryer Gold",
      price: "321.05",
    },
  ];
  return (
    <>
      <Container>
        <Row className="hot-Categories-Row">
          <Col
            className="hot-Categories-Col"
            xs={12}
            sm={12}
            md={12}
            lg={2}
            xl={2}
          >
            <p className="hot-Categories-Text">Hot Categories</p>
          </Col>
          <Col className="img-Col" xs={12} sm={12} md={12} lg={10} xl={10}>
            <Images
              imgUrl={Laptop}
              className="lap-Top-Button"
              text="Smart-Phones"
            />
            <Images
              imgUrl={Shoes}
              className="lap-Top-Button"
              text="Shoes & Hates"
            />

            <Images
              imgUrl={Handbag}
              className="lap-Top-Button"
              text="Handbag & Cases"
            />
            <Images
              imgUrl={Watch}
              className="lap-Top-Button"
              text="Watch & EyesWear"
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: "40px" }}>
          {data.map((item) => {
            return (
              <Col xs={6} sm={6} md={3} lg={2} xl={2}>
                <Card
                  onClick={() => history.push("/products")}
                  name={item.text}
                  imageUrl={item.img}
                  price={item.price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
