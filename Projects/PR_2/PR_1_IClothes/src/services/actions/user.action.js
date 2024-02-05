import { CREATEUSERREQ, CREATEUSERREJ, GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES, CREATEUSERRES } from "../const"
import { collection, addDoc, setDoc, doc} from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { db, provider ,auth  } from "../../appConfig"
import {signOutCart } from "./cart.action";
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
            dispatch(signOutCart())
        }).catch((err) => {
            dispatch(signOutRej(err))
        })
    }
}