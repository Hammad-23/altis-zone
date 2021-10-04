import React from "react";
import "../sideComponent/sideBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const SideComponent = () => {
  return (
    <>
      
      <Col className="side_Col" xl={4} lg={4} md={4} sm={5} xm={4}>
        <Row style={{border:"solid none"}}>
          <Col xl={12} lg={12} md={12}sm={12} xs={12} style={{border:"solid none"}}>
        <aside className="sideBody">
          <div style={{borderBottom:"solid 1px lightgray", width:"85%"}}></div>
          <div className="price"><h4>price</h4> </div>
          <div className="check-Box">
            <div><input  type="checkbox" className="form-check-input"/><label> $0.00 - $99.993 </label> </div>
            <div><input  type="checkbox" className="form-check-input"/><label> $0.00 - $99.993 </label></div>
            
           <div> <input  type="checkbox" className="form-check-input"/> <label> $0.00 - $99.993 </label></div>
          <div>  <input  type="checkbox" className="form-check-input"/><label> $0.00 - $99.993 </label></div>

            </div>
          <div style={{borderBottom:"solid 1px lightgray", marginTop:"1%", width:"85%", marginLeft:"%"}}></div>
          <div className="compare-product">
            <h4>Compare Products</h4>
            <p>You have no items to compare.</p>
          </div>
          <div className="compare-product">
            <h4>My Wish List</h4>
            <p>You have no items in your wish list.</p>
          </div>
           </aside>
           </Col>
           </Row>
           </Col>
           
    </>
  );
};
export default SideComponent;
