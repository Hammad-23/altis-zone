import React from "react";
import "../cards/cards.css";
import { Col, Row, Container } from "react-bootstrap";
import Watch from "../../asset/images/watch.png";
import ReactingStare from "../ratingstars/ratingstars";

export default function Cards(props) {
  return (
    <>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ border: "solid none" }}
      >
        <div {...props} className="card-Main-Div">
          <img className="card-Imag" src={props.imageUrl} />
          <span className="name-Text">{props.name}</span>
          {/* <ReactingStare/> */}
          <p className="price-Text">{props.price}</p>
        </div>
      </Col>
    </>
  );
}
