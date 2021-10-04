import React from "react";
import "./drawer.css";
import { FiMenu } from "react-icons/fi";
import { MdSmartphone } from "react-icons/md";
import { BiHeadphone } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";
import { GiSonicShoes } from "react-icons/gi";
import { GiWifiRouter } from "react-icons/gi";
import { GiUltrasound } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { BiDrink } from "react-icons/bi";

export default function Drawer() {
  return (
    <>
      <div className="all-Categories-Main-Div">
        <div className="all-Categories-Div">
          <FiMenu size={25} color={"black"} paddingBottom={10} /> All Categories
        </div>
        <div>
          <div>
            <p className="categories-Text">
              <MdSmartphone />
              Smart Phone
            </p>
            <p className="categories-Text">
              <BiHeadphone />
              Head Phone
            </p>
            <p className="categories-Text">
              <AiFillCamera /> Camera & Photos
            </p>
            <p className="categories-Text">
              <GiSonicShoes /> Shoes & Hats
            </p>
            <p className="categories-Text">
              <GiWifiRouter /> Router Wifi
            </p>
            <p className="categories-Text">
              <GiUltrasound /> Ultrasound
            </p>
            <p className="categories-Text">
              <BiDumbbell /> Dumbbell
            </p>
            <p className="categories-Text">
              <BiDrink /> Glass & Drink
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
