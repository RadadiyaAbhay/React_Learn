import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../appConfig";
import { ADMINLOGINREJ, ADMINLOGINREQ, ADMINLOGINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SINGLEADMINREJ, SINGLEADMINREQ, SINGLEADMINRES } from "../const"
import { signInWithEmailAndPassword ,signOut } from "firebase/auth";


export const adminLoginReq = ()=>{
    return{
        type:ADMINLOGINREQ
    }
}
export const adminLoginRes = (data)=>{
    return{
        type:ADMINLOGINRES,
        payload : data
    }
}
export const adminLoginRej = (err)=>{
    return{
        type:ADMINLOGINREJ,
        payload:err
    }
}
export const adminLogin = (data) =>{
    return async dispatch =>{
        dispatch(adminLoginReq());
        await signInWithEmailAndPassword(auth, data.username, data.password).then((res)=>{
            dispatch(singleGetAdmin(res.user.uid))
        }).catch((err)=>{
            dispatch(adminLoginRej(err))
        })
    }
}
export const signOutReq = () => {
    return {
        type: SIGNOUTREQ
    }
}
export const signOutRej = (err) => {
    return {
        type: SIGNOUTREJ,
        payload: err
    }
}
export const signOutRes = () => {
    return {
        type: SIGNOUTRES
    }
}
export const signOutAction = () => {
    return async dispatch => {
        dispatch(signOutReq())
        await signOut(auth).then(() => {
            dispatch(signOutRes())
        }).catch((err) => {
            dispatch(signOutRej(err))
        })
    }
}

export const singleAdminReq = () => {
    return {
        type: SINGLEADMINREQ
    }
}

export const singleAdminRes = (data) => {
    return {
        type: SINGLEADMINRES,
        payload: data
    }
}

export const singleAdminRej = (err) => {
    return {
        type: SINGLEADMINREJ,
        payload: err
    }
}
export const singleGetAdmin = (id) => {
    return async dispatch => {
        dispatch(singleAdminReq())
        await getDoc(doc(db, "users", `${id}`)).then((res) => {
            let newPro = { id: res.id, ...res.data() }
            dispatch(singleAdminRes(newPro))
            if(newPro.isRole == 'admin'){
                dispatch(adminLoginRes(res.email))
            }else{
                dispatch(adminLoginRej({code : "Unauthorised Login"}))
            }
        }).catch((err) => {
            dispatch(singleAdminRej(err))
        })
    }
}