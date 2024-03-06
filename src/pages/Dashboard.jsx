import React from 'react'



function Dashboard() {
    
  return (
    <>
        
   <body style={{height:"100vh"}} className='dashboardimg'>
     <div  className=' align-items-center justify-content-center gap-2 container'>
            <h2 className='text-center mb-4 p-5 '><b>welcome to <span style={{fontFamily:"monospace",color:"blue"}}>Repario</span></b></h2>
            <p>For Services First Login to our  webpage</p>
            <a style={{textDecoration:"none"}} href='./login'><button  class="btn  me-2 text-dark d-flex  align-items-center border border-5" type="button"> <i class="fa-solid fa-user me-2  "></i>login</button></a>
           
     </div>
   </body>
    </>
  )
}

export default Dashboard