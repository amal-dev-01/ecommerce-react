import React, { useContext } from 'react'
import { Mycontext } from './Context'

const Adminwomen = () => {
    const {addproduct}=useContext(Mycontext);
    const Womenproduct = addproduct.filter(
      (product) => product.type.toLowerCase() === 'women'
    );
  return (
    <div>
         <h2>Women</h2>
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
        {Womenproduct.map((x)=>
        <tr  key={x.id}>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.type}</td>
        <td>{x.brand}</td>
       <td> <img width={100} height={90} src={x.src} alt='shoe'/></td>
        <td>{x.des}</td>
        <td>{x.prize}</td>
        <td>{x.offerPize}</td>
        {/* <td><Button id={x.id} variant='danger' onClick={remove}>Delete</Button></td>
        <td><Button id={x.id} onClick={edit}>Edit</Button></td> */}
        </tr>
        )}
        </table>
        
    </div>
  )
}

export default Adminwomen