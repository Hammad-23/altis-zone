import React from 'react'
import '../stocksKits/stock.css'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import {AiOutlineMinus}from 'react-icons/ai'


const Stock = () => {
    return (
        <>
        <Navbar/>
            <Container>
                <Row style={{border:'solid none'}}>
                    <Col xl={3}lg={4}md={5}sm={7} xs={10} style={{border:'solid none', margin:'auto'}}>
                        <div className='stock'><span>STOCKISTS </span>
                        <p>Find us in these fine stores</p>
                        <div className='The-Blues'><p>The Blues</p>
                        <span>500 Terry Francois StreetSan Francisco, CA 94158 Phone: 123.456.7890</span>
                        </div>

                     <div style={{ margin:'auto',paddingBottom:'3%'}}>   <p style={{color:'gray'}}>Mon-Sat: 10:00 am-7:00 pm Sunday: Closed</p></div>
                     <AiOutlineMinus style={{width:'7%', height:'7%', marginBottom:'5%'}}/>
                     <div className='Eva'>
                         <p>Eva</p>
                         <span>500 Terry Francois Street San Francisco, CA 94158 Phone: 123.456.7890</span>
                     </div>

                         <div style={{ margin:'auto', paddingBottom:'10%'}}> 
                         <p >Mon-Fri: 9:00 am-6:00 pm Sat-Sun: 10:00 am-5:00 pm</p>
                         
                         </div>
                        </div>
                        
                        
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Stock
