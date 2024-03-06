import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../services/baseUrl';



function ServiceCard({serviceinfo}) {


 

  return (
    <div><Card className='rounded-4 bg-transparent border border-0 ' style={{ width: '15rem' }}>
    <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src={serviceinfo?`${BASE_URL}/uploads/${serviceinfo.serviceImage}`: null } />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>{serviceinfo.name}</Card.Title>
      <Card.Text className='text-center'>
      {serviceinfo.description}
      </Card.Text>
      <Card.Text className='text-center'>
      {serviceinfo.amount}
      </Card.Text>
      <div className='d-flex justify-content-center '><Button  className='rounded-5  ' variant="primary">Select</Button></div>
    </Card.Body>
  </Card></div>
  )
}

export default ServiceCard