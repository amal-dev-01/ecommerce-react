import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Quantity = (props) => {
    const[quan,setQuan]=useState(props.obj.qty)
 
    const increment=()=>{
            setQuan(quan+1)
            props.obj.qty=quan+1
       
    }
    console.log(props.obj.qty)
    console.log(props.obj.offerPize)
    const Name=props.obj.name
    

    const decrement=()=>{
        if(quan>1){
        setQuan(quan-1)
        props.obj.qty=quan-1
        }
}

const usebuy=useNavigate()
const buyNow=(total)=>{
    // console.log(Name);
    usebuy(`/Buynow/${total}`)
    

}

  return (
    <div>
<Button variant="primary" onClick={increment}>+</Button>{" "}{" "}
{quan}{' '}{" "}
<Button variant="primary" onClick={decrement}>-</Button><br/>
<p>{(props.obj.offerPize)*(props.obj.qty)}</p>

<Button variant="primary" onClick={()=>buyNow((props.obj.offerPize)*(props.obj.qty),Name)}>Buy Now</Button>
    </div>
  )
}

export default Quantity