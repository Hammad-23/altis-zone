import React from "react";
import { Col, Row } from "react-bootstrap";
import "./signup.css";

export default function SignUp() {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}
          >
            <div className="sign-Up-Card-Div">
              <h1 className="sign-Up-Heading">Sign Up</h1>
              <p className="already-A-Mamber-Text">
                Already a member?
                <a href="/login" className="account-Login-Text">
                  Log In
                </a>
              </p>
              <div className="sign-Up-Email-Div">
                <input
                  className="sign-Up-Email-Input"
                  placeholder="Email...."
                  type="email"
                />
              </div>
              <div className="sign-Up-Password-Div">
                <input
                  className="sign-Up-Password-Input"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div>
                <button className="sign-Up-Button">Sign Up</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
