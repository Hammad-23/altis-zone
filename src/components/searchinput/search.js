import React from "react";
import { Col, Row } from "react-bootstrap";
import "./search.css";

export default function Search() {
  return (
    <>
      <div className="main-Div">
        <input className="search-Input" placeholder="Search" type="search" />
        <button className="search-Button">Search</button>
      </div>
        
    </>
  );
}
