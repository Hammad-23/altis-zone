import React, {useState, useEffect} from "react";
import "../shop/shop.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/cards/cards";
import SideBar from "../../components/sideComponent/sideComponent";
import Footer from "../../components/footer/footer";
// import { commerce } from "@chec/commerce.js"
import axios from 'axios'





const Shop = () => {
  const [products, setProducts]= useState([]);

  // console.log(products[1].images[0].src);
//  const cardData = [
//     {
//       image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
//       text:  'Watch',
//       prize: "$369.99",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
//       text: "Stainless Steel FS3",
//       prize: "$268.88",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp',
//       text: "Luby Slice Convection 9",
//       prize: "$290.00",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
//       text: "smart watch apllo 68GB",
//       prize: "$369.99",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
//       text: "Stainless Steel FS3",
//       prize: "$268.88",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
//       text: "smart watch apllo 68GB",
//       prize: "$369.99",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp',
//       text: "Stainless Steel FS3",
//       prize: "$268.88",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_299,h_353,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp',
//       text: "Luby Slice Convection 9",
//       prize: "$290.00",
//     },
//     {
//       image: 'https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png',
//       text: "smart watch apllo 68GB",
//       prize: "$369.99",
//     },
//   ] 

  useEffect(()=>{
   async function getData(){
      const res= await axios.get(`https://www.gaienth.com/wp-json/wc/v3/products/?consumer_key=ck_3b510b88652d88e22f5780f2fa7a3c8b0c848b5f&consumer_secret=cs_00c62ec453cd1e74b2dd8ade89761c22c44226f9`)
      .then((res)=>{
      const items= res.data
      

      // setProducts(items)
      // console.log(products)
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
      <Navbar/>
      

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
          <Row >
            {products.map((data) => {
              return (
                <Col xl={4} lg={4} md={6} sm={12} xs={12} className="col" style={{border:'solid none'}}>
                  <Card
                    name={data.name}
                    imageUrl={products[1].images[2].src}
                    price={data.price}
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
