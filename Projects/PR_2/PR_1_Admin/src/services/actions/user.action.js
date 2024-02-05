import { USERSREJ, USERSREQ, USERSRES, SINGLEUSERREQ, SINGLEUSERRES, SINGLEUSERREJ, EDITUSERREJ, EDITUSERREQ, DELETEUSERREQ, DELETEUSERREJ } from "../const"
import { collection, getDocs, addDoc , doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../appConfig"

export const usersReq = () => {
    return {
        type: USERSREQ
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
export const getUsers = () => {
    return async dispatch => {
        let users = [];
        dispatch(usersReq())
        await getDocs(collection(db, "users")).then((res) => {
            res.forEach((doc) => {
                let newPro = { id: doc.id, ...doc.data() }
                users = [...users, newPro];
            })
            dispatch(usersRes(users))
        }).catch((err) => {
            dispatch(usersRej(err))
        })
    }
}

export const singleUserReq = () => {
    return {
        type: SINGLEUSERREQ
    }
}

export const singleUserRes = (data) => {
    return {
        type: SINGLEUSERRES,
        payload: data
    }
}

export const singleUserRej = (err) => {
    return {
        type: SINGLEUSERREJ,
        payload: err
    }
}
export const singleGetUser = (id) => {
    return async dispatch => {
        dispatch(singleUserReq())
        await getDoc(doc(db, "users", `${id}`)).then((res) => {
            let newPro = { id: res.id, ...res.data() }
            dispatch(singleUserRes(newPro))
        }).catch((err) => {
            dispatch(singleUserRej(err))
        })
    }
}

export const edituserReq = () => {
    return {
        type: EDITUSERREQ
    }
}
export const edituserRej = (err) => {
    return {
        type: EDITUSERREJ,
        payload: err
    }
}
export const editUsers = (data) => {
    return async dispatch => {
        dispatch(edituserReq())
        await setDoc(doc(db, "users" ,`${data.id}`), data).then(() => {
            dispatch(getUsers())
        }).catch((err) => {
            dispatch(edituserRej(err))
        })
    }
}

export const deleteuserReq = () => {
    return {
        type: DELETEUSERREQ
    }
}
export const deleteuserRej = (err) => {
    return {
        type: DELETEUSERREJ,
        payload: err
    }
}
export const deleteUsers = (data) => {
    return async dispatch => {
        dispatch(deleteuserReq())
        await deleteDoc(doc(db, "users" ,`${data}`)).then(() => {
            dispatch(getUsers())
        }).catch((err) => {
            dispatch(deleteuserRej(err))
        })
    }
}