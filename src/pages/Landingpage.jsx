import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import "./ladingpage.css"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { loginAPI } from '../services/allAPI';
import { useNavigate } from 'react-router';



function Landingpage(userData) {
  const [userValue , setUserValue] = useState({
    
    email:"",
    password:""
  })
  console.log(userValue);
   //navigate
   const navigate = useNavigate()

 //login function
 const handleLogin = async(e)=>{
   e.preventDefault()
   const{email,password} = userValue
   if(!email || !password){
    alert('please fiil the form completely')
   }
   else{
      const result=await loginAPI(userValue)
    /*   console.log(result.data); */
    if(result.status ===200 ){
      alert('login successful')
      sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token",result.data.token)

      setUserValue({
        username:"",
        email:"",
        password:""
       
      })
      navigate('/home')
    }
    else{
      alert(result.response.data)
    }
   }
 }
  return (
   <body  className='landing'>
      
     <Navbar className='nav ' style={{height:"50px"}}>
   
      <h1 className='text-dark p-5 m-2' style={{fontFamily:"fantasy"}}><b>  <u>REPAIRIO  Services </u></b></h1>
     </Navbar>

     <div>
      <div className="row form4bg p-5 rounded-5 container ms-5 mt-3  d-flex align-items-center justify-content-center">
        <div className="col-md-5  p-2 rounded-4 formbg me-5" >
          <h3 className='text-center  ' style={{fontFamily:"sans-serif",color:"ButtonFace"}}>Welcome User</h3>
        <Form className='p-4'>
        <Form.Group as={Row} className="mb-3" >
        <Form.Label className='text-light' column sm="2">
          Email
        </Form.Label>
        <Col sm="10" className='' >
          <Form.Control className='ms-3 rounded-4 ' type="text" placeholder="Email Address" value={userValue.email}  onChange={(e)=>setUserValue({...userValue,email:e.target.value})} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 mt-4" >
        <Form.Label className='text-light'  column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control className='ms-3 rounded-4 ' type="password" placeholder="Password" value={userValue.password}  onChange={(e)=>setUserValue({...userValue,password:e.target.value})} />
        </Col>
      </Form.Group>
    </Form>
    <button onClick={handleLogin}  className='btn btn-success rounded-4 w-50 mb-3  ' style={{fontFamily:"sans-serif",margin:"0px 100px"}}><b>Login</b></button>
          </div>
        <div className="col-md-5 form3bg ms-1  text-light p-3">
          <h2 style={{fontFamily:"fantasy"}} ><b>Welcome To REPAIRIO</b></h2>
          <h5><b>didn't Have An Account</b></h5>
          <p className='p-2 text-light'> At REPAIRIO , we understand the pivotal role that electronic devices play in your daily life. Whether it's your smartphone, laptop, gaming console, or any other electronic gadget, we know how frustrating it can be when they malfunction or break down. That's where we come in!
        </p>
         <a href='./registration'> <button className='form2bg btn text-light rounded-5 w-30 mb-5  ' style={{fontFamily:"sans-serif"}}><b>Sign-Up</b></button></a>
          </div>
      </div>
     </div>
  
     
   </body>
  
  )
}

export default Landingpage