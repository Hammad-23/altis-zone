import React from "react";
import { Col, Row } from "react-bootstrap";
import "./login.css";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <Row>
      {/* // <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> */}
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <div className="log-In-Card-Div">
            <h1 className="login-Heading-Text">Log In</h1>
            <p className="new-To-This-Text">
              New to this site?
              <a className="accout-signUp-Text" href="/signup">
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
            <div className="login-Password-Div">
              <input
                className="login-Email-Input"
                placeholder="Password :"
                type="password"
              />
            </div>
            {/* <div className="for-Get-Password-Div">
              <a href="#" className="forget-Password-Text">
                Forget password?
              </a>
            </div> */}
            <div className="login-Button-Div">
              <button className="log-In-Button"> Log In</button>
            </div>
            <div className="login-Facebook-Button-Div">
              <button className="log-In-With-Face-Button">
                <AiFillFacebook size={20} /> Log In Facebook
              </button>
            </div>
            <div>
              <button className="log-In-With-Google-Button">
                <FcGoogle size={20} /> Log In With Google
              </button>
            </div>
          </div>
        </div>
      </Col>
      {/* // </div> */}
    </Row>
  );
}
