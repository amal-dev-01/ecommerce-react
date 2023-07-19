import React, { useContext } from 'react'
import { Mycontext } from './Context';
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
  const nav = useNavigate()
  const { addproduct, setAddproduct } = useContext(Mycontext)

  const addproducts = (event) => {
    event.preventDefault();
    const pid = event.target.id.value
    const pname = event.target.name.value
    const ptype = event.target.type.value
    const pbrand = event.target.brand.value
    const psrc = event.target.src.value
    const pdes = event.target.des.value
    const pprize = event.target.prize.value
    const pofferPize = event.target.offerPize.value


    setAddproduct([...addproduct, { id: pid, name: pname, type: ptype, brand: pbrand, src: psrc, des: pdes, prize: pprize, offerPize: pofferPize, qty: 1 }])
    nav('/Viewproduct')
  }


  console.log(addproduct);



  return (
    <div><h1>Add Product</h1>
      <div className="container d-flex justify-content-center align-items-center vh-50 ">

        <div style={{ width: "50%" }}>

          <form onSubmit={addproducts}>
            <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">Product Id</label>
              <input type="text" id="id" class="form-control" />

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">Name</label>
              <input type="text" id="name" class="form-control" />

            </div>
            <div class="form-outline mb-4">  <label class="form-label" for="form5Example1">Type</label>

              <input type="text" id="type" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">Brand</label>

              <input type="text" id="brand" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">Src</label>

              <input type="text" id="src" class="form-control" />
            </div>  <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">Description</label>

              <input type="text" id="des" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">Price</label>

              <input type="text" id="prize" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form5Example1">OfferPrice</label>

              <input type="text" id="offerPize" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
          </form>
        </div></div>


    </div>
  )
}

export default Addproduct