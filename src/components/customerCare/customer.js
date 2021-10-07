import React from 'react'
import '../customerCare/customer.css'
import { Col, Row, Container } from "react-bootstrap";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Button from '@mui/material/Button';



const Customer = () => {
    return (
        <>
        <Navbar/>
            <Container>
                <Row>
                    <Col>
                    <div className='care-customer'><p>CUSTOMER CARE</p></div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={5} lg={7}md={9}sm={10} xs={11} style={{margin:'auto'}}>
                    <div className='customer-text'><p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={10} style={{margin:'auto'}}>
                    <div style={{borderBottom:'1px solid', paddingTop:'5%'}}></div>
                    </Col>
                </Row>
                <Row style={{paddingBottom:'5%'}}>
                    <Col xl={2}lg={2}md={3}  xs={1} style={{border:'solid none '}}> </Col>
                    <Col xl={3} lg={3}md={6} xs={9} style={{border:'solid none'}}>
                        <div className='care-question'><p>Have any questions or concerns? We’re always ready to help!</p></div>
                        <div className='call-us'>
                            <Row>
                                <Col xl={12}><div className='call-heading'><span>Call us at</span></div></Col>
                                <Col xl={12}><div className='call-number'><span>123-456-7890</span></div></Col>
                                <Col xl={12}><div className='call-email'><span>or send us an email to:</span></div></Col>
                                <Col xl={12}><div className='call-link'><span><a href='#'>info@mysite.com </a></span></div></Col>

                            </Row>
                        </div>
                    </Col>
                    
                    <Col xl={1} lg={1} style={{border:'solid none'}}></Col>
                    <Col xl={4}lg={5} md={8} sm={12} xs={12} style={{border:'solid none'}} className='contact-col'>
                        <div className='contact-form'>
                         <div className='name-input'><input className='form-control' placeholder='Name'/></div>
                         <div className='email-input'><input className='form-control' placeholder='Email'/></div>
                         <div className='subject-input'><input className='form-control' placeholder='Subject'/></div>
                         <div className='message-input'>  <textarea className='form-control'placeholder='Message'></textarea></div>
                         <Row><Col style={{textAlign:'left'}}>
                         <Button style={{
                                        border:'solid none', 
                                        paddingLeft:'15%',
                                        paddingRight:'15%',
                                        paddingTop:'2%',
                                        paddingBottom:'2%',
                                        backgroundColor:' #303132',
                                        color:'white',
                                        textTransform:'capitalize',
                                        marginTop:'2%'
                                        

                                    }}>submit</Button>
                                    </Col>
                                    </Row>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} style={{border:'solid none'}}></Col>
                    
                </Row>
                
            </Container>
            <Footer/>
        </>
    )
}

export default Customer
