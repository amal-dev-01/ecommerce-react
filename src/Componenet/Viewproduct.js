import React, { useContext } from 'react'
import { Mycontext } from './Context'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Viewproduct = () => {

    const {addproduct,setAddproduct}=useContext(Mycontext)

    const products=addproduct
    const nav=useNavigate()

 const remove=(e)=>{
  // const index = e.target.id
  // const removeproduct = [...addproduct]
  // removeproduct.splice(index, 1);
  // setAddproduct(removeproduct)
  const id = e.target.id;
  const updatedProducts = addproduct.filter((product) =>product.id !== id);
  setAddproduct(updatedProducts);

 }
 const edit=(e)=>{
  const id = e.target.id;
  nav(`/Edit/${id}`)
 }

  return (
    <div>
        
        <div>
        <table>
        <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>OfferPrice</th>
        </tr>
        {products.map((x,i)=>
        <tr  key={x.id}>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.type}</td>
        <td>{x.brand}</td>
       <td> <img width={100} height={90} src={x.src}/></td>
        <td>{x.des}</td>
        <td>{x.prize}</td>
        <td>{x.offerPize}</td>
        <td><Button id={x.id} variant='danger' onClick={remove}>Delete</Button></td>
        <td><Button id={x.id} onClick={edit}>Edit</Button></td>
        </tr>
        )}
        </table>
        
        


        </div>
        
     
    </div>
  )
}

export default Viewproduct