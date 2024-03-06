import { useEffect, useState } from "react"

const useFetch= (url)=>{
const [data,setData]=useState(null)
//CAlls the fetch when the page loads
    useEffect(()=>{
        //fetch returnspromise
        fetch(url).then(res=>{
            //.json () to remove unneccessary data
            res.json().then(result=>{
                setData(result.products)
                
            })
        })
    },[])
    return data
}
export default useFetch;