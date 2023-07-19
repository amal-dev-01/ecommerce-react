import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Mycontext } from './Context'
import { Dropdown } from 'react-bootstrap'
import './Homestyle.css'

const Admin = () => {
    const navProduct=useNavigate()
    const{data,setLogin}=useContext(Mycontext)
    const logout=()=>{
      setLogin(false)
      navProduct("/")
    }
  return (
    <div>
<h2>Admin Page</h2>
<div style={{ display: 'flex', height: "100vh", fontSize: "14px" }}>
  <div style={{ width: "20%", backgroundColor: "#f2f2f2", padding: "10px" }}>
  <button className='admin-style' onClick={() => navProduct('/Userdetail')}>View Users</button>
    <button className='admin-style' onClick={() => navProduct('/Viewproduct')}>All Products</button>
    <button className='admin-style' onClick={() => navProduct('/Addproduct')}>Add Products</button>
    <Dropdown >
      <Dropdown.Toggle  id="dropdown-basic" className='admin-style'>
        Type
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item  onClick={()=>navProduct('/Adminmen')} >Men</Dropdown.Item>
        <Dropdown.Item  onClick={()=>navProduct('/Adminwomen')}>Women</Dropdown.Item>
        <Dropdown.Item  onClick={()=>navProduct('/Adminsport')}>Sports</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   <button onClick={logout}>LogOut</button>
  </div>
  <div style={{ width: '80%' }}>
   <Outlet/> 
  </div>
</div>

    </div>
  )
}

export default Admin