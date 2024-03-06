import React from 'react'

function Laptop() {
  return (
    <div>
      
      <div className='laptopbg1 ' style={{height:"100vh"}}>
         <div><h4 className='p-2'>Repairio Laptop Services</h4>
         <nav className='d-flex ms-5 p-4 align-items-center gap-5 ' style={{backgroundColor:"transparent",fontFamily:"sans-serif"}}>
          
        <a href='' style={{textDecoration:"none"}}><h5 className='fw-bold text-dark'>Home</h5></a>
        <a href='' style={{textDecoration:"none"}}><h5 className='fw-bold text-dark'>Services</h5></a>
        <a href='' style={{textDecoration:"none"}}><h5 className='fw-bold text-dark'>Gallery</h5></a>
      </nav>
         </div>
         <div className=' ms-5 p-5 align-items-center gap-5 '>
          <h4 className='fw-bold' style={{fontFamily:"cursive"}}>
            Trusted and Efficient <br />Laptop Repair and Services
          </h4>
          <a href='./servicelap'><button className='btn  mt-3 rounded-5 p-2' style={{backgroundColor:"lightgrey",fontFamily:"cursive"}}><b>Enquire Now</b></button></a>
         </div>
         
      </div>
    </div>
  )
}

export default Laptop