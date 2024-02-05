import { CREATEUSERREQ, CREATEUSERREJ, GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES, CREATEUSERRES, USERSREQ, USERSRES, USERSREJ, SINGLEUSERREQ, SINGLEUSERREJ, EDITUSERREQ, EDITUSERREJ, DELETEUSERREQ, DELETEUSERREJ, SINGLEUSERRES, ISROLEFINDREQ, ISROLEFINDRES, ISROLEFINDREJ } from "../const"
import { collection, addDoc, setDoc, doc, getDoc, getDocs, deleteDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { db, provider ,auth  } from "../../appConfig"

export const createuserReq = () => {
    return {
        type: CREATEUSERREQ
    }
}

export const createuserRes = () => {
    return {
        type: CREATEUSERRES
    }
}
export const createuserRej = (err) => {
    return {
        type: CREATEUSERREJ,
        payload: err
    }
}
export const createUser = (data) => {
    return async dispatch => {
        dispatch(createuserReq())
        
        await setDoc(doc(db,"users" , data.uid),data).then(() => {
            dispatch(createuserRes())
        }).catch((err) => {
            dispatch(createuserRej(err))
        })
    }
}

export const googleSignInReq = () => {
    return {
        type: GOOGLESIGNINREQ
    }
}
export const googleSignInRes = (data) => {
    return {
        type: GOOGLESIGNINRES,
        payload: data
    }
}
export const googleSignInRej = (err) => {
    return {
        type: GOOGLESIGNINREJ,
        payload: err
    }
}

export const googleSignIn = () => {
    return async dispatch => {
        
        dispatch(googleSignInReq())
        await signInWithPopup(auth, provider).then((res) => {
            let user = { name: res.user.displayName, imgUrl: res.user.photoURL, email: res.user.email ,uid : res.user.uid }
            dispatch(googleSignInRes(user))
            dispatch(createUser(user))
            dispatch(isRoleFind(res.user.uid))
        }).catch((err) => {
            dispatch(googleSignInRej(err))
        })
    }
}
export const signInReq = () => {
    return {
        type: SIGNINREQ
    }
}
export const signInRej = (err) => {
    return {
        type: SIGNINREJ,
        payload: err
    }
}
export const signInRes = (da) => {
    return {
        type: SIGNINRES,
        payload : da
    }
}
export const signInAction = (data) => {
    return async dispatch => {
        dispatch(signInReq())
        await signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
            let user = { name: res.user.displayName, imgUrl: data.imgUrl, email: res.user.email ,uid : res.user.uid }
            dispatch(signInRes(user))
            dispatch(isRoleFind(res.user.uid))
        }).catch((err) => {
            dispatch(signInRej(err))
        })
    }
}
export const signUpReq = () => {
    return {
        type: SIGNUPREQ
    }
}
export const signUpRej = (err) => {
    return {
        type: SIGNUPREJ,
        payload: err
    }
}
export const signUpRes = () => {
    return {
        type: SIGNUPRES
    }
}
export const signUpAction = (data) => {
    return async dispatch => {
        dispatch(signUpReq())
        await createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
            let user = { name: data.name, imgUrl: data.imgUrl, email: res.user.email ,uid : res.user.uid }
            dispatch(signUpRes())
            dispatch(createUser(user))
        }).catch((err) => {
            dispatch(signUpRej(err))
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

export const isRoleFindReq = () => {
    return {
        type: ISROLEFINDREQ
    }
}

export const isRoleFindRes = (data) => {
    return {
        type: ISROLEFINDRES,
        payload: data
    }
}

export const isRoleFindRej = (err) => {
    return {
        type: ISROLEFINDREJ,
        payload: err
    }
}
export const isRoleFind = (id) => {
    return async dispatch => {
        dispatch(isRoleFindReq())
        await getDoc(doc(db, "users", `${id}`)).then((res) => {
            if(res.data().isRole == 'admin'){
                dispatch(isRoleFindRes())
            }
        }).catch((err) => {
            dispatch(isRoleFindRej(err))
        })
    }
}