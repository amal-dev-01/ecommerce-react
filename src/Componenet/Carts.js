import React, { useContext} from 'react';
import { Mycontext } from './Context';
import { Button, Card } from 'react-bootstrap';
import Quantity from './Quantity';

const Carts = () => {

  const { cart, addproduct, setCart ,data} = useContext(Mycontext);

  const Removecard = (e) => {
    const id = e.target.id
    // console.log(id);
    const remove = [...cart]
    remove.splice(id, 1);
    setCart(remove)
    // setCount(count-1)
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
   } );



  return (
    <div>
    <p>cart</p>
 
      {filterCart.map((product, i) => (
        <div key={product.id}>
          <Card style={{ width: '100%'}} className='card-container'>
            <Card.Img  src={product.src} style={{ height: '300px',width:"300Px"}}  />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.brand}</Card.Text>

              <Card.Text>Prize{product.prize}</Card.Text>
              <Card.Text>OfferPize{product.offerPize}</Card.Text>
              <div className="button-container">
               
                <Button variant="primary" id={i} onClick={Removecard}>Remove From Cart</Button>
                <Quantity  obj={product} />
                
              </div>
              
            </Card.Body>


          </Card>
          
                  </div>
      ))}

      <h2>Total prize:{sum}</h2>
      <Button variant="primary" onClick={filteredProducts}>Buy Now</Button>
      
    </div>
  );
};

export default Carts;
