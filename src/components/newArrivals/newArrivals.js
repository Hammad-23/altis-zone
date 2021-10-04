import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./newArrivals.css";
import One from "../../asset/images/one'.jpg";
import TopPick from "../../asset/images/top-pick.jpg";
import Collection from "../../asset/images/collection.jpg";
import ShoesTwo from "../../asset/images/shoesTwo.jpg";
import Card from "../cards/cards";
import PhoneOne from "../../asset/images/phoneOne.jpg";
import Watch from "../../asset/images/watch.png";

export default function NewArrivals() {
  const mobileData = [
    {
      img: PhoneOne,
      text: "Smart Phone",
      price: "$369.99",
    },
    {
      img: PhoneOne,
      text: "Smart Phone",
      price: "$369.99",
    },
    {
      img: PhoneOne,
      text: "Smart Phone  ",
      price: "$369.99",
    },
  ];
  return (
    <>
      {/* <Container> */}
      <Row className="new-Arrivals-Row">
        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
          <img className="images" src={One} />
          <img className="images" src={TopPick} />
          <img className="images" src={Collection} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={2} xl={2}>
          <img className="shoes-Two-Image" src={ShoesTwo} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} className="new-Arrivals-Col">
          <div
            style={{ border: "solid #ededed", height: "380px", width: "500px" }}
          >
            <div className="new-Arrivals-Div">
              <p className="new-Arrivals-Text">New Arrivals</p>
            </div>
            <div style={{ display: "flex" }}>
              {mobileData.map((item) => {
                return (
                  <div className="card-Div">
                    <img
                      style={{
                        height: "150px",
                        width: "150px",
                        cursor: "pointer",
                      }}
                      src={item.img}
                    />
                    <p className="name-Text">{item.text}</p>
                    <p className="price-Text">{item.price}</p>
                  </div>
                );
              })}
            </div>
            {/* {mobileData.map((item) => {
              return (
                <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                  <Card
                    name={item.text}
                    imageUrl={item.img}
                    price={item.price}
                  />
                </Col>
              );
            })} */}
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
}
