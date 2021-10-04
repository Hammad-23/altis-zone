import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../footer/style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineDribbble } from "react-icons/ai";
import Lastfooter from "../lastRow/lastRow"

const Footer = () => {
  return (
    <>
      <Container className="container">
        <Row className="foot-row">
          <Col xl={3} lg={3} md={4} sm={6} xm={12} className="foter_col">
            <div className="box-one">
              <h1>smart-e-store</h1>
            </div>
            <div className="text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xm={12} className="foter_col">
            <div className="box-two">
              <h5 style={{ paddingBottom: "18px", fontWeight: "bold" }}>
                Company Info
              </h5>

              <p>
                <a href="#">About Us </a>
              </p>
              <p>
                <a href="#">Careers</a>
              </p>
              <p>
                <a href="#">Social Responsibility</a>
              </p>
              <p>
                <a href="#">Affiliate Program </a>
              </p>
              <p>
                <a href="#">Affiliate Program</a>
              </p>
              <p>
                <a href="#">Find a Store</a>
              </p>
              <p>
                <a href="#">Press & Talent</a>
              </p>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xm={12} className="foter_col">
            <div className="box-three">
              <h5 style={{ paddingBottom: "18px", fontWeight: "bold" }}>
                Quick Links
              </h5>
              <p>
                <a href="#">Quick Links</a>
              </p>
              <p>
                <a href="#">Gift Cards</a>
              </p>
              <p>
                <a href="#">F21 Red</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">California Privacy Rights</a>
              </p>
              <p>
                <a href="#">CA Transparency in Store</a>
              </p>
              <p>
                <a href="#">Teams of Use</a>
              </p>
            </div>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} xm={12} className="foter_col">
            <div className="box-four">
              <h5 style={{ paddingBottom: "18px", fontWeight: "bold" }}>
                Categories
              </h5>

              <p>
                <a href="#">About Us </a>
              </p>
              <p>
                <a href="#">Careers</a>
              </p>
              <p>
                <a href="#">Social Responsibility</a>
              </p>
              <p>
                <a href="#">Affiliate Program </a>
              </p>
              <p>
                <a href="#">Affiliate Program</a>
              </p>
              <p>
                <a href="#">Find a Store</a>
              </p>
              <p>
                <a href="#">Press & Talent</a>
              </p>
            </div>
          </Col>
          {/* <Col xl={1}clg={3} md={4} sm={12} xm={12} className='foter_col'>
        <div className="box-five">
        <h5 style={{paddingBottom:"18px", fontWeight:"bold"}}>Support</h5>
               
               <p><a href="#">New User Guide </a></p>
            <p>  <a href="#">Help Center</a></p>
           <p> <a href="#">Refund Policy</a></p>
           <p><a href="#">Report Spam</a></p>
            <p>  <a href="#">FAQ’s</a></p>
           
            </div>
        </Col> */}
          <Col xl={3} lg={3} md={4} sm={6} xm={12} className="foter_col">
            <div className="box-six">
              <div className="scan-code">
                <p>scan code</p>
              </div>
              <h5
                style={{
                  fontWeight: "bold",
                  marginTop: "80px",
                  paddingRight: "30%",
                }}
              >
                Lest’s Socialize
              </h5>
              <div className="links-container">
                <div className="facebook">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF className="fIcon" />
                  </a>
                </div>
                <div className="insta">
                  {" "}
                  <a href="https://www.instagram.com/">
                    <FaInstagram className="instaIcon" />
                  </a>
                </div>
                <div className="twitter">
                  <a href="https://ads.twitter.com/">
                    <GrTwitter className="twitIcon" />
                  </a>
                </div>
                <div className="dribble">
                  <a href="https://dribbble.com/">
                    <AiOutlineDribbble className="dribbleIcon" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Lastfooter/>
    </>
  );
};

export default Footer;
