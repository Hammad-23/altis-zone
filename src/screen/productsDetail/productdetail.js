import React, { useState } from "react";
import "./productdetail.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FiChevronUp} from 'react-icons/fi'
import {FiChevronDown} from 'react-icons/fi'
import Button from '@mui/material/Button';
import{VscHeart} from 'react-icons/vsc';
import { AiOutlinePlus } from "react-icons/ai";
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'
import { useLocation } from "react-router";





export default function ProductDetail(props) {
  // const [increament, setIncreament]= useState()
 const location=useLocation();
//  console.log(location.state.images[0].src);
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <>
      <Navbar />
      <Row style={{border:'solid none'}}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="home-TextDiv">
            <p style={{ textAlign: "left" }}>Home / MIDI PLEATED SKIRT</p>
          </div>
        </Col>
      </Row>
      <Row style={{border:'solid none'}}>
        <Col xl={3} lg={2} md={1} ></Col>
        <Col xl={4} lg={5} md={5} sm={12} style={{border:'solid none'}}>
          <div
            style={{
              margin:'auto'
            }}
          >
            <div className="product-Imag-Div">
              <img
                className="img-fluid product-Imag"
                src={location.state.images[0].src}
              />
            </div>

              <div>
                <p className="im-A-Product-Text">
                  I'm a product description. I’m a great place to include more
                  information about your product. Buyers like to know what
                  they’re getting before they purchase.
                </p>
              </div>
            </div>
            </Col>
            <Col xl={3} lg={4} md={5}sm={12} style={{border:'solid none'}}>
                <div className='mid-head'>
                <Row>
                  <Col xl={12}>
                    <div className='mid-heading'>
              <span>MIDI PLEATED SKIRT</span>
              </div>
              </Col>
              <Col>
              <div className='mid-text'>
              <span>SKU:0004</span>
              </div>
              </Col>
              </Row>
              </div>
              <div className='mid-body'>
              <Row>
                <Col xl={12}>
                <div className='mid-number'>
                <p>$59.00Price</p>
              </div>
                </Col>
              </Row>

              <Row>
                <Col xl={12}>
                <div className='mid-size'>
                <span>
                  size
                </span>
              </div>
              </Col>
              <Col>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 335 }}>
        <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={size}
          onChange={handleChange}
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Small</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Large</MenuItem>
        </Select>
      </FormControl>
              </Col>
              </Row>

              <Row>
                <Col xl={12}>
                <div className='mid-quantity'>
                  <span>Quantity</span>
                </div>
                </Col>
                <Col xl={4} lg={4}md={4} sm={4} xs={4} style={{marginLeft:'2%'}}>
                <div className='quantity'>
                  <div className='quantity-number'><span>10</span></div>
                  <div className='quantity-icon'>
                    <div>
                      <FiChevronUp className='care-up'/>
                      
                    </div>
                    <div>
                      <FiChevronDown className='care-down'/>
                      
                    </div>
                  </div>
                </div>
                </Col>
              </Row>
              <Row>
                <Col xl={12} style={{display:'flex'}}>
                <div className='add-to-card'>
                  <span>add to cart</span>
                  </div> 
                  <div className='heart-icon'>
                  <VscHeart style={{marginLeft:'15%', marginTop:'15%'}} size={35} className='heart'/>
                </div>
                  
                </Col>
               </Row>
               <Row>
                 <Col>
                 <Button style={{
                                        border:'solid  #303132', 
                                        paddingLeft:'41%',
                                        paddingRight:'41%',
                                        paddingTop:'2%',
                                        paddingBottom:'2%',
                                        backgroundColor:' #303132',
                                        color:'white',
                                        textTransform:'capitalize',
                                        marginTop:'4%',
                                        marginLeft:'1%',
                                        marginBottom:'2%'

                                        

                                    }}>submit</Button>
                 </Col>
               </Row>
              </div>
              <div className='mid-footer'>
                <Row>
                  <Col style={{display:'flex'}}><div className='product-info'>
                    <p>PRODUCT INFO</p>
                    </div>
                    <div style={{marginLeft:'auto', marginTop:'7%', marginRight:'1%'}}>
                      <AiOutlinePlus/>
                    </div>
                    </Col>
                </Row>
                <Row>
                  <Col>
                  <div style={{textAlign:'left', marginLeft:'3%', color:'gray', fontSize:'15px', cursor:'pointer', paddingBottom:'5%'}}><p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p></div>
                  <div style={{border:'0.5px solid lightgray'}}></div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{display:'flex'}}>
                  <div className='return-and-refund'>
                    <p>RETURN AND REFUND POLICY</p>
                  </div>
                  <div style={{marginLeft:'auto', marginTop:'5%', marginRight:'1%'}}>
                  <AiOutlinePlus/>
                  </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <div style={{textAlign:'left', marginLeft:'3%', color:'gray', fontSize:'15px', cursor:'pointer', paddingBottom:'5%'}}><p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p></div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <div className='mid-links'>
                    <div class='links'>
                    <a href='https://web.whatsapp.com/'> <IoLogoWhatsapp className='whats-aap' size={20}/></a>
                   <a href='https://www.facebook.com/'> <FaFacebookF size={17} className='face-book'/></a>
                   <a href='https://twitter.com/'> <FaTwitter size={18} className='twitter'/></a>
                    <a href='https://www.pinterest.com/'><FaPinterestP size={18} className='pin-test'/></a>
                    </div>
                  </div>
                  </Col>
                </Row>
              </div>
        </Col>
      </Row>
      <Footer/>
    </>
  );
}
