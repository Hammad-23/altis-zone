import React, { useState, useEffect } from "react";
import "../shop/shop.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cards/cards";
import SideBar from "../../components/sideComponent/sideComponent";
import Footer from "../../components/footer/footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
// import FadeLoader from "react-spinners/FadeLoader";
// import { css } from "@emotion/react";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

export default function Shop() {
  let history = useHistory();
  const [product, setProduct] = useState([]);
  console.log(product);
  let [loading, setLoading] = useState(true);

  const detailProduct = (data) => {
    history.push({ pathname: "/productdetail", state: data });
  };
  useEffect(() => {
    async function getData() {
      const res = await axios
        .get(
          `https://www.gaienth.com/wp-json/wc/v3/products/?consumer_key=ck_3b510b88652d88e22f5780f2fa7a3c8b0c848b5f&consumer_secret=cs_00c62ec453cd1e74b2dd8ade89761c22c44226f9`
        )
        .then((res) => {
          const items = res.data;
          setTimeout(() => {
            setLoading(false);
          });
          for (let i = 1; i <= items.length; i++) {
            setProduct(items);
          }
        })
        .catch((error) => {
          console.log("products error--> ", error.message);
        });
    }
    getData();
  });
  return (
    <>
      <Navbar />

      <Row className="main-row">
        <Row>
          <Col>
            <div className="shopping-option">
              <h2>shop</h2>
            </div>
          </Col>
        </Row>
        <SideBar />
        <Col>
          <Row>
            {loading ? (
              <Col style={{ paddingRight: "35%", marginTop: "5%" }}>
                <div>
                  <CircularProgress
                    className="loadder"
                    color="inherit"
                    size={60}
                    style={{ color: "lightgray" }}
                  />
                </div>
              </Col>
            ) : (
              product.map((data) => {
                return (
                  <Col
                    xl={4}
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    className="col"
                    style={{ border: "solid none" }}
                  >
                    <Card
                      name={data.name}
                      imageUrl={data?.images[0]?.src}
                      price={data.price}
                      onClick={() => detailProduct(data)}
                    />
                  </Col>
                );
              })
            )}
          </Row>
        </Col>
      </Row>

      <Footer />
    </>
  );
}
