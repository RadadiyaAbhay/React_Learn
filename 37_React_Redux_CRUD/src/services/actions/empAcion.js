import { CREATEEMP } from "../const"

export const createEmpAction = (data) =>{
    return{
        type : CREATEEMP,
        payload : data
    }
}