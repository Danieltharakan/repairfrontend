import React, { useEffect, useState } from 'react'
import { allServiceAPI } from '../services/allAPI';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../services/baseUrl';

import addToSelected from '../redux/slices/selectedSlice'
import { useSelector } from 'react-redux';
function Services() {
  const selected=useSelector((state)=>state.selectedReducer)
  const [service,setService] = useState([])

  const getServices = async ()=>{
  const result = await allServiceAPI()
  console.log(result);
  setService(result.data)
  }
  

  const [selectedServiceId,setSelectedServiceId] = useState()
  const UploadSeletedService = async(id)=>{
    //console.log(id);
    /* getServices()
    const result = await allServiceAPI() */
    //const serv = 
    if(service.find(item=>item._id === id)){
      setSelectedServiceId(id)
    }
    handlePushAddedservice()
    console.log(selectedServiceId);
  }
  const handlePushAddedservice = async()=>{
    
  const result = await addToSelected(selectedServiceId)
  console.log(result);
  if(result.status===200){
    alert('service successfully added')
  }
  else{
      console.log(result);
      alert(result.response.data)
  }
}
  
 useEffect(()=>{
  getServices()
 },[])


 
  return (
   
     <div className='servicebg'  style={{height:"100vh"}}> 
     <div className='servicebg2' style={{height:"100vh"}}> 
    <div className='d-flex justify-content-center align-items-center gap-5'>
       <div><h1 className='fw-bold text-center p-4' style={{fontFamily:"sans-serif"}}>OUR SERVICES</h1></div>
      <div> <a href='./selectedservices'><button className='btn btn-dark btn-outline-primary rounded-5 fw-bold  p-3'>Selected Sevices {selected.length}</button></a></div>
    </div>
     <div className='  container d-flex justify-content-center align-items-center '>
    {service?.length>0?
    service?.map((item)=>( <div><Card className='rounded-4 bg-transparent border border-0 ' style={{ width: '15rem' }}>
    <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src={item?`${BASE_URL}/uploads/${item.serviceImage}`: null } />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>{item.name}</Card.Title>
      <Card.Text className='text-center'>
      {item.description}
      </Card.Text>
      <Card.Text className='text-center'>
      {item.amount}
      </Card.Text>
      <div className='d-flex justify-content-center '>
        <Button  className='rounded-5  ' variant="success" onClick={()=>{UploadSeletedService(item._id)}}>Select service</Button></div>
    </Card.Body>
  </Card></div>))
     : <p>Add Services</p>
   }
 
     </div>

     </div>
      </div>

    
  )
  
}


export default Services