import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Dropdown,Image }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from './Context';

const Search = () => {
  const { addproduct } = useContext(Mycontext);
  const [search, setSearch] = useState('');
const navSearch=useNavigate()

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = addproduct.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())||
  item.brand.toLowerCase().includes(search.toLowerCase()) ||
  item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      
      <Dropdown >
      
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent border-0'>
      <Form className="d-flex">
      
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          value={search}
          onChange={handleSearchChange}
        />
      </Form>

      </Dropdown.Toggle>

      <Dropdown.Menu align="end"  className='overflow-hidden'>
      {filteredProducts.map((item) => (
        <Dropdown.Item href="#/action-1" className='w-25 ' onClick={()=>navSearch(`/Showproduct/${item.id}`)}>  <Image className='w-25' src={item.src}  /> {item.name}</Dropdown.Item>
      ))}
        
      </Dropdown.Menu>
    </Dropdown>

    </div>
  );
};

export default Search;