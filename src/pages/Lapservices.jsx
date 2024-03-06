import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Lapservices() {
  return (
    <div className='servicelapbg'  style={{height:"100vh"}}> 
    <div className='servicelapbg2' style={{height:"100vh"}}> 
    <h1 className='fw-bold text-center p-4' style={{fontFamily:"sans-serif"}}> SERVICES</h1>
    <div className='  container d-flex justify-content-center align-items-center gap-5'>
    <Card className='rounded-4 bg-transparent border border-0 ' style={{ width: '15rem' }}>
     <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src="https://www.thesun.co.uk/wp-content/uploads/2023/06/d3a3aca5-7ed9-43c0-b9b7-2636f4df6d96.jpg" />
     <Card.Body>
       <Card.Title className='text-center fw-bold'>Display Failure</Card.Title>
       <Card.Text className='text-center'>
         Our experts repair any mobile display that looks active but does not respond to any touch commands
       </Card.Text>
       <div className='d-flex justify-content-center '><Button className='rounded-5  ' variant="primary">Select</Button></div>
     </Card.Body>
   </Card>
   <Card className='rounded-4 bg-transparent border border-0  ' style={{ width: '15rem' }}>
     <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src="https://miro.medium.com/v2/resize:fit:800/0*6fM51CjW7GknD1dA.jpg" />
     <Card.Body>
       <Card.Title className='text-center fw-bold'>Signal/Charging Issues</Card.Title>
       <Card.Text className='text-center'>
         From minor charging issues to mojor signal detection faults, we fix all your mobile worries in on time
         
       </Card.Text>
       <div className='d-flex justify-content-center '><Button className='rounded-5  ' variant="primary">Select</Button></div>
     </Card.Body>
   </Card>
   <Card className='rounded-4 bg-transparent border border-0 ' style={{ width: '15rem' }}>
     <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src="https://anchor-precisiongroup-uat-web.s3.ap-southeast-2.amazonaws.com/prancentral/media/blogs/5-ways-to-easily-damage-your-phone.jpg?ext=.jpg" />
     <Card.Body>
       <Card.Title className='text-center fw-bold'>Damaged Mobile</Card.Title>
       <Card.Text className='text-center'>
         Damaged screen to broken integral part , we cover all major damages that can strive even from minor falls.
       </Card.Text>
       <div className='d-flex justify-content-center '><Button className='rounded-5  ' variant="primary">Select</Button></div>
     </Card.Body>
   </Card>
   <Card className='rounded-4 bg-transparent border border-0 ' style={{ width: '15rem' }}>
     <Card.Img className='p-2 rounded-4'  style={{ height:"250px" }} variant="top" src="https://as1.ftcdn.net/v2/jpg/02/02/48/32/1000_F_202483278_2yo0jrsMR8TnTCtMjdzL2dJm77cCyo2r.jpg" />
     <Card.Body>
       <Card.Title className='text-center fw-bold'>Motherboard Replacement</Card.Title>
       <Card.Text className='text-center'>
       We assist any motherboard repair or replacement service for all mobile phones at reasonable rates.
       
       </Card.Text>
       <div className='d-flex justify-content-center '><Button className='rounded-5  ' variant="primary">Select</Button></div>
     </Card.Body>
   </Card>

    </div>

    </div>
     </div>

  )
}

export default Lapservices