import React from "react";
import "./home.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import HotCategories from "../../components/hotCategories/hotCategories";
import NewwArrivals from "../../components/newArrivals/newArrivals";
import Ipad from "../../asset/images/ipad.png";
import Stainless from "../../asset/images/stainless.png";
import LubySlice from "../../asset/images/lubySlice.png";
import PhoneOne from "../../asset/images/phoneOne.jpg";
import Card from "../../components/cards/cards";
import Led from "../../asset/images/led.jpg";
import Electric from "../../asset/images/electric.png";
import Watch from "../../asset/images/watch.png";
import MiWasher from "../../asset/images/miWasher.png";
import Senbeam from "../../asset/images/Senbeam.jpg";
import Dining from "../../asset/images/Dining.jpg";
import Xanna from "../../asset/images/Xanna.jpg";
import Tempered from "../../asset/images/Tempered.jpg";
import Electri from "../../asset/images/electri.jpg";
import Aircolors from "../../asset/images/air colors.jpg";
import Washing from "../../asset/images/washing.jpg";
import Subscribe from "../../components/subscribe-container/subscribe-container";
import SmartPhone from "../../components/Smartphone/Smartphone";
import Cup from "../../asset/images/cup.jpg";
import Hassle from "../../asset/images/hassle.jpg";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider";

export default function Home() {
  const electricKitchenData = [
    {
      img: Led,
      text: "Roku Smart LED TV",
      price: "$328.88",
    },
    {
      img: Xanna,
      text: "Xanna Note 4GB RAM",
      price: "&68.88",
    },
    {
      img: Tempered,
      text: "Tempered Glass Film",
      price: "&388.66",
    },
    {
      img: Ipad,
      text: "Ipad Mini 4 7 9 wifi 4G",
      price: "$569.99",
    },
    {
      img: Dining,
      text: "Kitchen Dining Table",
      price: "&68.99",
    },
    {
      img: Stainless,
      text: "Stainless Steel FS3",
      price: "$268.88",
    },
    {
      img: Senbeam,
      text: "Senbeam Classic 1200",
      price: "&295.99",
    },
    {
      img: LubySlice,
      text: "Luby Slice Convection 9",
      price: "$290.00",
    },
    {
      img: Electric,
      text: "Electric Kettlet 1.5L",
      price: "$329.99",
    },
    {
      img: PhoneOne,
      text: "Bosch WAT286H0GB",
      price: "$388.66",
    },
    {
      img: Watch,
      text: "Smart Watch Apllo 68GB",
      price: "$268.88",
    },
    {
      img: MiWasher,
      text: "Mi Washer Dryer Gold",
      price: "$321.99",
    },
  ];
  return (
    <>
      <Navbar />
      <Slider />
      <HotCategories />
      <NewwArrivals />
      <Container>
        {/* Electric Kitchens Row Open */}
        <Row className="electric-Kitchens-Row">
          <Col
            className="hot-Categories-Col"
            xs={12}
            sm={12}
            md={12}
            lg={2}
            xl={2}
          >
            <p className="hot-Categories-Text">Electric Kitchens</p>
          </Col>
          <Col className="option-Col" xs={12} sm={12} md={12} lg={6} xl={6}>
            <a className="option-Text" href="#">
              Kettlets
            </a>
            <a className="option-Text" href="#">
              Microwave
            </a>
            <a className="option-Text" href="#">
              Accessories
            </a>
            <a className="option-Text" href="#">
              Fridges
            </a>
            <a className="option-Text" href="#">
              Washing Machines
            </a>
          </Col>
        </Row>
        {/* Electric Kitchens Row Close */}
        {/* Cards Row Open */}
        <Row>
          {electricKitchenData.map((item) => {
            return (
              <Col className="col" xs={6} sm={6} md={6} lg={2} xl={2}>
                <Card name={item.text} imageUrl={item.img} price={item.price} />
              </Col>
            );
          })}
        </Row>
        {/* Cards Row Close */}
        {/* Adds Row Open */}
        <Row>
          <Col className="adds-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <img className="adds-Imges" src={Electri} />
            <img className="adds-Imges" src={Aircolors} />
            <img className="adds-Imges" src={Washing} />
          </Col>
        </Row>
      </Container>
      <SmartPhone />
      {/* Adds Row Close */}
      <Row>
        <Col className="adds-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
          <img className="adds-Imges-Two" src={Cup} />
          <img className="adds-Imges-Two" src={Hassle} />
          <img className="adds-Imges-Two" src={Washing} />
        </Col>
      </Row>
      {/* Adds Row Close */}
      {/* <SmartPhone /> */}
      <Subscribe />
      <Row>
        <Footer />
      </Row>
    </>
  );
}
