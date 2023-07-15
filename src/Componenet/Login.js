import React, { useContext } from 'react'
import { Mycontext } from './Context'
import { Form,Button,Col} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const nav=useNavigate()
    const {data,setLogin,setUsername}=useContext(Mycontext)
    // console.log(data);
//     const email = data.map(({ email }) => ({ email }));
// console.log(email)
// const password = data.map(({ password }) => ({ password }));
// console.log(password)
   
   

    const handleSubmit = (event) => {
        event.preventDefault();
       const Email1=event.target.email1.value
       const Password1=event.target.password1.value
       setLogin(true)
       
      //  console.log(Email1);
      //  console.log(Password1);
       
      if(Email1=='admin@gmail.com' && Password1=='admin')
      {
        nav('/Admin')
      }
      else
      {
      const values=data.filter((x)=>{
      return  x.email===Email1 && x.password===Password1})
       const userName=values.map((item)=>item.fname)
  
       if(values.length>0){
        nav('/')
        alert("Sucessfully login")
        setUsername(userName)
       }else{
        alert("User not exist")
       }

      }

     }




  return (
    <div><h2>Login</h2>
    <div>
    <div className="container d-flex justify-content-center align-items-center vh-50 " style={{padding:"10vh"}}>
    <form  onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            id='email1'
            required
            style={{ width: '300px' }}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            id='password1'
            required
          /><br/>
           <Col>
           <Link to='/Registration'>Register</Link>
          </Col>
         <br/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={()=>nav("/")} style={{ marginRight: '10px' }}>
        Home
        </Button>
        
        <Button variant="primary" type="submit">
        Sign in
        </Button>
        
       

        </form>
    </div>
    </div>
    
    </div>

  )

}

export default Login