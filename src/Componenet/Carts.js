import React, { useContext} from 'react';
import { Mycontext } from './Context';
import { Button, Card,Col ,Image,Row} from 'react-bootstrap';
import Quantity from './Quantity';
import { useNavigate } from 'react-router-dom';


const Carts = () => {
 const nav=useNavigate()
  const { cart, addproduct, setCart ,data,setCount,count} = useContext(Mycontext);

  const Removecard = (e) => {
    const id = e.target.id
    // console.log(id);
    const remove = [...cart]
    remove.splice(id, 1);
    setCart(remove)
    setCount(count-1)
  }
  console.log(data);
  

  const productIds = cart.map((item) => item.productId);
  // const productprize = Product.map((item) => item.prize);
 
 

  const filterCart = addproduct.filter((product) => productIds.includes(product.id));
  // console.log(filterCart);

let sum=0
  const filteredProducts =filterCart.map(
    (product) =>
     {sum=sum+(product.offerPize*product.qty)
      return sum
   }
 ,nav("/")
   );



  return (
    <div>
    <Col md="8">
            <Card className="mb-4">
              <Card.Header className="py-3">Cart
              </Card.Header>
              {filterCart.map((product, i) => (
              <Card.Body key={product.id}>
                <Row>
                  <Col lg="3" md="12" className="mb-4 mb-lg-0">
                    <div className="bg-image rounded hover-zoom hover-overlay">
                      <Image
                        src={product.src}
                        className="w-100"
                      />
                    </div>
                  </Col>

                  <Col lg="5" md="6" className="mb-4 mb-lg-0">
                    <p>
                      <strong>{product.name}</strong>
                    </p>
                    <p>Brand: {product.brand}</p>
                    <p>Size: M</p>
                    
                    <p className="text-start text-md-center">
                      <strong>Price:{product.prize}</strong>
                    </p>
                    <p className="text-start text-md-center">
                      <strong>OfferPice:{product.offerPize}</strong>
                    </p>

                    <Button variant="danger" className="me-1 mb-2" id={i} onClick={Removecard}>
                      <i className="fas fa-trash" />Delete
                    </Button>

                  </Col>
                  <Col lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <Quantity  obj={product} />
                    </div>
                  </Col>
                </Row>
                <hr className="my-4" />
              </Card.Body>
              ))}
            </Card>
          </Col>


          <Col md="4">
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Summary</h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0"></p>
                      </strong>
                    </div>
                    <span>
                      <strong>{sum}</strong>
                    </span>
                  </li>
                </ul>

               {/* <Button block size="lg" onClick={filteredProducts}> Go to checkout </Button> */}
                 <button onClick={filteredProducts}>Go to checkout</button>
               
              </Card.Body>
            </Card>
          </Col>
 
    
      
      
    </div>
  );
};

export default Carts;
