import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerfunc = async(data, header) => {
    return await commonRequest("POST", `${BASE_URL}/user/register`, data, header)
}

export const userGetFunc = async(search, gender, status, sort, page) => {
    return await commonRequest("GET", `${BASE_URL}/user/details?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`,"");
}

export const singeleUserGetFunc = async(id) => {
    return await commonRequest("GET", `${BASE_URL}/user/${id}`,"");
}

export const editFunc = async (id, data, header) => {
    return await commonRequest("PATCH", `${BASE_URL}/user/edit/${id}`, data, header)
}

export const deletfunc = async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/user/delete/${id}`,{});
}

export const statusChangeFunc = async(id, data)=>{
    return await commonRequest("PUT",`${BASE_URL}/user/status/${id}`,{data});
}

export const exportToCsv = async() => {
    return await commonRequest("GET",`${BASE_URL}/userexports`,""); 
}