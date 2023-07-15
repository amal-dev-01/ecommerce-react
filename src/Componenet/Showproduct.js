import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom';
import { Mycontext } from './Context';
import { Button, Card } from 'react-bootstrap';
import './Homestyle.css'


const Showproduct = () => {

// const navLogin=useNavigate()

  const { id } = useParams();
  // console.log(id);
  const pdid = id;
  

  const { addproduct,cart,setCart,count,setCount ,login} = useContext(Mycontext);

  const clickProduct = addproduct.filter(
    (product) => product.id === pdid
  );

  const PID=cart.map((i)=>i.productId)
 
  const Addtocart=(e)=>{
    const id=e.target.id
    console.log(login);
// console.log("length:",login.length);
if(login==true)
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
  // navLogin('/Registration')
}
    

   
   
  };

 
  


  return (
    <div className="card-container">
      {clickProduct.map((product) => (
        <div key={product.id}>
         
      <div className='div-m-2'>
        <Card >
          <div className="d-flex">
            <div className="w-70">
            <Card.Img src={product.src} className="card-image1" />
            </div>
            <div className="w-50 p-3">
              <Card.Title><h2>{product.name}</h2> </Card.Title>
              <Card.Body>
              <Card.Text><h3>{product.brand}</h3></Card.Text>
              <Card.Text><h3>{product.type}</h3></Card.Text>
              <Card.Text><h4>{product.des}</h4></Card.Text>
              <Card.Text><h3>MRP: <del>{product.prize}</del></h3></Card.Text>
              <Card.Text><h3>OfferPize: {product.offerPize}</h3></Card.Text>
         
              <div >
              {/* <Button className='btn-class'>Buy Now</Button><br/> */}
                <br/>
              <Button className='btn-class' id={product.id} onClick={Addtocart}>Add To Card</Button>
            
              
              </div>
              </Card.Body>
            
             
            </div>
          </div>
        </Card>
      </div>

        </div>
      ))}
 
      
    </div>
  );
};

export default Showproduct;
