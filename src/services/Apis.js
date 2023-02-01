import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerfunc = async(data, header) => {
    return await commonRequest("POST", `${BASE_URL}/user/register`, data, header)
}

export const userGetFunc = async() => {
    return await commonRequest("GET", `${BASE_URL}/user/details`,"");
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