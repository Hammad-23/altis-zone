import React from "react";
import "../shop/shop.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cards/cards";
import SideBar from "../../components/sideComponent/sideComponent";
import Footer from "../../components/footer/footer";
import Watch from "../../asset/images/watch.png";
import Ipad from "../../asset/images/ipad.png";
import Stainless from "../../asset/images/stainless.png";
import LubySlice from "../../asset/images/lubySlice.png";
import Electric from "../../asset/images/electric.png";
import MiWasher from "../../asset/images/miWasher.png";
// import LastRow from "../../components/lastRow/lastRow";
import Led from "../../asset/images/led.jpg";
import Tempered from "../../asset/images/Tempered.jpg";
import Senbeam from "../../asset/images/Senbeam.jpg";
import Dining from "../../asset/images/Dining.jpg";
import Xanna from "../../asset/images/Xanna.jpg";
import Electri from "../../asset/images/electri.jpg";
import Aircolors from "../../asset/images/air colors.jpg";

const Shop = () => {
  const cardData = [
    {
      image: Tempered,
      text: "smart watch apllo 68GB",
      prize: "$369.99",
    },
    {
      image: Led,
      text: "Stainless Steel FS3",
      prize: "$268.88",
    },
    {
      image: Ipad,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: LubySlice,
      text: "Stainless Steel FS3",
      prize: "$268.88",
    },
    {
      image: Dining,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Watch,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Stainless,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Senbeam,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Electric,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Xanna,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Electri,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: Aircolors,
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
  ];
  return (
    <>
      <Navbar />
      <Row style={{ paddingTop: "3%", backgroundColor: "#eee" }}></Row>

      <Row className="main-row">
        <Row>
          <Col>
            {" "}
            <div className="shopping-option">
              <h2>shopping option</h2>
            </div>
          </Col>
        </Row>
        <SideBar />
        <Col>
          <Row>
            {cardData.map((item) => {
              return (
                <Col xl={3} lg={3} md={4} sm={6} xs={6} className="col">
                  <Card
                    name={item.text}
                    imageUrl={item.image}
                    price={item.prize}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Row className="footer_row">
        <Footer />
      </Row>
      {/* <LastRow /> */}
    </>
  );
};
export default Shop;
