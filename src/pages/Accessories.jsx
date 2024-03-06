import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';



function Accessories() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);

  return (
 <>  
 <Header/>
 <div className='text-center p-4 bg-secondary'><h5>Accessories you Need</h5></div>
 <div className='d-flex justify-content-center align-items-center p-3 gap-5 '>
 <div className='ms-5 row ' style={{marginTop:"150px"}} >
      {data?.length>0?
      data?.map((item)=>(<div className='mb-5 col-md-3 col-lg-4 col-sm-1 '>
      <Card style={{ width: '18rem',border:"null",borderRadius:"10px" ,boxShadow:' 4px 2px 3px  2px grey ' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
         <p>{item.description.slice(0,50)}...</p>
         <p className='fw-bolder '> Price : {item.price}</p>
        </Card.Text>
        <div className='d-flex align=items-center justify-content-between'>
          <Button  variant="outline-danger">Remove</Button>
          <Button variant="outline-success"><i class="fa-solid fa-cart-plus"></i>Add</Button>
          </div>
      </Card.Body>
    </Card>
      </div>))
      :
      <p>Loading....</p>}
    </div>
    
 </div>
 <Footer/>
 </>
  )
}

export default Accessories