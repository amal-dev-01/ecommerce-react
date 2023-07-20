import { useContext } from 'react';
import { Col, Container, Row, Card } from "react-bootstrap";
import { Mycontext } from './Context';
import './Homestyle.css'
import { useNavigate } from 'react-router-dom';
import NavbarMain from './Navbar'
import Footer from './Footer';

function Men() {
  const { addproduct} = useContext(Mycontext);
  const filteredProducts = addproduct.filter(
    (product) => product.type.toLowerCase() === 'men'
  );
  const navPro=useNavigate()
  const passid=(e)=>{
    const id=e.target.id
    navPro(`/Showproduct/${id}`)
  }
 
  return (

    <div>
    <NavbarMain />
    <div>
      <h3>Men's fashion</h3>
    </div>
    <Container fluid className="my-5"  >
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} className="mb-4">
            <Card>
              <div className="d-flex justify-content-between p-3" >
                {/* <p className="lead mb-0">Today's Combo Offer</p> */}
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">Shoe</p>
                </div>
              </div>
              <Card.Img
                src={product.src}
                variant="top"
                alt="shoe"
                id={product.id}
                onClick={passid}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="small">
                
                  </p>
                  <p className="small text-danger">
                    <s>{product.prize}</s>
                  </p>
                </div>
  
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{product.name}</h5>
                  <h5 className="text-dark mb-0">{product.offerPize}</h5>
                </div>
  
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Brands: <span className="fw-bold">{product.brand}</span>
                  </p>
                </div>
             
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
  </div>
  
 
  )
}

export default Men;
