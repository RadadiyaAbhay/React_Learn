import axios from "axios"
import { CREATEADMINSREJ, CREATEADMINSREQ, DELETEADMINSREJ, DELETEADMINSREQ, DONEEDITADMINSREJ, DONEEDITADMINSREQ, EDITADMINSREJ, EDITADMINSREQ, EDITADMINSRES, ADMINSREJ, ADMINSREQ, ADMINSRES } from "../const"

export const adminsReq = () => {
    return {
        type: ADMINSREQ,
    }
}

export const adminsRes = (data) => {
    return {
        type: ADMINSRES,
        payload: data
    }
}

export const adminsRej = (err) => {
    return {
        type: ADMINSREJ,
        payload: err
    }
}
export const showAdmins = () => {
    return dispatch => {
        dispatch(adminsReq())
        axios.get('http://localhost:3000/admins').then((data) => { dispatch(adminsRes(data.data)) }).catch((err) => { dispatch(adminsRej(err.message)) })
    }
}


export const deleteAdminsReq = () => {
    return {
        type: DELETEADMINSREQ
    }
}
export const deleteAdminsRej = (err) => {
    return {
        type: DELETEADMINSREJ,
        payload: err
    }
}
export const deleteAdmins = (id) => {
    return dispatch => {
        dispatch(deleteAdminsReq())
        axios.delete(`http://localhost:3000/admins/${id}`).then(() => { dispatch(showAdmins()) }).catch((err) => { dispatch(deleteAdminsRej(err.message)) })
    }
}

export const editAdminsReq = () => {
    return {
        type: EDITADMINSREQ,
    }
}

export const editAdminsRes = (data) => {
    return {
        type: EDITADMINSRES,
        payload: data
    }
}

export const editAdminsRej = (err) => {
    return {
        type: EDITADMINSREJ,
        payload: err
    }
}
export const editAdmins = (id) => {
    return dispatch => {
        dispatch(editAdminsReq())
        axios.get(`http://localhost:3000/admins/${id}`).then((data) => { dispatch(editAdminsRes(data.data))}).catch((err) => { dispatch(editAdminsRej(err.message)) })
    }
}
 
export const doneEditAdminsReq = () => {
    return {
        type: DONEEDITADMINSREQ
    }
}

export const doneEditAdminsRej = (err) => {
    return {
        type: DONEEDITADMINSREJ,
        payload: err
    }
}
export const doneEditAdmins = (id, data) => {
    return dispatch => {
        dispatch(doneEditAdminsReq())
        axios.put(`http://localhost:3000/admins/${id}`, data).then(() => { dispatch(showAdmins()) }).catch((err) => { dispatch(doneEditAdminsRej(err.message)) })
    }
}
export const createAdminsReq = () => {
    return {
        type: CREATEADMINSREQ
    }
}

export const createAdminsRej = (err) => {
    return {
        type: CREATEADMINSREJ,
        payload: err
    }
}
export const createAdmins = (data) => {
    return dispatch => {
        dispatch(createAdminsReq())
        axios.post(`http://localhost:3000/admins`, data).then(() => { dispatch(showAdmins()) }).catch((err) => { dispatch(createAdminsRej(err.message)) })
    }
}