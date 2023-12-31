import { CREATEEMP, DELETEEEMP, EDITEEMP, GETDATA, NEWEDITEEMP } from "../const"

export const createEmpAction = (data) =>{
    return{
        type : CREATEEMP,
        payload : data
    }
}
export const deleteEmpAction = (id) =>{
    return{
        type : DELETEEEMP,
        payload : id
    }
}
export const editEmpAction = (id) =>{
    return{
        type : EDITEEMP,
        payload : id
    }
}
export const newEditEmpAction = (data) =>{
    return{
        type : NEWEDITEEMP,
        payload : data
    }
}
export const getData = (data) =>{
    return{
        type : GETDATA,
        payload : data
    }
}