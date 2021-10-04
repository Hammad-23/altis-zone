import React from "react";
import "./button.css";
import Laptop from "../../asset/images/laptop.png";
export default function Button(props) {
  return (
    <>
      <div>
        <img className="img-Lap-Top" src={props.imgUrl} />
        <button {...props}>{props.text}</button>
      </div>
    </>
  );
}
