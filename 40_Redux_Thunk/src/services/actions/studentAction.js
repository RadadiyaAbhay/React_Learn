import { ADDREJ, ADDREQ, ADDSUC } from "../const"

export const addReq = () =>{
    return{
        type: ADDREQ
    }
}

export const addSuc = (stuData) =>{
    return{
        type: ADDSUC,
        payload : stuData
    }
}

export const addRej = () =>{
    return{
        type: ADDREJ
    }
}

export const mainAction = (stuData) =>{
    return ((dispatch) =>{
        dispatch(addReq())
        setTimeout(()=>{
            dispatch(addSuc(stuData))
        },3000)
    })
}
