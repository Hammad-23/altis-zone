import React, {useState, useEffect} from "react";
import "../shop/shop.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cards/cards";
import SideBar from "../../components/sideComponent/sideComponent";
import Footer from "../../components/footer/footer";
import { useHistory } from "react-router-dom";
// import { commerce } from "@chec/commerce.js"
import axios from 'axios'

const Shop = () => {
  let history= useHistory()
  const [products, setProducts]= useState([]);

  const detailProduct=(data)=>{
    history.push({pathname:"/productdetail",state:data});

  }

  useEffect(()=>{
    async function getData(){
       const res= await axios.get(`https://www.gaienth.com/wp-json/wc/v3/products/?consumer_key=ck_3b510b88652d88e22f5780f2fa7a3c8b0c848b5f&consumer_secret=cs_00c62ec453cd1e74b2dd8ade89761c22c44226f9`)
       .then((res)=>{
       const items= res.data
       for(let i=1; i<=items.length; i++){
         setProducts(items)
       }
       }).catch((error)=>{
         console.log("products error--> ",error.message);
       })
      
     }
     getData()
   })
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
            {products.map((item,index) => {
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
                    name={item.name}
                    imageUrl={item.images[2].src}
                    price={item.price}
                    onClick={()=>detailProduct(item)}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Footer />

    </>
  );
};
export default Shop;
