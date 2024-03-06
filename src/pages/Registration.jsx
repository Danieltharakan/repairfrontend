import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import "./ladingpage.css"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router';

function Registration() {
  const [userData , setUserData] = useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userData);
  //navigate
  const navigate = useNavigate()
//register function
const handleRegister = async(e)=>{
  e.preventDefault()
  const {username,email,password} = userData
  if(!username || !email || !password){
    alert('please fill the form completely')
  }
  else{
    const result = await registerAPI(userData)
    /* console.log(result.data); */
    if(result.status === 200 ){
      alert(`${result.data.username} is successfully registered`)
      setUserData({
        username:"",
        email:"",
        password:""
      })
     //move to login
     navigate('/login')
    }
    else{
      alert(result.response.data)
    }
  }
}


  return (
    <div>
       <body  className='landing'>
      
      <Navbar className='nav ' style={{height:"50px"}}>
    
       <h1 className='text-dark p-5 m-2' style={{fontFamily:"fantasy"}}><b>  <u>REPAIRIO  Services </u></b></h1>
      </Navbar>
 
      <div>
       <div className="row form4bg p-5 rounded-5 container ms-5 mt-3  d-flex align-items-center justify-content-center">
         <div className="col-md-5  p-2 rounded-4 formbg me-5"  >
           <h3 className='text-center  ' style={{fontFamily:"sans-serif",color:"ButtonFace"}}>Welcome New User</h3>
         <Form className='p-4'>
         <Form.Group as={Row} className="mb-3" >
         <Form.Label className='text-light ' column sm="3">
           UserName
         </Form.Label>
         <Col sm="8" className='' >
           <Form.Control className='ms-3 rounded-4 ' type="text" placeholder="Username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}  />
         </Col>
       </Form.Group>
         <Form.Group as={Row} className="mb-3 mt-4" >
         <Form.Label className='text-light' column sm="3">
           Email
         </Form.Label>
         <Col sm="8" className='' >
           <Form.Control className='ms-3 rounded-4 ' type="text" placeholder="Email Address" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
         </Col>
       </Form.Group>
 
       <Form.Group as={Row} className="mb-3 mt-4" >
         <Form.Label className='text-light'  column sm="3">
           Password
         </Form.Label>
         <Col sm="8">
           <Form.Control className='ms-3 rounded-4 ' type="password" placeholder="Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
         </Col>
       </Form.Group>
     </Form>
     <button onClick={handleRegister}  className='btn btn-success rounded-4 w-50 mb-3  ' style={{fontFamily:"sans-serif",margin:"0px 100px"}}><b>Register</b></button>
           </div>
         <div className="col-md-5 form3bg ms-1  text-light p-3">
           <h2 style={{fontFamily:"fantasy"}} ><b>Welcome To REPAIRIO</b></h2>
           <h5><b>Already have an Account</b></h5>
           <p className='p-2 text-light'> At REPAIRIO , we understand the pivotal role that electronic devices play in your daily life. Whether it's your smartphone, laptop, gaming console, or any other electronic gadget, we know how frustrating it can be when they malfunction or break down. That's where we come in!
         </p>
          <a href='./login'> <button className='form2bg btn text-light rounded-5 w-30 mb-5  ' style={{fontFamily:"sans-serif"}}><b>Login</b></button></a>
           </div>
       </div>
      </div>
   
      
    </body>
   
    </div>
  )
}

export default Registration