import React from 'react'




import { Card } from 'react-bootstrap';
import { useState } from 'react';

import { BASE_URL } from '../services/baseUrl';
import { allServiceAPI } from '../services/allAPI';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';



function Selectedser() {
  const [selected,setSelected] = useState([])

  const getServices = async ()=>{
   const result = await allServiceAPI()
   console.log(result);
   setSelected(result.data)
  }
  
 
  useEffect(()=>{
   getServices()
  } ,[])

  return (


    <>
     <div className='container-fluid'> 
      
      <div className="d-flex">


  <div className="d-flex w-100 justify-content-center align-items-center flex-column p-3">

  <form className="border rounded p-5 shadow mt-5 w-75 " >
  <h2>Selected Services List</h2>
       

<div>
  
    {/* {selected?.length>0?selected.map((item)=>(<div><Card className='rounded-4 bg-transparent border border-0 ' style={{ width: '15rem' }}>
      <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src={item?`${BASE_URL}/uploads/${item.serviceImage}`: null } />
      <Card.Body>
        <Card.Title className='text-center fw-bold'>{item.name}...</Card.Title>
        <Card.Text className='text-center'>
        {item.description.slice(0,50)}...
        </Card.Text>
        <Card.Text className='text-center'>
        {item.amount}
        </Card.Text>
        <div className='d-flex justify-content-center '><Button     className='rounded-5  ' variant="primary">cancel</Button></div>
      </Card.Body>
    </Card></div>)): <p>nothing </p>
      
      
    
    } */}
  
  
</div>











    {/*   <div class="mb-3" >
          <input type="text" class="form-control" placeholder="Username"></input>
       </div>
       <div class="mb-3" >
          <input type="text" class="form-control" placeholder="Email Address"></input>
       </div>
       <div class="mb-3" >
          <input type="text" class="form-control" placeholder="Device Name / Model"></input>
       </div>
    
       <div class="mb-3" >
          <input type="text" class="form-control" placeholder="Phone number"></input>
       </div>
    <hr /> */}
    
      
       
       <div className="mb-3 gap-2 d-flex">
        
          

            

         

         <div> <button className="btn btn-success">Confirm service</button></div>
         <div> <button className="btn btn-outline-danger">Cancel</button></div>
       </div>

  </form>
  </div>
</div>
      </div>
    </>
  )
}

export default Selectedser