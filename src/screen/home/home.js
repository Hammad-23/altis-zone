import React from "react";
import "./home.css";
import { Col, Row, Container } from "react-bootstrap";
import FirstNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useHistory } from "react-router-dom";




export default function Home() {
let history= useHistory()
  
  return (
    <>
      <FirstNavbar />
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="cover-Image">
            <div className="card-Div">
              <h1 className="fall-Winter-Text">FALL & WINTER</h1>
              <button className="shop-Now-Button" onClick={()=>{
                history.push('/shop')
              }}>Shop Now</button>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#d3d3d3", marginBottom: "30px" }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <p className="free-Shopping-Text">FREE SHIPPING WORLWIDE</p>
        </Col>
      </Row>

      <Row style={{ marginTop: "10px", border:'solid none'}}>
        <Col
          className="yaer-Round-Line-Col"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="yaer-Round-Line-Div">
            <h1 className="year-Round-Text">YEAR ROUND</h1>
            <div className="short-Line-Div"></div>
            <p className="must-Have-Item-Text">Must Have Items</p>
          </div>
        </Col>
      </Row>

      <Row style={{border:'solid none'}}>
      <div className="card-content" >
          
 <Col xs={12} sm={12} md={6} lg={4} xl={3} style={{border:'solid green'}}>
            <div className="cardDiv">
              <img
                className="card-Image"
                src={
                  (URL =
                    "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png")
                }
              />
              <button
                className="midi-Pleated-Button"
              >
                MIDI PLEATED SKIRT
              </button>
            </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} style={{border:'solid green'}}>
            <div className="cardDiv">
              <img
                className="card-Image"
                src={
                  (URL =
                    "https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp")
                }
              />
              <button className="midi-Pleated-Button">
                MIDI PLEATED SKIRT
              </button>
            </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} style={{border:'solid green'}}>
            <div className="cardDiv">
              <img
                className="card-Image"
                src={
                  (URL =
                    "https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp")
                }
              />
              <button className="midi-Pleated-Button">
                MIDI PLEATED SKIRT
              </button>
            </div>
            
        </Col>
  
        </div>
        
      </Row>
      <Footer />
    </>
  );
}
