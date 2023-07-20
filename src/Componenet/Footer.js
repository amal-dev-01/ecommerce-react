import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Footer = () => {

  return (
    <footer className='bg-light text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
   
        </div>

        <div>
          <Link to='/' className='me-4 text-reset'>
            <FaFacebook/>
          </Link>
          <Link to='/' className='me-4 text-reset'>
            <FaInstagram/>
          </Link>
          <Link  to='/' className='me-4 text-reset'>
            <FaLinkedin/>
          </Link>
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
              Welcome to Shoe Hub, your ultimate destination for all things footwear! Step into a world of style and comfort as we bring you the latest trends and top-notch brands that cater to your every need. Whether you're seeking the perfect pair of sneakers for a casual outing, elegant heels for a special occasion, or durable boots for your adventurous side, we've got you covered. Our passionate team of shoe enthusiasts is dedicated to helping you find your perfect fit, ensuring that you walk out with confidence and a smile. Embrace the joy of shopping for shoes at Shoe Hub, where fashion and functionality come together seamlessly. Happy shoe shopping!
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textDecorationLine:"none"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Brands</h6>
              <p>
              <Link to='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
              Adidas
                </Link>
                
              </p>
              <p>
              <Link to='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                Puma</Link>
              
              </p>
              <p>
              <Link to='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                Nike
                </Link>
               
              </p>
              <p>
                <Link to='https://in.puma.com/in/en/mens/mens-shoes?offset=24' className='text-reset'>
                Reebok
                </Link>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/Allproducts' className='text-reset'>
                  Allproducts
                </Link>
              </p>
              <p>
                <Link to='/' className='text-reset'>
                Home
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
    Developed By AD Developes
      </div>
    </footer>
  );
}
export default Footer