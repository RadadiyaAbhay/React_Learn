import { CREATEPRO } from "../const"

export const createPro = (data) =>{
    return{
        type: CREATEPRO,
        payload: data
    }
}