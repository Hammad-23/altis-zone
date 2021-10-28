import React from 'react'
// import component 👇
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Col, Row, Container } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { MDBContainer } from "mdbreact";



export default function ProductDrawer(){

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const scrollContainerStyle = {  maxHeight: "400px" };
  const shoppingData = [
    {
      image:
        "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_230,h_230,al_c,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.png",
      name: "MIDI PLEATED SKIRT",
      price: "$7656.565",
      color: "green",
      size: "large",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_299,h_410,al_c,q_80,usm_0.66_1.00_0.01/cda177_b5a795ade21b41d38cadd836824e6768.webp",
      name: "MIDI PLEATED SKIRT",
      price: "$8765.765",
      color: "blue",
      size: "medium",
    }
  ];
  return(
    <>
    <span onClick={toggleDrawer}>add to cart</span>
     <Drawer open={isOpen} onClose={toggleDrawer} direction='right' style={{border:'solid none', width:'auto'}}>
       <div className='drawer-header'style={{border:'solid #303132',
        height:'15%',
         fontSize:'30px',
         backgroundColor:' #303132',
         color:'white',
         fontFamily:'sans-serif'
         }}><h1 style={{margin:'25px'}}>cart</h1></div>
                
            {shoppingData.map((item) => {
              return (
                <MDBContainer>
                <Row style={{ paddingTop: "5%", border: "solid none" }}>
                  {/* <Col xl={1} lg={1} md={1}></Col> */}
                  <Col
                    xl={4}
                    lg={3}
                    md={3}
                    sm={5}
                    xs={5}
                    style={{ border: "solid none" }}
                  >

                    <div className="image">
                      <img src={item.image} width={"100px"} />
                    </div>
                    
                  </Col>
                  <Col
                    xl={4}
                    lg={3}
                    md={3}
                    sm={7}
                    xs={7}
                    style={{ border: "solid none" }}
                  >
                    
                    <div className="text-heading">
                      <span>{item.name}</span>
                    </div>
                    <div className="text-prize">
                      <span>{item.price}</span>
                    </div>
                    <div className="text-size">
                      <span>{item.size}</span>
                    </div>
                    
                  </Col>
                  {/* <Col xl={1}></Col> */}
                  <Col
                    xl={3}
                    lg={4}
                    md={4}
                    sm={5}
                    xs={5}
                    style={{ border: "solid none" }}
                    
                    
                  >
                    
                    <div style={{
                    border:'solid 1px lightgray',
                    height:'100%',
                    display:'flex',
                    justifyContent:'space-around',
                    marginTop:'20%',
                    height:'50%',
                    paddingTop:'7%'
                        
                        }}>
                      <div className="counter-minus">
                        
                        <AiOutlineMinus />
                      </div>
                      <div className="counter-number">
                        <span>123</span>
                      </div>
                      <div className="counter-plus">
                        
                        <AiOutlinePlus />
                      </div>
                    </div>
                    
                  </Col>
                  <Col
                    xl={3}
                    lg={5}
                    md={5}
                    sm={4}
                    xs={4}
                    style={{ border: "solid none",marginTop:'6%' }}
                    className='offset-1'
                  >
                    
                    <div style={{ color: "gray" }} className="price-card">
                      <p>$177.00</p>
                    </div>
                    
                  </Col>

                  <Col xl={2} lg={5} xs={3} style={{ border: "solid none",paddingTop:'5%' }}>
                    <div className="close-icon" >
                      
                      <IoCloseOutline style={{ width: "25", height: "25" }} />
                    </div>
                  </Col>
                  <Row>
                    <Col xl={1}></Col>
                    <Col
                      style={{
                        borderBottom: "1px solid lightgray",
                        paddingTop: "5%",
                        marginLeft: "1%",
                      }}
                    ></Col>
                  </Row>
                </Row>
                </MDBContainer>
              );
            })}
            <Row style={{border:'solid none'}}>
              <Col style={{border:'solid none'}} className='offset-1'>
                <h1 style={{marginRight:'70%', marginTop:'5%'}}>Subtotal</h1>
              </Col>
            </Row>
            <Row>
              <Col className='offset-1'>
              <h1 style={{marginRight:'70%'}}>$147.98</h1>
              </Col>
            </Row>
            </Drawer>
    </>
  )
}