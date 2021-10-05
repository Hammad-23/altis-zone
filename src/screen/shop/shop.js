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
      image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
      text: "smart watch apllo 68GB",
      prize: "$369.99",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
      text: "Stainless Steel FS3",
      prize: "$268.88",
    },
    {
      image: 'https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp',
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
      text: "smart watch apllo 68GB",
      prize: "$369.99",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
      text: "Stainless Steel FS3",
      prize: "$268.88",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
      text: "smart watch apllo 68GB",
      prize: "$369.99",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
      text: "Stainless Steel FS3",
      prize: "$268.88",
    },
    {
      image: 'https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp',
      text: "Luby Slice Convection 9",
      prize: "$290.00",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
      text: "smart watch apllo 68GB",
      prize: "$369.99",
    },
    {
      image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
      text: "Stainless Steel FS3",
      prize: "$268.88",
    }


  ];
  return (
    <>
      <Navbar/>
      <Row style={{ paddingTop: "3%", backgroundColor: "#eee" }}></Row>

      <Row className="main-row">
        <Row>
          <Col>
            <div className="shopping-option">
              <h2>shop</h2>
            </div>
          </Col>
        </Row>
        <SideBar />
        <Col>
          <Row >
            {cardData.map((item) => {
              return (
                <Col xl={4} lg={4} md={4} sm={6} xs={12} className="col" style={{border:'solid none'}}>
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
