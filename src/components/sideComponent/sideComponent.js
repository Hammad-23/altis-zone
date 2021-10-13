import React from "react";
import "../sideComponent/sideBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../navbar/navbar";
import {AiOutlinePlus} from 'react-icons/ai'
export const SideComponent = () => {
  return (
    <>
    
      <Col className="side_Col" xl={3} lg={3} md={4} sm={5} xm={4}>
        <Row style={{border:"solid none", fontFamily:'sans-serif'}}>
          <Col xl={12} lg={12} md={12}sm={12} xs={12} style={{border:"solid none"}}>
            
        <aside className="sideBody">
        <Row>
              <Col style={{border:'solid none'}} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className='categories-heading'><h1>Categories</h1></div>
                <div style={{borderBottom:'1px solid lightgray', width:'55%', marginLeft:'17%'}}></div>
              </Col>
            </Row>
            <Row >
              <Col >
              <div className='categories-text' >
              
                <ul>
                <div className='categories-list' >
                  <li>smart phone</li>
                  </div>
                  <div  className='categories-list' >
                  <li>head Phones</li>
                  </div>
                  <div className='categories-list' >
                  <li>camera</li>
                  </div>
                  <div  className='categories-list' >
                  <li>photos</li>
                  </div>
                  <div className='categories-list' >
                  <li>smart phone</li>
                  </div>
                  <div  className='categories-list' >
                  <li>head Phones</li>
                  </div>
                  <div className='categories-list'>
                  <li>camera</li>
                  </div>
                  <div  className='categories-list'>
                  <li>photos</li>
                  </div>
                </ul>
                
                </div>  
            </Col>
              </Row>
          <div className='filter'><h1>filter</h1></div>
          <div className='filter-line'></div>
          <div className='prize'>
          <Row style={{fontFamily:'sans-serif'}}>
         <Col> <p style={{ color:'gray'}}>Price</p></Col>
        <Col> <AiOutlinePlus className='plus-icon' /></Col>
         </Row>
         </div>
         <div className='filter-line'></div>
         <div className='color'>
          <Row>
         <Col> <p style={{ color:'gray'}}>color</p></Col>
        <Col> <AiOutlinePlus className='plus-icon' /></Col>
         </Row>
         </div>
         <div className='filter-line'></div>

         <div className='size'>
          <Row>
         <Col> <p style={{color:'gray'}}>size</p></Col>
        <Col> <AiOutlinePlus className='plus-icon' /></Col>
         </Row>
         </div>
           </aside>
           </Col>
           </Row>
           </Col>
           
    </>
  );
};
export default SideComponent;
