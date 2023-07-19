import React, { useContext } from 'react';
import {  useParams ,useNavigate} from 'react-router-dom';
import { Mycontext } from './Context';
import { Button, Card } from 'react-bootstrap';
import './Homestyle.css'



const Showproduct = () => {

const nav=useNavigate()

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
    setCart((cart) => [...cart, { productId: id }])&&setCount(count+1)
    // setCount(count+1)
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
            <div style={{width:"60vh"}}>
            <Card.Img src={product.src} className="card-image1"/>
            </div>
            <div className="w-50 p-3" style={{textAlign:"left"}}>
              <Card.Title><h2>{product.name}</h2> </Card.Title>
              <Card.Body>
              <Card.Text><h3>{product.brand}</h3></Card.Text>
              <Card.Text><h4>{product.type}</h4></Card.Text>
              <Card.Text><p>{product.des}</p></Card.Text>
              <Card.Text><h3>MRP: <del>{product.prize}</del></h3></Card.Text>
              <Card.Text><h3>OfferPice: {product.offerPize}</h3></Card.Text>
         
              <div>
                <br/>
              <Button className='btn-class' id={product.id} onClick={Addtocart}>Add To Card</Button>{' '}
              <Button className='btn-class'  onClick={()=>nav('/Carts')}>Go  To Card</Button>
            
              
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
