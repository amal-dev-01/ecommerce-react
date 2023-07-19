
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componenet/Home';
import Register from './Componenet/Register';
import { Route,Routes } from 'react-router-dom';
import { Mycontext } from './Componenet/Context';
import { useState } from 'react';
import Login from './Componenet/Login';
import Men from './Componenet/Men';
import {Product} from './Componenet/Product'
import Showproduct from './Componenet/Showproduct';
import Carts from './Componenet/Carts';
import Buy from './Componenet/Buy';
import Women from './Componenet/Women';
import Admin from './Componenet/Admin';
import Viewproduct from './Componenet/Viewproduct';
import Addproduct from './Componenet/Addproduct';
import Editproduct from './Componenet/Editproduct';
import Adminmen from './Componenet/Adminmen';
import Userdetail from './Componenet/Userdetail';
import Adminwomen from './Componenet/Adminwomen';
import Sports from './Componenet/Sports'
import Allproducts from './Componenet/Allproducts';
import Adminsport from './Componenet/Adminsport';


function App() {

const[data,setData]=useState([]);
const [cart,setCart]=useState([]);
const[count,setCount]=useState(0)
const[login,setLogin]=useState(false)
const [username,setUsername]=useState([])
const [totalPrize, setTotalPrize] = useState(0);
const [addproduct,setAddproduct]=useState(Product)



  return (
    <div className="App">
    <Mycontext.Provider value={{data,setData,Product,cart,setCart,count,setCount,totalPrize, setTotalPrize,login,setLogin,username,setUsername,addproduct,setAddproduct}}>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Registration" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Men" element={<Men/>}/>
    <Route path="/Women" element={<Women/>}/>
    <Route path="/Showproduct/:id" element={<Showproduct/>}/>
    <Route path='/Carts' element={<Carts/>}/>
    <Route path='/Buynow/:total' element={<Buy/>}/>
    <Route path='/Sports' element={<Sports/>}/>
    <Route path='Allproducts' element={<Allproducts/>}/>
    <Route path='/Admin' element={login==true  ?<Admin/>:<Login/>}/>

    <Route element={<Admin/>}>
    <Route path='/Viewproduct' element={<Viewproduct/>}/>
    <Route path='/Addproduct' element={<Addproduct/>}/>
    <Route path='/Edit/:id' element={<Editproduct/>}/>
    <Route path='/Adminmen' element={<Adminmen/>}/>
    <Route path='/Adminsport' element={<Adminsport/>}/>
    <Route path='/Adminwomen' element={<Adminwomen/>}/>
    <Route path='/Userdetail' element={<Userdetail/>}/>
    </Route>
    
    </Routes>
    
    </Mycontext.Provider>
  
    
     
    </div>
  );
}

export default App;
