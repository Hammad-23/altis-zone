import React from "react";
import { Col, Row } from "react-bootstrap";
import "./login.css";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    
      <Row>
        <Col className="login-Card-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="login-Card">
            <div style={{ width: "80%" }}>
              <h1 className="loginText">Log In</h1>
              <p className="new-To-This-Text">
                New to this site?
                <a className="signUp-Text" href="#">
                  Sign Up
                </a>
              </p>
              <div>
                <input
                  className="login-Email-Input"
                  placeholder="Email :"
                  type="email"
                />
              </div>
              <div style={{ marginTop: "25px" }}>
                <input
                  className="login-Email-Input"
                  placeholder="Password :"
                  type="password"
                />
              </div>
              <div className="for-Get-Password-Div">
                <a href="#" className="forget-Password-Text">
                  Forget password?
                </a>
              </div>
              <div style={{ marginTop: "20px" }}>
                <button className="log-In-Button"> Log In</button>
                <button className="log-In-With-Face-Button">
                  {" "}
                  <AiFillFacebook size={20} /> Log In Facebook
                </button>
                <button className="log-In-With-Google-Button">
                  {" "}
                  <FcGoogle size={20} /> Log In With Google
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
  
  );
}
