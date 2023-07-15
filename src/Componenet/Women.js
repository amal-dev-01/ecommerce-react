import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Col, Container, Row, Card } from "react-bootstrap";
import { Mycontext } from './Context';
import './Homestyle.css'
import { useNavigate } from 'react-router-dom';
import NavbarMain from './Navbar'

function Women() {
  const { addproduct,cart,setCart,count,setCount,data} = useContext(Mycontext);
  const filteredProducts = addproduct.filter(
    (product) => product.type.toLowerCase() === 'women'
  );
  const navPro=useNavigate()
  const passid=(e)=>{
    const id=e.target.id
    // console.log(id);
    
    navPro(`/Showproduct/${id}`)
  }
  const PID=cart.map((i)=>i.productId)
  const login = data.map((item) => item.email);


  const Addtocart=(e)=>{
    const id=e.target.id
    console.log(login);
// console.log("length:",login.length);
if(login.length>0)
{
  if (PID.includes(id)) {
    alert('Product is already added');
  } else {
    setCart((cart) => [...cart, { productId: id }]);
    setCount(count+1)
    alert('Sucessfully Added to cart')
    // console.log(cart);
  }

}
else{
  alert("plz Login")
  navPro('/Registration')
}
    

   
   
  };

 
  

  return (

    <div>
    <NavbarMain />
    <div>
      <h3>Women's fashion</h3>
    </div>
    <Container fluid className="my-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id} className="mb-4">
            <Card>
              <div className="d-flex justify-content-between p-3">
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
                alt="Laptop"
                id={product.id}
                onClick={passid}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted"></a>
                  </p>
                  <p className="small text-danger">
                    <s>${product.prize}</s>
                  </p>
                </div>
  
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{product.name}</h5>
                  <h5 className="text-dark mb-0">${product.offerPize}</h5>
                </div>
  
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Brands: <span className="fw-bold">{product.brand}</span>
                  </p>
                </div>
                <Button variant="primary" id={product.id} onClick={Addtocart}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  
 
  )
}

export default Women;
