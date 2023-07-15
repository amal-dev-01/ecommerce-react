import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Mycontext } from './Context';
import { useNavigate } from 'react-router-dom';




const Register = () => {

  const { data, setData } = useContext(Mycontext)
  const nav = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    const Fname = event.target.name.value
    const Email = event.target.email.value
    const Password = event.target.password.value
    // console.log(Fname);
    // console.log(Email);
    // console.log(Password);
    setData([...data, { fname: Fname, email: Email, password: Password }])
    nav('/Login')
  }
console.log(data);

  return (
    <div>
      <h2>Register</h2>
      <div className="container d-flex justify-content-center align-items-center vh-50 " style={{padding:"10vh"}}>
      <form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            id='name'
            required
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            id='email'
            required
            style={{ width: '500px' }}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            id='password'
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>

        <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
          Register
        </Button>
        {/* <Button onClick={()=>nav('/Login')}>Login</Button> */}


      </form>
     </div>
    </div>
  );
};

export default Register;

