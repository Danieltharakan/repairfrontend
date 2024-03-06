import React from 'react'


function ListofServices() {
  return (
    <div className='p-5 card border-5 m-5 border-dark '>
    
        <h2>List of Services</h2>
         <table class="table  table-border border-5  border-dark" >
         
        <tr >
          <th class="border-2  text-center " style={{backgroundColor:"grey"}}>Order_ID</th>
          <th class="border-2  text-center" style={{backgroundColor:"grey"}}>Customer</th>
          <th class="border-2  text-center" style={{backgroundColor:"grey"}}>Contact</th>
          <th class="border-2  text-center" style={{backgroundColor:"grey"}}>Device</th>
          <th class="border-2  text-center" style={{backgroundColor:"grey"}}>Service</th>
          <th class="border-2  text-center" style={{backgroundColor:"grey"}}>Accessories</th>
          <th class="border-2  text-center" style={{backgroundColor:"grey"}}>Action</th>
       
        
        </tr>
        <tr >
          <td class="border-2  text-center">rcbv</td>
          <td class="border-2  text-center">ftiti</td>
          <td class="border-2  text-center">iytyi7</td>
          <td class="border-2  text-center">7tit7i</td>
          <td class="border-2  text-center">7tit7i</td>
          <td class="border-2  text-center">7tit7i</td>
          <td class="border-2  text-center p-3">
          
              <a  class="btn btn-outline-danger ms-3"><i class="fa-solid fa-trash"></i></a>
          </td>
        </tr>
         </table>
     
    
    </div>
  )
}

export default ListofServices