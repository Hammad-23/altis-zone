import React from "react";
import "../cards/cards.css";
import { Col, Row, Container } from "react-bootstrap";
import Watch from "../../asset/images/watch.png";
import ReactingStare from "../ratingstars/ratingstars";

export default function Cards(props) {
  return (
    <>
      
      <Col
        xl={9}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ border: "solid none",  marginTop:'5%'}}
      >
        <div {...props} className="card-main">
        <div className='card-img'>
          <img src={props.imageUrl}/>
          </div>
        <div className='card-text'>
        <span>{props.name}</span>
       <p>{props.price}</p>
      </div>
      </div>

      </Col>

    </>
  );
}
