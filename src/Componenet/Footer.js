import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import {  FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () => {

  return (
    <footer className='bg-light text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
   
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <FaFacebook/>
          </a>
          <a href='' className='me-4 text-reset'>
            <FaInstagram/>
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedin/>
          </a> */}
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              Shoe Hub
              </h6>
              <p>

              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textDecorationLine:"none"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Brands</h6>
              {/* <p>
                <a href='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                  Adidas
                </a>
              </p>
              <p>
                <a href='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                  Nike

                </a>
              </p>
              <p>
                <a href='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                  Puma
                </a>
              </p>
              <p>
                <a href='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                Reebok
                </a>
              </p> */}
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/Allproducts' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link to='/Allproducts' className='text-reset'>
                  Orders
                </Link>
              </p>
              <p>
                <Link to='/Allproducts' className='text-reset'>
                  Help
                </Link>
              </p>
            </Col>

          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    
      </div>
    </footer>
  );
}
export default Footer