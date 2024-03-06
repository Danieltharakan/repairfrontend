import React, { useEffect } from 'react'
import  {useState}  from 'react'
import  Button  from 'react-bootstrap/Button'
import  Modal  from 'react-bootstrap/Modal'
import { addServiceAPI } from '../services/allAPI'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function AddServices() {
    const [serviceDetails , setServiceDetails]=useState({
        name:"",
        description:"",
        amount:"",
     serviceImage:""

    })
    
    const [show, setShow] = useState(false);
    const [preview,setPreview]=useState("")
    console.log(serviceDetails);
    useEffect(()=>{
        if(serviceDetails.serviceImage){
            setPreview(URL.createObjectURL(serviceDetails.serviceImage))
        }
    },[serviceDetails.serviceImage])
    console.log(preview);
    const handleClose = () =>{setShow(false);
      handleClose1()
    }
    const handleShow = () =>setShow(true);
    const handleClose1=()=>{
       setServiceDetails({
        name:"",
        description:"",
        amount:"",
        serviceImage:""
       })
     setPreview("")
    }
   const handleAdd = async(e)=>{
         e.preventDefault()
         const { name,description,amount,serviceImage} =serviceDetails
         if(!name || !description || !amount || !serviceImage){
            toast.warning('please fill the form Completely')
         }
         else{
             const reqBody = new FormData()
             reqBody.append("name",name) 
             reqBody.append("description",description) 
             reqBody.append("amount",amount) 
             reqBody.append("serviceImage",serviceImage) 

             const reqHeader = {
                "Content-Type":"multipart/form-data"
             }

            const result = await addServiceAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
              toast.success('service successfully added')
                handleClose()
            }
            else{
                console.log(result);
                toast.error(result.response.data)
            }
         }
    }
  return (
    <>
 <Button variant="success" onClick={handleShow}>
    Add Project
 </Button>

 <Modal
   show={show}
   onHide={handleClose}
   backdrop="static"
   keyboard={false}
   size='lg'
   centered
   >
   <Modal.Header closeButton>
    <Modal.Title>Service Details</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <div className='row'>
        <div className='col-lg-6'>
         <label>
            <input type='file' style={{display:"none"}} onChange={(e)=>{setServiceDetails({...serviceDetails,serviceImage:e.target.files[0]})}}/>
            <img className='img-fluid' src={preview?preview:"https://static.vecteezy.com/system/resources/thumbnails/002/058/031/small/picture-icon-photo-symbol-illustration-for-web-and-mobil-app-on-grey-background-free-vector.jpg"} alt="no image" />
         </label>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column'>
           <div className='mb-3 mt-3 w-100'>
               <input type="text" className='form-control' placeholder='Service Name' value={serviceDetails.name} onChange={(e)=>setServiceDetails({...serviceDetails,name:e.target.value})} />
           </div>
           <div className='mb-3 w-100'>
             <input type='text' className='form-control' placeholder='Description'  value={serviceDetails.description} onChange={(e)=>setServiceDetails({...serviceDetails,description:e.target.value})} />
           </div>
           <div className='mb-3 w-100'>
             <input type='text' className='form-control' placeholder='Repair Amount'  value={serviceDetails.amount} onChange={(e)=>setServiceDetails({...serviceDetails,amount:e.target.value})} />
           </div>
        </div>
    </div>
   </Modal.Body>
   <Modal.Footer>
    <Button variant='primary' onClick={handleClose1}>Cancel</Button>
    <Button variant='success' onClick={handleAdd}>Add</Button>
   </Modal.Footer>
   </Modal>
  <ToastContainer autoClose={2000} theme='colored' position='top-center'/>
    </>
  )
}

export default AddServices