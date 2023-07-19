import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Mycontext } from './Context'
import { Form, Button } from 'react-bootstrap';

const Editproduct = () => {
 const {addproduct,setAddproduct}=useContext(Mycontext)
 const {id}=useParams()
 const pdid=id

//  console.log(addproduct);
 const editproduct = addproduct.filter(
  (product) => product.id === pdid
);



const submit = (e) => {
  e.preventDefault();
  const id = e.target.id;

  const updatedProducts = addproduct.map((product) => {
    const newName = e.target.name.value || product.name ;
    const newBrand = e.target.brand.value || product.brand ;
    const newType = e.target.type.value || product.type ;
    const newPrize = e.target.prize.value || product.prize ;
    const newOfferpize = e.target.offerPize.value || product.offerPize ;
    const newSrc = e.target.src.value || product.src;
    if (product.id === id) {
      return { ...product, name: newName,brand:newBrand,type:newType,prize:newPrize,offerPize:newOfferpize,src:newSrc};
    } else {
      return product;
    }
  });

  setAddproduct(updatedProducts);
};



  return (
    <div>
       <h3>Editproduct</h3>
       
       {editproduct.map((x)=>
       <div key={x.id}>
       <div className='container d-flex justify-content-center align-items-center vh-10 '>
       <div  style={{width:"50%" ,alignContent:"center",alignItems:"center"}}><img width={500} src={x.src}/></div>
       <div style={{width:"50%"}}>
       <h3>Product Details</h3>
       <h1>{x.name}</h1>
       <h2>{x.brand}</h2>
       <h2>{x.prize}</h2>
       <h2>{x.offerPize}</h2></div> </div>
       <div className="container d-flex justify-content-center align-items-center vh-50 ">
    <Form id={x.id} onSubmit={submit}>
      <Form.Group className='mb-8'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder='Enter name' id='name' style={{ width: '500px' }}/>
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Brand</Form.Label>
        <Form.Control type='text' placeholder='Enter brand name' id='brand' />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Type</Form.Label>
        <Form.Control type='text' placeholder='Enter type' id='type' />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Price</Form.Label>  
        <Form.Control type='text' placeholder='Enter prize' id='prize' />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label> OfferPrice</Form.Label>
        <Form.Control type='text' placeholder='Enter offerprize' id='offerPize' />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Image</Form.Label>
        <Form.Control type='text' placeholder='Enter image src' id='src' />
      </Form.Group>

      <Button variant='primary' type='submit' block>
      Submit
      </Button>
    </Form>
    
    </div>
    </div>

    
       )}
      
       </div>
  
  )
}

export default Editproduct