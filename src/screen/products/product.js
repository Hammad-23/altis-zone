import React, { useState } from "react";
import "./product.css";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Watch from "../../asset/images/watch.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { ImStarEmpty } from "react-icons/im";
import { useHistory } from "react-router-dom";

export default function Products() {
  const [num, setNum] = useState(1);
  var history = useHistory();

  const incretNum = () => {
    setNum((num) => num + 1);
  };
  const decretNum = () => {
    setNum((num) => num - 1);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} xl={6} lg={6}>
            {/* Side Box & Add Imag Work Start */}
            <div className="box-Mian-Div">
              <div style={{ border: "solid none", width: "20%" }}>
                <div className="box-Div">
                  <img className="box-Imag" src={Watch} />
                </div>
                <div className="box-Div">
                  <img className="box-Imag" src={Watch} />
                </div>
                <div className="box-Div">
                  <img className="box-Imag" src={Watch} />
                </div>
              </div>
              <div className="add-Imag-Div">
                <img className="imag-Watch" src={Watch} />
              </div>
            </div>
            {/* Side Box & Add Imag Work Close */}
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <p className="watch-Heading">Smart Watch Apllo 68GB</p>
            {/* Stare Icon Work Start */}
            <div className="stare-Div">
              <div>
                <ImStarEmpty className="stare-Icon" size={15} />
                <ImStarEmpty className="stare-Icon" size={15} />
                <ImStarEmpty className="stare-Icon" size={15} />
                <ImStarEmpty className="stare-Icon" size={15} />
                <ImStarEmpty className="stare-Icon" size={15} />
              </div>
              <div className="reviews-Div">
                <p className="reviews-Text">2 Reviews</p>
              </div>
              <p className="reviews-Text">Add Your Reviews</p>
            </div>
            {/* Stare Icon Work Close */}
            {/* Facebook & Twitter Button Work Start */}
            <div className="button-Div">
              <button className="facebook-Btn">
                <FaFacebookF size={20} /> Facebook
              </button>
              <button className="twitter-Btn">
                <AiOutlineTwitter size={20} /> Twitter
              </button>
            </div>
            {/* Facebook & Twitter Button Work Close */}
            {/*Availability & Small screen & Price Work Start  */}
            <div>
              <p className="availability-Text">
                Availability <b className="in-Stock-Text">:In Stock </b>
              </p>
              <div className="small-Screen-Text-Div">
                <ul style={{ marginTop: "10px" }}>
                  <li className="small-Screen-Text">
                    Small screen 8.9" Retina
                  </li>
                  <li className="small-Screen-Text">
                    Compatible with Apple Pencil
                  </li>
                </ul>
              </div>
              <p className="number-Text">
                <b>$369.99</b> <s>$579.99</s>
              </p>
            </div>
            {/*Availability & Small screen & Price Work Close */}
            {/* Icrement & Decrement Work Start */}
            <div className="incre-Button-Div">
              <div className="number">
                <AiOutlinePlus onClick={incretNum} size={20} />
                <span>{num}</span>
                <AiOutlineMinus onClick={decretNum} size={20} />
              </div>
              <button className="add-To-Cart-Button">ADD TO CART</button>
            </div>
            {/* Icrement & Decrement Work Close */}
            {/* Heart Icon Work Start */}
            <div id="icons-Div">
              <IoMdHeartEmpty size={30} />
            </div>
            {/* Heart Icon Work Close */}
            <hr />
            <div style={{ border: "solid none", textAlign: "left" }}>
              <p style={{ display: "inline" }}>Categories:</p>
              <a className="market-Text" href="">
                Market,{" "}
              </a>
              <a className="market-Text" href="">
                Smart phone,{" "}
              </a>
              <a className="market-Text" href="">
                Headphone
              </a>
              <p>Brands :</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Row id="more-Information-Row">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
          <a href="" id="more-Information-btn">More information</a>
          <a href="#">Reviews(2)</a>
          </div>
          <hr />
        </Col>
      </Row>
      <Footer /> */}
    </>
  );
}
