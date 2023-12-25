import axios from "axios"
import { CREATEUSERSREJ, CREATEUSERSREQ, DELETEUSERSREJ, DELETEUSERSREQ, DONEEDITUSERSREJ, DONEEDITUSERSREQ, EDITUSERSREJ, EDITUSERSREQ, EDITUSERSRES, USERSREJ, USERSREQ, USERSRES } from "../const"

export const usersReq = () => {
    return {
        type: USERSREQ,
    }
}

export const usersRes = (data) => {
    return {
        type: USERSRES,
        payload: data
    }
}

export const usersRej = (err) => {
    return {
        type: USERSREJ,
        payload: err
    }
}
export const showUsers = () => {
    return dispatch => {
        dispatch(usersReq())
        axios.get('http://localhost:3000/users').then((data) => { dispatch(usersRes(data.data)) }).catch((err) => { dispatch(usersRej(err.message)) })
    }
}


export const deleteUsersReq = () => {
    return {
        type: DELETEUSERSREQ
    }
}
export const deleteUsersRej = (err) => {
    return {
        type: DELETEUSERSREJ,
        payload: err
    }
}
export const deleteUsers = (id) => {
    return dispatch => {
        dispatch(deleteUsersReq())
        axios.delete(`http://localhost:3000/users/${id}`).then(() => { dispatch(showUsers()) }).catch((err) => { dispatch(deleteUsersRej(err.message)) })
    }
}

export const editUsersReq = () => {
    return {
        type: EDITUSERSREQ,
    }
}

export const editUsersRes = (data) => {
    return {
        type: EDITUSERSRES,
        payload: data
    }
}

export const editUsersRej = (err) => {
    return {
        type: EDITUSERSREJ,
        payload: err
    }
}
export const editUsers = (id) => {
    return dispatch => {
        dispatch(editUsersReq())
        axios.get(`http://localhost:3000/users/${id}`).then((data) => { dispatch(editUsersRes(data.data))}).catch((err) => { dispatch(editUsersRej(err.message)) })
    }
}
 
export const doneEditUsersReq = () => {
    return {
        type: DONEEDITUSERSREQ
    }
}

export const doneEditUsersRej = (err) => {
    return {
        type: DONEEDITUSERSREJ,
        payload: err
    }
}
export const doneEditUsers = (id, data) => {
    return dispatch => {
        dispatch(doneEditUsersReq())
        axios.put(`http://localhost:3000/users/${id}`, data).then(() => { dispatch(showUsers()) }).catch((err) => { dispatch(doneEditUsersRej(err.message)) })
    }
}
export const createUsersReq = () => {
    return {
        type: CREATEUSERSREQ
    }
}

export const createUsersRej = (err) => {
    return {
        type: CREATEUSERSREJ,
        payload: err
    }
}
export const createUsers = (data) => {
    return dispatch => {
        dispatch(createUsersReq())
        axios.post(`http://localhost:3000/users`, data).then(() => { dispatch(showUsers()) }).catch((err) => { dispatch(createUsersRej(err.message)) })
    }
}