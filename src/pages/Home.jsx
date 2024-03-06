import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MDBIcon } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
   <>
    <Header/>
        <div className='row dashbg1  p-3 mt-2 mb-3 gap-5'>
          <div className='col-md-2   ms-3 rounded-5' style={{backgroundColor:"white",height:"510px"}}> 
          <div className='mt-3'><img src="https://assets-v2.lottiefiles.com/a/966e57bc-116d-11ee-b500-671de70066ae/SjCZ3QzEk6.gif" alt="" height={"130px"} /></div>
          <div className=' mt-4 rounded-4'>
            <h5 className='text-center p-2' style={{fontFamily:"sans-serif"}}><u>OUR  SERVICES</u></h5>
            <div className=' p-2'>
            <i class="fa-solid fa-mobile-screen-button " ></i>
              <a className='ms-2' href='./mobileservices' style={{textDecoration:"none"}}>Mobile Service</a>
             
            </div>
            <div className=' p-2' >
            <i class="fa-solid fa-laptop"></i>
             <a className='ms-1' href='./laptopservices' style={{textDecoration:"none"}}> Laptop Service</a>
            </div>
            <div className=' p-2'>
            <i class="fa-regular fa-star"></i>
              <a className='ms-1' href='./accessories' style={{textDecoration:"none"}}>Smart Accessories</a>
            </div>
          </div>
          <div className='mt-4'>
          <h6 className='text-uppercase fw-bold mb-4 '>Contact</h6>
          <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
          </div>
          </div>
          <div className='col-md-8'>
            <div className='p-5 '>
              <h1 >WELCOME USER TO <span><b>REPAIRIO</b></span></h1><hr />
             <p>Your Trusted Electronic Repair Partner</p>
             
              <div className='row mt-5 mb-5 ms-5 '>
               <div className='col-md-6 bg-light p-2'>
                <h4>About Repairio</h4>
                <p className='p-2'>At repairio, our mission is to provide top-notch electronic repair services with a commitment to excellence. We strive to bring your devices back to life quickly and efficiently, ensuring minimal downtime and maximum satisfaction.Your satisfaction is our ultimate goal.Our team comprises skilled and certified technicians</p>
               </div>
               <div className='col-md-6  '>
               <Carousel>
      <Carousel.Item>
       <img className='' src="https://media.tenor.com/eLITwz2gTIgAAAAC/iphone-repair-near-me-bloomington-i-phone-xr-repair-bloomington.gif" alt="" />
        <Carousel.Caption>
          <h3>Mobile Services</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='' src="https://media4.giphy.com/media/sbHynSkcCKp8ge37e0/giphy.gif" alt="" />
        <Carousel.Caption>
          <h3>Laptop Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
               </div>
              </div>
              <div className=' p-2 dashbg2 ' style={{textAlign:"center"}}>
                <h5 className='text-center mt-3 ' style={{fontFamily:"monospace"}}><b>Most Trusted Electronic Repair Company</b></h5><hr />
                <div className='d-flex justify-content-center align-items-center gap-3 p-3'>
                  <div className='card p-2 rounded-4  'style={{backgroundColor:"transparent",border:"none"}}>
                 <div className='text-center' style={{fontFamily:"monospace"}} > <i class="fa-regular fa-clock fa-2x"></i>
                 <p className='mt-2'>open <span style={{color:"red"}}>24/7</span> - <br /><span style={{color:"green"}}>Available</span></p></div>
                    <p className='text-center'>We understand the urgency that comes with electronic repairs.</p></div>
                  <div className='card     p-3 rounded-4' style={{backgroundColor:"transparent",border:"none"}}>
                    <div className='text-center  ' style={{fontFamily:"monospace"}}>
                    <i class="fa-regular fa-heart fa-2x"></i>
                    <p className='mt-2'>Satisfaction <span style={{color:"orange"}}>Guaranteed</span></p></div><p className='text-center'>Your satisfaction is our ultimate goal.</p></div>
                  <div className='card  border-2  p-3 rounded-4'style={{backgroundColor:"transparent",border:"none"}}> <div className='text-center' style={{fontFamily:"monospace"}}>
                    <i class="fa-regular fa-user fa-2x"></i>
                    <p className='mt-2'><span style={{color:"blue"}}>Professionally</span> Technicians</p></div><p className='text-center'>Our team comprises skilled and certified technicians</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
   </>
  
  )
}

export default Home