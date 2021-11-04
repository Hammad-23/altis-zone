import React, {useState, useEffect, useRef} from 'react'
// import component 👇
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Col, Row, Container } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Scrollbars } from 'react-custom-scrollbars';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";


export default function ProductDrawer(){
  let history= useHistory()

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

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
    },
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
    <Row>
      <Col>
     <Drawer open={isOpen} onClose={toggleDrawer} direction='right' style={{border:'solid none', width:'auto'}}>
       <Row>
         
         <Col>
       <div className='drawer-header'style={{border:'solid #303132',
         fontSize:'30px',
         backgroundColor:' #303132',
         color:'white',
         fontFamily:'sans-serif'
         }}><h1 style={{margin:'25px'}}>cart</h1></div>
         </Col>
                </Row>
                <Scrollbars  style={{ width:500, height: 370, border:'solid none' }}>

            {shoppingData.map((item) => {
              return (
              

                <Row style={{ paddingTop: "5%", border: "solid none" }}>

                  <Col xl={1} lg={1} md={1} sm={1}  xs={5}></Col>
                  <Col
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    style={{ border: "solid none" }}
                  >

                    <div className="image">
                      <img src={item.image} width={"100px"} />
                    </div>
                    
                  </Col>
                  <Col
                    xl={7}
                    lg={8}
                    md={8}
                    sm={8}
                    xs={4}
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
                  <Col xl={2} lg={1} md={1} sm={2} xs={5} style={{border:'solid none'}}></Col>
                  <Col
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                    style={{ border: "solid none" }}
                  >
                  
                    <div style={{
                    border:'solid 1px lightgray',
                    display:'flex',
                    justifyContent:'space-around',
                    marginTop:'20%',
                    paddingTop:'6%',
                    paddingBottom:'6%'
                        
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
                    lg={3}
                    md={3}
                    sm={3}
                    xs={2}
                    style={{ border: "solid none" }}
                    // className='offset-xl-1'
                  >
                    
                    <div style={{ color: "gray" }} className="price-card">
                      <p>$177.00</p>
                    </div>
                    
                  </Col>

                  <Col
                   xl={2}
                    lg={2}
                     md={3}
                      sm={1}
                       xs={1}
                        style={{ border: "solid none" }}>
                    <div className="close-icon" >
                      
                      <IoCloseOutline style={{ width: "25", height: "25" }} />
                    </div>
                  </Col>
                  <Row>
                    {/* <Col></Col> */}
                    <Col xl={10} lg={10} md={10} sm={10} xs={12} 
                    className='offset-1'
                      style={{
                        borderBottom: "1px solid lightgray",
                        // marginLeft: "1%",
                        paddingTop:'5%'
                        
                      }}
                    ></Col>
                  </Row>
                  

                </Row>
                
              );
            })}
            </Scrollbars>
            
            <Row style={{ marginTop:'4%'}}>
              <Col style={{border:'solid none'}} className='offset-1'>
                <h1 style={{textAlign:'right', color:'black'}}>Subtotal:</h1>
              </Col>
              <Col style={{border:'solid none'}}>
              <h1 style={{textAlign:'left',color:'black'}}>$147.98</h1>
              </Col>
            </Row>
      
            <div style={{border:' 0.5px solid lightgray', marginTop:'3%'}}></div>
            <Row>
              <Col style={{border:'solid'}} >
                
              <Button style={{
                                        border:'solid  #303132', 
                                        paddingLeft:'20%',
                                        paddingRight:'20%',
                                        paddingTop:'1.5%',
                                        paddingBottom:'1.5%',
                                        backgroundColor:' #303132',
                                        color:'white',
                                        textTransform:'capitalize',
                                        marginTop:'4%',
                                        marginLeft:'1%',
                                        marginBottom:'2%',
                                        fontSize:'18px'
                                        
                                        }} onClick={()=>{
                                          history.push('/shoppingcard')
                                        }}>view cart</Button>
              </Col>
            </Row>
            </Drawer>
            </Col>
            
            </Row>
    </>
  )
}