import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import { Mycontext } from './Context';
import { Dropdown } from 'react-bootstrap';



const NavbarMain = () => {

  const {count,setCart,setLogin,login,setCount,username,setUsername}=useContext(Mycontext)
  // const name = data.map((item) => item.fname);
   const user=username

   console.log(user);

  const logout=()=>{
   setLogin(a=>!a)
   setUsername([])
   setCart([])
   setCount(0)
   navHome('/') 
  }
 
  const navHome=useNavigate()
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><img src="https://img.icons8.com/?size=512&id=39712&format=png" width={50} alt='Cart'/>Shoe Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link   onClick={()=>navHome('/')}>Home</Nav.Link>
            <Nav.Link  onClick={()=>navHome('/Men')}>Men</Nav.Link>
            <Nav.Link  onClick={()=>navHome('/Women')}>Women</Nav.Link>
            <Nav.Link  onClick={()=>navHome('/Sports')}>Sports</Nav.Link>
            <Nav.Link onClick={()=>navHome('/Allproducts')} >All Products</Nav.Link>
          </Nav>
          <Nav>
          <Nav>
            <Search/>
      
          </Nav>
          <Nav.Link  onClick={()=>navHome('/Carts')}><img src="https://img.icons8.com/?size=512&id=G7PELQpF8j6g&format=png" width={25} alt='Cart'/> <sup>{count}</sup></Nav.Link>
          
           <Dropdown >
           <Dropdown.Toggle variant='none'>
     <img src="https://img.icons8.com/?size=512&id=98957&format=png" width={25} alt='Loginout'/></Dropdown.Toggle>
      <Dropdown.Menu>
      {
      login == true?
    <Nav.Link  onClick={logout}><Nav.Link> {user}</Nav.Link><img src="https://img.icons8.com/?size=512&id=26211&format=png" width={25} alt='Loginout'/> Logout</Nav.Link>:
    <Nav.Link  onClick={()=>navHome('/Login')}><img src="https://img.icons8.com/?size=512&id=98957&format=png" width={25} alt='Login'/>Login</Nav.Link>
    }

      </Dropdown.Menu>
    </Dropdown> 
           

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  </div>
  )
}

export default NavbarMain