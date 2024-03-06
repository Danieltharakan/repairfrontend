import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


//register api
export const registerAPI = async(user)=>{
return    await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login api
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//add service
export const addServiceAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/service/add`,reqBody,reqHeader)
}

//all  services
export const allServiceAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/services/all-service`)
}

//add to selected services
export const addToSelected = async(reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/selected/services`,reqBody)
}