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