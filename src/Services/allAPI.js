import { Base_Url } from "./baseURL";
import { commonAPI } from "./commonAPI";



export const addItemAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${Base_Url}/user/add`, reqBody, reqHeader);
 };

 //  view category
export const getAllAPI = async (reqHeader) => {
    return await commonAPI("GET", `${Base_Url}/user/task`, "", reqHeader)
 }

 //  delete 
export const deleteItemAPI = async (Id, reqHeader) => {
    return await commonAPI("DELETE", `${Base_Url}/user/remove/${Id}`, {}, reqHeader)
 }