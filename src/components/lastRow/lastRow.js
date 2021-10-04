import React from "react"
import { Col, Row, Container } from "react-bootstrap";
import '../lastRow/lastRow.css'
// import VisaCard from "../../asset/images/visa-card.png"
// import {FaCcVisa }from "react-icons/fa"
// import {GoCreditCard} from "react-icons/go"
import PayCards from "../../asset/images/viza.jpg"


export default function  LastRow(){
    return(
        <>
        <Container>
            <Row className="row" style={{borderTop:"1px solid lightgray",
             borderBottom:"1px solid lightgray",
            
               
               border:"solid none"}}>
        <Col xl={6} lg={6} md={12} sm={12} xs={12} style={{border:"solid none", paddingTop:"15px"}}>
        
        
        
            
        <div className=" main-div" style={{border:"solid none",width:"auto", display:"flex" }}>
        <Row style={{border:"solid none"}}>
            <Col xl={6} lg={6} md={6} sm={12}style={{paddingTop:"10px", paddingBottom:"10px"}} > 
      <div className="text-card">  <span>We Using Safe Payments:</span></div>
      </Col>
        <Col xl={6} lg={6} md={6} sm={12}style={{paddingTop:"10px", paddingBottom:"10px"}}>
    <div className="card">
        <a href="#"><img src={PayCards} /></a>
      </div>
      </Col>
      </Row>

        </div>

        
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} xs={12} style={{border:"solid none", paddingTop:"10px", paddingBottom:"10px"}}>
        <div className="main-div" style={{border:"solid none",width:"auto", display:"flex" }}>
        <Row style={{border:"solid none"}}>
        <Col xl={6} lg={6} md={6} sm={12}style={{paddingTop:"10px", paddingBottom:"10px", }} > 
            <div className="text-card"><span>Secured by:</span></div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12}style={{paddingTop:"10px", paddingBottom:"10px", }} >
            <div className="card">
            <a href="#"> <img src={PayCards}  /></a>
            </div>
            </Col>
            </Row>
        </div>
        
        </Col>
        </Row>
        <Row style={{marginTop:"10px" , paddingTop:"20px"}}>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
           
            </Col>
            </Row>
           
        </Container>
        <Row style={{border:"solid 1px lightgray", paddingTop:"25px",paddingBottom:"20px"}} >
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
               <div style={{border:"solid none", textAlign:"left", marginLeft:"12%", paddingBottom:"3%"}}> <span style={{}}>Copyright © Bluesky Techco, Inc. All rights reserved.</span></div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
               <div className="term-of-use"> <a href="#"><span>Terms of use | </span></a>
              <a href="#"> <span>Privacy Policy</span></a>
              </div>
                </Col>
                </Row>
        </>
    )
}